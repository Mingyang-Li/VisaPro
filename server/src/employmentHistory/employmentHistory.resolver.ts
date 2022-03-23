import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmploymentHistoryResolverBase } from "./base/employmentHistory.resolver.base";
import { EmploymentHistory } from "./base/EmploymentHistory";
import { EmploymentHistoryService } from "./employmentHistory.service";

@graphql.Resolver(() => EmploymentHistory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmploymentHistoryResolver extends EmploymentHistoryResolverBase {
  constructor(
    protected readonly service: EmploymentHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
