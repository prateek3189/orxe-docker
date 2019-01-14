import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentService } from 'src/app/component.service';
import { ComponentdataService } from 'src/app/componentdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent {
  public data = [];
  public MenuList = [];
  public List = [];
  Name: string;
  public previousComponent: any;
  @Output() component: EventEmitter<string> = new EventEmitter<string>();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private _componentdata: ComponentdataService, private router: Router) { }

  ngOnInit() {
    var str = window.location.href;
    var last = str.substring(str.lastIndexOf("/") + 1, str.length);
    this.previousComponent = decodeURIComponent(last);
    if (this.previousComponent != "") {
      this._componentdata.setComponent(this.previousComponent);
      this.data = this._componentdata.getComponentData();

      for (let value in this.data) {
        if (this.data[value].name == this.previousComponent) {
          this.MoreInfo(this.data[value]);
          break;
        }
      }
      this.MenuList = this._componentdata.getMenuList();
      this.router.navigate([this.previousComponent]);
    }
    else {
      this.data = this._componentdata.getComponentData();
      this.MenuList = this._componentdata.getMenuList();
    }
  }

  MoreInfo(component) {
    this.component.emit(component);
    this._componentdata.setComponent(component);
  }

}
