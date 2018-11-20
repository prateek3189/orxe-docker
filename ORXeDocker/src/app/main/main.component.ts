import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/component.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
Component:any=null;
  constructor(public componentdata: ComponentService) { }

  ngOnInit() {
  }

  MoreInfo(Component: string) {
    this.Component = Component;
  }

}
