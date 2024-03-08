import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CamposExperienciaController } from './campos-experiencia.controller';
import { CamposExperienciaService } from './campos-experiencia.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CamposExperienciaController],
  providers: [...Providers, CamposExperienciaService],
})
export class CamposExperienciaModule {}
