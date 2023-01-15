import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { In, Repository } from 'typeorm';
import { CreateStudentDto } from './types/create-student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async getStudentById(id: string) {
    return await this.studentRepository.findOne({ where: { id } });
  }

  async getAllStudents() {
    return await this.studentRepository.find();
  }

  async createStudent(dto: CreateStudentDto) {
    const student = this.studentRepository.create({
      id: uuid(),
      ...dto,
    });

    return await this.studentRepository.save(student);
  }

  async getManyStudents(studentsIds: string[]): Promise<Student[]> {
    const students = await this.studentRepository.find({
      where: { id: In(studentsIds) },
    });

    return students;
  }
}
