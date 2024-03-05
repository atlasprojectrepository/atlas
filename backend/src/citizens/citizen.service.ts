import { Injectable } from '@nestjs/common';

@Injectable()
export class CitizenService {
    getAllCitizens(): string {
        return 'Hello World!';
    }
}
