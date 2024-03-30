'use client'
import { useEffect, useState } from 'react'
import styles from './Nav.module.scss'
import { useResize } from '@/hooks/useReSize'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { userDashboardLinks } from '@/shared/var/user-dashboard.links'
const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const width = useResize()
	useEffect(() => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		if (width >= 1200) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}, [width])
	const pathname = usePathname()
	return (
		<div>
			{isOpen && (
				<div className={styles.wrapper}>
					<div className={styles.nav}>
						<h2>Navigate</h2>
						<div className={styles.links}>
							{userDashboardLinks.map((item) => (
								<Link
									className={clsx({
										[styles.active]: pathname === item.path,
										[styles.link]: true,
									})}
									href={item.path}
									key={item.name}
								>
									<p>{item.name}</p>
								</Link>
							))}
						</div>
						<div className={styles.logout}>
							Выйти
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Nav
