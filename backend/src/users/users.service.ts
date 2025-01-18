import { BadRequestException, 
				 ConflictException, 
				 Injectable, 
				 NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { PrismaService } from 'prisma/prisma.service'
import { GetUserDto } from './dtos/get-user.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { hash } from 'argon2'
import { FileService } from 'src/services/file.service'

@Injectable()
export class UsersService {
	constructor( private readonly prismaService: PrismaService,
							 private readonly fileService: FileService) {}

	async createOne({ email, hashedPassword}: CreateUserDto) {
		const userByEmail = await this.prismaService.user.findUnique({ where: { email } })

		if (userByEmail) {
			throw new ConflictException("User with is already existing")
		}

		const createdUser = await this.prismaService.user.create({
			data: {
				email,
				hashedPassword,
				avatarUrl: "/starter-server-nestjs/src/public/default.png"
				
			}
		})

		return createdUser
	}

	async getOne({ id, email }: GetUserDto) {
		if (!id && !email) {
			throw new BadRequestException()
		}

		const user = await this.prismaService.user.findFirst({
			where: { id, email }
		})

		return user
	}

	async updateOne(id: number, dto: UpdateUserDto, file: Express.Multer.File) {
		
		const user = await this.getOneOrThrow(id)

		if (dto.email) {
			const userByEmail = await this.getOne({ email: dto.email })

			if (userByEmail) {
				throw new ConflictException("User with this email is already existing")
			}
		}

		
		let hashedPassword = user.hashedPassword

		if (dto.password) {
			hashedPassword = await hash(dto.password)
		}
		
		let uniqueAvatarKey: string = user.avatarUrl 

		if (file) {
			uniqueAvatarKey = `${Math.random()}-${file.originalname}`

			await this.fileService.upload(uniqueAvatarKey, file.buffer)
			
			if (user.avatarUrl) {
				await this.fileService.delete(user.avatarUrl)
			}
		}


		const updateUser = await this.prismaService.user.update({
			where: { id },
			data: {
				...dto,
				hashedPassword,
				avatarUrl: uniqueAvatarKey
			}
		})

		return updateUser
	}

	//Private methods
	async getOneOrThrow(id: number) {
		const user = await this.getOne({ id })

		if (!user) {
			throw new NotFoundException("Could not find any user")
		}

		return user
	}
}

