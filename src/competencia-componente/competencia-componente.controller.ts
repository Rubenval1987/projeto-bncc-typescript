import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompetenciaComponenteService } from './competencia-componente.service';
import { CreateCompetenciaComponenteDto } from './dto/create-competencia-componente.dto';
import { UpdateCompetenciaComponenteDto } from './dto/update-competencia-componente.dto';

@Controller('competencia-componente')
export class CompetenciaComponenteController {
  constructor(
    private readonly competenciaComponenteService: CompetenciaComponenteService,
  ) {}

  @Post()
  async create(
    @Body() createCompetenciaComponenteDto: CreateCompetenciaComponenteDto,
  ) {
    return this.competenciaComponenteService.create(
      createCompetenciaComponenteDto,
    );
  }

  @Get()
  async findAll() {
    return this.competenciaComponenteService.findAll();
  }

  @Get(':id_competencia')
  async findOne(@Param('id_competencia') id_competencia: number) {
    return this.competenciaComponenteService.findOne(id_competencia);
  }

  @Patch(':id_competencia')
  async update(
    @Param('id_competencia') id_competencia: number,
    @Body() updateCompetenciaComponenteDto: UpdateCompetenciaComponenteDto,
  ) {
    return this.competenciaComponenteService.update(
      id_competencia,
      updateCompetenciaComponenteDto,
    );
  }

  @Delete(':id_competencia')
  async delete(@Param('id_competencia') id_competencia: number) {
    return this.competenciaComponenteService.delete(id_competencia);
  }
}
