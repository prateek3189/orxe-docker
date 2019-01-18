import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaviscaInputComponent } from './tavisca-input.component';
import {MatInputModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('TaviscaInputComponent', () => {
  let component: TaviscaInputComponent;
  let fixture: ComponentFixture<TaviscaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaviscaInputComponent ],
      imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaviscaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
