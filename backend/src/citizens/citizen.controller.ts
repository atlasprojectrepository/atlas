import { Controller, Get } from '@nestjs/common';
import { GetAllCitizenUserStory } from "./userStories/get-all-citizen-user-story.service";
import {Citizen} from "./citizen.entity";

@Controller()
export class CitizenController {
    constructor(
        private readonly getAllCitizenUserStory: GetAllCitizenUserStory
    ) {}

    @Get()
    getAllCitizens(): Citizen[] {
        return this.getAllCitizenUserStory.getAllCitizen();
    }
}
