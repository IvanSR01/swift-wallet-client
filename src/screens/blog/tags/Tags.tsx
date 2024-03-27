'use client';
import { FC } from "react";
import styles from "./Tags.module.scss";
import { TypeTagsProps } from "./Tags.type";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const Tags: FC<TypeTagsProps> = ({ tags }) => {
  const pathname = usePathname();
  const tagPath = pathname === '/blog' ? '' : pathname.split("/")[2].replaceAll("%20", " ");
  return (
    <div className={styles.wrapper}>
      <div className={styles.tags}>
        {tags?.map((item, i) => (
          <Link href={`/blog/${item}`} key={i}>
            <div
              className={clsx(styles.tag, tagPath === item && styles.active)}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Tags;
