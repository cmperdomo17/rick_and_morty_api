import { Global, Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports:[HttpModule],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
