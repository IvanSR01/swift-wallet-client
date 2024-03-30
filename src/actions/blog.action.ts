import postService from '@/services/post-service/post.service'
import { TypeGetPost } from '@/shared/types/post.type'
import { cleanTag } from '@/shared/utils/cleanTag'
import { getTagToBegin } from '@/shared/utils/getTagToBegin'

export const fetchBlogData = async ({
	tag,
	search,
	limit,
	...rest
}: TypeGetPost) => {
	try {
		const { posts } = await postService.getPosts({
			tag: tag ? cleanTag(tag as string) : '',
			search,
			limit: limit ? +limit : 5,
			...rest,
		})
		const tags = (await postService.getTags(15)).tags
		return {
			posts,
			tags: tag ? getTagToBegin(cleanTag(tag as string), tags) : tags,
		}
	} catch (error) {
		console.log(error)
		return {
			posts: [],
			tags: [],
		}
	}
}
