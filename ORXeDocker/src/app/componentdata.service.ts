import { Injectable } from '@angular/core';
import { compList } from './componentList';
import { Data } from './componentdata.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentdataService {


  componentsList = [];
  selectedComponent : Data;
  constructor() {
    this.componentsList = compList;
  }

  getComponentData() {
    return this.componentsList;
  }

  setComponent(component) {
    this.selectedComponent = component;
  }

  getComponent() {
    return this.selectedComponent;
  }
  ngOnChanges(){
    console.log("abc");
    console.log(this.selectedComponent);
  }
}
