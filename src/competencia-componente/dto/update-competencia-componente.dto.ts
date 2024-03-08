import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetenciaComponenteDto } from './create-competencia-componente.dto';

export class UpdateCompetenciaComponenteDto extends PartialType(
  CreateCompetenciaComponenteDto,
) {}
