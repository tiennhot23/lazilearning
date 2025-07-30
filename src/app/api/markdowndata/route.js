import { NextResponse } from 'next/server';
import showdown from 'showdown';

import { readStructure } from '@/modules/getRepoStructure';


// Unique instance ID that persists for the lifetime of this Vercel function instance
const INSTANCE_ID = `admin-${process.env.VERCEL_ENV || "local"}-${process.env.VERCEL_REGION || "unknown"}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
const INSTANCE_START_TIME = Date.now();
console.log({ INSTANCE_ID, INSTANCE_START_TIME });

// Listen for termination signals
for (const signal of ["beforeExit", "SIGTERM", "SIGINT", "SIGUSR2"]) {
  process.once(signal, () => {
    console.log({ signal });
  });
}


const converter = new showdown.Converter();

export async function GET(req) {
  try {
    const data = await readStructure();
    const postId = Number(req.url.split('?')[1].split('=')[1]);
    const post = data.posts.find(e => e.id === postId);
    if (!post) return {};

    const markdown = await fetch(post.path).then(res => res.text());
    post.html = converter.makeHtml(markdown);
    return NextResponse.json(post);
  } finally {
    console.log("end request");
  }
}
