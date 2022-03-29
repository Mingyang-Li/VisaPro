import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PersonalInfoService } from "./personalInfo.service";
import { PersonalInfoControllerBase } from "./base/personalInfo.controller.base";

@swagger.ApiTags("personalInfos")
@common.Controller("personalInfos")
export class PersonalInfoController extends PersonalInfoControllerBase {
  constructor(
    protected readonly service: PersonalInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
