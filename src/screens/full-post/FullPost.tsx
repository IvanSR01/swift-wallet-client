import { FC } from 'react'
import { TypeFullPost } from './FullPost.type'
import AuthLayout from '@/components/layouts/auth-layout/AuthLayout'
import styles from './FullPost.module.scss'
import img from '../../../public/213.png'
import MinTags from '@/components/min-tags/MinTags'
import { format } from 'date-fns'
const FullPost: FC<TypeFullPost> = ({ post }) => {
	return (
		<AuthLayout>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.img}>
						<img src={img.src} />
					</div>
					<div className={styles.postInfo}>
						<div className={styles.header}>
							<MinTags tags={post.tags} />
							<p className={styles.date}>
								{format(new Date(post.dateCreate), 'dd MMMM yyyy')}
							</p>
						</div>
						<h2>{post.title}</h2>
					</div>
					<div className={styles.postContent}>{post.content}</div>
				</div>
			</div>
		</AuthLayout>
	)
}

export default FullPost
