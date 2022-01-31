import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';
import { ICompany, ICompanyKey } from './company.interface';

export class CompanyKeyDto implements ICompanyKey {
  @IsString()
  companyId: string;
}

export class CompanyDto implements ICompany {
  @IsString()
  companyId: string;
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  street: string;
  @IsString()
  @IsOptional()
  houseno: string;
  @IsString()
  @IsOptional()
  zip: string;
  @IsString()
  @IsOptional()
  city: string;
  @IsEmail()
  @IsOptional()
  mail: string;
  @IsString()
  @IsOptional()
  phone: string;
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  start: Date;
}
