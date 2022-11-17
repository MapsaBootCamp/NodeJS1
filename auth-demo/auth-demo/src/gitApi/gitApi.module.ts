import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GitApiController } from './gitApi.controller';
import { GitApiService } from './gitApi.service';

@Module({
  imports: [HttpModule],
  controllers: [GitApiController],
  providers: [GitApiService],
})
export class GitApiModule {}
