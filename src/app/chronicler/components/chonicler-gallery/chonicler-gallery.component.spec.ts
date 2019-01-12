import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerGalleryComponent } from './chonicler-gallery.component';

describe('ChoniclerGalleryComponent', () => {
  let component: ChoniclerGalleryComponent;
  let fixture: ComponentFixture<ChoniclerGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
