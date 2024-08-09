import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository, ReturnDocument } from 'typeorm';
import { Group } from 'src/group/entities/group.entity';
import { Unit } from 'src/unit/entities/unit.entity';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product) private productRepository : Repository<Product>,
        @InjectRepository(Group) private gruopRepository : Repository<Group>,
        @InjectRepository(Unit) private unitRepository : Repository<Unit>
    ){}


    getAllProducts(){
        return this.productRepository.find({
            relations: ['group', 'unit'],
        })
    }

    getProduct(id: string ){
        return this.productRepository.findOne({
            where : {
                id
            },
            relations: ['group', 'unit']
        })
    }

    async createProduct(createProductDto: CreateProductDTO) {
        const { groupId, unitCode,  ...productData } = createProductDto;
        const productFound = await this.productRepository.findOne({
          where: { id: createProductDto.id },
        });
    
        if (productFound) {
          throw new HttpException('Product already exists', HttpStatus.CONFLICT);
        }
    
        
        const group = await this.gruopRepository.findOne({
          where: { id: groupId },
        });
    
        if (!group) {
          throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
  
        const unit = await this.unitRepository.findOne({
          where: { id: unitCode },
        });
    
        if (!unit) {
          throw new HttpException('Unit not found', HttpStatus.NOT_FOUND);
        }
    
        // Create the new product
        const newProduct = this.productRepository.create({
          ...productData,
          group,
          unit,
        });
        return await this.productRepository.save(newProduct);
    }

    updateProducts(id : string, product: updateProduct){
         return this.productRepository.update({id},product)
    }

    deleteProdcuct(id : string){
        return this.productRepository.delete({id})
    }
}
