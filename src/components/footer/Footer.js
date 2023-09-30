import React from 'react';
import Image from 'next/image';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.ico" width={50} height={50} />
          <h1 className={styles.logoText}>Lazilearning</h1>
        </div>
        <p className={styles.desc}>Developed by a lazy dog</p>
      </div>
    </div>
  );
}
