import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentesDto } from './create-componentes.dto';

export class UpdateComponentesDto extends PartialType(CreateComponentesDto) {}
