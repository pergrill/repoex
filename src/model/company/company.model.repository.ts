import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseModelRepository } from '../base/base.model.repository';
import { ICompany } from '../dtos/company.interface';
import { COMPANY, CompanyDocument } from '../schemas/company.schema';

/**
 * Company model repository.
 * Extends methods from base repository
 * Can include special methods for this model that aren't present in the base repository.
 * The repository is coupled to mongoose
 */
@Injectable()
export class CompanyModelRepository extends BaseModelRepository<
  CompanyDocument,
  ICompany
> {
  constructor(
    @InjectModel(COMPANY.name)
    private readonly companyModel: Model<CompanyDocument>,
  ) {
    super(companyModel);
  }
}
