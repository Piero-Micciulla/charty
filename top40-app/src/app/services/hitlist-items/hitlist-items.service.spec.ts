import { TestBed } from '@angular/core/testing';

import { HitlistItemsService } from './hitlist-items.service';

describe('HitlistItemsService', () => {
  let service: HitlistItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitlistItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
