import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Todo } from './entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todo, Category])],
    controllers: [TodoController],
    providers: [TodoService],
})
export class TodoModule {}
