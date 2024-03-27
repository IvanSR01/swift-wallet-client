import AuthLayout from "@/components/layouts/auth-layout/AuthLayout";
import { FC } from "react";
import styles from "./Blog.module.scss";
import { TypeBlogProps } from "./Blog.type";
import Items from "./Items/Items";
import Tags from "./tags/Tags";
import Limit from "./limit/Limit";
import Sorted from "./sorted/Sorted";
const Blog: FC<TypeBlogProps> = ({ tags, post }) => {
  return (
    <AuthLayout>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Tags tags={tags || []} />
					<Sorted/>
          <Items items={post} />
					<Limit/>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Blog;
