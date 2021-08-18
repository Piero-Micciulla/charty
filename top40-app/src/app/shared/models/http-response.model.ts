import {Song} from './song';

export interface HttpResponse {
    year: number;
    week: number;
    date: string;
    date_timestamp: number;
    published: number;
    positions: Song[];
}