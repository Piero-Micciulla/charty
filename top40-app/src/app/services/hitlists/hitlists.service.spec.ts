import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { HitListsService } from './hitlists.service';
import { HitList } from '../../models/hitlist';
import { HitListType } from '../../models/hitListTypes';

describe('HitlistsService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: HitListsService;
    let mockHitList: HitList;
    let mockHitListType: HitListType;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HitListsService],
            imports: [HttpClientTestingModule],
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(HitListsService);

        mockHitList = {
            id: 101,
            year: 2020,
            week: 10,
            positions: [],
        };
        mockHitListType = {
            id: 20,
            title: 'A long hitlist',
            size: 100,
        };
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`should GET expected hitlists`, () => {
        service.fetchHitList(mockHitListType).subscribe((hitlist) => {
            expect(hitlist.id).toEqual(101);
            expect(hitlist.year).toEqual(2020);
            expect(hitlist.week).toEqual(10);
            expect(hitlist.positions).toEqual([]);
        });

        const req = httpTestingController.expectOne(
            `${service.HITLIST_API}/top40_json/20`
        );
        expect(req.request.method).toEqual('GET');

        req.flush(mockHitList);
    });
});
