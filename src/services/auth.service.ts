import { classicRequest } from '@/api/request.api'
import { saveTokens } from '@/shared/cookie/tokens.cookie'
import { IUser } from '@/shared/interfaces/user.interface'

class AuthService {
	private saveTokensToCookies = (data: IUser | null): void => {
		if (data?.accessToken)
			saveTokens({
				accessToken: data.accessToken,
				refreshToken: data.refreshToken,
			})
	}
	async login(email: string, password: string): Promise<IUser | null> {
		const { data } = await classicRequest<IUser>({
			method: 'POST',
			url: '/auth/login',
			body: {
				email,
				password,
			},
		})

		this.saveTokensToCookies(data)

		return data
	}
	async register(email: string, password: string): Promise<IUser | null> {
		const { data } = await classicRequest<IUser>({
			method: 'POST',
			url: '/auth/register',
			body: {
				email,
				password,
			},
		})
		this.saveTokensToCookies(data)

		return data
	}
}

export default new AuthService()
