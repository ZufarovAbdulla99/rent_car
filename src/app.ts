import { Module } from '@nestjs/common';
import { CarModule, CategoryModule } from './modules';

@Module({
  imports: [CarModule, CategoryModule],
})
export class AppModule {}
