export interface Hitlist {
  year: number;
  week: number;
  positions: Position[]
}

export interface Position {
  position: number; // todo m
  title: string;
  credit: string;
}
