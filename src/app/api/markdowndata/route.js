import { NextResponse } from 'next/server';
import showdown from 'showdown';

import { readStructure } from '@/modules/getRepoStructure';

const converter = new showdown.Converter();

export async function GET(req) {
  const data = await readStructure();
  const postId = Number(req.url.split('?')[1].split('=')[1]);
  const post = data.posts.find(e => e.id === postId);
  if (!post) return {};

  const markdown = await fetch(post.path).then(res => res.text());
  post.html = converter.makeHtml(markdown);
  return NextResponse.json(post);
}
