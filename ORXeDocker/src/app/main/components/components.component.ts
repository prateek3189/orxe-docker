import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentService } from 'src/app/component.service';
import { ComponentdataService } from 'src/app/componentdata.service';

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
  @Output() component: EventEmitter<string> = new EventEmitter<string>();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private _componentdata: ComponentdataService) { }

  ngOnInit() {
    this.data = this._componentdata.getComponentData();
    this.MenuList = this._componentdata.getMenuList();
  }

  MoreInfo(component) {
    this.component.emit(component);
    this._componentdata.setComponent(component);
  }

}
