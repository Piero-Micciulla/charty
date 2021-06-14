import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { HitListsService } from './hitlists.service';
import { HitList } from '../../models/hitlist';

describe('HitlistsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: HitListsService;
  let mockHitlist: HitList[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HitListsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HitListsService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockHitlist = [
      { week: 21, year: 2020 },
      { week: 22, year: 2021 },
    ];
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should GET expected hitlists`, () => {
    service.fetchHitList().subscribe((hitlist) => {
      expect(hitlist[0].week).toEqual(21);
      expect(hitlist[0].year).toEqual(2020);

      expect(hitlist[1].week).toEqual(22);
      expect(hitlist[1].year).toEqual(2021);
    });

    const req = httpTestingController.expectOne(`${service.hitlistUrl}/1`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockHitlist);
  });
});
