import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Group } from 'src/group/entities/group.entity';
import { Unit } from 'src/unit/entities/unit.entity';
import { RolesGuard } from 'src/roles.guard';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports : [TypeOrmModule.forFeature([Product,Group,Unit]), UsersModule],
  controllers: [ProductsController],
  providers: [ProductsService, RolesGuard]
})
export class ProductsModule {}
