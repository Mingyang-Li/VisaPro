import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EducationHistoryResolverBase } from "./base/educationHistory.resolver.base";
import { EducationHistory } from "./base/EducationHistory";
import { EducationHistoryService } from "./educationHistory.service";

@graphql.Resolver(() => EducationHistory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EducationHistoryResolver extends EducationHistoryResolverBase {
  constructor(
    protected readonly service: EducationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
