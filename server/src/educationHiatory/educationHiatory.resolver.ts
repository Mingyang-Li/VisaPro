import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EducationHiatoryResolverBase } from "./base/educationHiatory.resolver.base";
import { EducationHiatory } from "./base/EducationHiatory";
import { EducationHiatoryService } from "./educationHiatory.service";

@graphql.Resolver(() => EducationHiatory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EducationHiatoryResolver extends EducationHiatoryResolverBase {
  constructor(
    protected readonly service: EducationHiatoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
