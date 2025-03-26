import { Module } from '@nestjs/common';
import { LoggerService } from './LoggerService';
import { InjectionToken } from '@infra/config/injectionToken.config';

@Module({
  providers: [
    {
      provide: InjectionToken.LOGGER,
      useValue: LoggerService,
    },
  ],
  exports: [LoggerService],
})
export class LoggerModule {}
