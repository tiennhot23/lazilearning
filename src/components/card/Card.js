import styles from './card.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function Card({ post }) {
  return (
    <div className={styles.container}>
      {post.image && (
        <Image
          src={post.image}
          alt=""
          className={styles.image}
          width={250}
          height={230}
        />
      )}
      <div className={styles.textContainer}>
        <Link
          href={{
            pathname: `/post/${post.id}`,
            query: {
              url: post.path,
            },
          }}
        >
          <h1>{post.title}</h1>
        </Link>
        <div className={styles.detail}>
          {post.createdAt && (
            <span className={styles.date}>
              {post.createdAt.substring(0, 10)} -{' '}
            </span>
          )}
          {post.tags.map(tag => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={{
            pathname: `/post/${post.id}`,
            query: {
              url: post.path,
            },
          }}
          className={styles.link}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
