import React from 'react';
import Image from 'next/image';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            style={{ borderRadius: '50%' }}
            src="/lazidog.jpg"
            alt="github"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Lazilearning</h1>
        </div>
        <br />
        <p className={styles.desc}>Developed by a lazy dog</p>
      </div>
    </div>
  );
}
