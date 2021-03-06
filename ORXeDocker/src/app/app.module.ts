import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materialdesign';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DescriptionComponent } from './main/description/description.component';
import { ComponentsComponent } from './main/components/components.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ComponentService } from './component.service';
import { FormsModule } from '@angular/forms';
import { CodepenComponent } from './main/description/codepen/codepen.component';
import { ApiComponent } from './main/description/api/api.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    DescriptionComponent,
    ComponentsComponent,
    FooterComponent,
    CodepenComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
