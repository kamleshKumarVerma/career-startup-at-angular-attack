import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AddEducationService } from './add-education.service';

describe('AddEducation Service', () => {
  beforeEachProviders(() => [AddEducationService]);

  it('should ...',
      inject([AddEducationService], (service: AddEducationService) => {
    expect(service).toBeTruthy();
  }));
});
