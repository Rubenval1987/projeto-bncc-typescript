import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ComponentesService } from './componentes.service';
import { CreateComponentesDto } from './dto/create-componentes.dto';
import { UpdateComponentesDto } from './dto/update-componentes.dto';

@Controller('componentes')
export class ComponentesController {
  constructor(private readonly componentesService: ComponentesService) {}

  @Post()
  async create(
    @Body()
    createComponentesDto: CreateComponentesDto,
  ) {
    return this.componentesService.create(createComponentesDto);
  }

  @Get()
  async findAll() {
    return this.componentesService.findAll();
  }

  @Get(':id_componente')
  async findOne(
    @Param('id_componente')
    id_componente: number,
  ) {
    return this.componentesService.findOne(id_componente);
  }

  @Patch(':id_componente')
  async update(
    @Param('id_componente')
    id_componente: number,
    @Body()
    updateComponentesDto: UpdateComponentesDto,
  ) {
    return this.componentesService.update(id_componente, updateComponentesDto);
  }

  @Delete(':id_componente')
  async delete(
    @Param('id_componente')
    id_componente: number,
  ) {
    return this.componentesService.delete(id_componente);
  }
}
