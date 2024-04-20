import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { BnccMedio } from './../database/entities/bncc-medio.entity';
import { CreateBnccMedioDto } from './dto/create-bncc-medio.dto';
import { UpdateBnccMedioDto } from './dto/update-bncc-medio.dto';

@Injectable()
export class BnccMedioService {
  constructor(
    @Inject('BNCC_INFANTIL_REPOSITORY')
    private bnccMedioRepository: Repository<BnccMedio>,
  ) {}

  async create(createBnccMedioDto: CreateBnccMedioDto) {
    const bnccMedio = await this.bnccMedioRepository.create(createBnccMedioDto);
    return this.bnccMedioRepository.save(bnccMedio);
  }

  async findAll() {
    return this.bnccMedioRepository.find();
  }

  async findOne(id_bncc: number) {
    const bnccMedio = await this.bnccMedioRepository.findOne({
      where: { id_bncc },
    });
    if (!bnccMedio) {
      throw new Error('BNCC médio não encontrada!');
    }
    return bnccMedio;
  }

  async update(id_bncc: number, updateBnccMedioDto: UpdateBnccMedioDto) {
    return this.bnccMedioRepository.update(id_bncc, updateBnccMedioDto);
  }

  async delete(id_bncc: number) {
    const bnccMedio = await this.bnccMedioRepository.findOne({
      where: { id_bncc },
    });
    if (!bnccMedio) {
      throw new Error('BNCC médio não encontrada!');
    }
    return this.bnccMedioRepository.delete(id_bncc);
  }
}
