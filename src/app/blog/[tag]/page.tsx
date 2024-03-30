'use server'
import { fetchBlogData } from '@/actions/blog.action'
import Blog from '@/screens/blog/Blog'
import { TypePageBlog } from '@/screens/blog/Blog.type'
import { cleanTag } from '@/shared/utils/cleanTag'
import type { NextPage } from 'next'

export async function generateMetadata({ params }: TypePageBlog) {
	return {
		title: 'SwiftW | ' + cleanTag(params.tag),
	}
}

const Page: NextPage<TypePageBlog> = async ({ params, searchParams }) => {
	const { tags, posts } = await fetchBlogData({
		tag: cleanTag(params.tag),
		search: searchParams.search,
		limit: +searchParams.limit || 5,
		sort: searchParams.sort,
		order: searchParams.order,
	})
	return <Blog tags={tags} post={posts} />
}
export default Page
