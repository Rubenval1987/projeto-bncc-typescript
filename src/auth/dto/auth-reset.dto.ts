import { IsJWT, IsString, MinLength } from 'class-validator';

export class AuthResetDto {
  @IsString()
  @MinLength(6)
  senha: string;

  @IsJWT()
  token: string;
}
