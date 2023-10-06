'use client';

import useSWR from 'swr';

import styles from './searchBar.module.css';
import Tag from '../tag/Tag';

const fetcher = url => fetch(url).then(res => res.json());

export default function SearchBar({ query, setQuery }) {
  const { data: tags, isLoading } = useSWR('/api/tags', fetcher);

  if (isLoading) return <div></div>;

  const handleQuery = q => setQuery(q || '');

  return (
    <div className={styles.header}>
      <>
        <input
          placeholder="Find something ..."
          type="text"
          value={query}
          className={styles.searchBar}
          onChange={event => handleQuery(event.target.value)}
        />
        <div className={styles.tags}>
          {tags.map(tag => (
            <Tag tag={tag} key={tag} onClick={tag => handleQuery(tag)} />
          ))}
        </div>
      </>
    </div>
  );
}
