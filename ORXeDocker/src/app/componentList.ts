export const appliCationComponentList  = [
 {
     name : "In Application Componet",
     className : "DemoComponent",
     moduleDetails: {
      module: null,
    },
     template: `<app-demo [label] ='label' [disabled] = 'disabled' [data]='data'></app-demo>`,

     properties:[
      { name : 'label', value: "", type: String , defaultValue:''},
      { name : 'data', value: "", type: String , defaultValue: 'Data Value'}
    ]
  },
  {
    name : "Prime NG",
    className : null,
    moduleDetails: {
      module: ["ButtonModule"],
      modulePath: `primeng/button`
    },
    template : `<button pButton type="button" icon="pi pi-check" [label]='label'></button>`,

    properties:[
      { name : 'label', value: "", type: String , defaultValue:'Prime NG Button Demo'}
    ]
  },
  {
    name : "Defualt AM Button ",
    className : null,
    moduleDetails: {
      module: ['MatButtonModule'],
      modulePath: `angular/material`
    },
    template : `<button mat-raised-button [color]='color' [disabled]="disabled">AM Primary</button>`,

    properties:[
      { name : 'color', value: "", type: Array , defaultValue: 'primary', List: ['accent', 'primary', 'warn']},
      { name : 'disabled', value:"true", type: Boolean , defaultValue: false},
    ]
  },
  {
    name : "Defualt AM Menu List",
    className : null,
    moduleDetails: {
      module: ['MatButtonModule', 'MatIconModule', 'MatMenuModule'],
      modulePath: `angular/material`,
    },
    template : `<button mat-button [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
      <button  mat-menu-item *ngFor="let shoe of typesOfShoes" value="{{shoe.value}}">{{shoe.label}}</button>
    </mat-menu>`,

    properties:[
      { name : 'typesOfShoes', value: "", type: Object , defaultValue:[{label:'IN', value: 'INDIA'}, {label: 'US', value: 'UNITED STATES'} ]},
    ]
  }
]