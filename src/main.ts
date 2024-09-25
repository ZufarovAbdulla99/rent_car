import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe())
  // // LoggerMiddlewareni global usulda ishlatish: Hamma request uchun ishlaydi
  // app.use(new LoggerMiddleware().use)

  // // morgan
  if(process.env.NODE_ENV?.trim() == "development"){
    app.use(morgan("tiny"))
  }

  await app.listen(
    config.get<number>('PORT'),
    config.get<string>('HOST'),
    (): void => {
      console.log(`listening on port ${config.get<number>('PORT')}...`);
    },
  );
}
bootstrap();
