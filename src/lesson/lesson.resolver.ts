import { LessonType } from './lesson.type';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { Lesson } from '../entities/lesson.entity';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
