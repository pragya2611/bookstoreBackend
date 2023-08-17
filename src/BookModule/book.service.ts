import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookRequestItemDTO } from './dtos/request/bookRequest.dto';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async createBook(bookRequestItemDTO: BookRequestItemDTO): Promise<Book> {
    const createdBook = new this.bookModel(bookRequestItemDTO);
    return createdBook.save();
  }

  async getAllBooks(limit: number, skip: number): Promise<Book[]> {
    return this.bookModel.find().skip(skip).limit(limit).exec();
  }
}
