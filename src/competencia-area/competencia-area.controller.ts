import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompetenciaAreaService } from './competencia-area.service';
import { CreateCompetenciaAreaDto } from './dto/create-competencia-area.dto';
import { UpdateCompetenciaAreaDto } from './dto/update-competencia-area.dto';

@Controller('competencia-area')
export class CompetenciaAreaController {
  constructor(
    private readonly competenciaAreaService: CompetenciaAreaService,
  ) {}

  @Post()
  async create(@Body() createCompetenciaAreaDto: CreateCompetenciaAreaDto) {
    return this.competenciaAreaService.create(createCompetenciaAreaDto);
  }

  @Get()
  async findAll() {
    return this.competenciaAreaService.findAll();
  }

  @Get(':id_competencia')
  async findOne(@Param('id_competencia') id_competencia: number) {
    return this.competenciaAreaService.findOne(id_competencia);
  }

  @Patch(':id_competencia')
  async update(
    @Param('id_competencia') id_competencia: number,
    @Body() updateCompetenciaAreaDto: UpdateCompetenciaAreaDto,
  ) {
    return this.competenciaAreaService.update(
      id_competencia,
      updateCompetenciaAreaDto,
    );
  }

  @Delete(':id_competencia')
  async delete(@Param('id_competencia') id_competencia: number) {
    return this.competenciaAreaService.delete(id_competencia);
  }
}
