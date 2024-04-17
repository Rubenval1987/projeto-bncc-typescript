import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CompetenciaGeral } from './../database/entities/competencia-geral.entity';
import { CreateCompetenciaGeralDto } from './dto/create-competencia-geral.dto';
import { UpdateCompetenciaGeralDto } from './dto/update-competencia-geral.dto';

@Injectable()
export class CompetenciaGeralService {
  constructor(
    @Inject('COMPETENCIA_GERAL_REPOSITORY')
    private competenciaGeralRepository: Repository<CompetenciaGeral>,
  ) {}

  async create(createCompetenciaGeralDto: CreateCompetenciaGeralDto) {
    const competenciaGeral = this.competenciaGeralRepository.create(
      createCompetenciaGeralDto,
    );
    return this.competenciaGeralRepository.save(competenciaGeral);
  }

  async findAll() {
    return this.competenciaGeralRepository.find();
  }

  async findOne(id_competencia: any) {
    const competenciaGeral = this.competenciaGeralRepository.findOneBy({
      id_competencia,
    });
    if (!competenciaGeral) {
      throw new Error('Competência geral não encontrada!');
    }
    return competenciaGeral;
  }

  async update(
    id_competencia: any,
    updateCompetenciaGeralDto: UpdateCompetenciaGeralDto,
  ) {
    return this.competenciaGeralRepository.update(
      id_competencia,
      updateCompetenciaGeralDto,
    );
  }

  async delete(id_competencia: any) {
    const competenciaGeral =
      this.competenciaGeralRepository.find(id_competencia);
    if (!competenciaGeral) {
      throw new Error('Competência geral não encontrada!');
    }
    return this.competenciaGeralRepository.delete(id_competencia);
  }
}
