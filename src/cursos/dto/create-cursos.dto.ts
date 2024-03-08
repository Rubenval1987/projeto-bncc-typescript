import { IsNumber, IsString } from 'class-validator';

export class CreateCursosDto {
  @IsNumber()
  id_curso;

  @IsString()
  nome;

  @IsString()
  codigo_censo;

  @IsString()
  idade_regular;

  @IsString()
  acronimo;

  @IsNumber()
  tem_retencao;
}
