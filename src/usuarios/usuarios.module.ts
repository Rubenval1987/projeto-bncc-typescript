import { Providers } from 'src/database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuarios } from 'src/database/entities/usuarios.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Usuarios])],
  controllers: [UsuariosController],
  providers: [...Providers, UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
