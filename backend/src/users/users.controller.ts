import { Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, ParseIntPipe, Patch, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/utils/decorators/current-user.decorator';
import { UpdateUserDto } from './dtos/update-user.dto';
import { JwtAccessGuard } from 'src/auth/guards/jwt-access.guard';
import { FileInterceptor } from '@nestjs/platform-express';



@UseGuards(JwtAccessGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getOne(
    @CurrentUser("id", ParseIntPipe) userId: number) {
      return await this.usersService.getOne({id: userId})
  } 

  @Patch()
  @UseInterceptors(FileInterceptor('avatar'))
  async updateOne(
    @CurrentUser("id", ParseIntPipe) userId: number,
    @Body() dto: UpdateUserDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator ({ maxSize: 1000000}),
          // new FileTypeValidator ({ fileType: "image/jpeg/jpg/png"})
        ],
        fileIsRequired: false
      })
    ) file: Express.Multer.File
  ) {
    return await this.usersService.updateOne(userId, dto, file)
  }
}
