import {MatMenuModule,MatSidenavModule,MatButtonModule,MatInputModule,MatCheckboxModule,MatListModule,MatExpansionModule,MatCardModule,MatTableModule,MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatMenuModule,MatSidenavModule,MatButtonModule,MatInputModule,MatCheckboxModule,MatListModule,MatExpansionModule,MatCardModule,MatTableModule,MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule],
  exports: [MatMenuModule,MatSidenavModule,MatButtonModule,MatInputModule,MatCheckboxModule,MatListModule,MatExpansionModule,MatCardModule,MatTableModule,MatIconModule,MatToolbarModule,MatChipsModule,MatTabsModule],
})
export class MaterialModule { }