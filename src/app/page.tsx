import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import BookSearch from './BookSearch';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/pages/login" className={styles.button}>
          Link to Login Page
        </Link>
      </header>

      <div className={styles.main}>
        <BookSearch />
      </div>

      <footer className={styles.footer} />
    </div>
)};