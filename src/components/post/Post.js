'use client';

import useSWR from 'swr';
import styles from './post.module.css';

const fetcher = url => fetch(url).then(res => res.json());

export default function PostDetail({ id, url }) {
  const { data, isLoading } = useSWR(`/api/markdowndata?id=${id}`, fetcher);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={data.image} alt="" />
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.info}>
          <span className={styles.tags}>
            Tags:{' '}
            {data.tags?.map((tag, index) => (
              <b key={tag}>
                {tag}
                {index !== data.tags.length - 1 ? ', ' : ' '}
              </b>
            ))}
          </span>
        </div>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
      </div>
    </div>
  );
}
