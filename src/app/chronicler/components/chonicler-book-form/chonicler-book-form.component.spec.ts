import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerBookFormComponent } from './chonicler-book-form.component';

describe('ChoniclerBookFormComponent', () => {
  let component: ChoniclerBookFormComponent;
  let fixture: ComponentFixture<ChoniclerBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
