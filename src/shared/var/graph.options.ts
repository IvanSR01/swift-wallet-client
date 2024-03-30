export const options: any = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
			labels: {
				color: '#eeeeee', // Цвет текста в легенде
			},
		},
		title: {
			display: true,
			text: 'История баланса',
			color: '#eeeeee', // Цвет текста заголовка
			font: {
				size: 18, // Размер шрифта заголовка
				weight: 'bold', // Жирный шрифт
			},
		},
	},
	scales: {
		x: {
			ticks: {
				color: '#eeeeee', // Цвет меток по оси X
			},
		},
		y: {
			ticks: {
				color: '#eeeeee', // Цвет меток по оси Y
			},
		},
	},
}

export const optionsTwo = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	plugins: {
		legend: {
			labels: {
				color: '#eeeeee', // Цвет меток
			},
		},
	},
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
}

