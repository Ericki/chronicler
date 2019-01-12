import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerBooksComponent } from './chonicler-books.component';

describe('ChoniclerBooksComponent', () => {
  let component: ChoniclerBooksComponent;
  let fixture: ComponentFixture<ChoniclerBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
