import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (abcd)' })
  @IsNotEmpty()
  username: string;

  @Field({ nullable: true })
  @IsOptional()
  password: string;
}
