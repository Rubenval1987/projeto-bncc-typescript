import { IsNumber, IsString } from 'class-validator';

export class CreateDireitosAprendizagemDto {
  @IsNumber()
  id_direitoaprendizagem;

  @IsString()
  nome;

  @IsNumber()
  id_etapa;
}
