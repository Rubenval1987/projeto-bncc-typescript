import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { CreateUsuariosDto } from 'src/usuarios/dto/create.usuarios.dto';
import { Usuarios } from 'src/database/entities/usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  private issuer = 'login';
  private audience = 'usuarios';

  constructor(
    private readonly jwtService: JwtService,
    private readonly usuariosService: UsuariosService,
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
  ) {}

  createToken(usuario: Usuarios) {
    return {
      accessToken: this.jwtService.sign(
        {
          id_usuario: usuario.id_usuario,
          usuario: usuario.usuario,
          email: usuario.email,
        },
        {
          expiresIn: '7 days',
          subject: String(usuario.id_usuario),
          issuer: this.issuer,
          audience: this.audience,
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: this.issuer,
        audience: this.audience,
      });

      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  isValidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  async login(email: string, senha: string) {
    const usuario = await this.usuariosRepository.findOne({
      where: {
        email,
        senha,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException('Email/senha incorretos!');
    }

    return this.createToken(usuario);
  }

  async forget(email: string) {
    const usuario = await this.usuariosRepository.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException('Email incorreto!');
    }

    const token = this.jwtService.sign(
      {
        id_usuario: usuario.id_usuario,
      },
      {
        expiresIn: '30 minutes',
        subject: String(usuario.id_usuario),
        issuer: 'forget',
        audience: 'usuarios',
      },
    );

    return true;
  }

  async reset(senha: string, token: string) {
    try {
      const data: any = this.jwtService.verify(token, {
        issuer: 'forget',
        audience: 'students',
      });

      if (isNaN(Number(data.id_usuario))) {
        throw new BadRequestException('Token está inválido.');
      }

      const usuario = await this.usuariosRepository.findOne(data.id_usuario);
      if (!usuario) {
        throw new UnauthorizedException('Token inválido!');
      }

      usuario.senha = senha;
      await this.usuariosRepository.save(usuario);

      return this.createToken(usuario);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async register(data: AuthRegisterDto) {
    const createUsuariosData: CreateUsuariosDto = {
      id_usuario: data.id_usuario,
      usuario: data.usuario,
      email: data.email,
      senha: data.senha,
      token: data.token,
    };

    const usuario = await this.usuariosService.create(createUsuariosData);

    return this.createToken(usuario);
  }
}
