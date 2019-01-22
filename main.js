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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chef></app-chef>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translateService, locale) {
        this.title = 'giftshop';
        translateService.setDefaultLang(locale);
        translateService.use(locale);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], String])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: translateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateFactory", function() { return translateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chef_chef_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chef/chef.component */ "./src/app/chef/chef.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









function translateFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, '/assets/il8n/', '.json');
}
var IL8N_CONFIG = {
    loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
        useFactory: translateFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _chef_chef_component__WEBPACK_IMPORTED_MODULE_7__["ChefComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot(IL8N_CONFIG)
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'en-US' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chef/chef.component.html":
/*!******************************************!*\
  !*** ./src/app/chef/chef.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<li *ngFor= \"let chef of chefArray;\">\n    <span>{{ chef.name }}</span>\n    </li>\n\n\n    <form (ngSubmit)=\"submitChefForm()\" autocomplete=\"off\" [formGroup]=\"chefRequestForm\">\n        <div class=\"form-group\">\n            <input type=\"number\" formControlName=\"chefIdControl\">\n            <input type=\"submit\" value=\"Get\">\n        </div>\n    </form>\n\n\n    <ng-container *ngIf=\"chef.id && chef.inventory\">\n    <ng-container *ngIf=\"chef.inventory.length\">\n        <li *ngFor= \"let inven of chef.inventory;\">\n            <span>{{inven.name}}</span>\n        </li>\n    </ng-container>\n</ng-container>"

/***/ }),

/***/ "./src/app/chef/chef.component.scss":
/*!******************************************!*\
  !*** ./src/app/chef/chef.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chef/chef.component.ts":
/*!****************************************!*\
  !*** ./src/app/chef/chef.component.ts ***!
  \****************************************/
/*! exports provided: ChefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefComponent", function() { return ChefComponent; });
/* harmony import */ var _shared_service_chef_ingredients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/service/chef-ingredients.service */ "./src/app/shared/service/chef-ingredients.service.ts");
/* harmony import */ var _shared_state_chef_ingredients_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/state/chef-ingredients.store */ "./src/app/shared/state/chef-ingredients.store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_state_multiple_chefs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/state/multiple-chefs.store */ "./src/app/shared/state/multiple-chefs.store.ts");
/* harmony import */ var _shared_state_chef_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/state/chef.store */ "./src/app/shared/state/chef.store.ts");
/* harmony import */ var _shared_service_chef_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/service/chef.service */ "./src/app/shared/service/chef.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_state_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/state/store */ "./src/app/shared/state/store.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_service_ingredients_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/service/ingredients.service */ "./src/app/shared/service/ingredients.service.ts");
/* harmony import */ var _shared_state_ingredients_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/state/ingredients.store */ "./src/app/shared/state/ingredients.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChefComponent = /** @class */ (function () {
    function ChefComponent(formBuilder, chefService, chefStore, ingredientService, ingredientStore, chefIngredientsStore, chefIngredientsService, multipleChefsStore) {
        this.formBuilder = formBuilder;
        this.chefService = chefService;
        this.chefStore = chefStore;
        this.ingredientService = ingredientService;
        this.ingredientStore = ingredientStore;
        this.chefIngredientsStore = chefIngredientsStore;
        this.chefIngredientsService = chefIngredientsService;
        this.multipleChefsStore = multipleChefsStore;
        this.chefArray = [];
    }
    ChefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alive = true;
        this.chefRequestForm = this.formBuilder.group({
            chefIdControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        this.chefService.getChefs().pipe(Object(_shared_state_store__WEBPACK_IMPORTED_MODULE_7__["mapAction"])('LOADED')).subscribe(this.multipleChefsStore);
        this.multipleChefsStore.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; })).subscribe(function (array) {
            _this.chefArray = array;
        });
        this.chefStore.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; })).subscribe(function (chef) {
            if (chef.id) {
                _this.chefIngredientsService.getChefIngredientsById(chef.id).pipe(Object(_shared_state_store__WEBPACK_IMPORTED_MODULE_7__["mapAction"])('LOADED')).subscribe(_this.chefIngredientsStore);
            }
            _this.chef = chef;
        });
        this.chefIngredientsStore.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; })).subscribe(function (inventory) {
            if (_this.chef) {
                _this.chef.inventory = inventory;
                var allIngredientIds_1 = [];
                inventory.forEach(function (next) { return allIngredientIds_1.push(next.ingredientId); });
                _this.ingredientService.getIngredientsById(allIngredientIds_1).pipe(Object(_shared_state_store__WEBPACK_IMPORTED_MODULE_7__["mapAction"])('LOADED')).subscribe(_this.ingredientStore);
            }
        });
        this.ingredientStore.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; })).subscribe(function (array) {
            if (_this.chef) {
                if (_this.chef.inventory.length) {
                    _this.chef.inventory.forEach(function (ingredient, index) {
                        var storeIngredient = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](array, { id: ingredient.id });
                        _this.chef.inventory[index].name = storeIngredient.name;
                    });
                }
            }
        });
    };
    ChefComponent.prototype.getChef = function (id) {
        this.chefService.getChefById(id).pipe(Object(_shared_state_store__WEBPACK_IMPORTED_MODULE_7__["mapAction"])('LOADED')).subscribe(this.chefStore);
    };
    ChefComponent.prototype.submitChefForm = function () {
        this.getChef(this.chefRequestForm.get('chefIdControl').value);
    };
    ChefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-chef',
            template: __webpack_require__(/*! ./chef.component.html */ "./src/app/chef/chef.component.html"),
            styles: [__webpack_require__(/*! ./chef.component.scss */ "./src/app/chef/chef.component.scss")],
            providers: [
                _shared_state_chef_store__WEBPACK_IMPORTED_MODULE_4__["ChefStore"],
                _shared_state_chef_ingredients_store__WEBPACK_IMPORTED_MODULE_1__["ChefIngredientsStore"],
                _shared_state_ingredients_store__WEBPACK_IMPORTED_MODULE_11__["IngredientsStore"],
                _shared_state_multiple_chefs_store__WEBPACK_IMPORTED_MODULE_3__["MultipleChefsStore"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _shared_service_chef_service__WEBPACK_IMPORTED_MODULE_5__["ChefService"],
            _shared_state_chef_store__WEBPACK_IMPORTED_MODULE_4__["ChefStore"],
            _shared_service_ingredients_service__WEBPACK_IMPORTED_MODULE_10__["IngredientsService"],
            _shared_state_ingredients_store__WEBPACK_IMPORTED_MODULE_11__["IngredientsStore"],
            _shared_state_chef_ingredients_store__WEBPACK_IMPORTED_MODULE_1__["ChefIngredientsStore"],
            _shared_service_chef_ingredients_service__WEBPACK_IMPORTED_MODULE_0__["ChefIngredientsService"],
            _shared_state_multiple_chefs_store__WEBPACK_IMPORTED_MODULE_3__["MultipleChefsStore"]])
    ], ChefComponent);
    return ChefComponent;
}());



/***/ }),

/***/ "./src/app/shared/http/github-pages.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/http/github-pages.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: GithubPagesInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubPagesInterceptor", function() { return GithubPagesInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubPagesInterceptor = /** @class */ (function () {
    function GithubPagesInterceptor(ngZone) {
        this.ngZone = ngZone;
        this.href = '';
    }
    GithubPagesInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.ngZone.run(function () {
            _this.href = window.location.href;
        });
        if (this.href.includes('https://bgw7.github.io/')) {
            if (request.url.includes('/api/')) {
                var jsonServerUrl = request.url.replace('/api/', '/bgw7/angular-redux/');
                request = request.clone({
                    url: "https://my-json-server.typicode.com" + jsonServerUrl
                });
            }
            if (request.url.includes('/assets/il8n/')) {
                var translateFileUrl = request.url.replace('/assets/il8n/', '/assets/il8n/');
                request = request.clone({
                    url: translateFileUrl
                });
            }
        }
        return next.handle(request);
    };
    GithubPagesInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GithubPagesInterceptor);
    return GithubPagesInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/model/CookbookEvent.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/model/CookbookEvent.ts ***!
  \***********************************************/
/*! exports provided: EMPTY_COOKBOOK_EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_COOKBOOK_EVENT", function() { return EMPTY_COOKBOOK_EVENT; });
var EMPTY_COOKBOOK_EVENT = {};


/***/ }),

/***/ "./src/app/shared/service/chef-ingredients.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/service/chef-ingredients.service.ts ***!
  \************************************************************/
/*! exports provided: ChefIngredientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefIngredientsService", function() { return ChefIngredientsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChefIngredientsService = /** @class */ (function () {
    function ChefIngredientsService(http) {
        this.http = http;
        this.API_URL = '/api/chefIngredients';
    }
    ChefIngredientsService.prototype.getChefIngredientsById = function (id) {
        return this.http.get("" + this.API_URL, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('chefId', String(id)) });
    };
    ChefIngredientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ChefIngredientsService);
    return ChefIngredientsService;
}());



/***/ }),

/***/ "./src/app/shared/service/chef.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/chef.service.ts ***!
  \************************************************/
/*! exports provided: ChefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefService", function() { return ChefService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChefService = /** @class */ (function () {
    function ChefService(http) {
        this.http = http;
        this.API_URL = '/api/chefs';
    }
    ChefService.prototype.getChefs = function () {
        return this.http.get("" + this.API_URL);
    };
    ChefService.prototype.getChefById = function (id) {
        return this.http.get(this.API_URL + "/" + id);
    };
    ChefService.prototype.updateChef = function (chef) {
        return this.http.put("" + this.API_URL, chef);
    };
    ChefService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ChefService);
    return ChefService;
}());



/***/ }),

/***/ "./src/app/shared/service/cookbook-event.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/service/cookbook-event.service.ts ***!
  \**********************************************************/
/*! exports provided: CookbookEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookbookEventService", function() { return CookbookEventService; });
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/store */ "./src/app/shared/state/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_cookbook_event_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../state/cookbook-event.store */ "./src/app/shared/state/cookbook-event.store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CookbookEventService = /** @class */ (function () {
    function CookbookEventService(ngZone, cookbookEventStore) {
        this.ngZone = ngZone;
        this.cookbookEventStore = cookbookEventStore;
        this.API_URL = '/api/cookbook-events';
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._chef$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.alive = true;
        this.init();
    }
    CookbookEventService.prototype.init = function () {
        var _this = this;
        this._subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }), Object(_state_store__WEBPACK_IMPORTED_MODULE_0__["mapAction"])('ON_EVENT'))
            .subscribe(this.cookbookEventStore);
        this._chef$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (chef) { return _this.hasChefIdChanged(chef.id); }))
            .subscribe(function (chef) { return _this.resetEventSource(chef); });
    };
    CookbookEventService.prototype.resetEventSource = function (chef) {
        this.closeEventSource();
        this._chefId = !!chef.id ? chef.id : 0;
        if (this._chefId) {
            this.openEventSource();
        }
    };
    CookbookEventService.prototype.openEventSource = function () {
        var _this = this;
        this._eventSource = new EventSource(this.API_URL + "/" + this._chefId);
        this._eventSource.onmessage = function (event) {
            try {
                var cookbookEvent_1 = JSON.parse(event.data);
                _this.ngZone.run(function () { return _this._subject.next(cookbookEvent_1); });
            }
            catch (error) {
                console.log('Error parsing cookbook eventsource message: ', error);
            }
        };
        this._eventSource.onerror = function () {
            if (_this._eventSource.readyState === 2) {
                _this.ngZone.run(function () { return _this._eventSource.close(); });
            }
            ;
        };
    };
    CookbookEventService.prototype.closeEventSource = function () {
        var _this = this;
        if (this._eventSource) {
            this.ngZone.run(function () { return _this._eventSource.close(); });
        }
    };
    CookbookEventService.prototype.hasChefIdChanged = function (id) {
        return this._chefId !== id;
    };
    CookbookEventService.prototype.ngOnDestroy = function () {
        this.closeEventSource();
        this.alive = false;
    };
    CookbookEventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
            _state_cookbook_event_store__WEBPACK_IMPORTED_MODULE_2__["CookbookEventStore"]])
    ], CookbookEventService);
    return CookbookEventService;
}());



/***/ }),

/***/ "./src/app/shared/service/ingredients.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/ingredients.service.ts ***!
  \*******************************************************/
/*! exports provided: IngredientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsService", function() { return IngredientsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngredientsService = /** @class */ (function () {
    function IngredientsService(http) {
        this.http = http;
        this.API_URL = '/api/ingredients';
    }
    IngredientsService.prototype.getIngredients = function () {
        return this.http.get("" + this.API_URL);
    };
    IngredientsService.prototype.getIngredientsById = function (id) {
        var requestParam = '';
        id.forEach(function (nextId, index) {
            requestParam = index === id.length - 1 ? requestParam.concat('id=', nextId.toString()) : requestParam.concat('id=', nextId.toString(), '&');
        });
        return this.http.get(this.API_URL + "?" + requestParam);
    };
    IngredientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], IngredientsService);
    return IngredientsService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _service_chef_ingredients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/chef-ingredients.service */ "./src/app/shared/service/chef-ingredients.service.ts");
/* harmony import */ var _service_chef_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/chef.service */ "./src/app/shared/service/chef.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_cookbook_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/cookbook-event.service */ "./src/app/shared/service/cookbook-event.service.ts");
/* harmony import */ var _state_cookbook_event_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/cookbook-event.store */ "./src/app/shared/state/cookbook-event.store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_github_pages_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/github-pages.interceptor */ "./src/app/shared/http/github-pages.interceptor.ts");
/* harmony import */ var _service_ingredients_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/ingredients.service */ "./src/app/shared/service/ingredients.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                _service_cookbook_event_service__WEBPACK_IMPORTED_MODULE_6__["CookbookEventService"],
                _state_cookbook_event_store__WEBPACK_IMPORTED_MODULE_7__["CookbookEventStore"],
                _service_chef_service__WEBPACK_IMPORTED_MODULE_1__["ChefService"],
                _service_chef_ingredients_service__WEBPACK_IMPORTED_MODULE_0__["ChefIngredientsService"],
                _service_ingredients_service__WEBPACK_IMPORTED_MODULE_10__["IngredientsService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _http_github_pages_interceptor__WEBPACK_IMPORTED_MODULE_9__["GithubPagesInterceptor"],
                    multi: true
                }
            ]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/state/chef-ingredients.store.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/state/chef-ingredients.store.ts ***!
  \********************************************************/
/*! exports provided: ChefIngredientsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefIngredientsStore", function() { return ChefIngredientsStore; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/app/shared/state/store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChefIngredientsStore = /** @class */ (function (_super) {
    __extends(ChefIngredientsStore, _super);
    function ChefIngredientsStore() {
        return _super.call(this, [], {
            LOADED: function (state, action) { return action.payload.slice(); },
            UPDATED: function (state, action) { return action.payload.slice(); }
        }) || this;
    }
    ChefIngredientsStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChefIngredientsStore);
    return ChefIngredientsStore;
}(_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));



/***/ }),

/***/ "./src/app/shared/state/chef.store.ts":
/*!********************************************!*\
  !*** ./src/app/shared/state/chef.store.ts ***!
  \********************************************/
/*! exports provided: ChefStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefStore", function() { return ChefStore; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/app/shared/state/store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChefStore = /** @class */ (function (_super) {
    __extends(ChefStore, _super);
    function ChefStore() {
        return _super.call(this, {}, {
            LOADED: function (state, action) { return (__assign({}, action.payload)); },
            UPDATED: function (state, action) { return (__assign({}, action.payload)); }
        }) || this;
    }
    ChefStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChefStore);
    return ChefStore;
}(_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));



/***/ }),

/***/ "./src/app/shared/state/cookbook-event.store.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/state/cookbook-event.store.ts ***!
  \******************************************************/
/*! exports provided: CookbookEventStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookbookEventStore", function() { return CookbookEventStore; });
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _model_CookbookEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/CookbookEvent */ "./src/app/shared/model/CookbookEvent.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/app/shared/state/store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _chef_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chef.store */ "./src/app/shared/state/chef.store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CookbookEventStore = /** @class */ (function (_super) {
    __extends(CookbookEventStore, _super);
    function CookbookEventStore(chefStore) {
        var _this = _super.call(this, _model_CookbookEvent__WEBPACK_IMPORTED_MODULE_1__["EMPTY_COOKBOOK_EVENT"], {
            ON_EVENT: function (state, action) { return (__assign({}, state, action.payload)); }
        }) || this;
        _this.chefStore = chefStore;
        _this.init();
        return _this;
    }
    CookbookEventStore.prototype.init = function () {
        this.alive = true;
        this.sideEffects = {
            Chef: {
                action: function (chef) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].of({ type: 'UPDATED', payload: chef }); },
                store: this.chefStore
            }
        };
        this.subscribeEffectedStores();
    };
    CookbookEventStore.prototype.subscribeEffectedStores = function () {
        var _this = this;
        Object.keys(this.sideEffects).forEach(function (key) {
            _this.createSubscription(key);
        });
    };
    CookbookEventStore.prototype.createSubscription = function (model) {
        var _this = this;
        this.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return model in event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (event) { return _this.getAction(event, model); }))
            .subscribe(this.sideEffects[model].store);
    };
    CookbookEventStore.prototype.getAction = function (event, model) {
        return this.sideEffects[model].action(event[model]);
    };
    CookbookEventStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_chef_store__WEBPACK_IMPORTED_MODULE_6__["ChefStore"]])
    ], CookbookEventStore);
    return CookbookEventStore;
}(_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));



/***/ }),

/***/ "./src/app/shared/state/ingredients.store.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/state/ingredients.store.ts ***!
  \***************************************************/
/*! exports provided: IngredientsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsStore", function() { return IngredientsStore; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/app/shared/state/store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngredientsStore = /** @class */ (function (_super) {
    __extends(IngredientsStore, _super);
    function IngredientsStore() {
        return _super.call(this, [], {
            LOADED: function (state, action) { return action.payload.slice(); },
            UPDATED: function (state, action) { return action.payload.slice(); }
        }) || this;
    }
    IngredientsStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], IngredientsStore);
    return IngredientsStore;
}(_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));



/***/ }),

/***/ "./src/app/shared/state/multiple-chefs.store.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/state/multiple-chefs.store.ts ***!
  \******************************************************/
/*! exports provided: MultipleChefsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleChefsStore", function() { return MultipleChefsStore; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/app/shared/state/store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipleChefsStore = /** @class */ (function (_super) {
    __extends(MultipleChefsStore, _super);
    function MultipleChefsStore() {
        return _super.call(this, [], {
            LOADED: function (state, action) { return action.payload.slice(); }
        }) || this;
    }
    MultipleChefsStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MultipleChefsStore);
    return MultipleChefsStore;
}(_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));



/***/ }),

/***/ "./src/app/shared/state/store.ts":
/*!***************************************!*\
  !*** ./src/app/shared/state/store.ts ***!
  \***************************************/
/*! exports provided: mapAction, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAction", function() { return mapAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var mapAction = function (type) { return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (payload) { return ({ type: type, payload: payload }); }); };
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(initialState, reducers) {
        var _this = _super.call(this, initialState) || this;
        _this._dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this._dispatcher.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["scan"])(function (state, action) {
            return (reducers[action.type]) ? reducers[action.type](state, action) : state;
        }, _this.getValue()))
            .subscribe(function (state) { return _super.prototype.next.call(_this, state); });
        return _this;
    }
    Store.prototype.getState = function () {
        var value = this.getValue();
        return Object.assign(value instanceof Array ? [] : {}, value);
    };
    Store.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.next = function (value) {
        this._dispatcher.next(value);
    };
    Store.prototype.complete = function () { };
    Store.prototype.select = function (key) {
        return this.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (obs) { return obs[key]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
    };
    Store.prototype.ngOnDestroy = function () {
        this.complete();
    };
    return Store;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));



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

module.exports = __webpack_require__(/*! /Users/Ben/code/nodejs/giftshop/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map