'use client'
import { FC, useState } from 'react'
import styles from './Layout.module.scss'
import { TypeLayoutProps } from './Layout.type'
import Nav from './nav/Nav'
import Header from './header/Header'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js'
ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)
const Layout: FC<TypeLayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Nav></Nav>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}

export default Layout
