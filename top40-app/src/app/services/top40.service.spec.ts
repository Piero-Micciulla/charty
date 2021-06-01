import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { Top40Service } from './top40.service';
import { Song } from '../models/song';

describe('Top40Service', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: Top40Service;
  let mockSongs: Song[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top40Service);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockSongs = [
      { title: 'Afraid Of The Dark', credit: `Chef'Special` },
      { title: 'Rasputin', credit: 'Majestic x Boney M.' },
    ];
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should GET expected posts`, () => {
    service.getTop40().subscribe((songs) => {
      expect(songs[0].title).toEqual(`Afraid Of The Dark`);
      expect(songs[0].credit).toEqual(`Chef'Special`);

      expect(songs[1].title).toEqual('Rasputin');
      expect(songs[1].credit).toEqual('Majestic x Boney M.');
    });

    const req = httpTestingController.expectOne(`${service.top40Url}/1`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockSongs);
  });
});
