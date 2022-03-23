import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EducationHiatoryService } from "./educationHiatory.service";
import { EducationHiatoryControllerBase } from "./base/educationHiatory.controller.base";

@swagger.ApiTags("educationHiatories")
@common.Controller("educationHiatories")
export class EducationHiatoryController extends EducationHiatoryControllerBase {
  constructor(
    protected readonly service: EducationHiatoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
