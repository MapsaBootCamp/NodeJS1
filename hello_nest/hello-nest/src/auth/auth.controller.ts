import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(): string {
    return this.authService.signIn();
  }

  @Post('register')
  signUp(): string {
    return this.authService.signUp();
  }
}
