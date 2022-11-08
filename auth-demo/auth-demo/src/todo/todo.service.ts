import { Injectable } from '@nestjs/common';
import { User } from 'src/user/types/user.type';
import { UserService } from '../user/user.service';
import { CreateTodoDto } from './dto/todo.dto';
import { Todo } from './types/todo.type';
@Injectable()
export class TodoService {
  constructor(private readonly userService: UserService) {}

  async createTodo(
    createTodo: CreateTodoDto,
    file: Express.Multer.File,
    user: User,
  ): Promise<any> {
    const todoWithImg = { ...createTodo };
    if (file) {
      todoWithImg['img'] = file.path;
    }
    user.todos.push(todoWithImg);
    return user.save();
  }
  async getTodos(username: string): Promise<Array<Todo>> {
    const user = await this.userService.findOneUser(username);
    return user.todos;
  }
}
