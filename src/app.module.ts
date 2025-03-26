import { Module } from '@nestjs/common';
import { EnvModule } from '@infra/env/env.module';
import { ControllerModule } from '@presentation/controllers/ControllerModule';

@Module({
  imports: [EnvModule, ControllerModule],
})
export class AppModule {}
