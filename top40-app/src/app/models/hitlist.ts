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
  title: string;
  credit: string;
  imageMedium: string;
  imageLarge: string;
}
