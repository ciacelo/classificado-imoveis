import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMainUserComponent } from './menu-main-user.component';

describe('MenuMainUserComponent', () => {
  let component: MenuMainUserComponent;
  let fixture: ComponentFixture<MenuMainUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMainUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMainUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
