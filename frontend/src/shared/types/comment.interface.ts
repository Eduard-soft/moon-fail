import { IPost } from "./post.interface"
import { IUser } from "./user.interface"

export interface IComment {
	id: string
	comment: string
	createdAt: string
	user: IUser
	post: IPost
}

export interface ICommentInput extends Pick<IComment, 'id'> {
	title: string
	content?: string
	user: IUser
}

export interface ICommentInput extends Pick<IComment, 'comment'> {}