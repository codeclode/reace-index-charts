import Head from "next/head";
import styles from "./layout.module.css";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>图形部署</title>
      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  );
}
