import { TestBed } from '@angular/core/testing';

import { TipparadeDataService } from './tipparade-data.service';

describe('TipparadeDataService', () => {
  let service: TipparadeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipparadeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
