'use client';

import styles from './searchBar.module.css';
import Tag from '../tag/Tag';

export default function SearchBar() {
  return (
    <div className={styles.header}>
      <>
        <input
          placeholder="Find me..."
          type="text"
          className={styles.searchBar}
          onChange={() => {}}
        />
        <div className={styles.tags}>
          {[
            { tag: 'Javascript', isSelected: true },
            { tag: 'Golang', isSelected: false },
          ].map(tag => (
            <Tag tag={tag} key={tag.tag} onClick={() => {}} />
          ))}
        </div>
      </>
    </div>
  );
}
