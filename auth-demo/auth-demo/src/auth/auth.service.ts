import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneUser(username);
    if (user) {
      const validPass = await bcrypt.compare(pass, user.password);
      if (validPass) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }
}
