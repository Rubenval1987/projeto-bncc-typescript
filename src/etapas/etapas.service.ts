import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Etapas } from './../database/entities/etapas.entity';
import { CreateEtapasDto } from './dto/create-etapas.dto';
import { UpdateEtapasDto } from './dto/update-etapas.dto';

@Injectable()
export class EtapasService {
  constructor(
    @Inject('ETAPAS_REPOSITORY')
    private etapasRepository: Repository<Etapas>,
  ) {}

  async create(createEtapasDto: CreateEtapasDto) {
    const etapas = await this.etapasRepository.create(createEtapasDto);
    return this.etapasRepository.save(etapas);
  }

  async findAll() {
    return this.etapasRepository.find();
  }

  async findOne(id_etapa: number) {
    const etapas = await this.etapasRepository.findOne({ where: { id_etapa } });
    if (!etapas) {
      throw new Error('Etapa não encontrada!');
    }
    return etapas;
  }

  async update(id_etapa: number, updateEtapasDto: UpdateEtapasDto) {
    return this.etapasRepository.update(id_etapa, updateEtapasDto);
  }

  async delete(id_etapa: number) {
    const etapas = await this.etapasRepository.findOne({ where: { id_etapa } });
    if (!etapas) {
      throw new Error('Etapa não encontrada!');
    }
    return this.etapasRepository.delete(id_etapa);
  }
}
