import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() data : any ;
  @Input() label: string = "";
  @Input() disabled: boolean = false;

  constructor() {
    this.data = "Angular is good";
   }
  ngOnInit() {
      
  }
}
