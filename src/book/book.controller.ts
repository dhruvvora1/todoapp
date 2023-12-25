// import { Controller, Get, Post } from '@nestjs/common';

// @Controller('book')
// export class BookController {
//   // constructor(private bookService: BookService) {}

//   @Get()
//   getAllBokk(): string {
//     return 'this wiil get all data';
//   }

//   @Post()
//   addBokk(): string {
//     return 'this api will add a book';
//   }
// }

import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { BookDto } from './dto/book.dto';
// import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController {
  // constructor(private bookService: BookService) {}

  @Get('/:id')
  findById(@Param('id', ParseBoolPipe) id: number): string {
    console.log('id', id, typeof id);
    return 'book by id';
  }

  @Post('/add')
  addBokk(@Body(new ValidationPipe()) book: BookDto): string {
    console.log('book', book);
    return 'add book';
  }
}
