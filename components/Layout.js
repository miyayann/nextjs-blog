import styles from "./Layout.module.css";
const name = "Hello";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Next.js Blog";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="images/thumbnail01.jpg"
              className={`${utilStyles.borderCircle}
        ${styles.headerHomeImage}`}
            />
            <h2 className={utilStyles.heading2Xl}>{name}</h2>
          </>
        ) : (
          <>
            <img
              src="../images/thumbnail01.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            />
            <h2 className={utilStyles.headingXl}>{name}</h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームに戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
