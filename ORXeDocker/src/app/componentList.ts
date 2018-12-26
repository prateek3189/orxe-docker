export const appliCationComponentList = [
  {
    name: "In Application Componet",
    componentname: "DemoComponent",
    className: "DemoComponent",
    moduleDetails: {
      module: null,
    },
    template: `<app-demo [label] ='Label' [disabled] = 'disabled' [data]='Data'></app-demo>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    properties: [
      { name: 'Label', value: "", type: String, defaultValue: '' },
      { name: 'Data', value: "", type: String, defaultValue: 'Data Value' }
    ],
    commands: {
      dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
      libraries: ['npm install --save @angular/material @angular/cdk @angular/animations'],
      Serve: ['ng serve']
    }
  },
  {
    name: "Prime NG",
    componentname: "DemoComponent",
    className: null,
    moduleDetails: {
      module: ["ButtonModule"],
      modulePath: `primeng/button`
    },
    template: `<button pButton type="button" icon="pi pi-check" [label]='Label'></button>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    properties: [
      { name: 'Label', value: "", type: String, defaultValue: 'Prime NG Button Demo' }
    ],
    commands: {
      dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
      libraries: ['npm i primeng','npm i primeicons'],
      Serve: ['ng serve']
    }
  },
  {
    name: "Defualt AM Button ",
    componentname: "DefualtAMButtonComponent",
    className: null,
    moduleDetails: {
      module: ['MatButtonModule'],
      modulePath: `angular/material`
    },
    template: `<button mat-raised-button [color]='Color' [disabled]="Disabled">AM Primary</button>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    properties: [
      { name: 'Color', value: "", type: Array, defaultValue: 'primary', List: ['accent', 'primary', 'warn'] },
      { name: 'Disabled', value: "true", type: Boolean, defaultValue: false },
    ],
    commands: {
      dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
      libraries: ['npm install --save @angular/material @angular/cdk @angular/animations'],
      Serve: ['ng serve']
    }
  },
  {
    name: "Defualt AM Menu List",
    componentname: "DefualtAMMenuListComponent",
    className: null,
    moduleDetails: {
      module: ['MatButtonModule', 'MatIconModule', 'MatMenuModule'],
      modulePath: `angular/material`,
    },
    template: `<button mat-raised-button color="primary" [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
       <button  mat-menu-item *ngFor="let item of ListItems" value="{{item.value}}">{{item.label}}</button>
     </mat-menu>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/menu/README.md",
    properties: [
      { name: 'ListItems', value: "", type: Object, defaultValue: [{ label: 'IN', value: 'INDIA' }, { label: 'US', value: 'UNITED STATES' }] },
    ],
    commands: {
      dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
      libraries: ['npm install --save @angular/material @angular/cdk @angular/animations'],
      Serve: ['ng serves']
    }
  }
]