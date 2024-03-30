'use client'
import { sortOptions } from '@/shared/var/sort.data'
import { FC, useEffect, useRef } from 'react'
import styles from './Sorted.module.scss'
import { TypeSortedProps } from './Sorted.type'
import { useSort } from './useSort'
// import { ISorted } from './Sorted-interface'

const Sorted: FC<TypeSortedProps> = (props) => {
	const {
		value,
		order,
		handleChangeSort,
		isOpen,
		setIsOpen,
		handleClickOutside,
	} = useSort()
	const modalRef = useRef(null)
	useEffect(() => {
		document.body.addEventListener('click', (e) =>
			handleClickOutside(e, modalRef)
		)
		return () => {
			document.body.removeEventListener('click', (e) =>
				handleClickOutside(e, modalRef)
			)
		}
	})
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<p>Сортировка по :</p>
				<h3 onClick={() => setIsOpen(!isOpen)}>
					{value} ({order})
				</h3>
			</div>
			{isOpen && (
				<div className={styles.content} ref={modalRef}>
					<ul className={styles.items}>
						{sortOptions.map((item, i) => (
							<li
								className={
									value === item.name && order === item.order
										? styles.active
										: ''
								}
								onClick={() => handleChangeSort(i)}
								key={i}
							>
								{item.name} {item.order}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
export default Sorted
