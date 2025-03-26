import { Logger } from '@core/application/services/Logger';
import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService extends ConsoleLogger implements Logger {}
