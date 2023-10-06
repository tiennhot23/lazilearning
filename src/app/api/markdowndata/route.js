import { NextResponse } from 'next/server';
import createDompurify from 'dompurify';
import { marked } from 'marked';

import getRepoStructure from '@/modules/getRepoStructure';

const { JSDOM } = require('jsdom');
const dompurify = createDompurify(new JSDOM().window);

export async function GET(req) {
  const data = await getRepoStructure();
  const postId = Number(req.url.split('?')[1].split('=')[1]);
  const post = data.posts.find(e => e.id === postId);
  if (!post) return {};

  const markdown = await fetch(post.path).then(res => res.text());
  post.sanitizedHtml = dompurify.sanitize(marked.parse(markdown));
  return NextResponse.json(post);
}
