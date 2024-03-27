import { FC } from "react";
import styles from "./Auth.module.scss";
import { TypeAuthProps } from "./Auth.type";
import Login from "./login/Login";
import AuthLayout from "@/components/layouts/auth-layout/AuthLayout";
import Register from "./register/Register";
const Auth: FC<TypeAuthProps> = ({ type }) => {
  return (
    <AuthLayout>
      <div className={styles.wrapper}>
        {type === "login" ? <Login /> : <Register/>}
      </div>	
    </AuthLayout>
  );
};
export default Auth;
