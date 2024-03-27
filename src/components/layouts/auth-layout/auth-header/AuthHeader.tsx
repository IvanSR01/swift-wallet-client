"use client";
import { usePathname } from "next/navigation";
import AuthCustomLink from "../auth-custom-link/AuthCustomLink";
import styles from "./AuthHeader.module.scss";
import Search from "./Search";
const AuthHeader = () => {
  const isAuth = false;
  const pathname = usePathname();
  const isBlog = pathname === "/blog";

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>SwiftW</h2>
        <Search />
        {isAuth ? (
          <AuthCustomLink href="/dashboard">
            <p>Dashboard</p>
          </AuthCustomLink>
        ) : (
          <>
            {isBlog ? (
              <AuthCustomLink href="/auth/login">
                <p>Войти</p>
              </AuthCustomLink>
            ) : (
              <AuthCustomLink href="/blog">
                <p>Блог</p>
              </AuthCustomLink>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
