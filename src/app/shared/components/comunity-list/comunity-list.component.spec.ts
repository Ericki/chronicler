import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunityListComponent } from './comunity-list.component';

describe('ComunityListComponent', () => {
  let component: ComunityListComponent;
  let fixture: ComponentFixture<ComunityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
