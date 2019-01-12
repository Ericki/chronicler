import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerCommunitysComponent } from './chonicler-communitys.component';

describe('ChoniclerCommunitysComponent', () => {
  let component: ChoniclerCommunitysComponent;
  let fixture: ComponentFixture<ChoniclerCommunitysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerCommunitysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerCommunitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
