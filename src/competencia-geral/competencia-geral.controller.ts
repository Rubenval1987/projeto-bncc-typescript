import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompetenciaGeralService } from './competencia-geral.service';
import { CreateCompetenciaGeralDto } from './dto/create-competencia-geral.dto';
import { UpdateCompetenciaGeralDto } from './dto/update-competencia-geral.dto';

@Controller('competencia-geral')
export class CompetenciaGeralController {
  constructor(
    private readonly competenciaGeralService: CompetenciaGeralService,
  ) {}

  @Post()
  async create(@Body() createCompetenciaGeralDto: CreateCompetenciaGeralDto) {
    return this.competenciaGeralService.create(createCompetenciaGeralDto);
  }

  @Get()
  async findAll() {
    return this.competenciaGeralService.findAll();
  }

  @Get(':id_competencia')
  async findOne(@Param('id_competencia') id_competencia: number) {
    return this.competenciaGeralService.findOne(id_competencia);
  }

  @Patch(':id_competencia')
  async update(
    @Param('id_competencia') id_competencia: number,
    @Body() updateCompetenciaGeralDto: UpdateCompetenciaGeralDto,
  ) {
    return this.competenciaGeralService.update(
      id_competencia,
      updateCompetenciaGeralDto,
    );
  }

  @Delete(':id_competencia')
  async delete(@Param('id_competencia') id_competencia: number) {
    return this.competenciaGeralService.delete(id_competencia);
  }
}
