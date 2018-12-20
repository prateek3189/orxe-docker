export const appliCationComponentList  = [
 {
     name : "In Application Componet",
     className : "DemoComponent",
     moduleDetails: {
      module: null,
    },
     template: `<app-demo [label] ='Label' [disabled] = 'disabled' [data]='Data'></app-demo>`,

     properties:[
      { name : 'Label', value: "", type: String , defaultValue:''},
      { name : 'Data', value: "", type: String , defaultValue: 'Data Value'}
    ]
  },
  {
    name : "Prime NG",
    className : null,
    moduleDetails: {
      module: ["ButtonModule"],
      modulePath: `primeng/button`
    },
    template : `<button pButton type="button" icon="pi pi-check" [label]='Label'></button>`,

    properties:[
      { name : 'Label', value: "", type: String , defaultValue:'Prime NG Button Demo'}
    ]
  },
  {
    name : "Defualt AM Button ",
    className : null,
    moduleDetails: {
      module: ['MatButtonModule'],
      modulePath: `angular/material`
    },
    template : `<button mat-raised-button [color]='Color' [disabled]="Disabled">AM Primary</button>`,

    properties:[
      { name : 'Color', value: "", type: Array , defaultValue: 'primary', List: ['accent', 'primary', 'warn']},
      { name : 'Disabled', value:"true", type: Boolean , defaultValue: false},
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
      <button  mat-menu-item *ngFor="let item of ListItems" value="{{item.value}}">{{item.label}}</button>
    </mat-menu>`,

    properties:[
      { name : 'ListItems', value: "", type: Object , defaultValue:[{label:'IN', value: 'INDIA'}, {label: 'US', value: 'UNITED STATES'} ]},
    ]
  }
]