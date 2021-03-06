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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ApplicantService } from "../applicant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ApplicantCreateInput } from "./ApplicantCreateInput";
import { ApplicantWhereInput } from "./ApplicantWhereInput";
import { ApplicantWhereUniqueInput } from "./ApplicantWhereUniqueInput";
import { ApplicantFindManyArgs } from "./ApplicantFindManyArgs";
import { ApplicantUpdateInput } from "./ApplicantUpdateInput";
import { Applicant } from "./Applicant";
import { EducationHistoryFindManyArgs } from "../../educationHistory/base/EducationHistoryFindManyArgs";
import { EducationHistory } from "../../educationHistory/base/EducationHistory";
import { EducationHistoryWhereUniqueInput } from "../../educationHistory/base/EducationHistoryWhereUniqueInput";
import { EmploymentHistoryFindManyArgs } from "../../employmentHistory/base/EmploymentHistoryFindManyArgs";
import { EmploymentHistory } from "../../employmentHistory/base/EmploymentHistory";
import { EmploymentHistoryWhereUniqueInput } from "../../employmentHistory/base/EmploymentHistoryWhereUniqueInput";
import { FamilyMemberFindManyArgs } from "../../familyMember/base/FamilyMemberFindManyArgs";
import { FamilyMember } from "../../familyMember/base/FamilyMember";
import { FamilyMemberWhereUniqueInput } from "../../familyMember/base/FamilyMemberWhereUniqueInput";
import { TravelHistoryFindManyArgs } from "../../travelHistory/base/TravelHistoryFindManyArgs";
import { TravelHistory } from "../../travelHistory/base/TravelHistory";
import { TravelHistoryWhereUniqueInput } from "../../travelHistory/base/TravelHistoryWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ApplicantControllerBase {
  constructor(
    protected readonly service: ApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Applicant })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ApplicantCreateInput): Promise<Applicant> {
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

        personalInfo: data.personalInfo
          ? {
              connect: data.personalInfo,
            }
          : undefined,

        updatedBy: data.updatedBy
          ? {
              connect: data.updatedBy,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Applicant] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ApplicantFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Applicant[]> {
    const args = plainToClass(ApplicantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Applicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ApplicantWhereUniqueInput
  ): Promise<Applicant | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Applicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() data: ApplicantUpdateInput
  ): Promise<Applicant | null> {
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

          personalInfo: data.personalInfo
            ? {
                connect: data.personalInfo,
              }
            : undefined,

          updatedBy: data.updatedBy
            ? {
                connect: data.updatedBy,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Applicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ApplicantWhereUniqueInput
  ): Promise<Applicant | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "EducationHistory",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/educationHistories")
  @ApiNestedQuery(EducationHistoryFindManyArgs)
  async findManyEducationHistories(
    @common.Req() request: Request,
    @common.Param() params: ApplicantWhereUniqueInput
  ): Promise<EducationHistory[]> {
    const query = plainToClass(EducationHistoryFindManyArgs, request.query);
    const results = await this.service.findEducationHistories(params.id, {
      ...query,
      select: {
        additionalInfo: true,

        applicant: {
          select: {
            id: true,
          },
        },

        archived: true,

        archivedBy: {
          select: {
            id: true,
          },
        },

        city: true,
        country: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        institutionName: true,
        isCurrentInstitution: true,
        qualificationGained: true,
        startDate: true,
        updatedAt: true,

        updatedBy: {
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
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/educationHistories")
  async connectEducationHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: EducationHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educationHistories: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/educationHistories")
  async updateEducationHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: EducationHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educationHistories: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/educationHistories")
  async disconnectEducationHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: EducationHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educationHistories: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "EmploymentHistory",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/employmentHistories")
  @ApiNestedQuery(EmploymentHistoryFindManyArgs)
  async findManyEmploymentHistories(
    @common.Req() request: Request,
    @common.Param() params: ApplicantWhereUniqueInput
  ): Promise<EmploymentHistory[]> {
    const query = plainToClass(EmploymentHistoryFindManyArgs, request.query);
    const results = await this.service.findEmploymentHistories(params.id, {
      ...query,
      select: {
        additionalInfo: true,

        applicant: {
          select: {
            id: true,
          },
        },

        archived: true,

        archivedBy: {
          select: {
            id: true,
          },
        },

        cityOfWork: true,
        companyName: true,
        countryOfWork: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        duties: true,
        employmentType: true,
        endDate: true,
        id: true,
        isCurrentJob: true,
        jobTitle: true,
        nzBusinessNumber: true,
        startDate: true,
        updatedAt: true,

        updatedBy: {
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
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/employmentHistories")
  async connectEmploymentHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: EmploymentHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employmentHistories: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/employmentHistories")
  async updateEmploymentHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: EmploymentHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employmentHistories: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/employmentHistories")
  async disconnectEmploymentHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: EmploymentHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employmentHistories: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/familyMembers")
  @ApiNestedQuery(FamilyMemberFindManyArgs)
  async findManyFamilyMembers(
    @common.Req() request: Request,
    @common.Param() params: ApplicantWhereUniqueInput
  ): Promise<FamilyMember[]> {
    const query = plainToClass(FamilyMemberFindManyArgs, request.query);
    const results = await this.service.findFamilyMembers(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/familyMembers")
  async connectFamilyMembers(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      familyMembers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/familyMembers")
  async updateFamilyMembers(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      familyMembers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/familyMembers")
  async disconnectFamilyMembers(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      familyMembers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TravelHistory",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/travelHistories")
  @ApiNestedQuery(TravelHistoryFindManyArgs)
  async findManyTravelHistories(
    @common.Req() request: Request,
    @common.Param() params: ApplicantWhereUniqueInput
  ): Promise<TravelHistory[]> {
    const query = plainToClass(TravelHistoryFindManyArgs, request.query);
    const results = await this.service.findTravelHistories(params.id, {
      ...query,
      select: {
        applicant: {
          select: {
            id: true,
          },
        },

        archived: true,

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

        dateDeparted: true,
        dateEntered: true,
        destinationCity: true,
        destinationCountry: true,
        destinationHub: true,
        id: true,
        reasonOfTravel: true,
        updatedAt: true,

        updatedBy: {
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
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/travelHistories")
  async connectTravelHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: TravelHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      travelHistories: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/travelHistories")
  async updateTravelHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: TravelHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      travelHistories: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/travelHistories")
  async disconnectTravelHistories(
    @common.Param() params: ApplicantWhereUniqueInput,
    @common.Body() body: TravelHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      travelHistories: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
