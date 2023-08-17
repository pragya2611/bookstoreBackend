import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export abstract class BaseSchema {
  _id: mongoose.Types.ObjectId;

  @Prop({ type: Date, default: Date.now() })
  createdOn: Date;

  @Prop({ type: Date, default: Date.now() })
  updatedOn: Date;
}
