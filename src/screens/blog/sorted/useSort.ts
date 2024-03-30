import { getValue } from '@/shared/utils/getValue'
import { sortOptions } from '@/shared/var/sort.data'
import debounce from 'lodash.debounce'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

export const useSort = () => {
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleClickOutside = (event: any, modalRef: any) => {
		const path = event.path || (event.composedPath && event.composedPath())
		if (!path.includes(modalRef.current)) {
			setIsOpen(false)
		}
	}
	return useMemo(() => {
		return {
			value,
			order,
			isOpen,
			handleChangeSort,
			setIsOpen,
			handleClickOutside
		}
	}, [value, order, isOpen, handleChangeSort, setIsOpen, handleClickOutside])
}
