interface OldLeaf {
    name: string;
    parent: string | null;
    children: string[];
}

interface LeafLink {
    leafId: string;
    parent: boolean;
    weight: number;
}


interface FederationSportLeaf {
    id: string;
    name: string;
}

interface SportLeaf extends Leaf {
    federation: FederationSportLeaf;
}

interface OldSportLeaf extends OldLeaf {
    federation: FederationSportLeaf;
}

interface Leaf {
    id: string;
    name: string;
    links: LeafLink[];
}
