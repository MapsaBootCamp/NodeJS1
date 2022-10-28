import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
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
    async createTodo(@Body() body: CreateTodoDto): Promise<Todo> {
        const todo = await this.todoService.createTodo(body);
        return todo;
    }
    @Get(':id')
    async getTodo(@Param('id') id: number): Promise<Todo> {
        try {
            const todo = await this.todoService.getOneTodo(id);
            return todo;
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    @Put('/:id')
    async updateTodo(
        @Param('id') id: number,
        @Body() updatedData: UpdateTodoDto,
    ): Promise<Todo> {
        try {
            const todo = await this.todoService.updateTodo(id, updatedData);
            return todo;
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    deleteTodo() {}
}
