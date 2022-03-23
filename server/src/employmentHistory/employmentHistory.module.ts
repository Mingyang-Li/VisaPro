import { Module } from "@nestjs/common";
import { EmploymentHistoryModuleBase } from "./base/employmentHistory.module.base";
import { EmploymentHistoryService } from "./employmentHistory.service";
import { EmploymentHistoryController } from "./employmentHistory.controller";
import { EmploymentHistoryResolver } from "./employmentHistory.resolver";

@Module({
  imports: [EmploymentHistoryModuleBase],
  controllers: [EmploymentHistoryController],
  providers: [EmploymentHistoryService, EmploymentHistoryResolver],
  exports: [EmploymentHistoryService],
})
export class EmploymentHistoryModule {}
