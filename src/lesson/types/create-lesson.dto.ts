import { Field, ID, InputType } from '@nestjs/graphql';
import {
  IsDateString,
  isDateString,
  IsString,
  IsUUID,
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

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
