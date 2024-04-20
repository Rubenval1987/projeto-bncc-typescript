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
    const cursos = await this.cursosRepository.create(createCursosDto);
    return this.cursosRepository.save(cursos);
  }

  async findAll() {
    return this.cursosRepository.find();
  }

  async findOne(id_curso: number) {
    const cursos = await this.cursosRepository.findOne({ where: { id_curso } });
    if (!cursos) {
      throw new Error('Curso não encontrado!');
    }
    return cursos;
  }

  async update(id_curso: number, updateCursosDto: UpdateCursosDto) {
    return this.cursosRepository.update(id_curso, updateCursosDto);
  }

  async delete(id_curso: number) {
    const cursos = await this.cursosRepository.findOne({ where: { id_curso } });
    if (!cursos) {
      throw new Error('Curso não encontrado!');
    }
    return this.cursosRepository.delete(id_curso);
  }
}
