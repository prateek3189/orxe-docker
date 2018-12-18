import { Component, OnInit, Input } from '@angular/core';
import { ComponentService } from 'src/app/component.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() Component: string = null;
  constructor(public componentdata: ComponentService) {}

  ngOnInit() { }

}
