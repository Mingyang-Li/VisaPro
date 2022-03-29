import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PersonalInfoServiceBase } from "./base/personalInfo.service.base";

@Injectable()
export class PersonalInfoService extends PersonalInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
