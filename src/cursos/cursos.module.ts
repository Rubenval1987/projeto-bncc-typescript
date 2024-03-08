import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CursosController],
  providers: [...Providers, CursosService],
})
export class CursosModule {}
