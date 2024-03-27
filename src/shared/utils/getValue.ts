import { TypeSort } from "../var/sort.data"

export const getValue = (val: string, sortOptions: TypeSort[]) => {
	const item = sortOptions.find((i) => i.value === val)
	return item?.name
}
