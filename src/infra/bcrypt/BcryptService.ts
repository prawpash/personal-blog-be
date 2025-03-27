import { PasswordService } from '@core/application/services/PasswordService';
import { EnvService } from '@infra/env/env.service';
import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

@Injectable()
export default class BcryptService implements PasswordService {
  constructor(private readonly envService: EnvService) {}

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(
      password,
      this.envService.get('PASSWORD_SALT_ROUNDS'),
    );
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(plain, hashed);
  }
}
