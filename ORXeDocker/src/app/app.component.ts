import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public overlayContainer: OverlayContainer){}
  name = 'Angular 7';
  @HostBinding('class') componentCssClass;

onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}

