(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato');\r\n\r\n#mynetwork {\r\n  height: 500px;\r\n  width: 60%;\r\n  margin: auto;\r\n  border: 1px #AAAAAA solid;\r\n  background-color: #b4b4b4;\r\n}\r\n\r\n.placeholder {\r\n  margin-top: 200px;\r\n  text-align: center;\r\n}\r\n\r\n.info-bar {\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 18%;\r\n  float: left;\r\n  background-color: #888888;\r\n  color: white;\r\n  margin: 0 5px 5px;\r\n  padding: 5px;\r\n}\r\n\r\n.info-bar p {\r\n  color: white;\r\n}\r\n\r\np.server-link:hover {\r\n  color: blue;\r\n}\r\n\r\n.filters{\r\n  margin: auto;\r\n  max-width: 60%;\r\n  text-align: center;\r\n  padding-top: 60px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.banner {\r\n  background-color: #AAAAAA;\r\n  color: white;\r\n  padding: 10px 0 10px 30px;\r\n  text-align: left;\r\n}\r\n\r\n.selection-item {\r\n  display: inline-block;\r\n  margin: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <h1>Dominos</h1>\n</div>\n<div class=\"container\">\n\n  <div class=\"filters\">\n    <h3>View</h3>\n    <form class=\"selection-filter\">\n\n      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n        <label class=\"btn btn-secondary\">\n          <input type=\"radio\" name=\"view\" [(ngModel)]=\"selectedView\" value=\"platform\">\n          Platform</label>\n\n        <label class=\"btn btn-secondary\">\n          <input type=\"radio\" name=\"view\" [(ngModel)]=\"selectedView\" value=\"server\">\n          Server</label>\n\n        <label class=\"btn btn-secondary\">\n          <input type=\"radio\" name=\"network\" [(ngModel)]=\"selectedView\" value=\"network\">\n          Network</label>\n      </div>\n    </form>\n\n    <form [formGroup]=\"serverForm\" (ngSubmit)=\"generateVisualisation()\" *ngIf=\"selectedView === 'server'\">\n      <label>Server\n        <select formControlName=\"server\" class=\"custom-select\">\n          <option disabled selected value> -- select an option --</option>\n          <option>PRODAPP20</option>\n          <option>UL11as32V</option>\n          <option>hb13as35v</option>\n          <option>RECOAPP20</option>\n        </select>\n      </label>\n\n      <button type=\"submit\" class=\"btn btn-success\">Generate</button>\n    </form>\n\n    <form *ngIf=\"selectedView === 'platform'\" [formGroup]=\"applicationForm\" (ngSubmit)=\"generateVisualisation()\">\n      <div class=\"selection-item\">\n        <label>Platform\n          <select formControlName=\"platform\" class=\"custom-select\">\n            <option disabled selected value> -- select an option --</option>\n            <option value=\"switch\">Switch</option>\n            <option value=\"API\">API</option>\n            <option>Mobile</option>\n            <option>Portal</option>\n            <option>Fraud</option>\n          </select>\n        </label>\n      </div>\n\n      <div *ngIf=\"applicationForm.value.platform === 'API'\" class=\"selection-item\">\n        <label>Service\n          <select formControlName=\"application\" class=\"custom-select\">\n            <option disabled selected value> -- select an option --</option>\n            <option value=\"cardControls\">Card Controls</option>\n            <option >Security Service</option>\n          </select>\n        </label>\n      </div>\n\n      <div *ngIf=\"applicationForm.value.platform === 'switch'\" class=\"selection-item\">\n        <label>Switch\n          <select formControlName=\"application\" class=\"custom-select\">\n            <option disabled selected value> -- select an option --</option>\n            <option value=\"authentic\">Authentic</option>\n            <option >Postilion</option>\n          </select>\n        </label>\n      </div>\n      <div>\n        <button type=\"submit\" class=\"btn btn-success\">Show Me</button>\n\n      </div>\n\n    </form>\n  </div>\n\n</div>\n<div id=\"graphAndInfo\">\n  <div class=\"info-bar\" *ngIf=\"selectedApplication != null\">\n    <p>Name: {{selectedApplication.name}}</p>\n    <p>Clients:</p>\n    <ul *ngFor=\"let client of selectedApplication.clients\">\n      <li>{{client}}</li>\n    </ul>\n    <p class=\"server-link\" (click)=\"changeView('server', selectedApplication.server)\">Running on server:\n      {{selectedApplication.server}}</p>\n    <p>Product Owner: {{selectedApplication.productOwner}}</p>\n  </div>\n  <div id=\"mynetwork\"><div class=\"wrapper\">\n    <div class=\"letters\"><span class=\"letter\">v</span><span class=\"letter\">i</span><span class=\"letter\">s</span><span class=\"letter\">u</span><span class=\"letter\">a</span><span class=\"letter\">l</span><span class=\"letter\">i</span><span class=\"letter\">s</span><span class=\"letter\">e</span><span class=\"letter\">r</span>\n    </div>\n  </div></div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.title = 'impact-analysis';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.applicationForm = this.formBuilder.group({
            platform: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            application: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.serverForm = this.formBuilder.group({
            server: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AppComponent.prototype.changeView = function (view, server) {
        this.selectedView = view;
        this.serverForm.setValue({ server: server });
        this.generateVisualisation();
    };
    AppComponent.prototype.generateVisualisation = function () {
        var _this = this;
        console.log(this.selectedView);
        if (this.selectedView === 'platform') {
            if (this.applicationForm.valid && this.applicationForm.value.application === 'cardControls') {
                var nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([
                    { id: 1, label: 'Card Controls', color: '#ff8878' },
                    { id: 2, label: 'SPS Portal' },
                    { id: 3, label: 'EFT Portal' },
                    { id: 4, label: 'Database' },
                    { id: 5, label: 'Switch AUX' },
                    { id: 6, label: 'Switch Pos' },
                    { id: 7, label: 'Mobile Apps' },
                ]);
                var edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([
                    { from: 1, to: 4 },
                    { from: 2, to: 1 },
                    { from: 3, to: 1 },
                    { from: 5, to: 4 },
                    { from: 6, to: 4 },
                    { from: 7, to: 1 },
                ]);
                var network = displayGraph(nodes, edges);
                network.on('click', function (properties) {
                    console.log(properties);
                    if (properties.nodes[0] === 1) {
                        _this.selectedApplication = {
                            name: 'Card Controls',
                            clients: ['CUA', 'TMB', 'FB'],
                            server: 'PRODAPP20',
                            productOwner: 'The coolest product owner'
                        };
                    }
                    else if (properties.nodes[0] === 2) {
                        _this.selectedApplication = {
                            name: 'SPS Portal',
                            clients: ['ING', 'Bendigo', 'CUA'],
                            server: 'EFTPOS20',
                            productOwner: 'Joe from accounting'
                        };
                    }
                    else {
                        _this.selectedApplication = null;
                    }
                });
            }
            else if (this.applicationForm.valid && this.applicationForm.value.application === 'authentic') {
                var nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([
                    { id: 1, label: 'Authentic', color: 'green' },
                    { id: 2, label: 'Pin Status' },
                    { id: 3, label: 'Message Broker' },
                    { id: 4, label: 'VISA' },
                    { id: 5, label: 'E-Hub' },
                    { id: 6, label: 'MasterCard' },
                    { id: 7, label: 'Bilat' },
                    { id: 8, label: 'Fraud' },
                    { id: 9, label: 'CBS' },
                    { id: 10, label: 'Aux Database' }
                ]);
                var edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([
                    { from: 2, to: 1 },
                    { from: 3, to: 1 },
                    { from: 4, to: 1 },
                    { from: 5, to: 1 },
                    { from: 6, to: 1 },
                    { from: 7, to: 1 },
                    { from: 8, to: 1 },
                    { from: 9, to: 1 },
                    { from: 10, to: 1 },
                ]);
                var network = displayGraph(nodes, edges);
            }
        }
        else if (this.selectedView === 'server') {
            if (this.serverForm.valid) {
                var nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([
                    { id: 1, label: 'PRODAPP20', color: '#ff8878' },
                    { id: 2, label: 'PAYS' },
                    { id: 3, label: 'EFT Portal' },
                    { id: 4, label: 'Transaction Service' },
                    { id: 5, label: 'B2B Services' }
                ]);
                var edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([
                    { from: 2, to: 1 },
                    { from: 3, to: 1 },
                    { from: 4, to: 1 },
                    { from: 5, to: 1 }
                ]);
                var network = displayGraph(nodes, edges);
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());

function displayGraph(nodes, edges) {
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        edges: {
            arrows: 'to'
        }
    };
    return new vis__WEBPACK_IMPORTED_MODULE_1__["Network"](container, data, options);
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sam_c\Documents\impact-analysis\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map