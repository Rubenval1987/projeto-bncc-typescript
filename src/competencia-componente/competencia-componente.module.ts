import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CompetenciaComponenteController } from './competencia-componente.controller';
import { CompetenciaComponenteService } from './competencia-componente.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CompetenciaComponenteController],
  providers: [...Providers, CompetenciaComponenteService],
  exports: [CompetenciaComponenteService],
})
export class CompetenciaComponenteModule {}
