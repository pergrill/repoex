import { Injectable } from '@nestjs/common';
import { ICompany, ICompanyKey } from '..';
import { CompanyModelRepository } from './company.model.repository';

/**
 * Company service adapter
 * All access to the Company model must go through this services.
 * Decoupled from DB
 */
@Injectable()
export class CompanyModelService {
  constructor(private companyRepository: CompanyModelRepository) {}

  async insert(company: ICompany) {
    return await this.companyRepository.insert(company);
  }

  async update(company: ICompany) {
    return await this.companyRepository.update(
      { companyId: company.companyId },
      company,
    );
  }

  async delete(companyKey: ICompanyKey) {
    return await this.companyRepository.delete(companyKey);
  }

  async fetchOne(filter: any) {
    return await this.companyRepository.fetchOne(filter);
  }
}
