export interface Hitlist {
  year: number;
  week: number;
  positions: Position[];
  name: 
}

export interface Position {
  position: number;
  title: string;
  credit: string;
  cover_img_url_medium: string;
}
