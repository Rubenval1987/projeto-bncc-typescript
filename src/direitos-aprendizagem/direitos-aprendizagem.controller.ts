import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { DireitosAprendizagemService } from './direitos-aprendizagem.service';
import { CreateDireitosAprendizagemDto } from './dto/create-direitos-aprendizagem.dto';
import { UpdateDireitosAprendizagemDto } from './dto/update-direitos-aprendizagem.dto';

@Controller('direitos-aprendizagem')
export class DireitosAprendizagemController {
  constructor(
    private readonly direitosAprendizagemService: DireitosAprendizagemService,
  ) {}

  @Post()
  async create(
    @Body() createDireitosAprendizagemDto: CreateDireitosAprendizagemDto,
  ) {
    return this.direitosAprendizagemService.create(
      createDireitosAprendizagemDto,
    );
  }

  @Get()
  async findAll() {
    return this.direitosAprendizagemService.findAll();
  }

  @Get(':id_direitoaprendizagem')
  async findOne(
    @Param('id_direitoaprendizagem') id_direitoaprendizagem: number,
  ) {
    return this.direitosAprendizagemService.findOne(id_direitoaprendizagem);
  }

  @Patch(':id_direitoaprendizagem')
  async update(
    @Param('id_direitoaprendizagem') id_direitoaprendizagem: number,
    @Body() updateDireitosAprendizagemDto: UpdateDireitosAprendizagemDto,
  ) {
    return this.direitosAprendizagemService.update(
      id_direitoaprendizagem,
      updateDireitosAprendizagemDto,
    );
  }

  @Delete(':id_direitoaprendizagem')
  async delete(
    @Param('id_direitoaprendizagem') id_direitoaprendizagem: number,
  ) {
    return this.direitosAprendizagemService.delete(id_direitoaprendizagem);
  }
}
