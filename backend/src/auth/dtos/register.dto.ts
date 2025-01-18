import { ApiProperty } from "@nestjs/swagger"
import { IsDefined, IsNotEmpty, IsEmail, IsString, MinLength } from "class-validator"

export class RegisterDto {

	@ApiProperty({
		name: 'email',
		description: 'User email address',
		example: 'user@example.com'
	})
	@IsDefined()
	@IsNotEmpty()
	@IsEmail()
	email: string

	@ApiProperty({
		name: 'password',
		description: 'User password',
		example: 'password123'
	})
	@IsDefined()
	@IsNotEmpty()
	@IsString()
	@MinLength(6)
	password: string
	
	@ApiProperty({
		name: 'avatarUrl',
		description: 'Link to the image of the user profile',
		default: '/starter-server-nestjs/src/public/default.png',
		required: false
	})
	avatarUrl: string
}