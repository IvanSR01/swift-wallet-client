"use server";
import Blog from "@/screens/blog/Blog";
import { TypePageBlog } from "@/screens/blog/Blog.type";
import postService from "@/services/post-service/post.service";
import { cleanTag } from "@/shared/utils/cleanTag";
import { getTagToBegin } from "@/shared/utils/getTagToBegin";
import type { NextPage } from "next";

const fetchBlogData = async (tag: string, search: string, limit: string) => {
  try {
    const { posts } = await postService.getPosts({
      tag: cleanTag(tag),
      search,
      limit: +limit || 5,
    });
    return {
      posts,
      tags: getTagToBegin(cleanTag(tag), (await postService.getTags(15)).tags),
    };
  } catch (error) {
    console.log(error);
    return {
      posts: [],
      tags: [],
    };
  }
};

const Page: NextPage<TypePageBlog> = async ({ params, searchParams }) => {
  const { tags, posts } = await fetchBlogData(
    params.tag,
    searchParams.search,
    searchParams.limit
  );
  return <Blog tags={tags} post={posts} />;
};
export default Page;
