import cardService from '@/services/card-service/card.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import styles from './Products.module.scss'
const Products = () => {
	const { data } = useQuery({
		queryKey: ['products'],
		queryFn: () => cardService.getCards(),
	})
	return (
		<div>
			<div className={styles.items}>
				{data?.cards.map((item) => (
					<div className={styles.card} key={item.id}>{item.name}</div>
				))}
			</div>
		</div>
	)
}

export default Products
