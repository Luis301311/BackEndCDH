import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduct } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Product) private productRepository : Repository<Product>){}



    getAllProducts(){
        return this.productRepository.find()
    }

    getProduct(id: string ){
        return this.productRepository.findOne({
            where : {
                id
            }
        })
    }

    createProducts(product : CreateProduct){
        const newProduct = this.productRepository.create(product)
        return this.productRepository.save(newProduct)
    }

    updateProducts(id : string, product: updateProduct){
         return this.productRepository.update({id},product)
    }

    deleteProdcuct(id : string){
        return this.productRepository.delete({id})
    }
}
