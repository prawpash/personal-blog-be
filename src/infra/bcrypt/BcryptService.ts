import { PasswordService } from '@core/application/services/PasswordService';
import { EnvService } from '@infra/env/env.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class BcryptService implements PasswordService {
  constructor(private readonly envService: EnvService) {}

  async hash(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(
      password,
      this.envService.get('PASSWORD_SALT_ROUNDS'),
    );

    return hashedPassword;
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(plain, hashed);
    return isMatch;
  }
}
