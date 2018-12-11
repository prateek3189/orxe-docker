import { Component, OnInit, Input } from '@angular/core';
import { ComponentService } from 'src/app/component.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  @Input() Component: string = null;
  constructor(public componentdata: ComponentService, private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.Url = "http://127.0.0.1:8080/components/" + this.Component + ".html";
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
    this.Url = "http://127.0.0.1:8080/components/" + this.Component + ".html";
  }
}
