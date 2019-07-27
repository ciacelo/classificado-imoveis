import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInitialComponent } from './menu-initial.component';

describe('MenuInitialComponent', () => {
  let component: MenuInitialComponent;
  let fixture: ComponentFixture<MenuInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
