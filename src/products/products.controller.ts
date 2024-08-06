import { Body, Controller,Delete,Get, Param, Patch, Post} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProduct } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/products')
@ApiTags("Products")
export class ProductsController {
    constructor (private productsServices : ProductsService){}
    @Get()
    getAllProducts(){
        return this.productsServices.getAllProducts()
    }

    @Get(':id')
    getProduct(@Param('id') id: string){
        return this.productsServices.getProduct(id)
    }

    @Post()
    createProducts(@Body() task : CreateProduct){
        return this.productsServices.createProducts(task)
    }

    @Patch(':id')
    updateProducts(@Param('id') id: string, @Body() task : updateProduct){
        return this.productsServices.updateProducts(id, task)
    }

    @Delete(':id')
    deleteProducts(@Param('id') id : string){
        return this.productsServices.deleteProdcuct(id)
    }

}
