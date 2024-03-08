import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CompetenciaAreaController } from './competencia-area.controller';
import { CompetenciaAreaService } from './competencia-area.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CompetenciaAreaController],
  providers: [...Providers, CompetenciaAreaService],
})
export class CompetenciaAreaModule {}
