import { FC } from "react";
import styles from "./AuthCustomLink.module.scss";
import { TypeAuthLinkProps } from "./AuthCustomLink.type";
import Link from "next/link";

const AuthCustomLink: FC<TypeAuthLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className={styles.wrapper}>
      {children}
    </Link>
  );
};
export default AuthCustomLink;
