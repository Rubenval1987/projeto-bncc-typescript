import { IsNumber, IsString } from 'class-validator';

export class CreateCompetenciaGeralDto {
  @IsNumber()
  id_competencia;

  @IsString()
  descricao;

  @IsNumber()
  id_etapa;
}
