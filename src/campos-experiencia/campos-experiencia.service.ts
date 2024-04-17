import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CamposExperiencia } from './../database/entities/campos-experiencia.entity';
import { CreateCamposExperienciaDto } from './dto/create-campos-experiencia.dto';
import { UpdateCamposExperienciaDto } from './dto/update-campos-experiencia.dto';

@Injectable()
export class CamposExperienciaService {
  constructor(
    @Inject('CAMPOS_EXPERIENCIA_REPOSITORY')
    private camposExperienciaRepository: Repository<CamposExperiencia>,
  ) {}

  async create(createCamposExperienciaDto: CreateCamposExperienciaDto) {
    const camposExperiencia = this.camposExperienciaRepository.create(
      createCamposExperienciaDto,
    );
    return this.camposExperienciaRepository.save(camposExperiencia);
  }

  async findAll() {
    return this.camposExperienciaRepository.find();
  }

  async findOne(id_campoexperiencia: any) {
    const camposExperiencia = this.camposExperienciaRepository.findOneBy({
      id_campoexperiencia,
    });
    if (!camposExperiencia) {
      throw new Error('Campo de experiência não encontrado!');
    }
    return camposExperiencia;
  }

  async update(
    id_campoexperiencia: any,
    updateCamposExperienciaDto: UpdateCamposExperienciaDto,
  ) {
    return this.camposExperienciaRepository.update(
      id_campoexperiencia,
      updateCamposExperienciaDto,
    );
  }

  async delete(id_campoexperiencia: any) {
    const camposExperiencia =
      this.camposExperienciaRepository.find(id_campoexperiencia);
    if (!camposExperiencia) {
      throw new Error('Campo de experiência não encontrado!');
    }
    return this.camposExperienciaRepository.delete(id_campoexperiencia);
  }
}
