'use server'
import Blog from '@/screens/blog/Blog'
import { TypePageBlog } from '@/screens/blog/Blog.type'
import postService from '@/services/post-service/post.service'
import { TypeGetPost } from '@/shared/types/post.type'
import type { NextPage } from 'next'

const fetchBlogData = async (data: TypeGetPost) => {
	try {
		const { tags } = await postService.getTags(15)
		const { posts } = await postService.getPosts({
			...data,
		})
		return { tags, posts }
	} catch (error) {
		console.log(error)
		return { tags: [], posts: [] }
	}
}

const page: NextPage<TypePageBlog> = async ({ searchParams }) => {
	const data = await fetchBlogData({
		search: searchParams.search,
		limit: +searchParams.limit || 5,
		sort: searchParams.sort,
		order: searchParams.order,
	})

	return <Blog tags={data.tags} post={data.posts} />
}
export default page
