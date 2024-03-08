import { PartialType } from '@nestjs/mapped-types';
import { CreateBnccMedioDto } from './create-bncc-medio.dto';

export class UpdateBnccMedioDto extends PartialType(CreateBnccMedioDto) {}
