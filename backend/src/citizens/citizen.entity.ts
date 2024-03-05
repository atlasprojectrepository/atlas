import { Cluster, Hub, Pod } from '../ladder/ladder.entity';
import { JobActivity } from "../yggdrasil/jobs/job.entity";

export interface CitizenEvent {
    id: string;
    date: Date;
    place: Pod | Hub | Cluster;
}
export enum IdentityGender {
    Male,
    Female,
    Sissy,
    Femboy,
    Androgynous,
    NonBinary,
}

export enum BiologicalGender {
    Male = 0,
    Female = 1,
}


enum SexualOrientation {
    Asexual,
    Pansexual,
    Demisexual,
    Sapiosexual,
    Queer,
    Polysexual,
    Androsexual,
    Gynesexual,
    Skoliosexual,
    Aromantic,
    Heteroflexible,
    Homoflexible,
    Bisexual,
    Heterosexual,
    Homosexual,

}
export interface Citizen {
    id: string;
    firstName: string;
    lastName: string;
    atlasName: string;
    birth: null | CitizenEvent;
    death: null | CitizenEvent;
    parents: Citizen[];
    children: Citizen[];
    partners: Citizen[];
    siblings: Citizen[];
    hubsHistory: Hub[];
    leafs: Leaf[];
    jobHistory: JobActivity[];
    biological: {
        gender: BiologicalGender;
    },
    identity: {
        gender: IdentityGender;
        sexualOrientation: SexualOrientation;
    }

}
