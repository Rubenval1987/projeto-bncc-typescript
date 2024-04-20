import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CompetenciaArea } from './../database/entities/competencia-area.entity';
import { CreateCompetenciaAreaDto } from './dto/create-competencia-area.dto';
import { UpdateCompetenciaAreaDto } from './dto/update-competencia-area.dto';

@Injectable()
export class CompetenciaAreaService {
  constructor(
    @Inject('COMPETENCIA_AREA_REPOSITORY')
    private competenciaAreaRepository: Repository<CompetenciaArea>,
  ) {}

  async create(createCompetenciaAreaDto: CreateCompetenciaAreaDto) {
    const competenciaArea = await this.competenciaAreaRepository.create(
      createCompetenciaAreaDto,
    );
    return this.competenciaAreaRepository.save(competenciaArea);
  }

  async findAll() {
    return this.competenciaAreaRepository.find();
  }

  async findOne(id_competencia: number) {
    const competenciaArea = await this.competenciaAreaRepository.findOne({
      where: { id_competencia },
    });
    if (!competenciaArea) {
      throw new Error('Competência não encontrada!');
    }
    return competenciaArea;
  }

  async update(
    id_competencia: number,
    updateCompetenciaAreaDto: UpdateCompetenciaAreaDto,
  ) {
    return this.competenciaAreaRepository.update(
      id_competencia,
      updateCompetenciaAreaDto,
    );
  }

  async delete(id_competencia: number) {
    const competenciaArea = await this.competenciaAreaRepository.findOne({
      where: { id_competencia },
    });
    if (!competenciaArea) {
      throw new Error('Competência não encontrada!');
    }
    return this.competenciaAreaRepository.delete(id_competencia);
  }
}
