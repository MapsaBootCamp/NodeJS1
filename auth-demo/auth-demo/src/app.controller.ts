import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticat.gaurd';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local.auth.gaurd';
import { User } from './user/types/user.type';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request): Promise<User | { accessToken: string }> {
    // return request.user;
    return await this.authService.login(request.user);
  }

  // @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @Get('secret')
  getHello(@Request() req): string {
    return `hello ${JSON.stringify(req.user)}`;
  }

  @Get('logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' };
  }
}
