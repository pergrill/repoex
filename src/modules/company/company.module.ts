import { Module } from '@nestjs/common';
import { CompanyModelModule } from 'src/model';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [CompanyModelModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
