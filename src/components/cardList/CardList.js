'use client';

import useSWR from 'swr';

import styles from './cardList.module.css';
import Card from '../card/Card';

const fetcher = url =>
  fetch(url)
    .then(res => res.json())
    .then(res => JSON.parse(res));

export default function CardList() {
  const { data, error, isLoading } = useSWR('/api/githubdata', fetcher);

  if (error) return <div></div>;
  if (isLoading) return <div>Loading...</div>;
  if (data) console.log(data);

  return (
    <div className={styles.cards}>
      {data.posts?.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </div>
  );
}
