import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CompetenciaGeralController } from './competencia-geral.controller';
import { CompetenciaGeralService } from './competencia-geral.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CompetenciaGeralController],
  providers: [...Providers, CompetenciaGeralService],
  exports: [CompetenciaGeralService],
})
export class CompetenciaGeralModule {}
