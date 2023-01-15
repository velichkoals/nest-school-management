import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './types/create-lesson.dto';
import { LessonType } from './types/lesson.type';
import { Lesson } from '../entities/lesson.entity';
import { AssignStudentsDto } from './types/assign-students.dto';
import { StudentService } from '../student/student.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService,
  ) {}

  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Query(() => [LessonType])
  getAllLessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation(() => LessonType)
  createLesson(@Args('lesson') createLessonDto: CreateLessonDto) {
    return this.lessonService.createLesson(createLessonDto);
  }

  @Mutation(() => LessonType)
  assignStudents(@Args('assignStudents') assignStudentsDto: AssignStudentsDto) {
    const { lessonId, studentsIds } = assignStudentsDto;
    return this.lessonService.assignStudents(lessonId, studentsIds);
  }

  @ResolveField(() => [LessonType])
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
