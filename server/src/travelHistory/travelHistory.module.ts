import { Module } from "@nestjs/common";
import { TravelHistoryModuleBase } from "./base/travelHistory.module.base";
import { TravelHistoryService } from "./travelHistory.service";
import { TravelHistoryController } from "./travelHistory.controller";
import { TravelHistoryResolver } from "./travelHistory.resolver";

@Module({
  imports: [TravelHistoryModuleBase],
  controllers: [TravelHistoryController],
  providers: [TravelHistoryService, TravelHistoryResolver],
  exports: [TravelHistoryService],
})
export class TravelHistoryModule {}
