import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BnccMedioController } from './bncc-medio.controller';
import { BnccMedioService } from './bncc-medio.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BnccMedioController],
  providers: [...Providers, BnccMedioService],
})
export class BnccMedioModule {}
