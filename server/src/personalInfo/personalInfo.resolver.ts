import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PersonalInfoResolverBase } from "./base/personalInfo.resolver.base";
import { PersonalInfo } from "./base/PersonalInfo";
import { PersonalInfoService } from "./personalInfo.service";
import { isRecordNotFoundError } from "src/prisma.util";
import { UpdatePersonalInfoArgs } from "./base/UpdatePersonalInfoArgs";

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

  @graphql.Mutation(() => PersonalInfo)
  @nestAccessControl.UseRoles({
    resource: "PersonalInfo",
    action: "update",
    possession: "any",
  })
  async updatePersonalInfo(
    @graphql.Args() args: UpdatePersonalInfoArgs
  ): Promise<PersonalInfo | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          applicant: args.data.applicant
            ? {
                connect: args.data.applicant,
              }
            : undefined,

          archivedBy: args.data.archivedBy
            ? {
                connect: args.data.archivedBy,
              }
            : undefined,

          createdBy: args.data.createdBy
            ? {
                connect: args.data.createdBy,
              }
            : undefined,

          updatedBy: args.data.updatedBy
            ? {
                connect: args.data.updatedBy,
              }
            : undefined,
        },
      });
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
