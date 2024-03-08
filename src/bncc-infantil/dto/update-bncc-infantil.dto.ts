import { PartialType } from '@nestjs/mapped-types';
import { CreateBnccInfantilDto } from './create-bncc-infantil.dto';

export class UpdateBnccInfantilDto extends PartialType(CreateBnccInfantilDto) {}
