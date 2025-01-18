import { ApiProperty } from "@nestjs/swagger"

export class UpdatePostDto{

	@ApiProperty({
		name: 'title',
		description: 'Post title',
		example: 'Steve phrases'
	})
	title?: string

	@ApiProperty({
		name: 'content',
		description: 'Post content',
		example: 'Do not try to do everything. Do one thing well.'
	})
	content?: string

	@ApiProperty({
		name: 'pictureUrl',
		description: 'Link to the image of the post',
		example: 'https://example.com/avatar.jpg',
		required: false
	})
	pictureUrl: string
}