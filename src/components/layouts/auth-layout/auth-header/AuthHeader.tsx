import React from "react";
import styles from "./AuthHeader.module.scss";
import Link from "next/link";
import AuthCustomLink from "../auth-custom-link/AuthCustomLink";
const AuthHeader = () => {
  const isAuth = true;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>SwiftWallet</h2>
        {isAuth ? (
          <AuthCustomLink href="/dashboard">
            <p>Dashboard</p>
          </AuthCustomLink>
        ) : (
          <AuthCustomLink href="/blog">
            <p>Blog</p>
          </AuthCustomLink>
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
