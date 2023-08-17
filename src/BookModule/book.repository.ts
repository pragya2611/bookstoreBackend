import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/core/base/base.repository';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BookRepository extends BaseRepository<BookDocument> {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
    super(bookModel);
  }

  async getAllBooks(limit: number, skip: number): Promise<Book[]> {
    return this.bookModel.aggregate([
      {
        $lookup: {
          from: 'authors',
          localField: 'authors',
          foreignField: '_id',
          as: 'bookAuthors',
        },
      },
      { $unwind: { path: '$bookAuthors' } },
      { $skip: skip },
      {
        $limit: limit,
      },
    ]);
  }
}
