export interface ICompanyKey {
  companyId: string;
}

export interface ICompany extends ICompanyKey {
  name: string;
  street: string;
  houseno: string;
  zip: string;
  city: string;
  mail: string;
  phone: string;
  start: Date;
}
