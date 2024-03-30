/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'
import { IGraphData } from '../interfaces/user.interface'

// eslint-disable-next-line import/no-anonymous-default-export
export default (data: IGraphData) => {
	const getBalance = (type: 'send' | 'rece' | 'all') => {
		let array: number[] = []
		for (var key in data?.files.balances[type]) {
			array.push(data?.files.balances[type][key])
		}
		return array
	}
	const getValue = (i: number) => {
		let array: number[] = []
		// if(data?.files) {
		// 	console.log(Object.values(data?.files?.balances['send']))
		// }	
		for (var key in data?.files.balances) {
			// const balances = getBalance(key as 'send' | 'rece' | 'all')
			const balances = Object.values(data?.files.balances[key])
			array.push(Math.abs(balances[i]))
		}
		console.log(array)
		return array
	}
	return useMemo(() => {
		return { getBalance, getValue }
	}, [getBalance, getValue, data])
}
