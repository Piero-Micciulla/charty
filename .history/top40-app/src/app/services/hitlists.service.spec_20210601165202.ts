import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { HitlistsService } from './hitlists.service';
import { Hitlist } from '../models/hitlist';

describe('HitlistsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: HitlistsService;
  let mockHitlist: Hitlist[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HitlistsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HitlistsService);

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
    service.getTop40().subscribe((hitlist) => {
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
