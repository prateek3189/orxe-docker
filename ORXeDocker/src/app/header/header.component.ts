import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('navbar', {read: ElementRef}) private elementView: ElementRef;
  @Output() Theme: EventEmitter<string> = new EventEmitter<string>();
  navbarHeight: number;
  constructor() { }

  ngOnInit() {
    // this.navbarHeight = this.elementView.nativeElement.offsetHeight;
    // console.log("Navbar Height: ", this.navbarHeight);
  }

  onSetTheme(Theme) {
    this.Theme.emit(Theme);
  }
}
