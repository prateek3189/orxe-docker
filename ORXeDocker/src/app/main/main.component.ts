import { Component, OnInit } from '@angular/core';
import { ComponentdataService } from '../componentdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
Component:any=null;

constructor(public componentdata: ComponentdataService) { }

ngOnInit() {
  //this.Component = this.componentdata.getComponent();
}
ngOnChanges(){
 // this.Component = this.componentdata.getComponent();
}
  MoreInfo(Component) {
    this.Component = Component;
  }

}
