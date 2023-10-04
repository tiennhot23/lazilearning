'use client';

import useSWR from 'swr';

import styles from './cardList.module.css';
import Card from '../card/Card';

const fetcher = url => fetch(url).then(res => res.json());

export default function CardList() {
  const { data, isLoading } = useSWR('/api/githubdata', fetcher);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.cards}>
      {data.posts?.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </div>
  );
}
