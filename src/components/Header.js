// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Zodplay</h1>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
      <div className={styles.authButtons}>
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;