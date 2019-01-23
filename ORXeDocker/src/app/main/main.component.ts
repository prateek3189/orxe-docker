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
  this.componentdata.getComponent().subscribe(data => {
    this.Component = data;
    //this.loader = this.searchService.loader;
    // console.log("Loader: " + this.loader);
     //console.log("Response: " + this.Component);
  })
}
ngOnChanges(){
 // this.Component = this.componentdata.getComponent();
}
}
