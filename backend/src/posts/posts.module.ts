import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { FileService } from 'src/services/file.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, FileService],
})
export class PostsModule {}
