import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Group } from 'src/group/entities/group.entity';
import { Unit } from 'src/unit/entities/unit.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Product,Group,Unit])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
