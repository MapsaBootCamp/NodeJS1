import {
  Body,
  Controller,
  UseGuards,
  Request,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateTodoDto } from './dto/todo.dto';
import { existsSync, mkdirSync } from 'fs';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';
import { TodoService } from './todo.service';

@UseGuards(JwtAuthGuard)
@Controller('todo')
export class TodoController {
  constructor(
    private readonly userService: UserService,
    private readonly todoService: TodoService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = './upload/';
          // Create folder if doesn't exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath);
          }
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          // Calling the callback passing the random name generated with the original extension name
          cb(
            null,
            `${req.user.username}-${uuid()}-${extname(file.originalname)}`,
          );
        },
      }),
    }),
  )
  async createTodo(
    @Body() createTodo: CreateTodoDto,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    const userObj = await this.userService.findOneUser(req.user.username);
    return await this.todoService.createTodo(createTodo, file, userObj);
  }

  @Get()
  async getAllTodo(@Request() req) {
    return await this.todoService.getTodos(req.user.username);
  }
}
