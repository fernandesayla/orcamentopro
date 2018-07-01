webpackJsonp([1],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrcamentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
Generated class for the OrcamentoProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var OrcamentoProvider = /** @class */ (function () {
    // constructor(public http: HttpClient) {
    function OrcamentoProvider(localStorageService) {
        this.localStorageService = localStorageService;
        this.orcamentos = new Array();
        console.log('Hello OrcamentoProvider Provider');
    }
    OrcamentoProvider.prototype.getAll = function () {
        this.getDb();
        return this.orcamentos;
    };
    OrcamentoProvider.prototype.getDb = function () {
        this.orcamentos = [];
        if (this.localStorageService.get("orcamentos") != null) {
            this.orcamentos = JSON.parse(this.localStorageService.get("orcamentos"));
        }
    };
    OrcamentoProvider.prototype.save = function (orcamento) {
        this.getDb();
        if (orcamento.id) {
            for (var i = 0; i < this.orcamentos.length; i++) {
                if (this.orcamentos[i].id == orcamento.id) {
                    this.orcamentos.splice(i, 1);
                }
            }
        }
        else {
            orcamento.id = new Date().getTime() + "";
        }
        if (!orcamento.data) {
            orcamento.data = new Date().toISOString();
        }
        this.orcamentos.push(orcamento);
        this.localStorageService.set("orcamentos", JSON.stringify(this.orcamentos));
    };
    OrcamentoProvider.prototype.delete = function (orcamentoId) {
        for (var i = 0; i < this.orcamentos.length; i++) {
            if (this.orcamentos[i].id == orcamentoId) {
                this.orcamentos.splice(i, 1);
            }
        }
        this.localStorageService.set("orcamentos", JSON.stringify(this.orcamentos));
    };
    OrcamentoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]])
    ], OrcamentoProvider);
    return OrcamentoProvider;
}());

//# sourceMappingURL=orcamento.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orcamento_orcamento__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, formBuilder, navParams, orcProv, toast) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.orcProv = orcProv;
        this.toast = toast;
        this.orcamento = this.navParams.data.orcamento || {};
        this.createForm();
        this.setupPageTitle();
    }
    AddPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            id: [this.orcamento.id],
            data: [this.orcamento.data, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nome: [this.orcamento.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: [this.orcamento.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            telefone: [this.orcamento.telefone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            valor: [this.orcamento.valor, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    AddPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.orcamento ? 'Alterando orcamento' : 'Novo orcamento';
    };
    AddPage.prototype.save = function () {
        // console.log("save save");
        try {
            this.orcProv.save(this.form.value);
            this.toast.create({ message: 'Orcamento salvo com sucesso.', duration: 3000 }).present();
            this.navCtrl.pop();
        }
        catch (e) {
            this.toast.create({ message: 'Erro ao salvar o orcamento.', duration: 3000 }).present();
            console.error(e);
        }
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add',template:/*ion-inline-start:"/Users/aylafernandes/Documents/projetos/orcamentopro/src/pages/add/add.html"*/'<!--\n  Generated template for the AddPage page.\n  \n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="form">\n    \n  \n    \n    <ion-item (click)="getDate()">\n      <ion-label stacked>Data</ion-label>\n      <ion-datetime   formControlName="data" name="date"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" formControlName="nome"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n        <div [hidden]="!form.controls.nome.errors.required">\n          O campo é obrigatório\n        </div>\n      </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" color="danger">\n          <div [hidden]="!form.controls.email.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n\n      <ion-item>\n          <ion-label stacked>Telefone</ion-label>\n          <ion-input type="tel" formControlName="telefone"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.telefone.valid && (form.controls.telefone.dirty || form.controls.telefone.touched)" color="danger">\n            <div [hidden]="!form.controls.telefone.errors.required">\n              O campo é obrigatório\n            </div>\n          </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Valor</ion-label>\n      <ion-input type="number" formControlName="valor"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.valor.valid && (form.controls.valor.dirty || form.controls.valor.touched)" color="danger">\n        <div [hidden]="!form.controls.valor.errors.required">\n          O campo é obrigatório\n        </div>\n      </ion-item>\n  </form>\n  \n  <button ion-button block type="submit"   (click)="save()">Salvar orcamento</button>\n  \n  <ion-fab top right edge>\n      <button ion-fab (click)="save()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/aylafernandes/Documents/projetos/orcamentopro/src/pages/add/add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_orcamento_orcamento__["a" /* OrcamentoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		678,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orcamento_orcamento__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_add__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, orcProv, callNumber) {
        this.navCtrl = navCtrl;
        this.orcProv = orcProv;
        this.callNumber = callNumber;
        this.orcamentos = new Array();
        this.total = 0;
        this.orcamentos = orcProv.getAll();
    }
    HomePage.prototype.soma = function () {
        this.total = this.orcamentos.reduce(function (total, currentValue) { return total + +currentValue.valor; }, 0);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.orcamentos = this.orcProv.getAll();
        this.soma();
    };
    HomePage.prototype.edit = function (orcamento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_add__["a" /* AddPage */], { orcamento: orcamento });
    };
    HomePage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_add__["a" /* AddPage */]);
    };
    HomePage.prototype.del = function (key) {
        this.orcProv.delete(key);
        this.soma();
    };
    HomePage.prototype.makeCall = function (telefone) {
        this.callNumber.callNumber(telefone, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aylafernandes/Documents/projetos/orcamentopro/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Orcamentos \n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-md-6 >\n              <ion-card text-center class="ion-card" padding>\n       \n                  <div class="card-title" color="light" padding-bottom  >{{orcamentos.length}}</div>\n                  <div class="card-subtitle" color="light" padding-bottom >Quantidade</div>\n                  \n                </ion-card>\n               \n          </ion-col>\n          <ion-col col-md-6>  \n          <ion-card  text-center padding>\n                   \n              <div class="card-title" padding-bottom>  {{total| currency:\'BRL\':true}}</div>\n              <div class="card-subtitle" padding-bottom>Valor</div>\n\n              \n            </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n \n\n    <ion-list>\n  <ion-item-sliding  *ngFor="let orcamento of orcamentos"  >\n  <ion-item >\n     \n    <h2>{{orcamento.nome}}</h2>\n    <p>  {{orcamento.valor | currency:\'BRL\':true}} </p>\n    <ion-note item-right>{{orcamento.data | date: \'dd/MM/yyyy\'}}</ion-note>\n\n \n  </ion-item>\n  <ion-item-options side="left">\n      <button ion-button color="secondary" (click)="makeCall(orcamento.telefone)">\n        <ion-icon name="call"></ion-icon>\n        Call\n      </button>\n    </ion-item-options>\n    <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="edit(orcamento)">\n          <ion-icon name="create" color="light" ></ion-icon>\n          Edit\n        </button>\n    \n      <button ion-button color="danger" (click)="del(orcamento.id)">\n       \n        <ion-icon name="trash" color="light" ></ion-icon>\n        Delete\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="add()">\n      <ion-icon name="add" color="light" large></ion-icon>\n    </button>\n\n  </ion-fab>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/aylafernandes/Documents/projetos/orcamentopro/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_orcamento_orcamento__["a" /* OrcamentoProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_orcamento_orcamento__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_add__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_locales_pt__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/* LocalStorage */

Object(__WEBPACK_IMPORTED_MODULE_10__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_11__angular_common_locales_pt__["a" /* default */], 'pt');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_add__["a" /* AddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angular_2_local_storage__["LocalStorageModule"].withConfig({
                    prefix: 'orcamentosApp',
                    storageType: 'localStorage'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_add__["a" /* AddPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_orcamento_orcamento__["a" /* OrcamentoProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt' }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/aylafernandes/Documents/projetos/orcamentopro/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/aylafernandes/Documents/projetos/orcamentopro/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map