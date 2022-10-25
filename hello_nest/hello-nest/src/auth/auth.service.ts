import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn(): string {
    return 'Sign In!';
  }
  signUp() {
    return 'Sign Up';
  }
}
