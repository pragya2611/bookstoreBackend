import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(protected readonly _entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this._entityModel
      .findOne(entityFilterQuery, {
        _id: 0,
        _v: 0,
        ...projection,
      })
      .exec();
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this._entityModel.find(entityFilterQuery);
  }

  async create(entityDataCreationDTO: unknown): Promise<T | any> {
    const entity = new this._entityModel(entityDataCreationDTO);
    return entity.save();
  }

  async findOneUpdate(
    entityFilterQuery: FilterQuery<T>,
    entityDataUpdationDTO: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this._entityModel.findOneAndUpdate(
      entityFilterQuery,
      entityDataUpdationDTO,
      {
        new: true,
      },
    );
  }
}
