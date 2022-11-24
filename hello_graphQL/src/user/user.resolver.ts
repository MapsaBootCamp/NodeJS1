import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Todo } from 'src/todo/entities/todo.entity';
import { TodoService } from 'src/todo/todo.service';
import { CreateUserInput } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private todoService: TodoService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.create(createUserInput);
  }

  @ResolveField(() => [Todo])
  async todos(@Parent() user: User) {
    const { id } = user;
    return await this.todoService.findAllTodoForUser(id);
  }

  @Query(() => [User], { name: 'Users' })
  async findAll() {
    return await this.userService.findAll();
  }

  @Query(() => User, { name: 'User' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }
}
