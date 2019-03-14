import { Component, OnInit, Input, ViewContainerRef, Compiler, ComponentFactory, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NgModule, HostBinding, Inject, HostListener } from '@angular/core';
import { ComponentdataService } from 'src/app/componentdata.service';
import { ComponentLoaderDirective } from 'src/app/component-loader.directive';

import { CommonModule } from '@angular/common';
import * as _ from 'underscore';
import { MatInputModule,MatMenuModule, MatButtonModule } from '@angular/material';
import { ButtonModule } from 'primeng/button';
import { DemoComponent } from 'src/app/customiseComponents/demo/demo.component';
import { TaviscaOrxe3LibraryModule } from 'tavisca-orxe3-library';
import { throwError } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material';




export interface IHaveDynamicData {}
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  @Input() Component;
  stylingArray; propertyArray; componentRef; componentList; CurrentComponent; ngMdlRef;
  dynamicImports = []; modulePath; moduleName; dynamicDeclarations = [];
  MenuLabel="";
  MenuValue="";
  JsonData;
  screenHeight:number;

  @ViewChild(ComponentLoaderDirective) appComponentLoder: ComponentLoaderDirective;
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight - 130;
  }


  constructor(private bottomSheet: MatBottomSheet,private compiler: Compiler, private vcRef: ViewContainerRef,public componentdata: ComponentdataService, public overlayContainer: OverlayContainer) { 
    this.getScreenSize();
  }
  private _cacheOfFactories: {[templateKey: string]: ComponentFactory<IHaveDynamicData>} = {};

  checkStyle() {
    return false;
  }

ngOnInit() {
  // this.Component = this.componentdata.getComponent();
  //console.log(this.Component);
  this.componentList = this.Component;
}

ngOnChanges(){
  //console.log(this.Component.name);
  if(this.Component){
  this.loadComponent(this.Component);
  }
}

isString(Proptype) {
  if(Proptype === String) 
    return true;
  else
    return false;
}

isJson(Proptype) {
  if(Proptype === JSON) 
    return true;
  else
    return false;
}

isBoolean(Proptype) {
  if(Proptype === Boolean) 
    return true;
  else
    return false;
}

isArray(Proptype) {
  if(Proptype === Array )
    return true;
  else
    return false;
} 

isObject(Proptype) {
  if(Proptype === Object )
    return true;
  else
    return false;
}
isColor(Proptype) {
  if(Proptype === "CSS" )
    return true;
  else
    return false;
}

OnPropertySubmit(propName, propType) {
  if (this.MenuValue != "" && this.MenuLabel != "") {
    let MenuObject = {
      label: this.MenuLabel,
      value: this.MenuValue
    };
    this.MenuLabel = "";
    this.MenuValue = "";
    this.valuechange(propName, MenuObject, propType);
  }
}

  loadComponent(component) {
    //  debugger;
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.CurrentComponent = component;
    let modulevalue;
    if (this.CurrentComponent.moduleDetails != null) {
      modulevalue = this.CurrentComponent.moduleDetails.module;
    }
    else
      modulevalue = null;
    let classname = this.CurrentComponent.className;
    let template = this.CurrentComponent.template;

    this.propertyArray = this.CurrentComponent.properties;
    this.stylingArray = this.CurrentComponent.styling;

    this.createComponentFactory(template, modulevalue, classname)
      .then((factory: ComponentFactory<IHaveDynamicData>) => {
        this.componentRef = this.appComponentLoder.viewContainerRef.createComponent(factory);
        if (this.propertyArray) {
          for (let index = 0; index < this.propertyArray.length; index++) {
            let comp = this.propertyArray[index];
            this.componentRef.instance[comp.name] = comp.defaultValue
          }
        }
        if (this.stylingArray) {
          for (let index = 0; index < this.stylingArray.length; index++) {
            let comp = this.stylingArray[index];
            this.componentRef.instance[comp.name] = comp.defaultValue
          }
        }

      });
  }

  createComponentFactory(template: string,modulevalue: any,classname:any): Promise<ComponentFactory<IHaveDynamicData>> {
    //  debugger;
    let factory = this._cacheOfFactories[template];
  
    if (factory) {
        console.log("Module and Type are returned from cache")
       
        return new Promise((resolve) => {
            resolve(factory);
        });
    }
  
  
    //  let's create a Type for it
    this.dynamicImports = [CommonModule, ButtonModule, MatMenuModule, MatButtonModule,MatInputModule,TaviscaOrxe3LibraryModule]
    let  type = this.createNewComponent(template);
  if(modulevalue==null && classname!=null){
    this.dynamicDeclarations = [type,DemoComponent];
  }
  else{
    this.dynamicDeclarations = [type];
    modulevalue=null;
  }
    
    let module = this.createComponentModule(this.dynamicImports, this.dynamicDeclarations);
    
    return new Promise((resolve) => {
        this.compiler
            .compileModuleAndAllComponentsAsync(module)
            .then((moduleWithFactories) =>
            {
                factory = _.find(moduleWithFactories.componentFactories, { componentType: type });
  
                this._cacheOfFactories[template] = factory;
  
                resolve(factory);
                
            });
    });
  
    }
    
    createNewComponent (tmpl:string) {
      //debugger;
      @Component({
          selector: 'dynamic-component-renderer',
          template: tmpl,
          styleUrls: ['./overview.component.scss']
      })
      class CustomDynamicComponent {
        
      };
      // a component for this particular template
      return CustomDynamicComponent;
    }
  
  
    createComponentModule (dynamicImports: any, dynamicDeclarations: any) {
      //debugger;
      @NgModule({
        imports: dynamicImports,
        declarations: dynamicDeclarations,
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]      
      })
      class RuntimeComponentModule
      {
      }
     
      return RuntimeComponentModule;    
    }
    ngOnDestroy(){
     // debugger;
      if (this.componentRef) {     
        
          this.componentRef.destroy();
          this.componentRef = null;
  
      }
    }
    private themeWrapper = document.querySelector('body');
    @HostBinding('class') componentCssClass;
    valuechange(propName, value, type){
      var element = document.getElementById("myDIV");
      element.classList.remove("DynamicStyling");
      if(type== Boolean){
        if(this.componentRef.instance[propName] =="true"){
          this.componentRef.instance[propName] ="false";
        }
        else if(this.componentRef.instance[propName] =="false"){
          this.componentRef.instance[propName] ="true";
        }
        else{
          this.componentRef.instance[propName] ="true";
        }
      }
      else if(type ==  JSON && typeof this.componentRef.instance[propName] == "object" ){
        this.componentRef.instance[propName] = JSON.parse(value);
        this.JsonData = JSON.parse(value);
      }
      else if(typeof this.componentRef.instance[propName] == "object" ){
        this.componentRef.instance[propName].push(value);
      }
      else{
        this.componentRef.instance[propName] = value;
      }
    }

    stylechange(propName, value, type){
      debugger;
      var element = document.getElementById("myDIV");
      element.classList.add("DynamicStyling");
          this.themeWrapper.style.setProperty(propName, value);
      
    }
  
    getModule(){
      debugger;   
      (async () => {
        let moduleSpecifier = '@angular/material'
        const module = await import( '@angular/material')
        module.MatIconModule;
        // → logs 'Hi from the default export!'
        // → logs 'Doing stuff…'
      })();
      //this.dynamicImports.push(moduleSpecifier.ButtonModule); 
      
      // import('primeng/button')
      // .then((module) => {
      //   this.dynamicImports.push(module.ButtonModule);
      //   // → logs 'Doing stuff…'
      // });
      
  
    }
    openBottomSheet(prop): void {
         const bottomSheetRef = this.bottomSheet.open(BottomSheetOverviewExampleSheet, {
        data: { Object: this.JsonData },
      });
    bottomSheetRef.afterDismissed().subscribe((data) =>{
      //console.log(data);
      if(data){
        this.JsonData = JSON.parse(data);
      (<HTMLInputElement>document.getElementById("json")).value = data;
      this.componentRef.instance[prop.name] = JSON.parse(data);
      }
      //this.CurrentComponent.UpdateJson = data;
    })

    }
    }
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
  <form class="example-form">
  <mat-form-field class="example-full-width">
  <textarea matInput class = "jsonInput" placeholder="JSON DATA" value="{{ data.Object | json }}" (input)="valuechange($event.target.value)"></textarea>
  </mat-form-field></form>
  <button mat-raised-button color="primary" (click)="UpdateJson()">Update</button>`,
  styles: [`
  .jsonInput { height: 65vh; 
    } 

  .example-full-width {
    width: 100%;
  }`]
})
export class BottomSheetOverviewExampleSheet {
  UpdateJsonData;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  valuechange(UpdateValue){
     //console.log(UpdateValue);
     this.UpdateJsonData = UpdateValue;
  }
  UpdateJson(){
    //console.log(this.UpdateJsonData);
    this.bottomSheetRef.dismiss(this.UpdateJsonData);
  }
}