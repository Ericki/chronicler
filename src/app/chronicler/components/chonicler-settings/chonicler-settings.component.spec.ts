import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoniclerSettingsComponent } from './chonicler-settings.component';

describe('ChoniclerSettingsComponent', () => {
  let component: ChoniclerSettingsComponent;
  let fixture: ComponentFixture<ChoniclerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoniclerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoniclerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
