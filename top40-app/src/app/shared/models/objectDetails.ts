export interface IObjectDetails {
    title_id: number,
    credit: string,
    title: string,
    cover_img_url_medium: string,
    cover_img_url_small: string,
    num_weeks_top40: number,
    highest_position: number,
    points: number,
    first_position_year: number,
    youtube_url: string,
    itunes_track_url: string,
    itunes_track_preview_url: string,
    itunes_track_price: number,
    itunes_video_url: string,
    itunes_video_preview_url: string,
    itunes_video_price: number,
    songwiki_songstory: string,
    songwiki_trivia: string,
    songwiki_lyrics: string,
    songwiki_album: string,
    songwiki_length: string,
    songwiki_composer: string,
    songwiki_producer: string,
    songwiki_catalognumber: string,
    songwiki_highest_position_uk: string,
    songwiki_highest_position_us: string,
    songwiki_label: string,
    songwiki_releasedate: string,
    main_artist: string,
    artists: 
         [ { artist_id: number,
             name: string,
             biography: string,
             country: string,
             artist_img_url: string,
             birthdate: string,
             dateofdeath: string } ],
        related_tracks: 
         [ 
             { title_id: number,
             credit: string,
             title: string,
             cover_img_url: string }
         ] 
}