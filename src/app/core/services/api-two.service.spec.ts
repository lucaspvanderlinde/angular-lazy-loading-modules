import { TestBed } from '@angular/core/testing';

import { ApiTwoService } from './api-two.service';

describe('ApiTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTwoService = TestBed.get(ApiTwoService);
    expect(service).toBeTruthy();
  });
});
