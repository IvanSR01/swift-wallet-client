import { FC } from "react";
import { TypeItemsProps } from "./Items.type";
import styles from "./Items.module.scss";
import Post from "./post/Post";
const Items: FC<TypeItemsProps> = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item, i) => (
        <Post {...item} key={i} />
      ))}
    </div>
  );
};

export default Items;
