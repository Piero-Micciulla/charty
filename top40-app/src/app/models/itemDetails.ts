export interface ItemDetails {
    title_id: number;
    credit: string;
    title: string;
    cover_image_url_large: string;
    songwiki_album: string;
    songwiki_length: string;
    songwiki_composer: string;
    songwiki_producer: string;
    songwiki_label: string;
    songwiki_releasedate: string;
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
