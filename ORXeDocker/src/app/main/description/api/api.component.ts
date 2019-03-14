import { Component, OnInit, Input, HostListener } from '@angular/core';
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
  githubMarkDown: string;
  screenHeight:any;
  IframeHeight:any;

  /**
  * Get Component Name
  */
  @Input() Component;
  constructor(private sanitizer: DomSanitizer, public componentdata: ComponentdataService) {
    this.sanitizer = sanitizer;
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight - 164;
        this.IframeHeight = window.innerHeight - 74 ;
        //this.screenWidth = window.innerWidth;
        console.log(this.screenHeight);
  }
  ngOnInit() {
    //console.log(this.Component.componentname);
    //this.Component = this.componentdata.selectedComponent.name;
    //console.log(this.componentdata.selectedComponent.name);
    this.Url = "http://127.0.0.1:8080/" + this.Component.path + ".html";
    this.githubMarkDown = this.Component.githubMarkDown;
    //console.log(this.githubMarkDown);
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
    this.githubMarkDown = this.Component.githubMarkDown;
    //console.log(this.githubMarkDown);
    //  console.log(this.Component);
    //   console.log(this.Component.componentname);
    // this.Url = "http://127.0.0.1:8080/components/" + this.Component.componentname + ".html";
    this.Url = "http://127.0.0.1:8080/" + this.Component.path + ".html";
  }
  githubMarkDownUrl() {
    this.githubMarkDown = this.Component.githubMarkDown;
    //console.log(this.githubMarkDown);
  }
}
