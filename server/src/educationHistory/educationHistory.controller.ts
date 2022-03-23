import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EducationHistoryService } from "./educationHistory.service";
import { EducationHistoryControllerBase } from "./base/educationHistory.controller.base";

@swagger.ApiTags("educationHistories")
@common.Controller("educationHistories")
export class EducationHistoryController extends EducationHistoryControllerBase {
  constructor(
    protected readonly service: EducationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
