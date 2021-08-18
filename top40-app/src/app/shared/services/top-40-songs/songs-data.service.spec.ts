import { TestBed } from '@angular/core/testing';

import { SongsDataService } from './songs-data.service';

describe('SongsDataService', () => {
  let service: SongsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
