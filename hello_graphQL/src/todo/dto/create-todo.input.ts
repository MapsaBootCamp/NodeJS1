import { InputType, Field, Int } from '@nestjs/graphql';
import { IsAlpha, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'Example field (panir kharidan)' })
  @IsNotEmpty()
  @IsAlpha()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  done?: boolean;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  userId?: number;
}
