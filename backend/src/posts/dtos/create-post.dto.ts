import { ApiProperty } from "@nestjs/swagger"

export class CreatePostDto{

	@ApiProperty({
		name: 'title',
		description: 'Post title',
		example: 'Steve phrases'
	})
	title: string

	@ApiProperty({
		name: 'content',
		description: 'Post content',
		example: 'Do not try to do everything. Do one thing well.'
	})
	content: string

	@ApiProperty({
		name: 'avatarUrl',
		description: 'Link to the image of the post',
		default: '/starter-server-nestjs/src/public/default.png',
		required: false
	})
	pictureUrl: string
}