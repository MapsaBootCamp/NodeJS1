import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsEmpty,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { Address } from '../types/user.type';
import { Role } from '../role.enum';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'any string',
    description: 'username!',
    minimum: 3,
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '12345!@#$',
  })
  password: string;

  @ApiPropertyOptional({ type: Address })
  address?: Address;

  @IsEnum(Role)
  @IsOptional()
  roll: Role;
}

export class UserLoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
