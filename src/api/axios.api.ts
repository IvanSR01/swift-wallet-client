import { useError } from '@/hooks/useError'
import authService from '@/services/auth-service/auth.service'
import { getTokens } from '@/shared/cookie/tokens.cookie'
import axios from 'axios'

export const apiUrl: string = 'http://localhost:4200/api/v1'
export const uploadsUrl: string = 'http://localhost:4200'
const instance = axios.create({
	baseURL: `${apiUrl}`,
})

const axiosClassic = axios.create({
	baseURL: `${apiUrl}`,
})

instance.interceptors.request.use((config) => {
	const { accessToken } = getTokens()
	if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (
			(error.response?.status === 401 ||
				useError(error) === 'jwt expired' ||
				useError(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const res = await authService.getNewTokens()
				console.log(res)
				return instance.request(originalRequest)
			} catch (e) {
				// if (useError(e) === 'jwt expired') removeTokens()
			}
		}
		console.log(useError(error))
		throw Error(error)
	}
)

export { instance, axiosClassic }
