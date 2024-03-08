import { IsNumber, IsString } from 'class-validator';

export class CreateEtapasDto {
  @IsNumber()
  id_etapa: number;

  @IsString()
  nome: string;
}
