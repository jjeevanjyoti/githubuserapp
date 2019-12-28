import { TestBed } from '@angular/core/testing';

import { GituserserviceService } from './gituserservice.service';

describe('GituserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GituserserviceService = TestBed.get(GituserserviceService);
    expect(service).toBeTruthy();
  });
});
