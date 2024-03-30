import { accessRequest } from "@/api/request.api"
import { IGraphData, IUser } from "@/shared/interfaces/user.interface"

class UserService {
	async getProfile(){
		const { data } = await accessRequest<IUser>({
			method: 'GET',
			url: '/user/profile',
		})
		return data
	}
	async getBalanceByMouse(){
		const { data } = await accessRequest<IGraphData>({
			method: 'GET',
			url: '/user/get-balance',
		})
		return data
	}
}
export default new UserService()