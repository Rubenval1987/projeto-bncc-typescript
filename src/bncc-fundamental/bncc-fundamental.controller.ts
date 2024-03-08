import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BnccFundamentalService } from './bncc-fundamental.service';
import { CreateBnccFundamentalDto } from './dto/create-bncc-fundamental.dto';
import { UpdateBnccFundamentalDto } from './dto/update-bncc-fundamental.dto';

@Controller('bncc-fundamental')
export class BnccFundamentalController {
  constructor(
    private readonly bnccFundamentalService: BnccFundamentalService,
  ) {}

  @Post()
  async create(@Body() createBnccFundamentalDto: CreateBnccFundamentalDto) {
    return this.bnccFundamentalService.create(createBnccFundamentalDto);
  }

  @Get()
  async findAll() {
    return this.bnccFundamentalService.findAll();
  }

  @Get(':id_bncc')
  async findOne(@Param('id_bncc') id_bncc: number) {
    return this.bnccFundamentalService.findOne(id_bncc);
  }

  @Patch(':id_bncc')
  async update(
    @Param('id_bncc') id_bncc: number,
    @Body() updateBnccFundamentalDto: UpdateBnccFundamentalDto,
  ) {
    return this.bnccFundamentalService.update(
      id_bncc,
      updateBnccFundamentalDto,
    );
  }

  @Delete(':id_bncc')
  async delete(@Param('id_bncc') id_bncc: number) {
    return this.bnccFundamentalService.delete(id_bncc);
  }
}
