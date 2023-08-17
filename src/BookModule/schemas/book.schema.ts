import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/core/base/base.schema';
import { ImageType } from 'src/core/types';
import { Author } from './author.schema';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book extends BaseSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  publisher: string;

  @Prop({ required: true })
  publicationYear: string;

  @Prop({ max: 10000 })
  price: number;

  @Prop({ max: 5 })
  rating: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }] })
  authors: Author[];

  @Prop({ type: Object, required: true })
  image: ImageType;

  @Prop()
  category: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
