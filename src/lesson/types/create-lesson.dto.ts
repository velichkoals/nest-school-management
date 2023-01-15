import { Field, InputType } from '@nestjs/graphql';
import {
  IsDateString,
  isDateString,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateLessonDto {
  @IsString()
  @MinLength(2)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}
