/* eslint-disable react-hooks/exhaustive-deps */
import userService from '@/services/user-service/user.service'
import { useQuery } from '@tanstack/react-query'
import { getColors } from './getColors'
import graphUtils from '@/shared/utils/graph.utils'
import { IGraphData } from '@/shared/interfaces/user.interface'
import { useMemo, useState } from 'react'

export const useGraph = () => {
	const { data } = useQuery({
		queryKey: ['graph'],
		queryFn: () => userService.getBalanceByMouse(),
	})
	const [state, setState] = useState(0)
	const onClickPrev = () => {
		if (data?.files.months[state - 1]) {
			setState(state - 1)
		}
	}
	const onClickNext = () => {
		if (data?.files.months[state + 1]) {
			setState(state + 1)
		}
	}

	const { getBalance, getValue } = graphUtils(data as IGraphData)
	const balance = {
		labels: data?.files.months,
		datasets: getColors({
			dataOne: getBalance('send'),
			dataTwo: getBalance('rece'),
			dataThree: getBalance('all'),
		}),
	}
	// console.log(data?.files)
	const optionsTwo = {
		labels: ['Seneder', 'Receiving', 'All'],
		plugins: {
			legend: {
				labels: {
					color: '#eeeeee',
				},
			},
		},
		datasets: [
			{
				label: '# of Votes',
				data: getValue(state),
				backgroundColor: [
					'#ffffff8b',
					'rgba(53, 162, 235, 0.5)',
					'rgba(99, 89, 233, 0.5)',
				],
				borderColor: ['#fff', 'rgb(53, 162, 235)', 'rgb(99, 89, 233)'],
				borderWidth: 1,
			},
		],
	}
	return useMemo(() => {
		return {
			balance,
			optionsTwo,
			onClickPrev,
			onClickNext,
			activeMonth: data?.files.months[state],
		}
	}, [balance, optionsTwo, onClickPrev, onClickNext])
}
