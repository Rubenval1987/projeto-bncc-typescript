import { PartialType } from '@nestjs/mapped-types';
import { CreateBnccFundamentalDto } from './create-bncc-fundamental.dto';

export class UpdateBnccFundamentalDto extends PartialType(
  CreateBnccFundamentalDto,
) {}
