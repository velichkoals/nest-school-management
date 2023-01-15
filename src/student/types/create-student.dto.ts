import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateStudentDto {
  @IsString()
  @MinLength(2)
  @Field()
  firstName: string;

  @IsString()
  @MinLength(2)
  @Field()
  lastName: string;
}
