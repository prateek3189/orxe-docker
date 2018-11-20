import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['Name', 'Description'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  Name: string;
  Description: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Name: 'Hydrogen', Description: 1.0079},
  {Name: 'Helium', Description: 4.0026},
  { Name: 'Lithium', Description: 6.941},
  { Name: 'Beryllium', Description: 9.0122},
  {Name: 'Boron', Description: 10.811},
  {Name: 'Carbon', Description: 12.0107},
];
