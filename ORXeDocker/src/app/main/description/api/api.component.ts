import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ComponentdataService } from 'src/app/componentdata.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  //trustedUrl:any;
  Url: any;
  /**
  * Get Component Name
  */
 @Input() Component;
  constructor(private sanitizer: DomSanitizer,public componentdata: ComponentdataService) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
   // console.log(this.Component);
    //this.Component = this.componentdata.selectedComponent.name;
    //console.log(this.componentdata.selectedComponent.name);
    this.Url = "http://127.0.0.1:8080/components/" + "ApiComponent" + ".html";
    //$('#iframeID').contents().find('#toppanel').hide();

    // this.printContents = document.getElementById('iframe').content;
    // var innerDoc = printContents.contentDocument || printContents.contentWindow.document; 
    // let printBody = innerDoc.body.innerText 
  }

  /**
  * @example
  * This is a good Way to use Url
  * this.sanitizer.bypassSecurityTrustResourceUrl(this.Url);
  */
  DocumentURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.Url);
  }
  ngOnChanges() {
   console.log(this.Component);
    console.log(this.Component.name);
    this.Url = "http://127.0.0.1:8080/components/" + "ApiComponent" + ".html";
  }
}
