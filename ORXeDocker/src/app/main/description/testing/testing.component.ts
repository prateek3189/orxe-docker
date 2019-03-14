import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  @Input() Component = null;
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight - 138;
  }
  showTestResult:boolean = false;
  screenHeight:number;
  constructor(private http: HttpClient) { 
    this.getScreenSize();
  }
  testUrl = "http://localhost:3000/posts/check";
  testName = {
    "compName": ""
  };

  ngOnInit() {
  }

  ShowingTestResults() {
    //console.log(this.Component.fileName);
    this.testName = {
      "compName": this.Component.testFileName
    };
    this.http.post(this.testUrl, this.testName)
    .subscribe(err => console.log(err));
   
    this.showTestResult = true;
  }
  ngOnChanges() {
    //console.log(this.Component);
    this.showTestResult = false;
  }
}
