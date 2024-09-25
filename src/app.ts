import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { CarModule, CategoryModule } from '@modules';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import { LoggerMiddleware } from './middlewares';
import { ExceptionHandlerFilter } from './filters';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    CarModule, CategoryModule],
    providers: [
      {
        useClass: ValidationPipe,
        provide: APP_PIPE
      },
      {
        useClass: ExceptionHandlerFilter,
        provide: APP_FILTER
      },
    ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("")
  }
}
