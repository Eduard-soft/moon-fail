import { axiosWithAuth } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { IUser } from "@/shared/types/user.interface";

class UserService {
	async getProfile() {
		const response = await axiosWithAuth<IUser>({
			url: API_URL.users('/profile'),
			method: 'GET'
		})

		return response
	}

	async create(data: IUser) {
		const { data: createdUser } = await axiosWithAuth<IUser[]>({
			url: API_URL.users(),
			method: 'POST',
			data
		})

		return createdUser
	}

	async update(id: string, data: IUser) {
		const { data: updateUser } = await axiosWithAuth<IUser[]>({
			url: API_URL.users(`/${id}`),
			method: 'PUT',
			data
		})

		return updateUser
	}
}

export const userService = new UserService()