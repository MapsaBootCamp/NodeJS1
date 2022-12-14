import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createUserDto } from './dto/user.dto';
import { User } from './types/user.type';
import { UserService } from './user.service';

@ApiTags('Authentication')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UsePipes(ValidationPipe)
  @Post('register')
  async userCreate(@Body() userCreateData: createUserDto): Promise<User> {
    try {
      return await this.userService.userCreation(userCreateData);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
