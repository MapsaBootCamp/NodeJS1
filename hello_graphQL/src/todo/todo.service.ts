import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
    private readonly userService: UserService,
  ) {}

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    if (createTodoInput.userId) {
      const user = await this.userService.findOne(createTodoInput.userId);
      const newTodo = this.todosRepository.create(createTodoInput);
      newTodo.user = Promise.resolve(user);
      return await this.todosRepository.save(newTodo);
    }
    return await this.todosRepository.save(createTodoInput);
  }

  findAllTodoForUser(id) {
    return this.todosRepository.find({ where: { user: { id } } });
  }

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    try {
      return this.todosRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  update(id: number, updateTodoInput: UpdateTodoInput): Promise<Todo> {
    return this.todosRepository.save({ id, ...updateTodoInput });
  }

  async remove(id: number): Promise<any> {
    const todo = await this.todosRepository.findOneBy({ id });
    return this.todosRepository.remove(todo);
  }
}
