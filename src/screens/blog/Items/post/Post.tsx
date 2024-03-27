import { FC } from 'react'
import { IPostProps } from './Post.type'
import img from '../../../../../public/213.png'
import styles from './Post.module.scss'
import { format } from 'date-fns'
import Link from 'next/link'
const Post: FC<IPostProps> = ({ id, title, content, dateCreate, tags }) => {
	return (
		<div className={styles.post}>
			<div className={styles.img}>
				<img src={img.src} alt="" />
			</div>
			<div className={styles.info}>
				<div className={styles.header}>
					<div className={styles.tags}>
						{tags.map((item, i) => (
							<Link href={`/blog/${item}`} key={i}>
								<span>{item}</span>
							</Link>
						))}
					</div>
					<p className={styles.date}>
						{format(new Date(dateCreate), 'dd MMMM yyyy')}
					</p>
				</div>
				<Link href={`/post/${id}`}>
					<h2>{title}</h2>
				</Link>
				<p className={styles.content}>{content}</p>
			</div>
		</div>
	)
}

export default Post
