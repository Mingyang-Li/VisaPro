import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EducationHiatoryServiceBase } from "./base/educationHiatory.service.base";

@Injectable()
export class EducationHiatoryService extends EducationHiatoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
