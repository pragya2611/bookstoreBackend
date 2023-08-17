export class Paginated<T> {
  records?: T[];
  limit: number;
  skip: number;
}
