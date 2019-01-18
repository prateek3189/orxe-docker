import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtAMMenuListComponent } from './defualt-ammenu-list.component';
import { MatMenuModule} from '@angular/material/menu';

describe('DefualtAMMenuListComponent', () => {
  let component: DefualtAMMenuListComponent;
  let fixture: ComponentFixture<DefualtAMMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefualtAMMenuListComponent ],
      imports: [
        MatMenuModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefualtAMMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
