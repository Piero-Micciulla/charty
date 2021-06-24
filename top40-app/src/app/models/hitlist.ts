export interface HitList {
    id: number;
    year: number;
    week: number;
    positions: Position[];
    name?: string;
    imageUrl?: string;
}

export interface Position {
    position: number;
    titleId: number;
    title: string;
    credit: string;
    prevPosition: number;
    highestPosition: number;
    numberOfWeeks: number;
    imageSmall: string;
    imageMedium: string;
    imageLarge: string;
    youtubeCode: string;
}
