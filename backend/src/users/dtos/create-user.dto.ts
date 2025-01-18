import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateUserDto {

	// @IsString()
	email: string

	@ApiProperty({
		required: false
	})
	hashedPassword?: string

	@ApiProperty({
		name: 'avatarUrl',
		description: 'Link to the image of the post',
		default: '/starter-server-nestjs/src/public/default.png',
		required: false
	})
	avatarUrl?: string
}