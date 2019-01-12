import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerImageComponent } from './chonicler-image.component';

describe('ChoniclerImageComponent', () => {
  let component: ChoniclerImageComponent;
  let fixture: ComponentFixture<ChoniclerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
