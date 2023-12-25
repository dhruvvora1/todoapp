import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/finAllBooks')
  getAllBokk(): Book[] {
    return this.bookService.findBookServive();
  }
  @Put('update')
  updateBokk(@Body() book: Book): string {
    return this.bookService.updateBookServive(book);
  }
  @Delete('/delete/:id')
  deleteBokk(@Param('id') bookId: string): string {
    return this.bookService.deleteBookServive(bookId);
  }
  @Post('/add')
  addBokk(@Body() book: Book): string {
    return this.bookService.addBookServive(book);
  }
}
