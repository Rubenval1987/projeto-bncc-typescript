import { IsNumber, IsString } from 'class-validator';

export class CreateCompetenciaComponenteDto {
  @IsNumber()
  id_competencia;

  @IsString()
  descricao;

  @IsNumber()
  id_curso;

  @IsNumber()
  id_componente;

  @IsNumber()
  id_areaconhecimento;

  @IsNumber()
  id_etapa;
}
