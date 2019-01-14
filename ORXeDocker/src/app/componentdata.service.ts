import { Injectable } from '@angular/core';
import { compList,menuList } from './componentList';
import { Data } from './componentdata.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentdataService {


  componentsList = [];
  menuList = [];
  selectedComponent : Data;
  constructor() {
    this.componentsList = compList;
    this.menuList = menuList;
  }
getMenuList(){
  return this.menuList
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
