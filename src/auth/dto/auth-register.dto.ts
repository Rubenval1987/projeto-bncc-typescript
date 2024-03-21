import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class AuthRegisterDto {
  @IsNumber()
  id_usuario: number;

  @IsString()
  usuario: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  senha: string;

  @IsString()
  token: string;
}
