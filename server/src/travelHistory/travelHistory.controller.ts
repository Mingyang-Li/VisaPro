import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TravelHistoryService } from "./travelHistory.service";
import { TravelHistoryControllerBase } from "./base/travelHistory.controller.base";

@swagger.ApiTags("travelHistories")
@common.Controller("travelHistories")
export class TravelHistoryController extends TravelHistoryControllerBase {
  constructor(
    protected readonly service: TravelHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
