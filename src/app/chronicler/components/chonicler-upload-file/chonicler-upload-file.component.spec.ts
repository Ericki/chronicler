import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerUploadFileComponent } from './chonicler-upload-file.component';

describe('ChoniclerUploadFileComponent', () => {
  let component: ChoniclerUploadFileComponent;
  let fixture: ComponentFixture<ChoniclerUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
