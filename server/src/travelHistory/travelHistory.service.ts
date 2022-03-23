import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TravelHistoryServiceBase } from "./base/travelHistory.service.base";

@Injectable()
export class TravelHistoryService extends TravelHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
