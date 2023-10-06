'use client';

import { useState } from 'react';

import CardList from '@/components/cardList/CardList';
import SearchBar from '@/components/searchBar/SearchBar';

export default function Page() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <CardList query={query} />
    </div>
  );
}
