import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ApiModule, HttpModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
