import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class GitApiService {
  constructor(private httpService: HttpService) {}

  async getAllFollowers(username: string, page: number): Promise<any> {
    const url = `https://api.github.com/users/${username}/followers?page=${page}`;
    const res = await lastValueFrom(
      this.httpService.get(url).pipe(map((res) => res.data)),
    );
    return res.map((data) => data['login']);
  }
}
