'use client';

import useSWR from 'swr';

import styles from './cardList.module.css';
import Card from '../card/Card';

const fetcher = url => fetch(url).then(res => res.json());

let shouldReload = true;

export default function CardList({ query }) {
  const { data: posts, isLoading } = useSWR(
    `/api/posts?q=${query}&shouldReload=${shouldReload}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.cards}>
      {posts?.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </div>
  );
}
