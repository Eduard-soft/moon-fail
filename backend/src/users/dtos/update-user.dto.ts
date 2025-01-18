import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserDto {

	@ApiProperty({
		name: 'firstName',
		description: 'User firstName',
		example: 'Steve'
	})
	firstName?: string
	
	@ApiProperty({
		name: 'lastName',
		description: 'User lastName',
		example: 'Jobs'
	})
	lastName?: string

	@ApiProperty({
		name: 'email',
		description: 'User email address',
		example: 'user@example.com'
	})
	email?: string

	@ApiProperty({
		name: 'password',
		description: 'User password',
		example: 'password123'
	})
	password?: string

	@ApiProperty({
		name: 'avatarUrl',
		description: 'Link to the image of the user profile',
		example: 'https://example.com/avatar.jpg',
		required: false
	})
	avatarUrl?: string
}