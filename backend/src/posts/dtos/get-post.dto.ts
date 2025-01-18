import { ApiProperty } from "@nestjs/swagger";

export class GetPostDto {

	@ApiProperty({
		name: 'id',
		description: 'Unique id',
		example: '1'
	})
	id?: number
}