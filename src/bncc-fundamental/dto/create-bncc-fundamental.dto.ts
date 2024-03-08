import { IsNumber, IsString } from 'class-validator';

export class CreateBnccFundamentalDto {
  @IsNumber()
  id_bncc;

  @IsString()
  campo_atuacao;

  @IsString()
  pratica_linguagem;

  @IsString()
  unidade_tematica;

  @IsString()
  objeto_conhecimento;

  @IsString()
  habilidade;

  @IsNumber()
  id_curso;

  @IsNumber()
  id_componente;

  @IsNumber()
  id_areaconhecimento;

  @IsNumber()
  id_etapa;
}
