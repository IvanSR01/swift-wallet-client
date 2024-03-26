import { FC } from "react";
import styles from "./Login.module.scss";
import Input from "@/shared/ui/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "@/shared/ui/loader/Loader";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/auth.service";
import { TypeLogin } from "@/shared/types/auth.type";
import { loginFields } from "@/shared/var/auth.fields";

const Login: FC = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: (data: TypeLogin) => authService.login(data),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeLogin>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<TypeLogin> = (data): void => {
    mutate(data);
  };
  return (
    <div className={styles.content}>
      {isPending ? (
        <div className={styles.center}>
          <Loader />
        </div>
      ) : (
        <>
          <h2>Войти</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {loginFields.map((item, i) => (
              <Input
                key={i}
                placeholder={item.placeholder}
                // type={item.type ? item.type : 'text'}
                {...register(item.name as keyof TypeLogin, {
                  required: "Поле обязательно для заполнения",
                  minLength: item.min
                    ? {
                        value: item.min,
                        message: `Минимальное количество символов ${item.min}`,
                      }
                    : undefined,
                  maxLength: item.max
                    ? {
                        value: item.max,
                        message: `Максимальное количество символов ${item.max}`,
                      }
                    : undefined,
                  min: 3,
                  max: 20,
                  pattern: item.pattern,
                })}
                helperText={
                  errors[item.name as keyof TypeLogin]?.message as string
                }
              />
            ))}
            <button type="submit">
              <p>ВОЙТИ</p>
            </button>
          </form>
        </>
      )}
    </div>
  );
};
export default Login;
