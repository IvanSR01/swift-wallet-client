import { TypeTokens } from '../types/tokens.type'

export interface IUser extends TypeTokens {
	id: string
	email: {
		active: boolean
		address: string
	}
	name: string
	surname: string
	img: string
	work: string
	birthday: Date
	age: number
	friends: string[]
	emailAlert: boolean
	allBalance: number
	role: 'user' | 'admin' | 'banned'
	premium: {
		banBuy?: string
		active: boolean
		ending: string
		cancelTime: string
		card: string
	}
}

export interface IGraphData {
	files: {
		balances: TypeGraphItem
		months: string[]
	}
}

type TypeGraphItem = {
	[key: string]: { [key: string]: number }
}
