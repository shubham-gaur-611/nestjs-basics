import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BookService {
  getAllBooks(): Book[] {
    return books;
  }

  getBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
  }

  create(book: Partial<Book>): Book | undefined { 
    const newBook:Book = {
      id: books.length + 1,
      title: book.title,
      description: book.description
    };
    books.push(newBook);
    return newBook;
  }
}
