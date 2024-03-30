'use client'
import Layout from '@/components/layouts/layout/Layout'
import React from 'react'
import styles from './Dashboard.module.scss'
import { useQuery } from '@tanstack/react-query'
import userService from '@/services/user-service/user.service'
import Graph from './Graph/Graph'
import DoughnutGraph from './Graph/DoughnutGraph'
import clsx from 'clsx'
import Products from './products/Products'

const Dashboard = () => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
	})

	return (
		<Layout>
			<div className={styles.layout}>
				<div className={clsx(styles.wrapper, styles.widthMainWrapper)}>
					<div className={styles.dashboard}>
						<div className={styles.header}>
							<div>
								<h2>Главная</h2>
							</div>
							<div className={styles.balance}>
								<div>
									{new Intl.NumberFormat('ru-RU', {
										style: 'currency',
										currency: 'RUB',
									}).format(data?.allBalance || 0)}
								</div>
								<div className={styles.premium}>
									Premium: {data?.premium.active ? 'Активен' : 'Не активен'}
								</div>
							</div>
						</div>
						<div className={styles.content}>
							{/* <Graph /> */}
							<Products/>
						</div>
					</div>
				</div>
				<div className={clsx(styles.widthSubWrapper)}>
					<div className={styles.wrapper}>
						<DoughnutGraph />
					</div>
					<div className={clsx(styles.wrapper)}>
						{/* <DoughnutGraph /> */}
						<div className={styles.friends}>
							<h2>Друзья</h2>
							<div className={styles.items}>
								{[...Array(6)].map((_, i) => (
									<div className={styles.item} key={i}>
										<div>Имя фамилия</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Dashboard
