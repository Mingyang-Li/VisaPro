import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicantService } from "./applicant.service";
import { ApplicantControllerBase } from "./base/applicant.controller.base";

@swagger.ApiTags("applicants")
@common.Controller("applicants")
export class ApplicantController extends ApplicantControllerBase {
  constructor(
    protected readonly service: ApplicantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
