import { IsNumber, IsString } from 'class-validator';

export class CreateAreaConhecimentosDto {
  @IsNumber()
  id_areaconhecimento;

  @IsString()
  nome;

  @IsNumber()
  id_etapa;
}
