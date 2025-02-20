import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { DireitosAprendizagem } from './../database/entities/direitos-aprendizagem.entity';
import { CreateDireitosAprendizagemDto } from './dto/create-direitos-aprendizagem.dto';
import { UpdateDireitosAprendizagemDto } from './dto/update-direitos-aprendizagem.dto';

@Injectable()
export class DireitosAprendizagemService {
  constructor(
    @Inject('DIREITOS_APRENDIZAGEM_REPOSITORY')
    private direitosAprendizagemRepository: Repository<DireitosAprendizagem>,
  ) {}

  async create(createDireitosAprendizagemDto: CreateDireitosAprendizagemDto) {
    const direitosAprendizagem = await this.direitosAprendizagemRepository.create(
      createDireitosAprendizagemDto,
    );
    return this.direitosAprendizagemRepository.create(direitosAprendizagem);
  }

  async findAll() {
    return this.direitosAprendizagemRepository.find();
  }

  async findOne(id_direitoaprendizagem: number) {
    const direitosAprendizagem = await this.direitosAprendizagemRepository.findOne({
      where: {
        id_direitoaprendizagem,
      },
    });
    if (!direitosAprendizagem) {
      throw new Error('Direitos aprendizagem não encontrado!');
    }
    return direitosAprendizagem;
  }

  async update(
    id_direitoaprendizagem: number,
    updateDireitosAprendizagemDto: UpdateDireitosAprendizagemDto,
  ) {
    return this.direitosAprendizagemRepository.update(
      id_direitoaprendizagem,
      updateDireitosAprendizagemDto,
    );
  }

  async delete(id_direitoaprendizagem: number) {
    const direitosAprendizagem = await this.direitosAprendizagemRepository.findOne({
      where: {
        id_direitoaprendizagem,
      },
    });
    if (!direitosAprendizagem) {
      throw new Error('Direitos aprendizagem não encontrado!');
    }
    return this.direitosAprendizagemRepository.delete(id_direitoaprendizagem);
  }
}
