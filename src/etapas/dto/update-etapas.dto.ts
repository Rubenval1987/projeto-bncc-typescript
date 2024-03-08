import { PartialType } from '@nestjs/mapped-types';
import { CreateEtapasDto } from './create-etapas.dto';

export class UpdateEtapasDto extends PartialType(CreateEtapasDto) {}
