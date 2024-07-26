import Image from "next/image";
import shopIcon from "../public/shop.png";
import styles from "./Layout.module.css";
import React from "react";
import Link from "next/link";

function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <nav>
        <div className={styles.header}>
          <Link href="/">
            <Image src={shopIcon} alt="logo" width={100} height={100} />
          </Link>
          <Link href="/products">PRODUCT</Link>
          <Link href="/community">COMMUNITY</Link>
          <div className={styles.headerBtn}>
            <button>Login</button>
            <button>Profile</button>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
