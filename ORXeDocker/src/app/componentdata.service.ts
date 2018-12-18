import { Injectable } from '@angular/core';
import { appliCationComponentList } from './componentList';
import { Data } from './componentdata.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentdataService {


  componentsList = [];
  selectedComponent : Data;
  constructor() {
    this.componentsList = appliCationComponentList;
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
