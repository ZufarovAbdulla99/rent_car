import { Module } from "@nestjs/common";
import { PgService } from "src/postgres/pg.service";
import { CarService } from "./car.service";
import { CarController } from "./car.controller";

@Module({
    providers: [CarService ,PgService],
    controllers: [CarController],
})

export class CarModule {}