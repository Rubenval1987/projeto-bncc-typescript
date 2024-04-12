import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() { email, senha }: AuthLoginDto) {
    return await this.authService.login(email, senha);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDto) {
    return await this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDto) {
    return await this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() { senha, token }: AuthResetDto) {
    return await this.authService.reset(senha, token);
  }

  @Post('me')
  async me(@Body() body) {
    return await this.authService.checkToken(body.token);
  }
}

