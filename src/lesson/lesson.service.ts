import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from '../entities/lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async getLessonById(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOne({ where: { id } });
  }
  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = await this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return await this.lessonRepository.save(lesson);
  }
}
