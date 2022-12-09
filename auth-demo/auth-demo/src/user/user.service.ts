import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateTodoDto } from 'src/todo/dto/todo.dto';
import { createUserDto } from './dto/user.dto';
import { User, UserData } from './types/user.type';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async userTodoDelete(username: string, id: string) {
    try {
      const result = await this.userModel.updateOne(
        {
          username: username,
        },
        {
          $pull: { todos: { _id: id } },
        },
      );
      if (result.modifiedCount == 1) {
        return 'Delete Shod';
      } else {
        throw new HttpException('yaft nashod', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  async userTodoUpdate(
    username: string,
    id: string,
    updateTodoData: UpdateTodoDto,
  ) {
    const user = await this.findOneUser(username);
    const filteredTodo = user.todos.filter((todo) => todo._id == id);
    if (filteredTodo.length > 0) {
      const todoOld = filteredTodo[0];
      try {
        await this.userModel.updateOne(
          {
            username: username,
            'todos._id': id,
          },
          {
            $set: {
              'todos.$.title':
                updateTodoData.title !== undefined
                  ? updateTodoData.title
                  : todoOld.title,
              'todos.$.done':
                updateTodoData.done !== undefined
                  ? updateTodoData.done
                  : todoOld.done,
              'todos.$.description':
                updateTodoData.description !== undefined
                  ? updateTodoData.description
                  : todoOld.description,
            },
          },
        );
        return 'update shod!';
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
    throw new HttpException('chenin taski nadari', HttpStatus.NOT_FOUND);
  }

  userData(user: User): UserData {
    return {
      id: user._id,
      username: user.username,
      addresses: user.addresses,
      role: user.roll,
    };
  }
  async findOneUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ username: username });
    return user;
  }

  async userCreation(userCreateData: createUserDto): Promise<User> {
    const { username, password, address, roll } = userCreateData;
    const user = new this.userModel({ username, password, roll });
    user.addresses.push(address);
    return user.save();
  }
}
