import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStepsComponent } from './ad-steps.component';

describe('AdStepsComponent', () => {
  let component: AdStepsComponent;
  let fixture: ComponentFixture<AdStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
