import {MatChipsModule,MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatChipsModule,MatTabsModule],
  exports: [MatChipsModule,MatTabsModule],
})
export class MaterialModule { }