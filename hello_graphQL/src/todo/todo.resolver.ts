import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
  Subscription,
} from "@nestjs/graphql";
import { PubSubEngine } from "graphql-subscriptions";
import { TodoService } from "./todo.service";
import { Todo } from "./entities/todo.entity";
import { CreateTodoInput } from "./dto/create-todo.input";
import { UpdateTodoInput } from "./dto/update-todo.input";
import { User } from "src/user/entities/user.entity";
import { Inject } from "@nestjs/common";

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private readonly todoService: TodoService,
    @Inject("PUB_SUB") private pubSub: PubSubEngine
  ) {}

  @Mutation(() => Todo)
  async createTodo(@Args("createTodoInput") createTodoInput: CreateTodoInput) {
    const todo = await this.todoService.create(createTodoInput);
    this.pubSub.publish("todoAdded", { todoCreated: todo });
    return todo;
  }

  @Query(() => [Todo], { name: "todos" })
  async findAll() {
    return await this.todoService.findAll();
  }

  @Query(() => Todo, { name: "todo" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @ResolveField(() => User)
  async user(@Parent() todo: Todo): Promise<User> {
    return await todo.user;
  }

  @Mutation(() => Todo)
  updateTodo(
    @Args("id", { type: () => Int }) id: number,
    @Args("updateTodoInput") updateTodoInput: UpdateTodoInput
  ) {
    return this.todoService.update(id, updateTodoInput);
  }

  @Mutation(() => Todo)
  async removeTodo(@Args("id", { type: () => Int }) id: number) {
    return await this.todoService.remove(id);
  }

  @Subscription(() => Todo, {
    name: "todoCreated",
  })
  todoCreatedNotify() {
    return this.pubSub.asyncIterator("todoAdded");
  }
}
