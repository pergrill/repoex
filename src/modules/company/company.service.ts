import { Injectable } from '@nestjs/common';
import { CompanyModelService } from 'src/model';
import { ICompany } from 'src/model';
import { ICompanyKey } from 'src/model';

@Injectable()
export class CompanyService {
  constructor(private readonly companyModelService: CompanyModelService) {}

  async insert(company: ICompany) {
    return await this.companyModelService.insert(company);
  }

  async update(company: ICompany) {
    return await this.companyModelService.update(company);
  }

  async delete(companyKey: ICompanyKey) {
    return await this.companyModelService.delete(companyKey);
  }

  async fetch(companyKey: ICompanyKey) {
    return await this.companyModelService.fetchOne(companyKey);
  }
}
