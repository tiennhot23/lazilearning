import styles from './tag.module.css';

export default function Tag({ tag, onClick }) {
  return (
    <div onClick={() => onClick(tag)} className={styles.tag}>
      <span className={styles.text}>{tag}</span>
    </div>
  );
}
