import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerUploadImageComponent } from './chonicler-upload-image.component';

describe('ChoniclerUploadImageComponent', () => {
  let component: ChoniclerUploadImageComponent;
  let fixture: ComponentFixture<ChoniclerUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
