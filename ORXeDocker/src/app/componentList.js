const appliCationComponentList = [
  {
    type: "CustomComponent",
    name: "Application Component",
    testFileName: "demo",
    path: "components/DemoComponent",
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
    type: "Button",
    name: "Prime NG",
    testFileName: "demo",
    path: "components/DemoComponent",
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
      type: "Button",
      name: "Defualt AM Button ",
      testFileName: "defualt-ambutton",
      path: "modules/MatButtonModule",
      className: null,
      moduleDetails: {
        module: ['MatButtonModule'],
        modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
        version: ['7.0.2','7.0.4','7.0.4']
      },
      template: `<button mat-raised-button id="myDIV" [color]='Color' [disabled]="Disabled" >AM Primary</button>`,
      githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/button.md",
      properties: [
        { name: 'Color', value: "", type: Array, defaultValue: 'primary', List: ['accent', 'primary', 'warn'] },
        { name: 'Disabled', value: "true", type: Boolean, defaultValue: false }
      ],
      styling: [
        { name: 'Background Color', value: "", type: "CSS" , property:'--navBackground'},
        { name: 'Text Color', value: "", type: "CSS" , property:'--navColor'},
        // { name: 'width', value: "", type: String, defaultValue: '10em',property:'--ButtonWidth' }
      ],
      commands: {
        dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
        libraries: ['npm install --save @angular/material @angular/cdk @angular/animations'],
        Serve: ['ng serve']
      }
    },
  {
    type: "Button",
    name: "Defualt AM Menu List",
    testFileName: "defualt-ammenu-list",
    path: "modules/MatMenuModule",
    className: null,
    moduleDetails: {
      module: ['MatButtonModule', 'MatIconModule', 'MatMenuModule'],
      modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
      version: ['7.0.2','7.0.4','7.0.4']
    },
    template: `<button id="myDIV" mat-raised-button color="primary" [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
       <button  mat-menu-item *ngFor="let item of ListItems" value="{{item.value}}">{{item.label}}</button>
     </mat-menu>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/menu/menu.md",
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
    type: "Button",
    name: "Tavisca Button",
    testFileName: "tavisca-button",
    path: "components/TaviscaButtonComponent",
    className: null,
    moduleDetails: {
      module: ['MatButtonModule'],
      modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
      version: ['7.0.2','7.0.4','7.0.4']
    },
    template: `<enl-tavisca-button id="myDIV" [color]='Color' [Disabled]="Disabled"></enl-tavisca-button>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    githubCode: "https://github.com/Tavisca-Saurabh/Angular-Library/tree/master/Tavisca-Orxe3-Library/projects/tavisca-orxe3-library/src/lib/tavisca-button",
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
    type: "Form",
    name: "Tavisca Input",
    testFileName: "tavisca-input",
    path: "components/TaviscaInputComponent",
    className: null,
    moduleDetails: {
      module: ['MatButtonModule'],
      modulePath: ['@angular/material','@angular/cdk','@angular/animations'],
      version: ['7.0.2','7.0.4','7.0.4']
    },
    template: `<enl-tavisca-input></enl-tavisca-input>`,
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    githubCode: "https://github.com/Tavisca-Saurabh/Angular-Library/tree/master/Tavisca-Orxe3-Library/projects/tavisca-orxe3-library/src/lib/tavisca-input",
    commands: {
      dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
      libraries: ['npm install --save @angular/material @angular/cdk @angular/animations','npm install "D:\Data After 1-12-2018\ORXe 3.0\Angular-Library\Tavisca-Orxe3-Library\dist\tavisca-orxe3-library\tavisca-orxe3-library-0.0.1.tgz"'],
      Serve: ['ng serve']
    }
  },
  {
    type: "CustomComponent",
    name: "Hotel item",
    testFileName: "hotel-item",
    path: "components/HotelItemComponent",
    className: null,
    moduleDetails: null,
    template: `<enl-hotel-item id="myDIV" [hotelDetails] = 'hotelDetails' ></enl-hotel-item>`,
    properties: [
    { name: 'hotelDetails', value: "", type: JSON, defaultValue: {"id":"86479","name":"Novotel Paris Rueil Malmaison","displayFare":{"currency":"USD","totalFare":127.72,"breakup":{"baseFare":122.11,"taxes":[{"desc":"TotalTax","amount":5.61}],"fees":[],"discounts":[],"markups":[]},"commissions":[]},"purchaseOption":{"totalPurchaseUnits":1,"cashCurrency":"USD","pointsCurrency":"Points","rewards":[{"id":"5259|5","name":"ORXeC Demo Hotel Reward $100 Dollars Off","rank":1,"type":"Dollars_Off","recommendation":{"maxQuantity":1,"cash":91.002,"points":212338},"isEligible":true,"ruleSet":{"minimumPoints":10000,"maximumPoints":212338,"pointToCashFactor":{"value":0,"operator":"Multiply"},"cashRoundingOff":100,"pointStepSize":1,"roundingType":"None"},"strikeoutValue":{"cash":0,"points":304340},"actualValue":{"cash":0,"points":303340},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"9.17"},{"key":"ClientPrice","value":"100.0000"},{"key":"CrossOffFareQuote","value":"240.92"}]},{"id":"5262|1","name":"ORXeC Demo Variable Hotel 3.0 PCM 1000","rank":2,"type":"Variable_TieredVariable_LAPF_HybridFTP","recommendation":{"maxQuantity":1,"cash":91.002,"points":212338},"isEligible":false,"ruleSet":{"minimumPoints":1000,"maximumPoints":212338,"pointToCashFactor":{"value":0.01,"operator":"Multiply"},"cashRoundingOff":0,"pointStepSize":1,"roundingType":"Up"},"strikeoutValue":{"cash":200,"points":304340},"actualValue":{"cash":0,"points":303340},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"9.17"},{"key":"CrossOffFareQuote","value":"240.92"}]},{"id":"5256|5","name":"ORXeC Demo Hotel Reward $100 Dollars Off","rank":1,"type":"Dollars_Off_Incremental","recommendation":{"maxQuantity":1,"cash":91.002,"points":212338},"isEligible":true,"ruleSet":{"minimumPoints":10000,"maximumPoints":212338,"pointToCashFactor":{"value":0,"operator":"Multiply"},"cashRoundingOff":100,"pointStepSize":1,"roundingType":"None"},"strikeoutValue":{"cash":0,"points":304340},"actualValue":{"cash":0,"points":303340},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"9.17"},{"key":"ClientPrice","value":"100.0000"},{"key":"CrossOffFareQuote","value":"240.92"}]},{"id":"23|124","name":"Pay in Cash","rank":100,"type":"Purchase","recommendation":{"maxQuantity":1,"cash":303.34,"points":0},"isEligible":true,"ruleSet":{"minimumPoints":0,"maximumPoints":0,"pointToCashFactor":{"value":0,"operator":"Multiply"},"cashRoundingOff":0,"pointStepSize":0,"roundingType":"Up"},"strikeoutValue":{"cash":313.34,"points":0},"actualValue":{"cash":303.34,"points":0},"stateBag":[{"key":"RequiresBinValidation","value":"False"},{"key":"RequiresOrderHistoryValidation","value":"False"},{"key":"DiscountAmount","value":"0"},{"key":"DiscountType","value":"None"},{"key":"FareQuoteAdjustmentAmount","value":"0"},{"key":"UnitSupplierFee","value":"0"},{"key":"UnitTax","value":"0"},{"key":"CrossOffFareQuote","value":"0"}]}]},"content":{"rating":4,"geocode":{"lat":48.888345,"long":2.168415},"contact":{"phones":[],"address":{"city":{"code":"","name":"Rueil-Malmaison"},"line1":"21 Avenue Edouard Belin","line2":"","state":{"code":"","name":""},"countryCode":"FR","postalCode":"92566"}},"descriptions":[],"activities":[],"areaAttractions":[],"policies":[],"amenities":[],"hotelChain":{"name":"Novotel"},"thumbnails":[],"images":[]},"distanceKm":30.85,"supplierId":"2qir9x6t6gw","refundability":"Unknown"} },
    ],
    githubMarkDown: "https://raw.githubusercontent.com/angular/material2/master/src/lib/button/README.md",
    githubCode: "https://github.com/Tavisca-Saurabh/Angular-Library/tree/master/Tavisca-Orxe3-Library/projects/tavisca-orxe3-library/src/lib/hotel-item",
    commands: {
    dependencies: ['Node (>6.0.0)', 'Npm (>3.8.6)'],
    libraries: ['npm install --save @angular/material @angular/cdk @angular/animations', 'npm install "D:\Data After 1-12-2018\ORXe 3.0\Angular-Library\Tavisca-Orxe3-Library\dist\tavisca-orxe3-library\tavisca-orxe3-library-0.0.1.tgz"'],
    Serve: ['ng serve']
    }
    }
]

exports.compList = appliCationComponentList;

const MenuList = [
  {
      List: ['CustomComponent', 'Form','Button'],
  }
]

exports.menuList = MenuList;
