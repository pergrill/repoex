import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [
    CompanyModule,
    MongooseModule.forRoot('mongodb://localhost:27017/repoex'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
