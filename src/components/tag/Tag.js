import styles from './tag.module.css';

export default function Tag({ tag, onClick }) {
  return (
    <div
      onClick={() => onClick(tag.tag)}
      className={[styles.tag, tag.isSelected ? styles.selected : ''].join(' ')}
    >
      <span
        className={[styles.text, tag.isSelected ? styles.selected : ''].join(
          ' '
        )}
      >
        {tag.tag}
      </span>
    </div>
  );
}
