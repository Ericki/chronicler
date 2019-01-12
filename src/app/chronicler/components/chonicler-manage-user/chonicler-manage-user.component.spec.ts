import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerManageUserComponent } from './chonicler-manage-user.component';

describe('ChoniclerManageUserComponent', () => {
  let component: ChoniclerManageUserComponent;
  let fixture: ComponentFixture<ChoniclerManageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerManageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
