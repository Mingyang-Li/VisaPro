import { Module } from "@nestjs/common";
import { PersonalInfoModuleBase } from "./base/personalInfo.module.base";
import { PersonalInfoService } from "./personalInfo.service";
import { PersonalInfoController } from "./personalInfo.controller";
import { PersonalInfoResolver } from "./personalInfo.resolver";

@Module({
  imports: [PersonalInfoModuleBase],
  controllers: [PersonalInfoController],
  providers: [PersonalInfoService, PersonalInfoResolver],
  exports: [PersonalInfoService],
})
export class PersonalInfoModule {}
