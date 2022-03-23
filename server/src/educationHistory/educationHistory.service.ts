import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EducationHistoryServiceBase } from "./base/educationHistory.service.base";

@Injectable()
export class EducationHistoryService extends EducationHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
