import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { BnccFundamental } from './../database/entities/bncc-fundamental.entity';
import { CreateBnccFundamentalDto } from './dto/create-bncc-fundamental.dto';
import { UpdateBnccFundamentalDto } from './dto/update-bncc-fundamental.dto';

@Injectable()
export class BnccFundamentalService {
  constructor(
    @Inject('BNCC_FUNDAMENTAL_REPOSITORY')
    private bnccFundamentalRepository: Repository<BnccFundamental>,
  ) {}

  async create(createBnccFundamentalDto: CreateBnccFundamentalDto) {
    const bnccFundamental = this.bnccFundamentalRepository.create(
      createBnccFundamentalDto,
    );
    return this.bnccFundamentalRepository.save(bnccFundamental);
  }

  async findAll() {
    return this.bnccFundamentalRepository.find();
  }

  async findOne(id_bncc: any) {
    const bnccFundamental = this.bnccFundamentalRepository.findOneBy({
      id_bncc,
    });
    if (!bnccFundamental) {
      throw new Error('BNCC Fundamental não encontrada!');
    }
    return bnccFundamental;
  }

  async update(
    id_bncc: any,
    updateBnccFundamentalDto: UpdateBnccFundamentalDto,
  ) {
    return this.bnccFundamentalRepository.update(
      id_bncc,
      updateBnccFundamentalDto,
    );
  }

  async delete(id_bncc: any) {
    const bnccFundamental = this.bnccFundamentalRepository.find(id_bncc);
    if (!bnccFundamental) {
      throw new Error('BNCC Fundamental não encontrada!');
    }
    return this.bnccFundamentalRepository.delete(id_bncc);
  }
}
