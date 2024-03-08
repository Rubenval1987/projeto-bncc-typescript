import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetenciaAreaDto } from './create-competencia-area.dto';

export class UpdateCompetenciaAreaDto extends PartialType(
  CreateCompetenciaAreaDto,
) {}
