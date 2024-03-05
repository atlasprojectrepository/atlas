export interface Pod {
    id: string;
    name: string;
}

export interface Hub {
    id: string;
    name: string;
    pods: Pod[];
}

export interface Cluster {
    id: string;
    name: string;
    hubs: Hub[];
}

export interface Humanity {
    id: string;
    name: string;
    clusters: Cluster[];
}
