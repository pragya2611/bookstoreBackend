import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { BookRequestItemDTO } from './dtos/request/bookRequest.dto';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async createBook(bookRequestItemDTO: BookRequestItemDTO): Promise<Book> {
    return this.bookRepository.create(bookRequestItemDTO);
  }

  async getAllBooks(limit: number, skip: number): Promise<Book[]> {
    return this.bookRepository.getAllBooks(limit, skip);
  }
}
