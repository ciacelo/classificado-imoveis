import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformPageComponent } from './reform-page.component';

describe('ReformPageComponent', () => {
  let component: ReformPageComponent;
  let fixture: ComponentFixture<ReformPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReformPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
