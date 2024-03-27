'use client'
import { FC } from "react";
import styles from "../Auth.module.scss";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/auth-service/auth.service";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "@/shared/ui/loader/Loader";
import { registerFields } from "@/shared/var/auth.fields";
import Input from "@/shared/ui/Input/Input";
import { TypeRegister } from "@/shared/types/auth.type";
import Link from "next/link";

const Register: FC = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: (data: TypeRegister) => authService.register(data),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
		setError
  } = useForm<TypeRegister>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<TypeRegister> = (data): void => {
		if(data.password !== data.confirm) return setError('confirm', {
			message: 'Пароли не совпадают'
		})
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
          <h2>Регистрация</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {registerFields.map((item, i) => (
              <Input
                key={i}
								type={item.type}
                placeholder={item.placeholder}
                {...register(item.name as keyof TypeRegister, {
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
                  errors[item.name as keyof TypeRegister]?.message as string
                }
              />
            ))}
            <button type="submit">
              <p>РЕГИСТРАЦИЯ</p>
            </button>
          </form>
					<div className={styles.link}>
            <p>Есть аккаунт ? </p> <Link href="/auth/login">Войти</Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Register;
