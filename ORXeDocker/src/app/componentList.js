const appliCationComponentList = [
  {
    name: "In Application Component",
    componentname: "DemoComponent",
    className: "DemoComponent",
    moduleDetails: null,
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
      modulePath: ['primeng','primeicons'],
      version: ['7.0.3','1.0.0']
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
      modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
      version: ['7.0.2','7.0.4','7.0.4']
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
      modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
      version: ['7.0.2','7.0.4','7.0.4']
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
  },
  {
    name: "Tavisca Button",
    componentname: "TaviscaButtonComponent",
    className: null,
    moduleDetails: {
      module: ['MatButtonModule'],
      modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
      version: ['7.0.2','7.0.4','7.0.4']
    },
    template: `<enl-tavisca-button [color]='Color' [Disabled]="Disabled"></enl-tavisca-button>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    properties: [
      { name: 'Color', value: "", type: Array, defaultValue: 'primary', List: ['accent', 'primary', 'warn'] },
      { name: 'Disabled', value: "true", type: Boolean, defaultValue: false }
    ],
    commands: {
      dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
      libraries: ['npm install --save @angular/material @angular/cdk @angular/animations','npm install "D:\Data After 1-12-2018\ORXe 3.0\Angular-Library\Tavisca-Orxe3-Library\dist\tavisca-orxe3-library\tavisca-orxe3-library-0.0.1.tgz"'],
      Serve: ['ng serve']
    }
  },
  {
    name: "Tavisca Input",
    componentname: "TaviscaInputComponent",
    className: null,
    moduleDetails: {
      module: ['MatButtonModule'],
      modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
      version: ['7.0.2','7.0.4','7.0.4']
    },
    template: `<enl-tavisca-input></enl-tavisca-input>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    commands: {
      dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
      libraries: ['npm install --save @angular/material @angular/cdk @angular/animations','npm install "D:\Data After 1-12-2018\ORXe 3.0\Angular-Library\Tavisca-Orxe3-Library\dist\tavisca-orxe3-library\tavisca-orxe3-library-0.0.1.tgz"'],
      Serve: ['ng serve']
    }
  }
]

exports.compList = appliCationComponentList;