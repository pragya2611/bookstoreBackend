import { ImageType } from 'src/core/types';
import { AuthorResponseItemDTO } from './authorResponse.dto';

export class BookResponseItemDTO {
  name: string;

  description: string;

  publisher: string;

  publishingYear: string;

  rating: number;

  price: number;

  bookAuthor: AuthorResponseItemDTO[];

  image: ImageType[];

  category?: string;
}
