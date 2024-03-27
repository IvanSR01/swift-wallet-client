'use client'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './Sorted.module.scss'
import { TypeSortedProps } from './Sorted.type'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { sortOptions } from '@/shared/var/sort.data'
import debounce from 'lodash.debounce'
import { getValue } from '@/shared/utils/getValue'
// import { ISorted } from './Sorted-interface'

const Sorted: FC<TypeSortedProps> = (props) => {
	const searchParams = useSearchParams()
	const [isOpen, setIsOpen] = useState(false)

	const [value, setValue] = useState(
		getValue(searchParams.get('sort')?.toString() as string, sortOptions) ||
			'Дате создания'
	)
	const [order, setOrder] = useState(
		searchParams.get('order')?.toString() || 'DESC'
	)
	const { replace } = useRouter()
	const pathname = usePathname()
	const handleChangeSort = (i: number) => {
		const item = sortOptions[i]
		setValue(item.name)
		setOrder(item.order)
		const debouncedSearch = debounce(() => {
			const params = new URLSearchParams(searchParams)
			params.set('sort', item.value)
			params.set('order', item.order)
			replace(`${pathname}?${params.toString()}`)
		}, 500)
		debouncedSearch()
		setIsOpen(false)
	}
	const modalRef = useRef(null)
	useEffect(() => {
		const handleClickOutside = (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (!path.includes(modalRef.current)) {
				setIsOpen(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)
		return () => {
			document.body.removeEventListener('click', handleClickOutside)
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
