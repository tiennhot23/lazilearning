import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.css';
import ThemeToggle from '../themeToggle/ThemeToggle';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          style={{ borderRadius: '50%' }}
          src="/lazidog.jpg"
          alt="github"
          width={50}
          height={50}
        />
        <Link href="/" className={styles.logo}>
          Lazidog
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
      </div>
    </div>
  );
}
