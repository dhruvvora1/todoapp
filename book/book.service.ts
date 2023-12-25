import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

export class BookService {
  public books: Book[] = [];

  addBookServive(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been successfully added';
  }
  deleteBookServive(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });
    return 'Book has been Deleted';
  }
  findBookServive(): Book[] {
    return this.books;
  }
  updateBookServive(book: Book): string {
    const index = this.books.findIndex((id) => {
      return id.id === book.id;
    });
    this.books[index] = book;
    return 'Book has been successfully Update';
  }
}
