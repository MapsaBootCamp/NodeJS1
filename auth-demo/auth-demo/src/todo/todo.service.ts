import { Injectable } from '@nestjs/common';
import { User } from 'src/user/types/user.type';
import { UserService } from '../user/user.service';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
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

  async updateTodo(
    username: string,
    id: string,
    updateData: UpdateTodoDto,
  ): Promise<any> {
    return await this.userService.userTodoUpdate(username, id, updateData);
    //// ravesh kasif baraye az sar baz kardan
    // const user = await this.userService.findOneUser(username);
    // user.todos = user.todos.map((todo) => {
    //   if (todo?._id == id) {
    //     if (updateData.description !== undefined) {
    //       todo.description = updateData.description;
    //     } else if (updateData.title !== undefined) {
    //       todo.title = updateData.title;
    //     } else if (updateData.done !== undefined) {
    //       todo.done = updateData.done;
    //     }
    //     return todo;
    //   } else {
    //     return todo;
    //   }
    // });
    // await user.save();
    return {
      status: 'success',
      message: `task ${id} update shod`,
    };
  }

  async deleteTodo(username: string, id: string): Promise<any> {
    return await this.userService.userTodoDelete(username, id);
  }
}
