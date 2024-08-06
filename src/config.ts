// src/config.ts
import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';

dotenv.config();

export const databaseConfig = {
  rootPassword: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};

export const ConfigModuleSetup = ConfigModule.forRoot({
  isGlobal: true, 
  load: [() => ({ database: databaseConfig })],
});

export type DatabaseConfig = typeof databaseConfig;
