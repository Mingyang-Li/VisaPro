/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FamilyMemberService } from "../familyMember.service";
import { FamilyMemberCreateInput } from "./FamilyMemberCreateInput";
import { FamilyMemberWhereInput } from "./FamilyMemberWhereInput";
import { FamilyMemberWhereUniqueInput } from "./FamilyMemberWhereUniqueInput";
import { FamilyMemberFindManyArgs } from "./FamilyMemberFindManyArgs";
import { FamilyMemberUpdateInput } from "./FamilyMemberUpdateInput";
import { FamilyMember } from "./FamilyMember";
import { ApplicantFindManyArgs } from "../../applicant/base/ApplicantFindManyArgs";
import { Applicant } from "../../applicant/base/Applicant";
import { ApplicantWhereUniqueInput } from "../../applicant/base/ApplicantWhereUniqueInput";
@swagger.ApiBearerAuth()
export class FamilyMemberControllerBase {
  constructor(
    protected readonly service: FamilyMemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: FamilyMember })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FamilyMemberCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FamilyMember> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "FamilyMember",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FamilyMember"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        archivedBy: data.archivedBy
          ? {
              connect: data.archivedBy,
            }
          : undefined,

        createdBy: data.createdBy
          ? {
              connect: data.createdBy,
            }
          : undefined,

        updatedBy: data.updatedBy
          ? {
              connect: data.updatedBy,
            }
          : undefined,
      },
      select: {
        archived: true,

        archivedBy: {
          select: {
            id: true,
          },
        },

        countriesOfCitizenship: true,
        countryOfBirth: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        dateOfBirth: true,
        firstName: true,
        id: true,
        lastName: true,
        relationshipToApplicant: true,
        updatedAt: true,

        updatedBy: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [FamilyMember] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FamilyMemberFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FamilyMember[]> {
    const args = plainToClass(FamilyMemberFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FamilyMember",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        archived: true,

        archivedBy: {
          select: {
            id: true,
          },
        },

        countriesOfCitizenship: true,
        countryOfBirth: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        dateOfBirth: true,
        firstName: true,
        id: true,
        lastName: true,
        relationshipToApplicant: true,
        updatedAt: true,

        updatedBy: {
          select: {
            id: true,
          },
        },
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: FamilyMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FamilyMember | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "FamilyMember",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        archived: true,

        archivedBy: {
          select: {
            id: true,
          },
        },

        countriesOfCitizenship: true,
        countryOfBirth: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        dateOfBirth: true,
        firstName: true,
        id: true,
        lastName: true,
        relationshipToApplicant: true,
        updatedAt: true,

        updatedBy: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FamilyMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body()
    data: FamilyMemberUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FamilyMember | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FamilyMember",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FamilyMember"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          archivedBy: data.archivedBy
            ? {
                connect: data.archivedBy,
              }
            : undefined,

          createdBy: data.createdBy
            ? {
                connect: data.createdBy,
              }
            : undefined,

          updatedBy: data.updatedBy
            ? {
                connect: data.updatedBy,
              }
            : undefined,
        },
        select: {
          archived: true,

          archivedBy: {
            select: {
              id: true,
            },
          },

          countriesOfCitizenship: true,
          countryOfBirth: true,
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          dateOfBirth: true,
          firstName: true,
          id: true,
          lastName: true,
          relationshipToApplicant: true,
          updatedAt: true,

          updatedBy: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FamilyMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FamilyMemberWhereUniqueInput
  ): Promise<FamilyMember | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          archived: true,

          archivedBy: {
            select: {
              id: true,
            },
          },

          countriesOfCitizenship: true,
          countryOfBirth: true,
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          dateOfBirth: true,
          firstName: true,
          id: true,
          lastName: true,
          relationshipToApplicant: true,
          updatedAt: true,

          updatedBy: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/applicants")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ApplicantFindManyArgs)
  async findManyApplicants(
    @common.Req() request: Request,
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Applicant[]> {
    const query = plainToClass(ApplicantFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Applicant",
    });
    const results = await this.service.findApplicants(params.id, {
      ...query,
      select: {
        archived: true,
        archivedAt: true,

        archivedBy: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,

        personalInfo: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        updatedBy: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/applicants")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  async createApplicants(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      applicants: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FamilyMember",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FamilyMember"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/applicants")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  async updateApplicants(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body() body: ApplicantWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      applicants: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FamilyMember",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FamilyMember"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/applicants")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  async deleteApplicants(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      applicants: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FamilyMember",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FamilyMember"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
