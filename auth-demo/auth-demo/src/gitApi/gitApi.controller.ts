import { Controller, Get, Query } from '@nestjs/common';
import { GitApiService } from './gitApi.service';

@Controller('git')
export class GitApiController {
  constructor(private gitApiService: GitApiService) {}
  @Get('followers')
  async getAllFollwers(
    @Query('username') username: string,
    @Query('page') page: number,
  ) {
    const page_ = page ? page : 1;
    return await this.gitApiService.getAllFollowers(username, page_);
  }
}
