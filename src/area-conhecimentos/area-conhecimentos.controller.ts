import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AreaConhecimentosService } from './area-conhecimentos.service';
import { CreateAreaConhecimentosDto } from './dto/create-area-conhecimentos.dto';
import { UpdateAreaConhecimentosDto } from './dto/update-area-conhecimentos.dto';

@Controller('area-conhecimentos')
export class AreaConhecimentosController {
  constructor(
    private readonly areaConhecimentosService: AreaConhecimentosService,
  ) {}

  @Post()
  async create(@Body() createAreaConhecimentosDto: CreateAreaConhecimentosDto) {
    return this.areaConhecimentosService.create(createAreaConhecimentosDto);
  }

  @Get()
  async findAll() {
    return this.areaConhecimentosService.findAll();
  }

  @Get(':id_areaconhecimento')
  async findOne(@Param('id_areaconhecimento') id_areaconhecimento: number) {
    return this.areaConhecimentosService.findOne(id_areaconhecimento);
  }

  @Patch(':id_areaconhecimento')
  async update(
    @Param('id_areaconhecimento') id_areaconhecimento: number,
    @Body() updateAreaConhecimentosDto: UpdateAreaConhecimentosDto,
  ) {
    return this.areaConhecimentosService.update(
      id_areaconhecimento,
      updateAreaConhecimentosDto,
    );
  }

  @Delete(':id_areaconhecimento')
  async delete(@Param('id_areaconhecimento') id_areaconhecimento: number) {
    return this.areaConhecimentosService.delete(id_areaconhecimento);
  }
}
