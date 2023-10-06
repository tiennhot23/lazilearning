import PostDetail from '@/components/post/Post';
import styles from './page.module.css';

export default function Post({ params }) {
  const { id } = params;

  return (
    <div className={styles.container}>
      <PostDetail id={id} />
    </div>
  );
}
