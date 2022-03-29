import { Module } from "@nestjs/common";
import { EducationHistoryModuleBase } from "./base/educationHistory.module.base";
import { EducationHistoryService } from "./educationHistory.service";
import { EducationHistoryController } from "./educationHistory.controller";
import { EducationHistoryResolver } from "./educationHistory.resolver";

@Module({
  imports: [EducationHistoryModuleBase],
  controllers: [EducationHistoryController],
  providers: [EducationHistoryService, EducationHistoryResolver],
  exports: [EducationHistoryService],
})
export class EducationHistoryModule {}
