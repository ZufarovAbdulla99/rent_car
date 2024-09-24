import { Module } from '@nestjs/common';
import { CarModule, CategoryModule } from '@modules';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig]
    }),
    CarModule, CategoryModule],
})
export class AppModule {}
