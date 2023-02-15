import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getPostsData } from "@/lib/post";
import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>Next.js Blog</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>私はフルスタックエンジニアです</p>
        </section>

        <section className={utilStyles.headingMd}>
          <h2>エンジニアのブログです</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => { return (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img
                    src={`${thumbnail}`}
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link legacyBehavior href={`/posts/${id}`}>
                  <a className={utilStyles.boldText}>
                    {title}
                  </a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article> )
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
