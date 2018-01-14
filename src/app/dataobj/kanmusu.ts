export class KanmusuMeta {
    id: number;
    name: String;
    img: String;
    shipClass: String;
    shipType: number;
}

export class KanmusuDetail {
    id: number;
    name: String;
    profileImg: String;
    imgs: String[];
    description: String;
    shipClass: String;
    shipType: number;
    displacement: number;
    commissioned: Date;
}

export enum ShipType {
    DD = 1,     // Destrpyer
    CL = 2,     // Light Cruiser
    CA = 3,     // Heavy Cruiser
    SS = 4,     // Submarine
    CV = 5,     // Aircraft Carrier
    CVL = 6,    // Light Aircraft Carrier
    CVB = 7,    // Armored Aircraft Carrier
    BB = 8      // Battleship
}

export function shipTypeName(st: ShipType): string {
    switch (st) {
        case ShipType.DD: return 'Destroyer';

        case ShipType.CL: return 'Light Cruiser';

        case ShipType.CA: return 'Heavy Cruiser';

        case ShipType.SS: return 'Submarine';

        case ShipType.CV: return 'Aircraft Carrier';

        case ShipType.CVL: return 'Light Aircraft Carrier';

        case ShipType.CVB: return 'Armored Aircraft Carrier';

        case ShipType.BB: return 'Battleship';
    }

    return '';
}