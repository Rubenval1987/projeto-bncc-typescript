import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CamposExperienciaService } from './campos-experiencia.service';
import { CreateCamposExperienciaDto } from './dto/create-campos-experiencia.dto';
import { UpdateCamposExperienciaDto } from './dto/update-campos-experiencia.dto';

@Controller('campos-experiencia')
export class CamposExperienciaController {
  constructor(
    private readonly camposExperienciaService: CamposExperienciaService,
  ) {}

  @Post()
  async create(@Body() createCamposExperienciaDto: CreateCamposExperienciaDto) {
    return this.camposExperienciaService.create(createCamposExperienciaDto);
  }

  @Get()
  async findAll() {
    return this.camposExperienciaService.findAll();
  }

  @Get(':id_campoexperiencia')
  async findOne(@Param('id_campoexperiencia') id_campoexperiencia: number) {
    return this.camposExperienciaService.findOne(id_campoexperiencia);
  }

  @Patch(':id_campoexperiencia')
  async update(
    @Param('id_campoexperiencia') id_campoexperiencia: number,
    @Body() updateCamposExperienciaDto: UpdateCamposExperienciaDto,
  ) {
    return this.camposExperienciaService.update(
      id_campoexperiencia,
      updateCamposExperienciaDto,
    );
  }

  @Delete(':id_campoexperiencia')
  async delete(@Param('id_campoexperiencia') id_campoexperiencia: number) {
    return this.camposExperienciaService.delete(id_campoexperiencia);
  }
}
