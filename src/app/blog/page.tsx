'use server'
import Blog from '@/screens/blog/Blog'
import { TypePageBlog } from '@/screens/blog/Blog.type'
import type { NextPage } from 'next'
import { fetchBlogData } from '../../actions/blog.action'


export async function generateMetadata() {
	return {
		title: 'SwiftW | Blog',
	}
}
const page: NextPage<TypePageBlog> = async ({ searchParams }) => {
	const data = await fetchBlogData({
		search: searchParams.search,
		limit: +searchParams.limit || 5,
		sort: searchParams.sort,
		order: searchParams.order,
	})
	console.log(data)
	return <Blog tags={data.tags} post={data.posts} />
}
export default page
