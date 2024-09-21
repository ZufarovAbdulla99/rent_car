import { Module } from '@nestjs/common';
import { CarModule } from './modules';

@Module({
  imports: [CarModule],
})
export class AppModule {}
