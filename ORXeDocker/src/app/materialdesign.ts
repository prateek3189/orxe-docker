import {MatExpansionModule,MatCardModule,MatTableModule,MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatExpansionModule,MatCardModule,MatTableModule,MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule],
  exports: [MatExpansionModule,MatCardModule,MatTableModule,MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule],
})
export class MaterialModule { }