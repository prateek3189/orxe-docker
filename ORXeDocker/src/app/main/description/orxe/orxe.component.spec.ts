import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrxeComponent } from './orxe.component';

describe('OrxeComponent', () => {
  let component: OrxeComponent;
  let fixture: ComponentFixture<OrxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
