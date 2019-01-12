import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerCommunityFormComponent } from './chonicler-community-form.component';

describe('ChoniclerCommunityFormComponent', () => {
  let component: ChoniclerCommunityFormComponent;
  let fixture: ComponentFixture<ChoniclerCommunityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerCommunityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerCommunityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
