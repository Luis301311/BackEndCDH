import { Body, Controller,Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProduct } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';

@Controller('/products')
export class ProductsController {
    constructor (private productsServices : ProductsService){}
    @Get()
    getAllProducts(){
        return this.productsServices.getAllProducts()
    }

    @Get('/:id')
    getProduct(@Param('id') id: string){
        return this.productsServices.getProduct(id)
    }

    @Post()
    createProducts(@Body() task : createProduct){
        return this.productsServices.createProducts(task)
    }

    @Put('/:id')
    updateProducts(@Param('id') id: string, @Body() task : updateProduct){
        return this.productsServices.updateProducts(parseInt(id), task)
    }

}
