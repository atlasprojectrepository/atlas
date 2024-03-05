
import {Citizen} from "../../citizens/citizen.entity";
import {JobActivity} from "../../yggdrasil/jobs/job.entity";


export interface PornMovie {
    id: string;
    name: string;

}

export interface PornScenes {
    name?: string;
    movie?: PornMovie;
    actors: PornActors
}

export interface PornActors extends JobActivity {
    scenes: PornScenes[];
}
