import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FamilyMemberResolverBase } from "./base/familyMember.resolver.base";
import { FamilyMember } from "./base/FamilyMember";
import { FamilyMemberService } from "./familyMember.service";

@graphql.Resolver(() => FamilyMember)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FamilyMemberResolver extends FamilyMemberResolverBase {
  constructor(
    protected readonly service: FamilyMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
