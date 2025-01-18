import { axiosClassic, axiosWithAuth } from "@/api/api.interceptors"
import { API_URL } from "@/config/api.config"
import { IPost, IPostInput } from "@/shared/types/post.interface"

class PostService {
	async getAll(searchTerm?: string | null) {
		const { data } = await axiosClassic<IPost[]>({
			url: API_URL.posts(),
			method: 'GET',
			params: searchTerm 
					? {
							searchTerm
					}

					: {}
		})

		return data || []
	}

	async getById(id: string) {
		const { data } = await axiosClassic<IPost[]>({
			url: API_URL.posts(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: IPostInput) {
		const { data: createdPost } = await axiosWithAuth<IPost[]>({
			url: API_URL.posts(),
			method: 'POST',
			data
		})

		return createdPost
	}

	async update(id: string, data: IPostInput) {
		const { data: updatePost } = await axiosWithAuth<IPost[]>({
			url: API_URL.posts(`/${id}`),
			method: 'PUT',
			data
		})

		return updatePost
	}

	async delete(id: string) {
		const { data: deletePost } = await axiosWithAuth<IPost[]>({
			url: API_URL.posts(`/${id}`),
			method: 'DELETE'
		})

		return deletePost
	}
}

export const postService = new PostService()