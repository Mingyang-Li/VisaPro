import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FamilyMemberService } from "./familyMember.service";
import { FamilyMemberControllerBase } from "./base/familyMember.controller.base";

@swagger.ApiTags("familyMembers")
@common.Controller("familyMembers")
export class FamilyMemberController extends FamilyMemberControllerBase {
  constructor(
    protected readonly service: FamilyMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
