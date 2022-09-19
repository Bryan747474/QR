import { TestBed } from '@angular/core/testing';

import { LoginprofeService } from './loginprofe.service';

describe('LoginprofeService', () => {
  let service: LoginprofeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginprofeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
