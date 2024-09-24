import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  await app.listen(
    config.get<number>('PORT'),
    config.get<string>('HOST'),
    (): void => {
      console.log(`listening on port ${config.get<number>('PORT')}...`);
    },
  );
}
bootstrap();
