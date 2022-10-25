import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn() id: number;

    @Column() name: string;

    @OneToMany(() => Todo, (todo) => todo.category) todos: Todo[];
}

@Entity()
export class Todo {
    @PrimaryGeneratedColumn() id: number;

    @Column() title: string;

    @Column({ nullable: true }) description: string;

    @Column({ nullable: true }) due_date: Date;

    @Column({ default: false }) done: boolean;

    @ManyToOne(() => Category, (category) => category.todos) category: Category;
}
