import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ApplicantResolverBase } from "./base/applicant.resolver.base";
import { Applicant } from "./base/Applicant";
import { ApplicantService } from "./applicant.service";

@graphql.Resolver(() => Applicant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ApplicantResolver extends ApplicantResolverBase {
  constructor(
    protected readonly service: ApplicantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
