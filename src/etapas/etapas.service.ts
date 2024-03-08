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
    const etapas = this.etapasRepository.create(createEtapasDto);
    return this.etapasRepository.save(etapas);
  }

  async findAll() {
    return this.etapasRepository.find();
  }

  async findOne(id_etapa: any) {
    const etapas = await this.etapasRepository.findOne(id_etapa);
    if (!etapas) {
      throw new Error('Etapa não encontrada!');
    }
    return etapas;
  }

  async update(id_etapa: any, updateEtapasDto: UpdateEtapasDto) {
    return this.etapasRepository.update(id_etapa, updateEtapasDto);
  }

  async delete(id_etapa: any) {
    const etapas = await this.etapasRepository.find(id_etapa);
    if (!etapas) {
      throw new Error('Etapa não encontrada!');
    }
    return this.etapasRepository.delete(id_etapa);
  }
}
