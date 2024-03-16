import { IsNumber, IsString } from 'class-validator';

export class CreateUsuariosDto {
  @IsNumber()
  id_usuario;

  @IsString()
  usuario;

  @IsString()
  email;

  @IsString()
  senha;

  @IsString()
  token;
}
