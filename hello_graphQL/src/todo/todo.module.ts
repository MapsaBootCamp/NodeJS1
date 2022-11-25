import { forwardRef, Module } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoResolver } from "./todo.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./entities/todo.entity";
import { UserModule } from "../user/user.module";
import { PubSub } from "graphql-subscriptions";

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), forwardRef(() => UserModule)],
  providers: [
    TodoResolver,
    TodoService,
    {
      provide: "PUB_SUB",
      useValue: new PubSub(),
      // useFactory: () => new PubSub(),
    },
  ],
  exports: [TodoService],
})
export class TodoModule {}
