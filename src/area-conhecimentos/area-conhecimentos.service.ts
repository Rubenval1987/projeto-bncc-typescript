import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { AreaConhecimentos } from './../database/entities/area-conhecimentos.entity';
import { CreateAreaConhecimentosDto } from './dto/create-area-conhecimentos.dto';
import { UpdateAreaConhecimentosDto } from './dto/update-area-conhecimentos.dto';

@Injectable()
export class AreaConhecimentosService {
  constructor(
    @Inject('AREA_CONHECIMENTOS_REPOSITORY')
    private areaConhecimentosRepository: Repository<AreaConhecimentos>,
  ) {}

  async create(createAreaConhecimentosDto: CreateAreaConhecimentosDto) {
    const areaConhecimentos = await this.areaConhecimentosRepository.create(
      createAreaConhecimentosDto,
    );
    return this.areaConhecimentosRepository.save(areaConhecimentos);
  }

  async findAll() {
    return this.areaConhecimentosRepository.find();
  }

  async findOne(id_areaconhecimento: number) {
    const areaConhecimentos = await this.areaConhecimentosRepository.findOne({
      where: {
        id_areaconhecimento,
      },
    });
    if (!areaConhecimentos) {
      throw new Error('Área do conhecimento não encontrada!');
    }
    return areaConhecimentos;
  }

  async update(
    id_areaconhecimento: number,
    updateAreaConhecimentosDto: UpdateAreaConhecimentosDto,
  ) {
    return this.areaConhecimentosRepository.update(
      id_areaconhecimento,
      updateAreaConhecimentosDto,
    );
  }

  async delete(id_areaconhecimento: number) {
    const areaConhecimentos = await this.areaConhecimentosRepository.findOne({
      where: {
        id_areaconhecimento,
      },
    });
    if (!areaConhecimentos) {
      throw new Error('Área do conhecimento não encontrada!');
    }
    return this.areaConhecimentosRepository.delete(id_areaconhecimento);
  }
}
