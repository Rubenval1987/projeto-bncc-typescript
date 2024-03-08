import { IsNumber, IsString } from 'class-validator';

export class CreateBnccMedioDto {
  @IsNumber()
  id_bncc;

  @IsString()
  codigo_habilidade;

  @IsString()
  habilidade;

  @IsNumber()
  id_curso;

  @IsNumber()
  id_areaconhecimento;

  @IsNumber()
  id_etapa;
}
