import { IsNumber, IsString } from 'class-validator';

export class CreateComponentesDto {
  @IsNumber()
  id_componente;

  @IsString()
  nome;

  @IsNumber()
  id_curso;

  @IsNumber()
  id_areaconhecimento;

  @IsNumber()
  id_etapa;
}
