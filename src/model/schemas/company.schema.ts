import { Document, Schema } from 'mongoose';
import { ICompany } from '..';

export const CompanySchema = new Schema(
  {
    companyId: { type: String, required: true },
    name: { type: String, required: true },
    street: { type: String },
    houseno: { type: String },
    zip: { type: String },
    city: { type: String },
    mail: { type: String },
    phone: { type: String },
    start: { type: Date },
  },
  { timestamps: true },
);

export interface CompanyDocument extends Document, ICompany {}

CompanySchema.index({ companyId: 1 }, { unique: true });

const modelName = 'Company';

export const COMPANY = {
  name: modelName,
  schema: CompanySchema,
};
