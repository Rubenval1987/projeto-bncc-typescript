import { IsNumber, IsString } from 'class-validator';

export class CreateCompetenciaAreaDto {
  @IsNumber()
  id_competencia;

  @IsString()
  descricao;

  @IsNumber()
  id_areaconhecimento;

  @IsNumber()
  id_etapa;
}
