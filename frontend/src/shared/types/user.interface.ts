import { IComment } from "./comment.interface"
import { IPost } from "./post.interface"

export interface IUser {
	id: string
	name: string
	email: string
	avatar: string
	post: IPost[]
	comment: IComment[]
}