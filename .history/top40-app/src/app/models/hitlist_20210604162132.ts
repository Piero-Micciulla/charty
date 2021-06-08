export interface HitList {
  id: string;
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
  image: string;
}
