import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materialdesign';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ComponentsComponent } from './main/components/components.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ComponentService } from './component.service';
import { FormsModule } from '@angular/forms';
import { ApiComponent } from './main/description/api/api.component';
import { ComponentLoaderDirective } from './component-loader.directive';
import { OverviewComponent } from './main/description/overview/overview.component';
import {ButtonModule} from 'primeng/button';
import { MarkdownModule } from 'ngx-markdown';
import { OverlayModule} from '@angular/cdk/overlay';
import { TestingComponent } from './main/description/testing/testing.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ComponentsComponent,
    FooterComponent,
    ApiComponent,
    ComponentLoaderDirective,
    OverviewComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    OverlayModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent],
})
export class AppModule { }
