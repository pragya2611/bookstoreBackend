import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Req,
} from '@nestjs/common/decorators';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { PageConstants } from 'src/core/constants';
import { BookService } from './book.service';
import { BookRequestItemDTO } from './dtos/request/bookRequest.dto';
import { Book } from './schemas/book.schema';

@ApiTags('Book')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOkResponse({
    description: 'save a book',
    type: Book || null,
  })
  @Post('')
  public async saveBook(
    @Req() request: Request,
    @Body() bookRequestItemDTO: BookRequestItemDTO,
  ) {
    return this.bookService.createBook(bookRequestItemDTO);
  }

  @ApiOkResponse({
    description: 'get all books',
    type: Book || null,
  })
  @Get(':skip')
  public async getBooks(@Param('skip') skip: number) {
    const limit = PageConstants.pageLimit;
    return this.bookService.getAllBooks(limit, parseInt(skip.toString()));
  }

  //   @ApiOkResponse({
  //     description: 'search books',
  //     type: Book || null,
  //   })
  //   @Get('')
  //   public async getBooks(@Query('skip') skip: number) {
  //     const limit = PageConstants.pageLimit;
  //     return this.bookService.getAllBooks(limit, parseInt(skip.toString()));
  //   }
}
