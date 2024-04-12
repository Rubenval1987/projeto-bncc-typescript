import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Usuarios } from 'src/database/entities/usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    JwtModule.register({
      secret: String(process.env.JWT_SECRET),
    }),
    TypeOrmModule.forFeature([Usuarios]),
    UsuariosModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
