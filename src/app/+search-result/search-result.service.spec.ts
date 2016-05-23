import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SearchResultService } from './search-result.service';

describe('SearchResult Service', () => {
  beforeEachProviders(() => [SearchResultService]);

  it('should ...',
      inject([SearchResultService], (service: SearchResultService) => {
    expect(service).toBeTruthy();
  }));
});
