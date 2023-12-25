import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // constructor(private bookService: BookService) {}

  @Get()
  getAllBokk(): string {
    return 'this wiil get all users';
  }

  @Post()
  addBokk(): string {
    return 'this api will add a users';
  }
}
