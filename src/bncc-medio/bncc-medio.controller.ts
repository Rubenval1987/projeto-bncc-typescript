import {
  Controller,
  Body,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { BnccMedioService } from './bncc-medio.service';
import { CreateBnccMedioDto } from './dto/create-bncc-medio.dto';
import { UpdateBnccMedioDto } from './dto/update-bncc-medio.dto';

@Controller('bncc-medio')
export class BnccMedioController {
  constructor(private readonly bnccMedioService: BnccMedioService) {}

  @Post()
  async create(@Body() createBnccMedioDto: CreateBnccMedioDto) {
    return this.bnccMedioService.create(createBnccMedioDto);
  }

  @Get()
  async findAll() {
    return this.bnccMedioService.findAll();
  }

  @Get(':id_bncc')
  async findOne(@Param('id_bncc') id_bncc: number) {
    return this.bnccMedioService.findOne(id_bncc);
  }

  @Patch(':id_bncc')
  async update(
    @Param('id_bncc') id_bncc: number,
    @Body() updateBnccMedioDto: UpdateBnccMedioDto,
  ) {
    return this.bnccMedioService.update(id_bncc, updateBnccMedioDto);
  }

  @Delete(':id_bncc')
  async delete(@Param('id_bncc') id_bncc: number) {
    return this.bnccMedioService.delete(id_bncc);
  }
}
