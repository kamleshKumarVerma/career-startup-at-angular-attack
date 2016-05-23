import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SearchbyService } from './searchby.service';

describe('Searchby Service', () => {
  beforeEachProviders(() => [SearchbyService]);

  it('should ...',
      inject([SearchbyService], (service: SearchbyService) => {
    expect(service).toBeTruthy();
  }));
});
