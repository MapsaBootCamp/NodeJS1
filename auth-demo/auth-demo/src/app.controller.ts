import {
  Controller,
  Get,
  UseGuards,
  Post,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticat.gaurd';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local.auth.gaurd';
import { UserLoginDto } from './user/dto/user.dto';
import { User } from './user/types/user.type';
import { User as UserDecorator } from './user/decorators/user.decorator';
import { Roles } from './user/role.decorator';
import { Role } from './user/role.enum';
import RoleGuard from './role.guard';

@ApiTags('Authentication')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  @ApiBody({ type: UserLoginDto })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request): Promise<User | { accessToken: string }> {
    // return request.user;
    return await this.authService.login(request.user);
  }

  // @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('secret')
  getHello(@UserDecorator('userId') user: string): string {
    return `hello ${JSON.stringify(user)}`;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('admin')
  admiin() {
    return 'hello admin';
  }

  @Get('logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' };
  }
}
