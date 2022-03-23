import { Module } from "@nestjs/common";
import { EducationHiatoryModuleBase } from "./base/educationHiatory.module.base";
import { EducationHiatoryService } from "./educationHiatory.service";
import { EducationHiatoryController } from "./educationHiatory.controller";
import { EducationHiatoryResolver } from "./educationHiatory.resolver";

@Module({
  imports: [EducationHiatoryModuleBase],
  controllers: [EducationHiatoryController],
  providers: [EducationHiatoryService, EducationHiatoryResolver],
  exports: [EducationHiatoryService],
})
export class EducationHiatoryModule {}
