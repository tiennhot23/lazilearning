import { NextResponse } from 'next/server';

import getRepoStructure from '@/modules/getRepoStructure';

// hmm...: https://stackoverflow.com/questions/76336930/fetching-next-js-api-route-in-the-app-directory-gives-404-not-found

export async function GET(req) {
  const data = await getRepoStructure();
  return NextResponse.json(data || {});
}
