import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Cursos } from './../database/entities/cursos.entity';
import { CreateCursosDto } from './dto/create-cursos.dto';
import { UpdateCursosDto } from './dto/update-cursos.dto';

@Injectable()
export class CursosService {
  constructor(
    @Inject('CURSOS_REPOSITORY')
    private cursosRepository: Repository<Cursos>,
  ) {}

  async create(createCursosDto: CreateCursosDto) {
    const cursos = this.cursosRepository.create(createCursosDto);
    return this.cursosRepository.save(cursos);
  }

  async findAll() {
    return this.cursosRepository.find();
  }

  async findOne(id_curso: any) {
    const cursos = this.cursosRepository.findOne(id_curso);
    if (!cursos) {
      throw new Error('Curso não encontrado!');
    }
    return cursos;
  }

  async update(id_curso: any, updateCursosDto: UpdateCursosDto) {
    return this.cursosRepository.update(id_curso, updateCursosDto);
  }

  async delete(id_curso: any) {
    const cursos = this.cursosRepository.find(id_curso);
    if (!cursos) {
      throw new Error('Curso não encontrado!');
    }
    return this.cursosRepository.delete(id_curso);
  }
}
