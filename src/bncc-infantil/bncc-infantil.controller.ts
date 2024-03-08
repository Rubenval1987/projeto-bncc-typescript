import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BnccInfantilService } from './bncc-infantil.service';
import { CreateBnccInfantilDto } from './dto/create-bncc-infantil.dto';
import { UpdateBnccInfantilDto } from './dto/update-bncc-infantil.dto';

@Controller('bncc-infantil')
export class BnccInfantilController {
  constructor(private readonly bnccInfantilService: BnccInfantilService) {}

  @Post()
  async create(@Body() createBnccInfantilDto: CreateBnccInfantilDto) {
    return this.bnccInfantilService.create(createBnccInfantilDto);
  }

  @Get()
  async findAll() {
    return this.bnccInfantilService.findAll();
  }

  @Get(':id_bncc')
  async findOne(@Param('id_bncc') id_bncc: number) {
    return this.bnccInfantilService.findOne(id_bncc);
  }

  @Patch(':id_bncc')
  async update(
    @Param('id_bncc') id_bncc: number,
    @Body() updateBnccInfantilDto: UpdateBnccInfantilDto,
  ) {
    return this.bnccInfantilService.update(id_bncc, updateBnccInfantilDto);
  }

  @Delete(':id_bncc')
  async delete(@Param('id_bncc') id_bncc: number) {
    return this.bnccInfantilService.delete(id_bncc);
  }
}
