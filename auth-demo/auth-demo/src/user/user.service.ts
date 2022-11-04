import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/user.dto';
import { User, UserData } from './types/user.type';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  userData(user: User): UserData {
    return {
      id: user._id,
      username: user.username,
      addresses: user.addresses,
    };
  }
  async findOneUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ username: username });
    return user;
  }

  async userCreation(userCreateData: createUserDto): Promise<User> {
    const { username, password, address } = userCreateData;
    const user = new this.userModel({ username, password });
    user.addresses.push(address);
    return user.save();
  }
}
