import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyDto, CompanyKeyDto } from 'src/model';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('insert')
  @HttpCode(201)
  async insert(@Body() company: CompanyDto) {
    const result = await this.companyService.insert(company);
    if (!result) {
      throw new HttpException(
        `Company '${company.companyId}' already exist!`,
        409,
      );
    }
    return result;
  }

  @Patch('update')
  @HttpCode(200)
  async update(@Body() company: CompanyDto) {
    const result = await this.companyService.update(company);
    if (!result) {
      throw new HttpException(
        `Company '${company.companyId}' does not exist!`,
        404,
      );
    }
    return result;
  }

  @Delete('delete/:companyId')
  @HttpCode(204)
  async delete(@Param() param: CompanyKeyDto) {
    const result = await this.companyService.delete(param);
    if (result?.deletedCount === 0) {
      throw new HttpException(
        `Company '${param.companyId}' does not exist!`,
        404,
      );
    }
  }

  @Get('fetch/:companyId')
  @HttpCode(200)
  async fetch(@Param() param: CompanyKeyDto) {
    const result = await this.companyService.fetch(param);
    if (!result) {
      throw new HttpException(
        `Company '${param.companyId}' does not exist!`,
        404,
      );
    }
    return result;
  }
}
