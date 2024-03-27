import { FC } from 'react'
import { TypeFullPost } from './FullPost.type'
import AuthLayout from '@/components/layouts/auth-layout/AuthLayout'

const FullPost: FC<TypeFullPost> = ({ post }) => {
	console.log(post)
	return (
		<AuthLayout>
			<div>{post.id}</div>
		</AuthLayout>
	)
}

export default FullPost
