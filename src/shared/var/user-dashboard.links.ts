export const userDashboardLinks: TypeUserDashboardLinks[] = [
	{
		name: 'Главная',
		path: '/dashboard',
	},
	{
		name: 'Карты',
		path: '/cards',
	},
	{
		name: 'Счета',
		path: '/scores',
	},
	{
		name: 'Переводы',
		path: '/transfers',
	},
	{
		name: 'История',
		path: '/history',
	},
	{
		name: 'Настройки',
		path: '/settings',
	},
]

type TypeUserDashboardLinks = {
	name: string
	path: string
}
