import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EtapasService } from './etapas.service';
import { EtapasController } from './etapas.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EtapasController],
  providers: [...Providers, EtapasService],
  exports: [EtapasService],
})
export class EtapasModule {}
