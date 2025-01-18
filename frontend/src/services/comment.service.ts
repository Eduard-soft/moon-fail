import { axiosClassic, axiosWithAuth } from "@/api/api.interceptors"
import { API_URL } from "@/config/api.config"
import { IComment, ICommentInput } from "@/shared/types/comment.interface"

class CommentService {
	async getAll(searchTerm?: string | null) {
		const { data } = await axiosClassic<IComment[]>({
			url: API_URL.comments(),
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
		const { data } = await axiosClassic<IComment[]>({
			url: API_URL.comments(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: ICommentInput, postId: string) {
		const { data: createdPost } = await axiosWithAuth<IComment[]>({
			url: API_URL.comments(`/${postId}`),
			method: 'POST',
			data
		})

		return createdPost
	}

	async update(id: string, data: ICommentInput) {
		const { data: updateComment } = await axiosWithAuth<IComment[]>({
			url: API_URL.comments(`/${id}`),
			method: 'PUT',
			data
		})

		return updateComment
	}

	async delete(id: string) {
		const { data: deleteComment } = await axiosWithAuth<IComment[]>({
			url: API_URL.comments(`/${id}`),
			method: 'DELETE'
		})

		return deleteComment
	}
}

export const commentService = new CommentService()