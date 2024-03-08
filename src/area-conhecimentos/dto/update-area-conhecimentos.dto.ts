import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaConhecimentosDto } from './create-area-conhecimentos.dto';

export class UpdateAreaConhecimentosDto extends PartialType(
  CreateAreaConhecimentosDto,
) {}
