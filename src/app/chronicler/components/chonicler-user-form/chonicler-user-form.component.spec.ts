import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerUserFormComponent } from './chonicler-user-form.component';

describe('ChoniclerUserFormComponent', () => {
  let component: ChoniclerUserFormComponent;
  let fixture: ComponentFixture<ChoniclerUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
