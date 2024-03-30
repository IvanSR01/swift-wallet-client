export const getColors = ({ dataOne, dataTwo, dataThree }: any) => {
	return [
		{
			fill: true,
			label: 'Seneder',
			data: dataOne,
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			fill: true,
			label: 'receiving',
			data: dataTwo,
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgb(53, 162, 235)',
		},
		{
			fill: true,
			label: 'All',
			data: dataThree,
			borderColor: 'rgb(99, 89, 233)',
			backgroundColor: 'rgba(99, 89, 233, 0.5)',
		},
	]
}
