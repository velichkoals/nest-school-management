import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './types/create-student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(dto: CreateStudentDto) {
    const student = this.studentRepository.create({
      id: uuid(),
      ...dto,
    });

    return await this.studentRepository.save(student);
  }
}
