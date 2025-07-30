import cheerio from 'cheerio';
import path from 'path';
import { promises as fs } from 'fs';

const jsonDirectory = path.join(process.cwd(), 'json');
const structureFilename = jsonDirectory + '/githubdata.json';

function fetchTreeItems(url) {
  return new Promise((resolve, reject) => {
    fetch(url, { headers: { 'User-Agent': 'Mozzila/5.0' } })
      .then(res => res.json())
      .then(res => resolve(res.payload.tree.items));
  });
}

function formatData(data, category = 'Common') {
  return data.map((e, i) => {
    const img = e.name.slice(e.name.indexOf('[') + 1, e.name.indexOf(']'));
    return {
      title: e.name.slice(e.name.indexOf(']') + 2, e.name.indexOf('.')),
      path: `https://raw.githubusercontent.com/lazidog/note-markdowns/main/${e.path}`,
      category: category,
      tags: [category, img],
      image: `https://raw.githubusercontent.com/lazidog/note-markdowns/main/images/${img}.png`,
    };
  });
}

async function updateRepoStructure() {
  const items = await fetchTreeItems(
    'https://github.com/lazidog/note-markdowns?search=1'
  );
  const directories = items.filter(
    x => x.contentType === 'directory' && x.name !== 'images'
  );
  const files = items.filter(x => x.contentType === 'file') || [];
  const data = formatData(files);
  await Promise.all(
    directories.map(async dir => {
      const subFiles =
        (await fetchTreeItems(
          `https://github.com/lazidog/note-markdowns/tree/main/${dir.name}`
        )) || [];
      data.push(...formatData(subFiles, dir.name));
    })
  );
  return data.map((e, i) => {
    return {
      id: i,
      ...e,
    };
  });
}

async function getLatestCommitDate() {
  const html = await fetch(
    `https://github.com/lazidog/note-markdowns/file-list/main`,
    {
      headers: { 'User-Agent': 'Mozzila/5.0' },
    }
  );
  const body = await html.text();
  const $ = cheerio.load(body);
  const info = $('relative-time');
  let latestCommitDate = '1900-01-01T00:00:00+07:00';
  info.each(function () {
    const date = $(this).attr('datetime');
    if (date > latestCommitDate) {
      latestCommitDate = date;
    }
  });
  return latestCommitDate;
}

async function newCommitAvailable(latestCommitDate) {
  const newLatestCommitDate = await getLatestCommitDate();
  return latestCommitDate !== newLatestCommitDate
    ? newLatestCommitDate
    : undefined;
}

export async function readStructure() {
  const data = await fs.readFile(structureFilename, 'utf8');
  return JSON.parse(data);
}

async function writeStructure(repoStructure) {
  await fs.writeFile(structureFilename, JSON.stringify(repoStructure));
}

async function getRepoStructure() {
  const repoStructure = await readStructure();
  // const newLatestCommitDate = await newCommitAvailable(repoStructure.date);
  // if (newLatestCommitDate) {
  //   repoStructure.date = newLatestCommitDate;
  //   repoStructure.posts = await updateRepoStructure();
  //   await writeStructure(repoStructure);
  // }
  return repoStructure;
}




// Unique instance ID that persists for the lifetime of this Vercel function instance
const INSTANCE_ID = `admin-${process.env.VERCEL_ENV || "local"}-${process.env.VERCEL_REGION || "unknown"}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
const INSTANCE_START_TIME = Date.now();
console.log({ INSTANCE_ID, INSTANCE_START_TIME });

// Listen for termination signals
for (const signal of ["beforeExit", "SIGTERM", "SIGINT", "SIGUSR2"]) {
  process.once(signal, () => {
    console.log({ signal });
    fetch(`https://lazidog.vercel.app/?${signal}=${INSTANCE_ID}`)
  });
}

export default getRepoStructure;
