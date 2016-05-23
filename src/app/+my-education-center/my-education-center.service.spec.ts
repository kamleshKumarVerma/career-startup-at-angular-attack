import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MyEducationCenterService } from './my-education-center.service';

describe('MyEducationCenter Service', () => {
  beforeEachProviders(() => [MyEducationCenterService]);

  it('should ...',
      inject([MyEducationCenterService], (service: MyEducationCenterService) => {
    expect(service).toBeTruthy();
  }));
});
