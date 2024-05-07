import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private readonly httpService : HttpService) {}

    public async apiFindAll() {
        try {
            const response = await firstValueFrom(
                this.httpService.get('https://rickandmortyapi.com/api/character')
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
