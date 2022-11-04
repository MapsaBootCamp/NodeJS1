import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { UserData } from 'src/user/types/user.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<UserData | null> {
    const user = await this.usersService.findOneUser(username);
    if (user) {
      const validPass = await bcrypt.compare(pass, user.password);
      if (validPass) {
        const result = this.usersService.userData(user);
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { user: user.username, userId: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
