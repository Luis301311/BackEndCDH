import { Injectable, NotFoundException } from '@nestjs/common';
import { createProduct } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    private products :  createProduct []

    getAllProducts(){
        return this.products
    }

    getProduct(id:string ){
        const product=  this.products.find(product => product.id ===id)
        
        if(!product){
            return new NotFoundException(`Product with id ${id} "not found` )
        }

        return product
    }

    createProducts(task : createProduct){
        return this.products.push(task)
    }

    updateProducts(id : number, task: updateProduct){
        console.log(task)
        return "producto actualizado"
    }
}
