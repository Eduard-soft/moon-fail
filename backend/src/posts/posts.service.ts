import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Post } from '@prisma/client';
import { UpdatePostDto } from './dtos/update-post.dto';
import { Post as PostModel } from '@prisma/client'
import { FileService } from 'src/services/file.service';
import { GetPostDto } from './dtos/get-post.dto';

@Injectable()
export class PostsService {

	constructor( private readonly prismaService: PrismaService,
							 private readonly fileService: FileService
	) {}

	async get(userId: number) {
		return await this.prismaService.post.findMany({
			where: { userId}
		})
	}

	async createOne({ title, content}: CreatePostDto, userId: number): Promise<Post> {
		const createPost = await this.prismaService.post.create({
			data: {
				title,
				content,
				userId,
				pictureUrl: "/starter-server-nestjs/src/public/default.png"
			}
		})

		return createPost
	}

	async getOne({ id }: GetPostDto) {
		if (!id) {
			throw new BadRequestException()
		}

		const user = await this.prismaService.user.findFirst({
			where: { id }
		})

		return user
	}

	async updateOne(id: number, dto: UpdatePostDto, userId: number, file: Express.Multer.File) {
		await this.getOneOrThrow(id, userId)

		const post = await this.getOneOrThrow(id, userId)

		if (id) {
			const postById = await this.getOne({ id })

			if (postById) {
				throw new ConflictException("The user does not have such a post")
			}
		}

		let uniquePictureKey: string = post.pictureUrl

		if (file) {
			uniquePictureKey = `${Math.random()}-${file.originalname}`

			await this.fileService.upload(uniquePictureKey, file.buffer)

			if (post.pictureUrl) {
				await this.fileService.delete(post.pictureUrl)
			}
		}

		const updatedPost = await this.prismaService.post.update({
			where: { id, userId },
			data: {
				...dto,
				pictureUrl: uniquePictureKey
			}
		})

		return updatedPost

	}

	async deleteOne(id: number, userId: number) {
		await this.getOneOrThrow(id, userId)

		const deletePost = await this.prismaService.post.delete({
			where: { id, userId }
		})
		return deletePost
	}

		// Private methods
		private async getOneOrThrow(id: number, userId?: number): Promise<PostModel> {
			const post = await this.prismaService.post.findUnique({ where: { id } })
	
			if (!post) {
				throw new NotFoundException("Could not find any post")
			}
	
			return post
		}
}
