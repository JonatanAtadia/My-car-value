import { Module } from '@nestjs/common';
import { ReportEntity } from './report.entity';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReportEntity])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
