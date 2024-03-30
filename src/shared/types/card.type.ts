export type TypeCard = {
	id: string
	userId: string
	name: string
	cardNumber: string
	cvv: string
	cardHolderName: string
	expirationDate: string
	system: {
		logo: string
		name: string
	}
	balance: number
}

export type TypeResponseCard = {
	cards: TypeCard[]
}