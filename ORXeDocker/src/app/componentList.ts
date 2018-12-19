export const appliCationComponentList  = [
 {
     name : "In Application Componet",
     className : "DemoComponent",
     moduleDetails: {
      module: null,
    },
     template: `<app-demo [label] ='label' [disabled] = 'disabled' [data]='data'></app-demo>`,
     defaultProperties: {
      label: '',
      data:'Data Value'
     },
     properties:[
      { name : 'label', value: "", type: 'text'},
      { name : 'data', value: "", type: 'text'}
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
    defaultProperties: {
      label: 'Prime NG Button Demo'
    },
    properties:[
      { name : 'label', value: "", type: 'text'}
    ]
  },
  {
    name : "Defualt AM Button ",
    className : null,
    moduleDetails: {
      module: null,
    },
    template : `<button mat-raised-button [color]='color' [disabled]="disabled">AM Primary</button>`,
    defaultProperties: {
      color: 'primary',
      disabled: false,
    },
    properties:[
      { name : 'color', value: "", type: 'text'},
      { name : 'disabled', value:"true", type: "checkbox"},
    ]
  },
  {
    name : "Defualt AM Menu List",
    className : null,
    moduleDetails: {
      module: ['MatButtonModule', 'MatIconModule', 'MatMenuModule'],
      template : `<button mat-button [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
        <button mat-menu-item *ngFor="let shoe of typesOfShoes">{{shoe}}</button>
      </mat-menu>`,
    },
    template : `<button mat-button [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let shoe of typesOfShoes">{{shoe}}</button>
    </mat-menu>`,
    defaultProperties: {
      typesOfShoes: ['Boots', 'Clogs']
    },
    properties:[
      { name : 'typesOfShoes', value: "", type: 'text'},
    ]
  }
]