import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerUploadBookComponent } from './chonicler-upload-book.component';

describe('ChoniclerUploadBookComponent', () => {
  let component: ChoniclerUploadBookComponent;
  let fixture: ComponentFixture<ChoniclerUploadBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerUploadBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerUploadBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
