import { TypePost } from '@/shared/types/post.type'

export type TypeBlogProps = {
	tags: string[]
	post: TypePost[]
}

export type TypePageBlog = {
	params: {
		tag: string
	}
	searchParams: {
		search: string
		limit: string
		order: string
		sort: string
	}
}
