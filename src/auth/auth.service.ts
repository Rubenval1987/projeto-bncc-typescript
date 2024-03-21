import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken() {
    // return this.jwtService.sign()
  }

  async checkToken(token: string) {
    // return this.jwtService.verify()
  }

  async login(email, senha) {}

  async register(body) {}

  async forget(email) {}

  async reset(senha, token) {}
}
