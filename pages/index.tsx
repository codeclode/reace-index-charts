import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  SignalFilled,
  AntDesignOutlined,
  CaretUpOutlined,
  CodepenOutlined,
} from "@ant-design/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>图形部署</title>
        <meta name="description" content="学习D3与webgl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              谢谢{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            onClick={() =>
              window.open("https://space.bilibili.com/401315430", "__blank")
            }
            className={styles.logo}
            src="/tong.png"
            alt="tong"
            width={180}
            height={180}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a className={styles.card} href="#" rel="noopener noreferrer">
            <h2 className={inter.className}>
              学习 <SignalFilled />
            </h2>
            <p className={inter.className}>在这里学习可视化与图形学。📉</p>
          </a>

          <a href="#" className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              使用 <AntDesignOutlined />
            </h2>
            <p className={inter.className}>快速建立UI，antd不二之选。🎇</p>
          </a>

          <a href="#" className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              感谢 <CaretUpOutlined />
            </h2>
            <p className={inter.className}>
              Vercel，提供方便的code 2 website，不用亲自写后端服务。🙇‍
            </p>
          </a>

          <a href="#" className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              部署 <CodepenOutlined />
            </h2>
            <p className={inter.className}>我要重复修改代码。😄</p>
          </a>
        </div>
      </main>
    </>
  );
}
