import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';
import { Todo } from 'src/todo/types/todo.type';
import { Role } from '../role.enum';

export class Address {
  @ApiProperty()
  @IsNotEmpty()
  state: string;
  @ApiPropertyOptional()
  city: string;
  @ApiPropertyOptional()
  street: string;
  @ApiPropertyOptional()
  zipcode: number;
}

export class User extends Document {
  username: string;
  password: string;
  addresses: Array<Address>;
  roll: Role;
  todos: Array<Todo>;
}

export class UserData {
  id: string;
  username: string;
  password?: string;
  role: Role;
  addresses: Array<Address>;
  todos?: Array<Todo>;
}
