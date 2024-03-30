import Link from 'next/link'
import React, { FC } from 'react'
import styles from './MinTags.module.scss'
import { TypeMinTagsProps } from './MinTags.type'
const MinTags: FC<TypeMinTagsProps> = ({ tags }) => {
	return (
		<div className={styles.tags}>
			{tags.map((item, i) => (
				<Link href={`/blog/${item}`} key={i}>
					<span>{item}</span>
				</Link>
			))}
		</div>
	)
}

export default MinTags
