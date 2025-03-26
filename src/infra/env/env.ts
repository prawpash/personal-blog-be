import { z } from 'zod';

export const envSchema = z.object({
  APP_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_HOST: z.string().default('localhost'),
  DATABASE_PORT: z.coerce.number().default(3306),
  DATABASE_USER: z.string().default('root'),
  DATABASE_PASSWORD: z.string().default('root'),
  DATABASE_NAME: z.string().default('blog'),
  UPLOAD_MAX_FILE_SIZE: z.coerce.number().default(1024 * 1024 * 1),
  UPLOAD_FILE_TYPE: z.array(z.string()).default(['image/jpeg', 'image/png']),
});

export type Env = z.infer<typeof envSchema>;
