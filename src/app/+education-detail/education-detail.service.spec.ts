import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { EducationDetailService } from './education-detail.service';

describe('EducationDetail Service', () => {
  beforeEachProviders(() => [EducationDetailService]);

  it('should ...',
      inject([EducationDetailService], (service: EducationDetailService) => {
    expect(service).toBeTruthy();
  }));
});
