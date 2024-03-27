export const sortOptions: TypeSort[] = [
	{
		name: 'Дате создания',
		order: 'DESC',
		value: 'dateCreate',
	},
	{
		name: 'Дате создания',
		order: 'ASC',
		value: 'dateCreate',
	},
	{
		name: 'Aлфавиту название',
		order: 'DESC',
		value: 'title',
	},
	{
		name: 'Алфавиту название',
		order: 'ASC',
		value: 'title',
	},
	{
		name: 'Aлфавиту контент',
		order: 'DESC',
		value: 'content',
	},
	{
		name: 'Aлфавиту контент',
		order: 'ASC',
		value: 'content',
	},
]

export type TypeSort = {
	name: string
	value: string
	order: 'ASC' | 'DESC'
}
