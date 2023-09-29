'use client';

import { Box } from '@chakra-ui/react';

import NavBar from '@/components/NavBar';
import ArticleList from '@/components/ArticleList';
import SearchBar from '@/components/SearchBar';

export default function Page() {
  return (
    <Box>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <ArticleList></ArticleList>
    </Box>
  );
}
