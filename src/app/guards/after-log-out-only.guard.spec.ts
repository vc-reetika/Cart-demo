import { TestBed } from '@angular/core/testing';

import { AfterLogOutOnlyGuard } from './after-log-out-only.guard';

describe('AfterLogOutOnlyGuard', () => {
  let guard: AfterLogOutOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfterLogOutOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
