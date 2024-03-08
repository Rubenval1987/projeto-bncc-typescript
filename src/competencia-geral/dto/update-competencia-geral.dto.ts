import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetenciaGeralDto } from './create-competencia-geral.dto';

export class UpdateCompetenciaGeralDto extends PartialType(
  CreateCompetenciaGeralDto,
) {}
