import { IComment } from "./comment.interface"
import { IUser } from "./user.interface"

export interface IPost {
	id: string
	title: string
	content: string
	picture: string[]
	user: IUser
	comment: IComment[]
}

export interface IPostInput extends Pick<IPost, 'title'> {
	title: string
	content?: string
	picture?: string[]
	user: IUser
}

export interface IPostEdit extends Omit<IPost, 'id'> {}