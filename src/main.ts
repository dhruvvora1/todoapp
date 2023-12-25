import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction, Request, Response } from 'express';

function globalMidllewereOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is the middlewere number 1');
  next();
}

function globalMidllewereTwo(req: Request, res: Response, next: NextFunction) {
  console.log('this is the middlewere number 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMidllewereOne);
  app.use(globalMidllewereTwo);
  await app.listen(3000);
}
bootstrap();
