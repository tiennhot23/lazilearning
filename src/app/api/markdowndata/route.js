import { NextResponse } from 'next/server';
import matter from 'gray-matter';
import { marked } from 'marked';

import { readStructure } from '@/modules/getRepoStructure';

export async function GET(req) {
  const data = await readStructure();
  const postId = Number(req.url.split('?')[1].split('=')[1]);
  const post = data.posts.find(e => e.id === postId);
  if (!post) return {};

  const markdown = await fetch(post.path).then(res => res.text());
  const { content } = matter(markdown);
  post.html = marked(content);
  return NextResponse.json(post);
}
