import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { createTodoDto } from './dto/todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('api/todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get('list')
    async getAllTodos(): Promise<Todo[]> {
        try {
            const todos = await this.todoService.getAllTodos();
            return todos;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error.message,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Post('list')
    async createTodo(@Body() body: createTodoDto): Promise<Todo> {
        const todo = await this.todoService.createTodo(body);
        return todo;
    }

    @Put('/:id')
    updateTodo(@Param('id') id: number) {}

    deleteTodo() {}

    getTodo() {}
}
