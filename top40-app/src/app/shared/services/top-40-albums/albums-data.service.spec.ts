import { TestBed } from '@angular/core/testing';

import { AlbumsDataService } from './albums-data.service';

describe('AlbumsDataService', () => {
  let service: AlbumsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
