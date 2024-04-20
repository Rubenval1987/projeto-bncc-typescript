import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CompetenciaComponente } from './../database/entities/competencia-componente.entity';
import { CreateCompetenciaComponenteDto } from './dto/create-competencia-componente.dto';
import { UpdateCompetenciaComponenteDto } from './dto/update-competencia-componente.dto';

@Injectable()
export class CompetenciaComponenteService {
  constructor(
    @Inject('COMPETENCIA_COMPONENTE_REPOSITORY')
    private competenciaComponenteRepository: Repository<CompetenciaComponente>,
  ) {}

  async create(createCompetenciaComponenteDto: CreateCompetenciaComponenteDto) {
    const competenciaComponente =
      await this.competenciaComponenteRepository.create(
        createCompetenciaComponenteDto,
      );
    return this.competenciaComponenteRepository.save(competenciaComponente);
  }

  async findAll() {
    return this.competenciaComponenteRepository.find();
  }

  async findOne(id_competencia: number) {
    const competenciaComponente =
      await this.competenciaComponenteRepository.findOne({
        where: { id_competencia },
      });
    if (!competenciaComponente) {
      throw new Error('Competência componente não encontrada!');
    }
    return competenciaComponente;
  }

  async update(
    id_competencia: number,
    updateCompetenciaComponenteDto: UpdateCompetenciaComponenteDto,
  ) {
    return this.competenciaComponenteRepository.update(
      id_competencia,
      updateCompetenciaComponenteDto,
    );
  }

  async delete(id_competencia: number) {
    const competenciaComponente =
      await this.competenciaComponenteRepository.findOne({
        where: { id_competencia },
      });
    if (!competenciaComponente) {
      throw new Error('Competência componente não encontrada!');
    }
    return this.competenciaComponenteRepository.delete(id_competencia);
  }
}
