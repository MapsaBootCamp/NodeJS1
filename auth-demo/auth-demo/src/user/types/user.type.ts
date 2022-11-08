import { Document } from 'mongoose';
import { Todo } from 'src/todo/types/todo.type';

export class Address {
  state: string;
  city: string;
  street: string;
  zipcode: number;
}

export class User extends Document {
  username: string;
  password: string;
  addresses: Array<Address>;
  todos: Array<Todo>;
}

export class UserData {
  id: string;
  username: string;
  password?: string;
  addresses: Array<Address>;
  todos?: Array<Todo>;
}
