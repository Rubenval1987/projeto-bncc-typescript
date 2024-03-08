import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AreaConhecimentosService } from './area-conhecimentos.service';
import { AreaConhecimentosController } from './area-conhecimentos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AreaConhecimentosController],
  providers: [...Providers, AreaConhecimentosService],
})
export class AreaConhecimentosModule {}
