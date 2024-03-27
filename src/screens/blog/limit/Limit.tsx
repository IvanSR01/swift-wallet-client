"use client";
import { FC } from "react";
import styles from "./Limit.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface ILimit {}

const Limit: FC<ILimit> = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", `${(Number(params.get("limit")) || 5) + 5}`);
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  };
  return <div className={styles.limit} onClick={() => handleClick()}>Показать больше</div>;
};
export default Limit;
