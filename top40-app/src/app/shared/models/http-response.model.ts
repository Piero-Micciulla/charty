import {IObject} from './object';

export interface HttpResponse {
    year: number;
    week: number;
    date: string;
    date_timestamp: number;
    published: number;
    positions: IObject[];
}