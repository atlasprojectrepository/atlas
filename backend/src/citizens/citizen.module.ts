import { Module } from '@nestjs/common';
import {CitizenController} from "./citizen.controller";
import {CitizenService} from "./citizen.service";
import {CitizenRepository} from "./citizen.repository";

@Module({
    imports: [],
    controllers: [CitizenController],
    providers: [CitizenService, CitizenRepository],
})
export class CitizenModule {}
