import _ from 'lodash';
import { NextResponse } from 'next/server';

import { readStructure } from '@/modules/getRepoStructure';

export async function GET(req) {
  const data = await readStructure();
  const tags = _.chain(data.posts)
    .flatMap(e => e.tags)
    .uniq()
    .value();
  return NextResponse.json(tags);
}
