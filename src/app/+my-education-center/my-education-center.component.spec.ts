import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MyEducationCenterComponent } from './my-education-center.component';

describe('Component: MyEducationCenter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MyEducationCenterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MyEducationCenterComponent],
      (component: MyEducationCenterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MyEducationCenterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MyEducationCenterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-education-center></app-my-education-center>
  `,
  directives: [MyEducationCenterComponent]
})
class MyEducationCenterComponentTestController {
}

