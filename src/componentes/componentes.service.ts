import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Componentes } from './../database/entities/componentes.entity';
import { CreateComponentesDto } from './dto/create-componentes.dto';
import { UpdateComponentesDto } from './dto/update-componentes.dto';

@Injectable()
export class ComponentesService {
  constructor(
    @Inject('COMPONENTES_REPOSITORY')
    private componentesRepository: Repository<Componentes>,
  ) {}

  async create(createComponentesDto: CreateComponentesDto) {
    const componentes = this.componentesRepository.create(createComponentesDto);
    return this.componentesRepository.save(componentes);
  }

  async findAll() {
    return this.componentesRepository.find();
  }

  async findOne(id_componente: any) {
    const componentes = this.componentesRepository.findOne(id_componente);
    if (!componentes) {
      throw new Error('Componente não encontrado!');
    }
    return componentes;
  }

  async update(id_componente: any, updateComponentesDto: UpdateComponentesDto) {
    return this.componentesRepository.update(
      id_componente,
      updateComponentesDto,
    );
  }

  async delete(id_componente: any) {
    const componentes = this.componentesRepository.find(id_componente);
    if (!componentes) {
      throw new Error('Componente não encontrado!');
    }
    return this.componentesRepository.delete(id_componente);
  }
}
