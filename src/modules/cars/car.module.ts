import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PgService } from "@postgres";
import { CarService } from "./car.service";
import { CarController } from "./car.controller";
import { LoggerMiddleware } from "src/middlewares";

@Module({
    providers: [CarService ,PgService],
    controllers: [CarController],
})

export class CarModule  implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes("/car")
    }
  }