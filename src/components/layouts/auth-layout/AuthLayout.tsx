import { FC } from "react";
// import styles from './layout.module.scss'
import { TypeAuthLayoutProps } from "./AuthLayout.type";
import AuthHeader from "./auth-header/AuthHeader";

const AuthLayout: FC<TypeAuthLayoutProps> = ({ children }) => {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
};
export default AuthLayout;
