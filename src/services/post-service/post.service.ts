import { classicRequest } from '@/api/request.api'
import { TypeFullPost } from '@/screens/full-post/FullPost.type'
import {
	TypeGetPost,
	TypePost,
	TypePostResponse,
	TypeTagsResponse,
} from '@/shared/types/post.type'
import { cleanTag } from '@/shared/utils/cleanTag'

class PostService {
	async getPosts({
		tag,
		search,
		limit,
		sort,
		order,
	}: TypeGetPost): Promise<TypePostResponse> {
		const { data } = await classicRequest<TypePostResponse>({
			method: 'GET',
			url: `/post/all?${tag ? `tagSlug=${cleanTag(tag)}&` : ''}${
				search ? `search=${search}&` : ''
			}${limit ? `limit=${limit}&` : ''}${sort ? `sort=${sort}&` : ''}${
				order ? `order=${order}&` : ''
			}`,
		})
		return data
	}
	async getTags(limit?: number): Promise<TypeTagsResponse> {
		const { data } = await classicRequest<TypeTagsResponse>({
			method: 'GET',
			url: `/post/tags/${limit ? limit : 0}`,
		})
		return data
	}
	async getPostById(id: string): Promise<TypeFullPost> {
		const { data } = await classicRequest<TypeFullPost>({
			method: 'GET',
			url: `/post/byId/${id}`,
		})
		return data
	}
}

export default new PostService()
