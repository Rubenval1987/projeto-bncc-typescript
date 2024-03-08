import { PartialType } from '@nestjs/mapped-types';
import { CreateDireitosAprendizagemDto } from './create-direitos-aprendizagem.dto';
export class UpdateDireitosAprendizagemDto extends PartialType(
  CreateDireitosAprendizagemDto,
) {}
