import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { HitlistItemsService } from './hitlist-items.service';
import { ItemDetails } from '../../models/itemDetails';

describe('HitlistItemsService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: HitlistItemsService;
    let mockItem: ItemDetails[];
    const itemID = 36837;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HitlistItemsService],
            imports: [HttpClientTestingModule],
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(HitlistItemsService);
        mockItem = [
            {
                title_id: 1234,
                credit: 'Band',
                title: 'Song title',
                cover_img_url_large: 'Beautiful cover image',
                songwiki_album: 'Album name',
                songwiki_length: 'Song length',
                songwiki_composer: 'Song composer',
                songwiki_producer: 'Song producer',
                songwiki_label: 'Artist label',
                songwiki_releasedate: 'Song release date',
                songwiki_lyrics: 'Gorgeous song lyrics',
                artists: [],
                related_tracks: [],
            },
        ];
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`should GET expected itemDetails`, () => {
        service.fetchHitListDetails(1).subscribe((item) => {
            expect(item.title_id).toEqual(1234);
            expect(item.credit).toEqual('Band');
            expect(item.title).toEqual('Song title');
            expect(item.cover_img_url_large).toEqual('Beautiful cover image');
            expect(item.songwiki_album).toEqual('Album name');
            expect(item.songwiki_length).toEqual('Song length');
            expect(item.songwiki_composer).toEqual('Song composer');
            expect(item.songwiki_producer).toEqual('Song producer');
            expect(item.songwiki_label).toEqual('Artist label');
            expect(item.songwiki_releasedate).toEqual('Song release date');
            expect(item.songwiki_lyrics).toEqual('Gorgeous song lyrics');
            expect(item.artists).toEqual([]);
            expect(item.related_tracks).toEqual([]);
        });

        const req = httpTestingController.expectOne(
            `${service.ITEMDETAILS_API}/titledetails_top40_json/${itemID}`
        );
        expect(req.request.method).toEqual('GET');

        req.flush(mockItem);
    });
});
