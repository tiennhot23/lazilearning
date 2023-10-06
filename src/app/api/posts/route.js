import _ from 'lodash';
import { NextResponse } from 'next/server';

import getRepoStructure, { readStructure } from '@/modules/getRepoStructure';

// hmm...: https://stackoverflow.com/questions/76336930/fetching-next-js-api-route-in-the-app-directory-gives-404-not-found

export async function GET(req) {
  const url = new URL(req.url);

  const query = decodeURI(url.searchParams.get('q'));
  const shouldReload = url.searchParams.get('shouldReload');
  const data = await (shouldReload ? getRepoStructure() : readStructure());
  const posts = query
    ? _.filter(
        data.posts,
        e => e.title.match(new RegExp(query, 'i')) || _.includes(e.tags, query)
      )
    : data.posts;
  return NextResponse.json(posts || []);
}
