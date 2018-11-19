import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentService } from 'src/app/component.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent {
  public data = [];
  @Output() component: EventEmitter<string> = new EventEmitter<string>();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver , private _componentdata: ComponentService) {}

  ngOnInit(){
    this._componentdata.getComponentData()
    .subscribe(data=>{
      this.data = data;
      //console.log(this.data);
      this._componentdata.response = this.data;
    });
  }
  MoreInfo(component: string) {
    this.component.emit(component);
  }

}
