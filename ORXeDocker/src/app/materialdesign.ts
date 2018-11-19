import {MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule],
  exports: [MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule],
})
export class MaterialModule { }