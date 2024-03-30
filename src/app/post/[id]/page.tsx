import FullPost from '@/screens/full-post/FullPost'
import { TypePageFullPost } from '@/screens/full-post/FullPost.type'
import postService from '@/services/post-service/post.service'
import { TypePost } from '@/shared/types/post.type'
import type { NextPage } from 'next'
export async function generateMetadata({ params }: TypePageFullPost) {
	const { post } = await postService.getPostById(params.id)
	return {
		title: `SwiftW | ${post?.title}`,
	}
}
const page: NextPage<TypePageFullPost> = async ({ params }) => {
	const { post } = await postService.getPostById(params.id)
	return <FullPost post={post as TypePost} />
}
export default page
