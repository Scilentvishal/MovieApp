import Link from 'next/link';
import styles from '../style/navbar.module.css';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/movie">Movies</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
