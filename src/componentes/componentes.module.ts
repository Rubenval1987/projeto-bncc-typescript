import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ComponentesController } from './componentes.controller';
import { ComponentesService } from './componentes.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ComponentesController],
  providers: [...Providers, ComponentesService],
  exports: [ComponentesService],
})
export class ComponentesModule {}
