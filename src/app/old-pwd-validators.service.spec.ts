import { TestBed } from '@angular/core/testing';

import { OldPwdValidatorsService } from './old-pwd-validators.service';

describe('OldPwdValidatorsService', () => {
  let service: OldPwdValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldPwdValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
