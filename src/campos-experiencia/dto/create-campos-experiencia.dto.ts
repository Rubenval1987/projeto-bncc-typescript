import { IsNumber, IsString } from 'class-validator';

export class CreateCamposExperienciaDto {
  @IsNumber()
  id_campoexperiencia;

  @IsString()
  nome;

  @IsNumber()
  id_etapa;
}
