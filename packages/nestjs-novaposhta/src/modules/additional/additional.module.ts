import { Module } from "@nestjs/common";
import { AdditionalService } from "./additional.service";

@Module({
      providers: [AdditionalService],
      exports: [AdditionalService]
})
export class AdditionalModule {}