import { classicRequest } from '@/api/request.api'
import { getTokens, saveTokens } from '@/shared/cookie/tokens.cookie'
import { IUser } from '@/shared/interfaces/user.interface'
import { TypeLogin, TypeRegister } from '@/shared/types/auth.type'

class AuthService {
	private saveTokensToCookies = (data: IUser | null): void => {
		if (data?.accessToken)
			saveTokens({
				accessToken: data.accessToken,
				refreshToken: data.refreshToken,
			})
	}
	async login({ login, password }: TypeLogin): Promise<IUser | null> {
		const { data } = await classicRequest<IUser>({
			method: 'POST',
			url: '/auth/login',
			body: {
				email: login,
				password,
			},
		})

		this.saveTokensToCookies(data)

		return data
	}
	async register({
		email,
		name,
		password,
		confirm,
	}: TypeRegister): Promise<IUser | null> {
		const { data } = await classicRequest<IUser>({
			method: 'POST',
			url: '/auth/register',
			body: {
				email,
				name,
				password,
				confirm,
			},
		})
		this.saveTokensToCookies(data)

		return data
	}
	async getNewTokens(): Promise<IUser | null> {
		const { data } = await classicRequest<IUser>({
			method: 'POST',
			url: '/auth/login/getNewTokens',
			body: {
				refreshToken: getTokens().refreshToken,
			},
		})
		this.saveTokensToCookies(data)

		return data
	}
}

export default new AuthService()
