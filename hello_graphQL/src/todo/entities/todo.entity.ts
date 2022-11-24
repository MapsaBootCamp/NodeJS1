import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Todo {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  done?: boolean;

  @JoinTable()
  @ManyToOne(() => User, (user) => user.todos)
  @Field(() => User, { nullable: true })
  user?: Promise<User>;
}
