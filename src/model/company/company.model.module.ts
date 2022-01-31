import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { COMPANY } from '../schemas/company.schema';
import { CompanyModelRepository } from './company.model.repository';
import { CompanyModelService } from './company.model.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: COMPANY.name, schema: COMPANY.schema }]),
  ],
  providers: [CompanyModelRepository, CompanyModelService],
  exports: [CompanyModelService],
})
export class CompanyModelModule {}
