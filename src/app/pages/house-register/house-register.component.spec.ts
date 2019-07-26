import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRegisterComponent } from './house-register.component';

describe('HouseRegisterComponent', () => {
  let component: HouseRegisterComponent;
  let fixture: ComponentFixture<HouseRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
