import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TravelHistoryResolverBase } from "./base/travelHistory.resolver.base";
import { TravelHistory } from "./base/TravelHistory";
import { TravelHistoryService } from "./travelHistory.service";

@graphql.Resolver(() => TravelHistory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TravelHistoryResolver extends TravelHistoryResolverBase {
  constructor(
    protected readonly service: TravelHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
