export interface Hitlist {
  year: number;
  week: number;
  positions: Position[]
}

export interface Position {
  position: number; 
  title: string;
  credit: string;
}
