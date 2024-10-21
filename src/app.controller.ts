import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { CreateProductDto } from './createProduct.dto';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  #products = [
    {
      name: 'Bucket',
      price: 3500,
    },
    {
      name: 'Rest api',
      price: 7000,
    },
    {
      name: 'Tablet',
      price: 65000
    }
  ];


  @Get('products')
  listProducts(){
    return this.#products;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string){
    return this.#products[Number(id)]
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string){
    this.#products.splice(Number(id), 1)
  }

  @Post('products')
  newProduct(@Body() createProductDto: CreateProductDto){
    this.#products.push(createProductDto);
  }
}
