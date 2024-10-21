import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';

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
    'Bucket',
    'Rest api for dummies',
    'Tablet',
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
}
