import { Injectable } from "@nestjs/common";
import { citizens } from "../fake-data";
import { Citizen } from "./citizen.entity";

@Injectable()
export class CitizenRepository {
    getAllCitizen(): Citizen[] {
        return citizens;
    }
}
