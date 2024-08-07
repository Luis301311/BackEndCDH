import { Module } from '@nestjs/common';
import { TasxService } from './tasx.service';
import { TasxController } from './tasx.controller';

@Module({
  controllers: [TasxController],
  providers: [TasxService],
})
export class TasxModule {}
