import {Citizen} from "../../citizens/citizen.entity";

export interface CompanyPurpose {
    id: string;
    shortDescription: string;
    longDescription: string;
}

export interface Company {
    id: string;
    name: string;
    purpose: CompanyPurpose;
}
export interface SexWorkers extends JobActivity {

}

export interface PornStar extends SexWorkers {
    name: string;
    actors: SexWorkers[];
    workedWith: SexWorkers[];
}


export interface JobActivity extends Job {
    worker: Citizen;
    company?: Company,
    startDate: Date,
    endDate?: Date,
}

export interface Job {
    id: string;
    name: string;
    leafs: LeafLink[];
    publicUtility: number;
    competence: number;
    penibility: number;
    risk: number;
    stress: number;
    autonomy: number;
    complexity: number;
    responsibility: number;
}
