import { IsNotEmpty, IsString, IsArray, IsEmpty } from 'class-validator';
import { Address } from '../types/user.type';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  address?: Address;
}
