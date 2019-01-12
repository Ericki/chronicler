import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityListComponent } from './municipality-list.component';

describe('MunicipalityListComponent', () => {
  let component: MunicipalityListComponent;
  let fixture: ComponentFixture<MunicipalityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
