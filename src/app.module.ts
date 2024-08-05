import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [ProductsModule, LoginModule],
})
export class AppModule {}
