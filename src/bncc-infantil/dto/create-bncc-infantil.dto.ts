import { IsNumber, IsString } from 'class-validator';

export class CreateBnccInfantilDto {
  @IsNumber()
  id_bncc;

  @IsString()
  faixa;

  @IsString()
  objetivo_aprendizagem;

  @IsNumber()
  id_campoexperiencia;

  @IsNumber()
  id_etapa;
}
