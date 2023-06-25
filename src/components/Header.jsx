// import styles from '@/app/style/navbar.module.css';
import styles from '../style/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image
            src="/Comma-tech-logop.png"
            alt="my loogo"
            width={150}
            height={70}
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
