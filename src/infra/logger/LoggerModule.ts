import { Module } from '@nestjs/common';
import { LoggerService } from './LoggerService';
import { InjectionToken } from '@infra/config/injectionToken.config';

@Module({
  providers: [
    {
      provide: InjectionToken.LOGGER,
      useClass: LoggerService,
    },
  ],
  exports: [InjectionToken.LOGGER],
})
export class LoggerModule {}
