import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EtapasService } from './etapas.service';
import { CreateEtapasDto } from './dto/create-etapas.dto';
import { UpdateEtapasDto } from './dto/update-etapas.dto';

@Controller('etapas')
export class EtapasController {
  constructor(private readonly etapasService: EtapasService) {}

  @Post()
  async create(@Body() createEtapasDto: CreateEtapasDto) {
    return this.etapasService.create(createEtapasDto);
  }

  @Get()
  async findAll() {
    return this.etapasService.findAll();
  }

  @Get(':id_etapa')
  async findOne(@Param('id_etapa') id_etapa: number) {
    return this.etapasService.findOne(id_etapa);
  }

  @Patch(':id_etapa')
  async update(
    @Param('id_etapa') id_etapa: number,
    @Body() updateEtapasDto: UpdateEtapasDto,
  ) {
    return this.etapasService.update(id_etapa, updateEtapasDto);
  }

  @Delete(':id_etapa')
  async delete(@Param('id_etapa') id_etapa: number) {
    return this.etapasService.delete(id_etapa);
  }
}
