import { Module } from "@nestjs/common";
import { PgService } from "@postgres";
import { CarService } from "./car.service";
import { CarController } from "./car.controller";

@Module({
    providers: [CarService ,PgService],
    controllers: [CarController],
})

export class CarModule {}