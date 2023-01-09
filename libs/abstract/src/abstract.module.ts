import { Module } from '@nestjs/common';
import { AbstractService } from './abstract.service';

@Module({
  providers: [AbstractService],
  exports: [AbstractService],
})
export class AbstractModule {}
