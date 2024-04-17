import { Providers } from './../database/providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BnccFundamentalService } from './bncc-fundamental.service';
import { BnccFundamentalController } from './bncc-fundamental.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BnccFundamentalController],
  providers: [...Providers, BnccFundamentalService],
  exports: [BnccFundamentalService],
})
export class BnccFundamentalModule {}
