import { Model } from 'mongoose';
import { DeleteResultDto } from '../dtos/result.dto';

export abstract class BaseModelRepository<T, D> {
  private model: Model<T>;

  protected constructor(model: Model<T>) {
    this.model = model;
  }

  public async insert(data: D) {
    try {
      return await this.model.create(data);
    } catch (e: any) {}
  }

  public async update(filter: any, data: D) {
    return await this.model.findOneAndUpdate(filter, data, {
      new: true,
    });
  }

  public async delete(filter: any): Promise<DeleteResultDto> {
    const result = await this.model.deleteOne(filter);
    return { deletedCount: result.deletedCount };
  }

  public async fetchOne(filter: any) {
    return await this.model.findOne(filter);
  }
}
