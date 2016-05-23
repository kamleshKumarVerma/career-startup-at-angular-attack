import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SignupService } from './signup.service';

describe('Signup Service', () => {
  beforeEachProviders(() => [SignupService]);

  it('should ...',
      inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));
});
