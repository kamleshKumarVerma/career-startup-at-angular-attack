import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HomeService } from './home.service';

describe('Home Service', () => {
  beforeEachProviders(() => [HomeService]);

  it('should ...',
      inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));
});
