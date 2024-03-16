import { Providers } from 'src/database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [...Providers, UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
