export interface ItemDetails {
    title_id: number;
    credit: string;
    title: string;
    cover_image_url_large: string;
    songwiki_lyrics: string;
    artists: Artist[];
    related_tracks: RelatedTracks[];
}

export interface Artist {
    name: string;
    biography: string;
    country: string;
    artist_img_url: string;
    birthdate: string;
}

export interface RelatedTracks {
    title_id: number;
    credit: string;
    title: string;
    cover_image_url: string;
}
