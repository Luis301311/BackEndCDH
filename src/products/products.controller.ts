import { Body, Controller,Delete,Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/roles.decorador';
import { RolesGuard } from 'src/roles.guard';


@Controller('/products')
@ApiTags("Products")
@UseGuards(RolesGuard)
export class ProductsController {
    constructor (private productsServices : ProductsService){}
    @Get()
    @Roles('admin')
    getAllProducts(){
        return this.productsServices.getAllProducts()
    }

    @Get(':id')
    getProduct(@Param('id') id: string){
        return this.productsServices.getProduct(id)
    }

    @Post()
    createProducts(@Body() product : CreateProductDTO){
        return this.productsServices.createProduct(product)
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
