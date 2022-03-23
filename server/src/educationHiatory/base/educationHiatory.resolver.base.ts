/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteEducationHiatoryArgs } from "./DeleteEducationHiatoryArgs";
import { EducationHiatoryFindManyArgs } from "./EducationHiatoryFindManyArgs";
import { EducationHiatoryFindUniqueArgs } from "./EducationHiatoryFindUniqueArgs";
import { EducationHiatory } from "./EducationHiatory";
import { EducationHiatoryService } from "../educationHiatory.service";

@graphql.Resolver(() => EducationHiatory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EducationHiatoryResolverBase {
  constructor(
    protected readonly service: EducationHiatoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EducationHiatory",
    action: "read",
    possession: "any",
  })
  async _educationHiatoriesMeta(
    @graphql.Args() args: EducationHiatoryFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [EducationHiatory])
  @nestAccessControl.UseRoles({
    resource: "EducationHiatory",
    action: "read",
    possession: "any",
  })
  async educationHiatories(
    @graphql.Args() args: EducationHiatoryFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<EducationHiatory[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "EducationHiatory",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => EducationHiatory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EducationHiatory",
    action: "read",
    possession: "own",
  })
  async educationHiatory(
    @graphql.Args() args: EducationHiatoryFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<EducationHiatory | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "EducationHiatory",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => EducationHiatory)
  @nestAccessControl.UseRoles({
    resource: "EducationHiatory",
    action: "delete",
    possession: "any",
  })
  async deleteEducationHiatory(
    @graphql.Args() args: DeleteEducationHiatoryArgs
  ): Promise<EducationHiatory | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
