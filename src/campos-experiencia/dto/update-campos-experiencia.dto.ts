import { PartialType } from '@nestjs/mapped-types';
import { CreateCamposExperienciaDto } from './create-campos-experiencia.dto';

export class UpdateCamposExperienciaDto extends PartialType(
  CreateCamposExperienciaDto,
) {}
