import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddlewere implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('this is class base middlewere implemente by book');
    const protocol = req.protocol;
    const host = req.get('host');
    const url = req.originalUrl;
    const method = req.method;
    const date = new Date().toDateString();

    console.log(protocol + '://' + host + url + '  ' + method + '  ' + date);
    console.log('request', req);
    next();
  }
}
