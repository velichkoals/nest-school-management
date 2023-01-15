import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './types/student.type';
import { StudentService } from './student.service';
import { CreateStudentDto } from './types/create-student.dto';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => String)
  testQuery() {
    return 'test';
  }

  @Mutation(() => StudentType)
  createStudent(@Args('student') createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }
}
