import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../../student/types/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  startDate: string;
  @Field(() => String)
  endDate: string;

  @Field(() => [StudentType])
  students: string[];
}
