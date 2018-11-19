import { Component, OnInit, Input } from '@angular/core';
import { ComponentService } from 'src/app/component.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() Component: string = null;
  constructor(public componentdata: ComponentService, private router: Router) {

    // setTimeout(() => {
    //   console.log(this.router.url.substring(1,this.router.url.length));
    // }, 1000);
  }

  ngOnInit() { }
  //ngOnChanges(){console.log(this.Component);}

}
