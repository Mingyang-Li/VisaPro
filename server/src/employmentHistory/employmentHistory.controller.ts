import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmploymentHistoryService } from "./employmentHistory.service";
import { EmploymentHistoryControllerBase } from "./base/employmentHistory.controller.base";

@swagger.ApiTags("employmentHistories")
@common.Controller("employmentHistories")
export class EmploymentHistoryController extends EmploymentHistoryControllerBase {
  constructor(
    protected readonly service: EmploymentHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
