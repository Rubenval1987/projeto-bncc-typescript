import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { BnccInfantil } from './../database/entities/bncc-infantil.entity';
import { CreateBnccInfantilDto } from './dto/create-bncc-infantil.dto';
import { UpdateBnccInfantilDto } from './dto/update-bncc-infantil.dto';

@Injectable()
export class BnccInfantilService {
  constructor(
    @Inject('BNCC_INFANTIL_REPOSITORY')
    private bnccInfantilRepository: Repository<BnccInfantil>,
  ) {}

  async create(createBnccInfantilDto: CreateBnccInfantilDto) {
    const bnccInfantil = this.bnccInfantilRepository.create(
      createBnccInfantilDto,
    );
    return this.bnccInfantilRepository.save(bnccInfantil);
  }

  async findAll() {
    return this.bnccInfantilRepository.find();
  }

  async findOne(id_bncc: any) {
    const bnccInfantil = this.bnccInfantilRepository.findOne(id_bncc);
    if (!bnccInfantil) {
      throw new Error('BNCC Infantil não encontrada!');
    }
    return bnccInfantil;
  }

  async update(id_bncc: any, updateBnccInfantilDto: UpdateBnccInfantilDto) {
    return this.bnccInfantilRepository.update(id_bncc, updateBnccInfantilDto);
  }

  async delete(id_bncc: any) {
    const bnccInfantil = this.bnccInfantilRepository.find(id_bncc);
    if (!bnccInfantil) {
      throw new Error('BNCC Infantil não encontrada!');
    }
    return this.bnccInfantilRepository.delete(id_bncc);
  }
}
