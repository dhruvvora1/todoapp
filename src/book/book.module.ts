// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { BookController } from './book.controller';
// import { BookMiddlewere } from './book.middlewere';

// @Module({
//   imports: [],
//   controllers: [BookController],
//   providers: [],
// })
// export class BookModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(BookMiddlewere).forRoutes('book');
//   }
// }

import { Module } from '@nestjs/common';
import { BookController } from './book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class BookModule {}
