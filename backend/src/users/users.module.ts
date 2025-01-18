import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FileService } from 'src/services/file.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FileService],
  exports: [UsersService]
})
export class UsersModule {}
