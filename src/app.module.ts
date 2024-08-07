import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import {ConfigModuleSetup} from './config'
import { GroupModule } from './group/group.module';
import { UnitModule } from './unit/unit.module';
import { TasxModule } from './tasx/tasx.module';


@Module({
  imports: [
    ConfigModuleSetup,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    ProductsModule, 
    UsersModule, GroupModule, UnitModule, TasxModule],
})
export class AppModule {}
