import { TestBed } from '@angular/core/testing';

import { GetDonutServiceService } from './get-donut-service.service';

describe('GetDonutServiceService', () => {
  let service: GetDonutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDonutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
