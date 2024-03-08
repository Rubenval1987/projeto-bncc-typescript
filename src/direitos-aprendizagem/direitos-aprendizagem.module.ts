import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DireitosAprendizagemController } from './direitos-aprendizagem.controller';
import { DireitosAprendizagemService } from './direitos-aprendizagem.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DireitosAprendizagemController],
  providers: [...Providers, DireitosAprendizagemService],
})
export class DireitosAprendizagemModule {}
