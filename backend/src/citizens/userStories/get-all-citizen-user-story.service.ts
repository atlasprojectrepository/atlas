import { Injectable } from "@nestjs/common";
import { Citizen } from "../citizen.entity";
import { CitizenService } from "../citizen.service";
import { CitizenRepository } from "../citizen.repository";

@Injectable()
export class GetAllCitizenUserStory {
    constructor(
        private readonly citizenService: CitizenService,
        private readonly citizenRepository: CitizenRepository,
    )
    {}

    getAllCitizen(): Citizen[] {
        return this.citizenRepository.getAllCitizen();
    }
}
