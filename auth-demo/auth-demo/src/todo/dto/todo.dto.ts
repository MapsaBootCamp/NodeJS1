import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  description: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    description: 'true or false',
    example: 'true',
  })
  done: boolean;
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
