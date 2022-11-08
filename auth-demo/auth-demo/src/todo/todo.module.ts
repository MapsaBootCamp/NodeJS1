import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
