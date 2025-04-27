import { Module } from '@nestjs/common';
import BcryptService from './BcryptService';
import { InjectionToken } from '@infra/config/injectionToken.config';
import { EnvModule } from '@infra/env/env.module';

@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: InjectionToken.PASSWORD_SERVICE,
      useClass: BcryptService,
    },
  ],
  exports: [InjectionToken.PASSWORD_SERVICE],
})
export default class BcryptModule {}
