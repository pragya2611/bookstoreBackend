import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';
import { Author, AuthorSchema } from './schemas/author.schema';
import { Book, BookSchema } from './schemas/book.schema';

const schemas = [
  { name: Book.name, schema: BookSchema },
  { name: Author.name, schema: AuthorSchema },
];
@Module({
  imports: [MongooseModule.forFeature([...schemas])],
  controllers: [BookController],
  providers: [BookService, BookRepository],
})
export class BookModule {}
