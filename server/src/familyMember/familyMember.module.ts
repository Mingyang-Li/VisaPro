import { Module } from "@nestjs/common";
import { FamilyMemberModuleBase } from "./base/familyMember.module.base";
import { FamilyMemberService } from "./familyMember.service";
import { FamilyMemberController } from "./familyMember.controller";
import { FamilyMemberResolver } from "./familyMember.resolver";

@Module({
  imports: [FamilyMemberModuleBase],
  controllers: [FamilyMemberController],
  providers: [FamilyMemberService, FamilyMemberResolver],
  exports: [FamilyMemberService],
})
export class FamilyMemberModule {}
