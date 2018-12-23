import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtAMButtonComponent } from './defualt-ambutton.component';

describe('DefualtAMButtonComponent', () => {
  let component: DefualtAMButtonComponent;
  let fixture: ComponentFixture<DefualtAMButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefualtAMButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefualtAMButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
