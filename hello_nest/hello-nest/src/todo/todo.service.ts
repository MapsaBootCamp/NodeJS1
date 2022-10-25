import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'process';
import { Repository } from 'typeorm';
import { Category, Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todosRepository: Repository<Todo>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    async getAllTodos(): Promise<Todo[]> {
        return this.todosRepository.find();
    }
    async getOneTodo(id: number): Promise<Todo> {
        return this.todosRepository.findOneBy({
            id,
        });
    }

    async createTodo(todoData) {
        const { title, description, due_date } = todoData;
        let category = await this.categoryRepository.findOneBy({
            name: todoData.category,
        });

        if (!category) {
            category = new Category();
            category.name = todoData.category;
            category = await this.categoryRepository.save(category);
        }
        const todo = new Todo();
        todo.title = title;
        if (description) {
            todo.description = description;
        }
        if (due_date) {
            todo.due_date = due_date;
        }
        todo.category = category;
        return await this.todosRepository.save(todo);
    }
}
