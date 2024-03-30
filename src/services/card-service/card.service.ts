import { accessRequest } from '@/api/request.api'
import { TypeResponseCard } from '@/shared/types/card.type'

class CardService {
	async getCards(): Promise<TypeResponseCard> {
		const { data } = await accessRequest<TypeResponseCard>({
			url: '/card',
			method: 'GET',
		})
		return data
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CardService()
