import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BnccInfantilController } from './bncc-infantil.controller';
import { BnccInfantilService } from './bncc-infantil.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BnccInfantilController],
  providers: [...Providers, BnccInfantilService],
})
export class BnccInfantilModule {}
