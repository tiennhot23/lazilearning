'use client';

import { SimpleGrid } from '@chakra-ui/react';

import Article from '@/components/Article';

export default function AticleList() {
  return (
    <SimpleGrid minChildWidth={'200px'} spacing={'5'}>
      <Article> </Article>
      <Article> </Article>
      <Article> </Article>
      <Article> </Article>
      <Article> </Article>
      <Article> </Article>
      <Article> </Article>
      <Article> </Article>
      <Article> </Article>
    </SimpleGrid>
  );
}
