export interface Hitlist {
  id: 
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
  cover_img_url_medium: string;
}
