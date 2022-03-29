import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PersonalInfoResolverBase } from "./base/personalInfo.resolver.base";
import { PersonalInfo } from "./base/PersonalInfo";
import { PersonalInfoService } from "./personalInfo.service";

@graphql.Resolver(() => PersonalInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PersonalInfoResolver extends PersonalInfoResolverBase {
  constructor(
    protected readonly service: PersonalInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
