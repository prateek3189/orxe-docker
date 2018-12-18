import { Component, OnInit, Input, ViewContainerRef, Compiler, ComponentFactory, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ComponentdataService } from 'src/app/componentdata.service';
import { ComponentLoaderDirective } from 'src/app/component-loader.directive';
import { DemoComponent } from '../orxe/demo/demo.component';
import { CommonModule } from '@angular/common';
import * as _ from 'underscore';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import {ButtonModule} from 'primeng/button';



export interface IHaveDynamicData {}
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  @Input() Component;
  propertyArray; componentRef; componentList; CurrentComponent; ngMdlRef;
  dynamicImports = []; modulePath; moduleName; dynamicDeclarations = [];

  @ViewChild(ComponentLoaderDirective) appComponetLoder: ComponentLoaderDirective;


  constructor(private compiler: Compiler, private vcRef: ViewContainerRef,public componentdata: ComponentdataService) { }
  private _cacheOfFactories: {[templateKey: string]: ComponentFactory<IHaveDynamicData>} = {};


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
loadComponent(component) {
  //  debugger;
    if (this.componentRef) {
      this.componentRef.destroy();
     } 
    this.CurrentComponent = component
    let modulevalue = this.CurrentComponent.moduleDetails.module;
    let classname = this.CurrentComponent.className;
    let template = this.CurrentComponent.template;
    
    let componentProps = this.CurrentComponent.defaultProperties; 
    
    this.propertyArray = this.CurrentComponent.properties;

    this.createComponentFactory(template,modulevalue,classname)
      .then((factory: ComponentFactory<IHaveDynamicData>) =>
    {
            this.componentRef = this.appComponetLoder.viewContainerRef.createComponent(factory);
           for (var property in componentProps) {
            if (componentProps.hasOwnProperty(property)) {
                this.componentRef.instance[property] = componentProps[property];
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
    this.dynamicImports = [CommonModule, ButtonModule, MatMenuModule, MatButtonModule]
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
          template: tmpl
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
  
    valuechange(propName, value,type){
     debugger; 
      if(type=="checkbox"){
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
      else if(typeof this.componentRef.instance[propName] == "object" ){
        this.componentRef.instance[propName].push(value);
      }
      else{
        this.componentRef.instance[propName] = value;
      }
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

}