import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmploymentHistoryServiceBase } from "./base/employmentHistory.service.base";

@Injectable()
export class EmploymentHistoryService extends EmploymentHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
