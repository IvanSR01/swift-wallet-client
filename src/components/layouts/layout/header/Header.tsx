import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Link href={'/blog'}>
					<h3>SwiftW</h3>
				</Link>
				<h3>Wallet</h3>
			</div>
		</div>
	)
}

export default Header
