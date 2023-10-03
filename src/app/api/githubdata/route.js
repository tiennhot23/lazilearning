import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

// hmm...: https://stackoverflow.com/questions/76336930/fetching-next-js-api-route-in-the-app-directory-gives-404-not-found

export async function GET(req) {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(
    jsonDirectory + '/githubdata.json',
    'utf8'
  );
  return NextResponse.json(fileContents);
}
