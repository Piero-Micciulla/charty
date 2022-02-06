import {IArtist} from './artist';
import {IRelatedTrack} from './related-track';
import {IObject} from './object';

export interface IObjectDetails extends IObject {
    cover_img_url_large: string;
    num_weeks_top40: number,
    highest_position: number,
    first_position_year: number,
    youtube_url: string,
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
    artists: IArtist[],
    related_tracks: IRelatedTrack[] 
}