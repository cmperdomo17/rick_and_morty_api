import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {

    constructor(private readonly apiService: ApiService) {}
    @Get('characters')
    async getCharacters() { 
        return this.apiService.apiFindAll();
    }
}
