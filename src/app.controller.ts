import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './app.service';
import { Book } from './FakeDatabase';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('books')
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const parsedId = parseInt(id, 10);
    return this.bookService.getBookById(parsedId);
  }

  @Post('addBook')
  addBook(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;
    
    return this.bookService.create(bookData);
    
  } 

  

}
