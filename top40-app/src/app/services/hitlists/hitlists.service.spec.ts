import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { HitListsService } from './hitlists.service';
import { HitList } from '../../models/hitlist';
import { HitListType, HITLIST_TYPES } from '../../models/hitListTypes';
import { environment } from 'src/environments/environment';

describe('HitlistsService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: HitListsService;
    let mockHitList: HitList[];
    let mockHitListType: HitListType;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HitListsService],
            imports: [HttpClientTestingModule],
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(HitListsService);
        mockHitList = [
            {
                id: 101,
                year: 2020,
                week: 10,
                positions: [],
            },
            {
                id: 102,
                year: 2021,
                week: 42,
                positions: [],
            },
        ];
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
            expect(mockHitList[0].id).toEqual(101);
            expect(mockHitList[0].year).toEqual(2020);
            expect(mockHitList[0].week).toEqual(10);
            expect(mockHitList[0].positions).toEqual([]);

            expect(mockHitList[1].id).toEqual(102);
            expect(mockHitList[2].year).toEqual(2021);
            expect(mockHitList[3].week).toEqual(42);
            expect(mockHitList[4].positions).toEqual([]);
        });

        const req = httpTestingController.expectOne(
            `${service.HITLIST_API}/top40_json/20`
        );
        expect(req.request.method).toEqual('GET');

        req.flush(mockHitList);
    });
});
