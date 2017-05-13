webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 141;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(149);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/main.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(351),
        styles: [__webpack_require__(330)]
    })
], AppComponent);

//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/app.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_admin_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_genre_books_books_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_genre_books_addbook_addbook_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_genre_genre_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_genre_addgenre_addgenre_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_genre_genredetail_genredetail_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_genre_books_details_details_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_sem_genre_sem_genre_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_sem_books_sem_books_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_sem_books_addsembook_addsembook_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sem_books_detailsembook_detailsembook_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_returnbook_returnbook_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_returnsembook_returnsembook_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_notification_feed_notification_feed_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_validate_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'weeklygenres', component: __WEBPACK_IMPORTED_MODULE_16__components_genre_genre_component__["a" /* GenreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'semgenres', component: __WEBPACK_IMPORTED_MODULE_20__components_sem_genre_sem_genre_component__["a" /* SemGenreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_14__components_genre_books_books_component__["a" /* BooksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'books/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_genre_books_books_component__["a" /* BooksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sembooks', component: __WEBPACK_IMPORTED_MODULE_21__components_sem_books_sem_books_component__["a" /* SemBooksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sembooks/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_sem_books_sem_books_component__["a" /* SemBooksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'trackissues', component: __WEBPACK_IMPORTED_MODULE_24__components_returnbook_returnbook_component__["a" /* ReturnbookComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'tracksemissues', component: __WEBPACK_IMPORTED_MODULE_25__components_returnsembook_returnsembook_component__["a" /* ReturnsembookComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addgenre', component: __WEBPACK_IMPORTED_MODULE_17__components_genre_addgenre_addgenre_component__["a" /* AddgenreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'detailgenre', component: __WEBPACK_IMPORTED_MODULE_18__components_genre_genredetail_genredetail_component__["a" /* GenredetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'genredetail', component: __WEBPACK_IMPORTED_MODULE_18__components_genre_genredetail_genredetail_component__["a" /* GenredetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_26__components_notification_feed_notification_feed_component__["a" /* NotificationFeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_genre_genre_component__["a" /* GenreComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_genre_addgenre_addgenre_component__["a" /* AddgenreComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_genre_genredetail_genredetail_component__["a" /* GenredetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_genre_books_books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_genre_books_addbook_addbook_component__["a" /* AddbookComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_genre_books_details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_returnbook_returnbook_component__["a" /* ReturnbookComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_returnsembook_returnsembook_component__["a" /* ReturnsembookComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_sem_genre_sem_genre_component__["a" /* SemGenreComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_sem_books_sem_books_component__["a" /* SemBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_sem_books_addsembook_addsembook_component__["a" /* AddsembookComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_sem_books_detailsembook_detailsembook_component__["a" /* DetailsembookComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_notification_feed_notification_feed_component__["a" /* NotificationFeedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_29_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_27__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_28__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */], { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/app.module.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onAdminLoginSubmit = function () {
        var _this = this;
        var admin = {
            adminname: this.adminname,
            password: this.password
        };
        this.authService.authenticateAdmin(admin).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.authService.storeAdminData(data.token, data.admin);
                _this.flashMessage.show('Administrator login successful', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/admin']);
            }
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(352),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/admin.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.showAdminStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            //console.log('in show Logout in true condition, user is logged in');
            return false;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            //console.log('in show Logout in false condition, admin logged in');
            return true;
        }
    };
    DashboardComponent.prototype.onSemClicked = function () {
        this.router.navigate(['/semgenres']);
    };
    DashboardComponent.prototype.onWeeklyClicked = function () {
        this.router.navigate(['/weeklygenres']);
    };
    DashboardComponent.prototype.onReturnSemesterClicked = function () {
        this.router.navigate(['/tracksemissues']);
    };
    DashboardComponent.prototype.onReturnWeeklyClicked = function () {
        this.router.navigate(['/trackissues']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(353),
        styles: [__webpack_require__(332)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddgenreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddgenreComponent = (function () {
    function AddgenreComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.showGenre = false;
    }
    AddgenreComponent.prototype.ngOnInit = function () {
    };
    AddgenreComponent.prototype.onGenreSubmit = function () {
        var _this = this;
        var genre = {
            genrename: this.genrename
        };
        console.log(genre.genrename);
        //Reguired Fields
        if (!this.validateService.validateGenre(genre)) {
            this.flashMessage.show('Please enter all fields', { cssClass: 'alert-danger', timeout: 3000 });
            console.log('Enter all the fields');
        }
        this.authService.addWeeklyGenres(genre).subscribe(function (data) {
            console.log('in add genre component subscribing data- success ' + data.type);
            if (data.type) {
                _this.flashMessage.show(data.type + ' genre has been added suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/weeklygenres']);
            }
            else {
                _this.flashMessage.show('Oops! The genre has not been added properly. Please try again!', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    AddgenreComponent.prototype.goBackToGenres = function () {
        this.router.navigate(['/weeklygenres']);
    };
    return AddgenreComponent;
}());
AddgenreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addgenre',
        template: __webpack_require__(354),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddgenreComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/addgenre.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddbookComponent = (function () {
    function AddbookComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    AddbookComponent.prototype.ngOnInit = function () {
        this.genre = this.passGenreSelected;
        console.log('The Passed Genre is ' + this.genre);
    };
    AddbookComponent.prototype.onBookSubmit = function () {
        var _this = this;
        var book = {
            title: this.title,
            genre: this.genre,
            author: this.author,
            edition: this.edition,
            description: this.description,
            publisher: this.publisher,
            image_url: this.image_url
        };
        //Reguired Fields
        if (!this.validateService.validateBook(book)) {
            this.flashMessage.show('Please enter all fields', { cssClass: 'alert-danger', timeout: 3000 });
            console.log('Enter all the fields');
        }
        this.authService.addWeeklyBook(book).subscribe(function (data) {
            if (data.title) {
                _this.flashMessage.show(data.title + ' has been added suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/weeklygenres']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return AddbookComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AddbookComponent.prototype, "passGenreSelected", void 0);
AddbookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addbook',
        template: __webpack_require__(355),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddbookComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/addbook.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;



var BooksComponent = (function () {
    function BooksComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.genreRelatedBooks = [];
        this.addBookNotClicked = true;
        this.notShowDetails = true;
        this.showGenreListing = false;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.whichGenreIsSelected = params['id'];
            console.log('Getting data from URL, the genre selected is ' + _this.whichGenreIsSelected);
        });
        this.authService.getSelectedGenreBooks(this.whichGenreIsSelected).subscribe(function (selectedGenreBooksData) {
            _this.genreRelatedBooks = selectedGenreBooksData;
            _this.passGenreSelected = _this.whichGenreIsSelected;
            console.log('Logging Selected Genre - ' + _this.passGenreSelected);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    BooksComponent.prototype.showAdminStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            //console.log('in show Logout in true condition, user is logged in');
            return false;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            //console.log('in show Logout in false condition, admin logged in');
            return true;
        }
    };
    BooksComponent.prototype.goBackToGenres = function () {
        this.router.navigate(['/weeklygenres']);
    };
    BooksComponent.prototype.displayGenreRelatedBooks = function (buttonEvent) {
        console.log('The button clicked is- ' + buttonEvent.target.id);
        var whichBookIsSelected = buttonEvent.target.id;
        //this.authService.storeGenreSelected(whichBookIsSelected);
    };
    BooksComponent.prototype.addBookFunction = function () {
        console.log('Add Book is Clicked');
        this.addBookNotClicked = false;
    };
    BooksComponent.prototype.getDetails = function (genreRelatedBook) {
        this.bookDetails = genreRelatedBook;
        this.notShowDetails = false;
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-books',
        template: __webpack_require__(356),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], BooksComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/books.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = (function () {
    function DetailsComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.notShowEdit = true;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.id = this.bookDetails._id;
        console.log('Object ID of this book is ' + this.id);
        this.title = this.bookDetails.title;
        this.author = this.bookDetails.author;
        this.edition = this.bookDetails.edition;
        this.description = this.bookDetails.description;
        this.genre = this.bookDetails.genre;
        this.publisher = this.bookDetails.publisher;
        this.image_url = this.bookDetails.image_url;
    };
    DetailsComponent.prototype.showAdminStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            //console.log('in show Logout in true condition, user is logged in');
            return false;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            //console.log('in show Logout in false condition, admin logged in');
            return true;
        }
    };
    DetailsComponent.prototype.showEditBook = function () {
        this.notShowEdit = false;
    };
    DetailsComponent.prototype.onEditDetailsSubmit = function () {
        var _this = this;
        var updateBook = {
            id: this.id,
            title: this.title,
            genre: this.genre,
            author: this.author,
            edition: this.edition,
            description: this.description,
            publisher: this.publisher,
            image_url: this.image_url
        };
        //Reguired Fields
        if (!this.validateService.validateBook(updateBook)) {
            this.flashMessage.show('Please enter all fields', { cssClass: 'alert-danger', timeout: 3000 });
            console.log('Enter all the fields');
        }
        this.authService.updateWeeklyBook(updateBook).subscribe(function (data) {
            if (data.title) {
                _this.router.navigate(['/weeklygenres']);
                _this.flashMessage.show('The book has been updated suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DetailsComponent.prototype.deleteBook = function (bookID) {
        var _this = this;
        this.authService.deleteWeeklyBook(bookID).subscribe(function (data) {
            if (data.ok == 1) {
                _this.router.navigate(['/weeklygenres']);
                _this.flashMessage.show('The book has been deleted suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    //Issue Books
    DetailsComponent.prototype.issueBook = function () {
        var _this = this;
        var bookData = {
            id: this.id,
            title: this.title,
            genre: this.genre,
            author: this.author,
            edition: this.edition,
            description: this.description,
            publisher: this.publisher,
            image_url: this.image_url
        };
        this.authService.addIssueData(bookData).subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/weeklygenres']);
                _this.flashMessage.show('The book has been issued successfully!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return DetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DetailsComponent.prototype, "bookDetails", void 0);
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(357),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/details.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenreComponent = (function () {
    function GenreComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.showGenres = true;
        this.genres = [];
    }
    GenreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getWeeklyGenres().subscribe(function (weeklyGenreData) {
            _this.genres = weeklyGenreData;
            console.log('Logging Weekly Genres Data' + _this.genres);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    GenreComponent.prototype.showAdminStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            //console.log('in show Logout in true condition, user is logged in');
            return false;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            //console.log('in show Logout in false condition, admin logged in');
            return true;
        }
    };
    GenreComponent.prototype.displayGenreRelatedBooks = function (buttonEvent) {
        this.whichGenreIsSelected = buttonEvent.target.id;
        this.showGenres = false;
        console.log('The button clicked is- ' + this.whichGenreIsSelected);
        //this.authService.storeGenreSelected(this.whichGenreIsSelected);
        var passGenre = this.whichGenreIsSelected;
        this.router.navigate(['/books', passGenre]);
    };
    GenreComponent.prototype.addGenre = function () {
        this.router.navigate(['/addgenre']);
    };
    GenreComponent.prototype.editAndDeleteGenre = function () {
        this.router.navigate(['/detailgenre']);
    };
    return GenreComponent;
}());
GenreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-genre',
        template: __webpack_require__(358),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GenreComponent);

var _a, _b;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/genre.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenredetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenredetailComponent = (function () {
    function GenredetailComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.genres = [];
        this.showGenreEdit = false;
    }
    GenredetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getWeeklyGenres().subscribe(function (weeklyGenreData) {
            _this.genres = weeklyGenreData;
            console.log('Logging Weekly Genres Data' + _this.genres);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    GenredetailComponent.prototype.showEditGenre = function (genre) {
        this.id = genre._id;
        this.type = genre.type;
        //this.create_date = genre.create_date;
        this.showGenreEdit = true;
    };
    GenredetailComponent.prototype.onEditGenreDetailsSubmit = function (id) {
        var _this = this;
        console.log('genre id is ' + id);
        var updatedDetails = {
            type: this.type,
            id: id
        };
        this.authService.updateWeeklyGenreDetails(updatedDetails).subscribe(function (data) {
            if (data.type) {
                _this.router.navigate(['/weeklygenres']);
                _this.flashMessage.show('The genre has been updated suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/weeklygenres']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    GenredetailComponent.prototype.deleteGenre = function (id) {
        var _this = this;
        this.authService.deleteWeeklyGenre(id).subscribe(function (data) {
            if (data.ok == 1) {
                console.log('Return of Delete ' + data.ok);
                _this.router.navigate(['/weeklygenres']);
                _this.flashMessage.show('The genre has been deleted suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/weeklygenres']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    GenredetailComponent.prototype.goBackToGenres = function () {
        this.router.navigate(['/weeklygenres']);
    };
    return GenredetailComponent;
}());
GenredetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-genredetail',
        template: __webpack_require__(359),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], GenredetailComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/genredetail.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(360),
        styles: [__webpack_require__(339)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/home.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Login successful', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(361),
        styles: [__webpack_require__(340)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/login.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.clientLoggedIn = function () {
        if (localStorage.getItem('user_token') === null && localStorage.getItem('admin_token') === null) {
            // console.log('in client logged in false condition');
            return false;
        }
        else {
            //console.log('in client logged in true condition');
            return true;
        }
    };
    NavbarComponent.prototype.showUserStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            //console.log('in show Logout in true condition, user is logged in');
            return true;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            //console.log('in show Logout in false condition, admin logged in');
            return false;
        }
    };
    NavbarComponent.prototype.onUserLogoutClick = function () {
        this.authService.userLogout();
        this.flashMessage.show('You are now logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.onAdminLogoutClick = function () {
        this.authService.adminLogout();
        this.flashMessage.show('Administrator now logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/admin']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(362),
        styles: [__webpack_require__(341)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationFeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationFeedComponent = (function () {
    function NotificationFeedComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.notifications = [];
        this.reverseList = [];
    }
    NotificationFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getNotifications().subscribe(function (notifications) {
            _this.notifications = notifications;
            console.log('Logging Notification Data' + _this.notifications);
        }, function (err) {
            console.log(err);
            return false;
        });
        this.notifications.sort(function (a, b) {
            a = new Date(a.dateModified);
            b = new Date(b.dateModified);
            return a > b ? -1 : a < b ? 1 : 0;
        });
    };
    NotificationFeedComponent.prototype.showAdminStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            return false;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            return true;
        }
    };
    NotificationFeedComponent.prototype.addNotification = function () {
        var _this = this;
        var notification_data = this.notification_data;
        console.log('Notification Data is ' + notification_data);
        this.authService.addNotification(notification_data).subscribe(function (data) {
            if (data.notification) {
                _this.flashMessage.show('The notification has now been added suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/notifications']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return NotificationFeedComponent;
}());
NotificationFeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification-feed',
        template: __webpack_require__(363),
        styles: [__webpack_require__(342)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NotificationFeedComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/notification-feed.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.semIssues = [];
        this.weeklyIssues = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile;
        });
        this.authService.getSemIssueData().subscribe(function (issueData) {
            _this.semIssues = issueData;
            console.log(_this.semIssues);
        });
        this.authService.getWeeklyIssueData().subscribe(function (issueData) {
            _this.weeklyIssues = issueData;
            console.log(_this.weeklyIssues);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(364),
        styles: [__webpack_require__(343)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/profile.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.semIssueCounter = 0;
        this.weeklyIssueCounter = 0;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            prn: this.prn,
            email: this.email,
            mobile: this.mobile,
            sem: this.sem,
            password: this.password,
            semIssueCounter: this.semIssueCounter,
            weeklyIssueCounter: this.weeklyIssueCounter
        };
        //Reguired Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please enter all fields', { cssClass: 'alert-danger', timeout: 3000 });
            console.log('Enter all the fields');
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid e-mail id', { cssClass: 'alert-danger', timeout: 3000 });
            console.log('Use valid email');
        }
        console.log('User Entered is ' + user.username);
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You have been registered successfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(365),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/register.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnbookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReturnbookComponent = (function () {
    function ReturnbookComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.weeklyBookDatas = [];
    }
    ReturnbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getReturnWeeklies().subscribe(function (weeklyReturnData) {
            _this.weeklyBookDatas = weeklyReturnData;
            console.log('Logging Weekly return Data' + _this.weeklyBookDatas);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ReturnbookComponent.prototype.deleteReturnData = function (returnBookData) {
        var _this = this;
        this.authService.deleteWeeklyReturnEntry(returnBookData).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('The book has now been added suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/trackissues']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ReturnbookComponent;
}());
ReturnbookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-returnbook',
        template: __webpack_require__(366),
        styles: [__webpack_require__(345)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ReturnbookComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/returnbook.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnsembookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReturnsembookComponent = (function () {
    function ReturnsembookComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.semesterBookDatas = [];
    }
    ReturnsembookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getReturnSemesters().subscribe(function (semesterReturnData) {
            _this.semesterBookDatas = semesterReturnData;
            console.log('Logging Weekly return Data' + _this.semesterBookDatas);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ReturnsembookComponent.prototype.deleteReturnData = function (returnBookData) {
        var _this = this;
        this.authService.deleteSemesterReturnEntry(returnBookData).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('The book has now been added suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/tracksemissues']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ReturnsembookComponent;
}());
ReturnsembookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-returnsembook',
        template: __webpack_require__(367),
        styles: [__webpack_require__(346)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ReturnsembookComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/returnsembook.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsembookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddsembookComponent = (function () {
    function AddsembookComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    AddsembookComponent.prototype.ngOnInit = function () {
        this.semester = this.passSemSelected;
    };
    AddsembookComponent.prototype.onSemBookSubmit = function () {
        var _this = this;
        var book = {
            title: this.title,
            semester: this.semester,
            description: this.description,
            image_url: this.image_url
        };
        //Reguired Fields
        if (!this.validateService.validateSemBook(book)) {
            this.flashMessage.show('Please enter all fields', { cssClass: 'alert-danger', timeout: 3000 });
            console.log('Enter all the fields');
        }
        this.authService.addSemesterBook(book).subscribe(function (data) {
            if (data.title) {
                _this.flashMessage.show(data.title + ' has been added suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/semgenres']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return AddsembookComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AddsembookComponent.prototype, "passSemSelected", void 0);
AddsembookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addsembook',
        template: __webpack_require__(368),
        styles: [__webpack_require__(347)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddsembookComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/addsembook.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsembookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsembookComponent = (function () {
    function DetailsembookComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.notShowEdit = true;
    }
    DetailsembookComponent.prototype.ngOnInit = function () {
        this.id = this.bookDetails._id;
        console.log('Object ID of this sem book is ' + this.id);
        this.title = this.bookDetails.title;
        this.description = this.bookDetails.description;
        this.semester = this.bookDetails.semester;
        this.image_url = this.bookDetails.image_url;
    };
    DetailsembookComponent.prototype.showAdminStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            //console.log('in show Logout in true condition, user is logged in');
            return false;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            //console.log('in show Logout in false condition, admin logged in');
            return true;
        }
    };
    DetailsembookComponent.prototype.showEditBook = function () {
        this.notShowEdit = false;
    };
    DetailsembookComponent.prototype.onEditDetailsSubmit = function () {
        var _this = this;
        var updateSemBook = {
            id: this.id,
            title: this.title,
            description: this.description,
            semester: this.semester,
            image_url: this.image_url
        };
        //Reguired Fields
        if (!this.validateService.validateSemBook(updateSemBook)) {
            this.flashMessage.show('Please enter all fields', { cssClass: 'alert-danger', timeout: 3000 });
            console.log('Enter all the fields');
        }
        this.authService.updateSemesterBook(updateSemBook).subscribe(function (data) {
            if (data.title) {
                _this.router.navigate(['/semgenres']);
                _this.flashMessage.show('The book has been updated suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DetailsembookComponent.prototype.deleteBook = function (bookID) {
        var _this = this;
        this.authService.deleteSemesterBook(bookID).subscribe(function (data) {
            if (data.ok == 1) {
                _this.router.navigate(['/semgenres']);
                _this.flashMessage.show('The book has been deleted suscessfully!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    //Issue Books
    DetailsembookComponent.prototype.issueBook = function () {
        var _this = this;
        var bookData = {
            id: this.id,
            title: this.title,
            description: this.description,
            semester: this.semester,
            image_url: this.image_url
        };
        this.authService.addSemesterIssueData(bookData).subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/semgenres']);
                _this.flashMessage.show('The book has been issued successfully!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return DetailsembookComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DetailsembookComponent.prototype, "bookDetails", void 0);
DetailsembookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detailsembook',
        template: __webpack_require__(369),
        styles: [__webpack_require__(348)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DetailsembookComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/detailsembook.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SemBooksComponent = (function () {
    function SemBooksComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.semRelatedBooks = [];
        this.addBookNotClicked = true;
        this.notShowDetails = true;
    }
    SemBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.whichSemIsSelected = +params['id'];
            console.log('Getting data from URL, the semester selected is ' + _this.whichSemIsSelected);
        });
        this.authService.getSelectedSemBooks(this.whichSemIsSelected).subscribe(function (selectedSemBooksData) {
            _this.semRelatedBooks = selectedSemBooksData;
            _this.passSemSelected = _this.whichSemIsSelected;
            console.log('Logging Selected Genre - ' + _this.passSemSelected);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SemBooksComponent.prototype.showAdminStuff = function () {
        if (this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false) {
            //console.log('in show Logout in true condition, user is logged in');
            return false;
        }
        if (this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
            //console.log('in show Logout in false condition, admin logged in');
            return true;
        }
    };
    SemBooksComponent.prototype.goBackToGenres = function () {
        this.router.navigate(['/semgenres']);
    };
    SemBooksComponent.prototype.addBookFunction = function () {
        console.log('Add Sem Book is Clicked');
        this.addBookNotClicked = false;
    };
    SemBooksComponent.prototype.getDetails = function (semRelatedBook) {
        this.bookDetails = semRelatedBook;
        this.notShowDetails = false;
    };
    return SemBooksComponent;
}());
SemBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-sem-books',
        template: __webpack_require__(370),
        styles: [__webpack_require__(349)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], SemBooksComponent);

var _a, _b, _c;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/sem-books.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemGenreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SemGenreComponent = (function () {
    function SemGenreComponent(router) {
        this.router = router;
    }
    SemGenreComponent.prototype.ngOnInit = function () {
    };
    SemGenreComponent.prototype.displaySemesterRelatedBooks = function (buttonEvent) {
        this.whichSemesterIsSelected = buttonEvent.target.id;
        console.log('The semester clicked is- ' + this.whichSemesterIsSelected);
        //this.authService.storeGenreSelected(this.whichGenreIsSelected);
        var passSemester = this.whichSemesterIsSelected;
        this.router.navigate(['/sembooks', passSemester]);
    };
    return SemGenreComponent;
}());
SemGenreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sem-genre',
        template: __webpack_require__(371),
        styles: [__webpack_require__(350)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SemGenreComponent);

var _a;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/sem-genre.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.userLoggedIn()) {
            return true;
        }
        if (this.authService.adminLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/environment.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.email == undefined || user.mobile == undefined || user.prn == undefined || user.password == undefined || user.sem == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateBook = function (book) {
        if (book.title == undefined || book.author == undefined || book.description == undefined || book.edition == undefined || book.publisher == undefined || book.image_url == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateSemBook = function (book) {
        if (book.title == undefined || book.description == undefined || book.image_url == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateGenre = function (genre) {
        console.log('In Validate genre ' + genre.genrename);
        if (genre.genrename == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/validate.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Maven+Pro:700');\r\n\r\n.weekly-button {\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  padding-left: 135px;\r\n  padding-right: 135px;\r\n  margin: 30px;\r\n}\r\n\r\n\r\n.sem-button {\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  padding-left: 125px;\r\n  padding-right: 125px;\r\n  margin: 30px;\r\n}\r\n\r\n.return-weekly-button {\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  padding-left: 92px;\r\n  padding-right: 92px;\r\n  margin: 30px;\r\n}\r\n.return-sem-button{\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  padding-left: 82px;\r\n  padding-right: 82px;\r\n  margin: 30px;\r\n}\r\n\r\ninput{\r\n  background-color: #2c3e50;\r\n  color:#ffffff;\r\n  font-family: 'Maven Pro', sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.col-md-6 {\r\n  vertical-align: middle;\r\n  align: center;\r\n}\r\n"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "@import url(\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\r\n\r\n.panel-image {\r\n  position: relative;\r\n}\r\n.panel-image img.panel-image-preview {\r\n  width: 100%;\r\n  border-radius: 4px 4px 0px 0px;\r\n}\r\n\r\n.panel-image label {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.panel-heading ~ .panel-image img.panel-image-preview {\r\n  border-radius: 0px;\r\n}\r\n\r\n.panel-body {\r\n  overflow: hidden;\r\n}\r\n\r\n.panel-image ~ input[type=checkbox] {\r\n  position:absolute;\r\n  top: 30px;\r\n  z-index: -1;\r\n}\r\n\r\n.panel-image ~ input[type=checkbox] ~ .panel-body {\r\n  height: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.panel-image ~ input[type=checkbox]:checked ~ .panel-body {\r\n  height: auto;\r\n  padding: 15px;\r\n}\r\n\r\n.panel-image ~ .panel-footer a {\r\n  padding: 0px 10px;\r\n  font-size: 1.1em;\r\n  /*font-family: 'Maven Pro', sans-serif;*/\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n.panel-footer{\r\n  background-color: #1abc9c;\r\n}\r\n\r\na :hover {\r\n  color: #444444;\r\n}\r\na.get-deets { cursor: pointer; }\r\n.row {\r\n  display: inline;\r\n}\r\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Maven+Pro:700');\r\n\r\n.genres {\r\n  width:450px;\r\n  height:250px;\r\n  text-align:center;\r\n  line-height:1.1em;\r\n\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  margin-right: 70px;\r\n}\r\n\r\ninput{\r\n  background-color: #8e44ad;\r\n  color:#ffffff;\r\n  font-family: 'Maven Pro', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.col-md-6 {\r\n  padding: 50px 50px 50px 50px;\r\n  vertical-align: middle;\r\n  align: center;\r\n}\r\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans:700');\r\n@import url('https://fonts.googleapis.com/css?family=Maven+Pro:700');\r\n@import url('https://fonts.googleapis.com/css?family=Ubuntu');\r\n@import url('https://fonts.googleapis.com/css?family=Inconsolata:700');\r\n\r\n\r\n.highlights{\r\n  color: #111111;\r\n  font-family: 'Inconsolata', sans-serif;\r\n  font-size: 110%;\r\n}\r\n.description-name {\r\n  color: #111111;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-size: 200%;\r\n}\r\n\r\n\r\n.description {\r\n  color: #111111;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-size: 110%;\r\n}\r\n\r\n\r\n.test{\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n\r\n.container-fluid{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.cover-photo{\r\n  /* Set the height to match that of the viewport. */\r\n  height: 100vh;\r\n  /* Set the width to match that of the viewport. */\r\n  width: 100%;\r\n\r\n  /* Remove any browser-default margins. */\r\n  margin-top: 0;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  margin: 0;\r\n  background: url(\"http://demo.mutationmedia.net/NEW/images/sliderImages/slide1.jpg\") no-repeat 50% 50%;\r\n  display: table;\r\n  top: 0px;\r\n  background-size: cover;\r\n}\r\n\r\n.cover-photo .inner {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n  max-width: none;\r\n}\r\n\r\n.content {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-bottom: 130px;\r\n}\r\n\r\n.content h1{\r\n  font-family: 'Open Sans Extrabold', sans-serif;\r\n  color: #323232;\r\n  /*text-shadow: 8px 2px 20px #a9a9a9;*/\r\n  font-size: 290%;\r\n}\r\n\r\n.content h2{\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #323232;\r\n  /*text-shadow: 8px 2px 15px #a9a9a9;*/\r\n  font-size: 200%;\r\n}\r\n\r\n.underline{\r\n  border-bottom: 6px solid #323232;\r\n}\r\n\r\n.underline-contact {\r\n  border-bottom: 3px solid #323232;\r\n}\r\n\r\n#testimonial {\r\n  padding:50px 0 30px 0;\r\n  color: #111111;\r\n  background: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n#testimonial p{\r\n  font-size: 15px;\r\n  color: #323232;\r\n  font-weight: bold;\r\n}\r\n\r\n.money{\r\n  width: 25%;\r\n}\r\n.book {\r\n  width: 25%;\r\n}\r\n.row{\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n}\r\n\r\n#tech-stack{\r\n  padding: 80px 0 0 0;\r\n}\r\n\r\n#tech-stack p {\r\n  font-size: 15px;\r\n}\r\n#team {\r\n  padding: 0 0 0 0;\r\n}\r\n\r\n.team {\r\n  padding: 80px 0 80px 0;\r\n}\r\n\r\n#contact-us{\r\n  padding: 40px 0 80px 0;\r\n}\r\n\r\n#info-angular2, #info-css3, #info-expressjs, #info-html5, #info-mongodb, #info-nodejs {\r\n\r\n  padding: 80px 0 80px 0;\r\n\r\n}\r\n\r\n.img-circle{\r\n  /*border: 2px solid #323232;*/\r\n  -webkit-filter: drop-shadow(3px 3px 3px #222);\r\n  filter: drop-shadow(3px 3px 3px #222);\r\n\r\n  border-radius: 50%;\r\n  width: 80%;\r\n}\r\n\r\n.our-email, .call-us, .social {\r\n\r\n  padding: 50px 0 50px 0;\r\n}\r\n\r\n.info-css3-right{\r\n margin-top: 30px;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Open Sans Extrabold', sans-serif;\r\n  font-size: 40px;\r\n  color: #323232;\r\n}\r\n\r\n#contact-us p {\r\n  font-family: 'Inconsolata', sans-serif;\r\n  font-size: medium;\r\n}\r\n\r\nfooter {\r\n  padding: 15px;\r\n  color: #111111;\r\n  background:  #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = ".navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:hover, .navbar-default .navbar-nav>.active>a:focus {\r\n  background-color: transparent;\r\n}\r\n\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  background-color: transparent;\r\n  color: #999999;\r\n}\r\n.navbar-brand\r\n{\r\n  font-family : Open Sans;\r\n  font-weight : bold;\r\n  font-size : 15px;\r\n  color : #444444;\r\n  color : rgb(68, 68, 68);\r\n}\r\n\r\n.navbar-default{\r\n  background: #fff;\r\n  border: 0;\r\n}\r\n\r\na {\r\n  font-family: \"Open Sans\";\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n}\r\n.navbar-toggle {\r\n  margin-top: 15px;\r\n  margin-bottom: 0px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.navbar-toggle .icon-bar {\r\n  display: block;\r\n  width: 20px;\r\n  height: 2px;\r\n  background-color: #111111;\r\n  border-radius: 1px;\r\n}\r\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Maven+Pro:700');\r\n\r\n.notification {\r\n  background-color: #2ecc71;\r\n  color: #ffffff;\r\n  border-radius: 5px;\r\n  font-family: \"Open Sans\";\r\n}\r\n.feed {\r\n  height:425px;\r\n  width:100%;\r\n  overflow:hidden;\r\n  overflow-y:scroll;\r\n}\r\n\r\nsmall {\r\n  font-size: small;\r\n}\r\n\r\n.no-notification{\r\n  background-color: #e74c3c;\r\n  color: #ffffff;\r\n  border-radius: 5px;\r\n}\r\n\r\ninput{\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  font-family: 'Maven Pro', sans-serif;\r\n  font-size: medium;\r\n}\r\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = ".no-issue{\r\n  background-color: #e74c3c;\r\n  color: #ffffff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.issue {\r\n\r\n  background-color: #2ecc71;\r\n  color: #ffffff;\r\n  border-radius: 5px;\r\n}\r\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Maven+Pro');\r\n\r\n\r\nh2 {\r\n  background-color: #f2f9ff;\r\n  padding:20px;\r\n  border-bottom-color: #eceff3;\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 4px;\r\n}\r\n\r\na {\r\n  color: #00B7FF;\r\n}\r\n\r\np{\r\n  font-family: 'Maven Pro',sans-serif;\r\n}\r\n.well {\r\n  border-radius: 5px;\r\n}\r\n.small{\r\n  font-size: 14px;\r\n}\r\n\r\ninput {\r\n  background-color: #2c3e50;\r\n  margin: 10px 0 10px 0;\r\n  color: #ffffff;\r\n  font-family: 'Maven Pro', sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n.post {\r\n  padding: 10px;\r\n  margin-bottom: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.odd .well {\r\n  background-color: #f2f9ff;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.even .well{\r\n  background-color: #eceff3;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Maven+Pro');\r\n\r\n\r\nh2 {\r\n  background-color: #f2f9ff;\r\n  padding:20px;\r\n  border-bottom-color: #eceff3;\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 4px;\r\n}\r\n\r\na {\r\n  color: #00B7FF;\r\n}\r\n\r\np{\r\n  font-family: 'Maven Pro',sans-serif;\r\n}\r\n.well {\r\n  border-radius: 5px;\r\n}\r\n.small{\r\n  font-size: 14px;\r\n}\r\n\r\n.submit-btn {\r\n  background-color: #323232;\r\n  margin: 10px 0 10px 0;\r\n  color: #ffffff;\r\n}\r\n\r\n.post {\r\n  padding: 10px;\r\n  margin-bottom: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.odd .well {\r\n  background-color: #f2f9ff;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.even .well{\r\n  background-color: #eceff3;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "@import url(\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\r\n\r\n.panel-image {\r\n  position: relative;\r\n}\r\n.panel-image img.panel-image-preview {\r\n  width: 100%;\r\n  border-radius: 4px 4px 0px 0px;\r\n}\r\n\r\n.panel-image label {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.panel-heading ~ .panel-image img.panel-image-preview {\r\n  border-radius: 0px;\r\n}\r\n\r\n.panel-body {\r\n  overflow: hidden;\r\n}\r\n\r\n.panel-image ~ input[type=checkbox] {\r\n  position:absolute;\r\n  top: 30px;\r\n  z-index: -1;\r\n}\r\n\r\n.panel-image ~ input[type=checkbox] ~ .panel-body {\r\n  height: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.panel-image ~ input[type=checkbox]:checked ~ .panel-body {\r\n  height: auto;\r\n  padding: 15px;\r\n}\r\n\r\n.panel-image ~ .panel-footer a {\r\n  padding: 0px 10px;\r\n  font-size: 1.1em;\r\n  /*font-family: 'Maven Pro', sans-serif;*/\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n.panel-footer{\r\n  background-color: #1abc9c;\r\n}\r\n\r\na :hover {\r\n  color: #444444;\r\n}\r\na.get-deets { cursor: pointer; }\r\n.row {\r\n  display: inline;\r\n}\r\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Maven+Pro:700');\r\n\r\n.sem-genres {\r\n  width:450px;\r\n  height:250px;\r\n  text-align:center;\r\n  line-height:1.1em;\r\n  margin-right: 60px;\r\n\r\n}\r\n\r\ninput{\r\n  background-color: #8e44ad;\r\n  color:#ffffff;\r\n  font-family: 'Maven Pro', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.col-md-6 {\r\n  padding: 50px 50px 50px 50px;\r\n  vertical-align: middle;\r\n  align: center;\r\n}\r\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<div class=\"holder-class\" style=\"margin-top: 65px\">\n  <flash-messages style=\"margin-top: 30px\"></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h4 class=\"page-header\">Administrator Login</h4>\n<form (submit)=\"onAdminLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adminname\" name=\"adminname\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Login\">\n</form>\n</div>\n"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-6 user\">\n      <input class=\"btn submit-btn btn-default dashButton sem-button\" type=\"submit\" value=\"SEMESTER ISSUE\"(click)=\"onSemClicked()\"/>\n    </div>\n    <div class=\"col-md-6 col-sm-6 user\">\n      <input class=\"btn submit-btn btn-default dashButton weekly-button\" type=\"submit\" value=\"WEEKLY ISSUE\"(click)=\"onWeeklyClicked()\"/>\n    </div>\n  </div>\n<div *ngIf=\"showAdminStuff()\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-6 admin\">\n      <input class=\"btn submit-btn btn-default dashButton return-sem-button\" type=\"submit\" value=\"SEMESTER ISSUE RETURN\"(click)=\"onReturnSemesterClicked()\"/>\n    </div>\n    <div class=\"col-md-6 col-sm-6 admin\">\n      <input class=\"btn submit-btn btn-default dashButton return-weekly-button\" type=\"submit\" value=\"WEEKLY ISSUE RETURN\"(click)=\"onReturnWeeklyClicked()\"/>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px\">\n\n  <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"goBackToGenres()\">\n    <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n  </button>\n\n\n  <h4 style=\"margin-top: 30px\">Add Genre</h4>\n\n<form (submit)=\"onGenreSubmit()\" style=\"padding-top: 20px\">\n  <div class=\"form-group\">\n    <label>Genre Name</label>\n    <input type=\"text\" [(ngModel)]=\"genrename\" name=\"genrename\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n</form>\n\n</div>\n"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-header\">Add Book</h4>\n<form (submit)=\"onBookSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Author</label>\n    <input type=\"text\" [(ngModel)]=\"author\" name=\"author\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Edition</label>\n    <input type=\"text\" [(ngModel)]=\"edition\" name=\"edition\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Publisher</label>\n    <input type=\"text\" [(ngModel)]=\"publisher\" name=\"publisher\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Image URL</label>\n    <input type=\"text\" [(ngModel)]=\"image_url\" name=\"image_url\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px\">\n\n<div *ngIf=\"addBookNotClicked && notShowDetails\">\n\n  <div class=\"row\">\n    <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"goBackToGenres()\">\n      <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n    </button>\n\n    <span *ngIf=\"showAdminStuff()\">\n      <input style=\"margin-left: 10px; padding: 9px 9px 10px 10px;\" type=\"submit\" class=\"btn btn-default\" (click)=\"addBookFunction()\" value=\"Add Book\">\n    </span>\n  </div>\n\n    <div *ngFor=\"let genreRelatedBook of genreRelatedBooks\">\n  <!-- Bind the selected Genre with the variable in the ts file-->\n    <div class=\"col-xs-12 col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-image\">\n          <img src=\"{{genreRelatedBook.image_url}}\" class=\"panel-image-preview img-responsive\" />\n          <label for=\"toggle-4\"></label>\n        </div>\n        <input type=\"checkbox\" id=\"toggle-4\" checked class=\"panel-image-toggle\">\n        <div class=\"panel-body\">\n          <h5>{{genreRelatedBook.title}}</h5>\n        </div>\n        <div class=\"panel-footer text-center\">\n          <!-- <input class=\"btn submit-btn\" type=\"submit\" value=\"Get Details\"(click)=\"getDetails(genreRelatedBook)\"/> -->\n          <a class=\"get-deets\" (click)=\"getDetails(genreRelatedBook)\"><strong>Get Details</strong></a>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"notShowDetails && !addBookNotClicked\">\n  <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"addBookNotClicked=true\">\n    <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n  </button>\n  <app-addbook [passGenreSelected]=\"passGenreSelected\"></app-addbook>\n</div>\n\n<div *ngIf=\"!notShowDetails\">\n  <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"notShowDetails=true\">\n    <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n  </button>\n  <app-details [bookDetails]=\"bookDetails\"></app-details>\n</div>\n</div>\n"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf=\"notShowEdit\">\n<div>\n  <h4 class=\"page-header\">Book Details</h4>\n  <ul class=\"list group\">\n    <li class=\"list-group-item\">Title : <strong>{{this.bookDetails.title}}</strong></li>\n    <li class=\"list-group-item\">Author : <strong> {{this.bookDetails.author}}</strong></li>\n    <li class=\"list-group-item\">Edition : <strong>{{this.bookDetails.edition}}</strong></li>\n    <li class=\"list-group-item\">Description : <strong>{{this.bookDetails.description}}</strong></li>\n    <li class=\"list-group-item\">Genre : <strong>{{this.bookDetails.genre}}</strong></li>\n    <li class=\"list-group-item\">Publisher : <strong>{{this.bookDetails.publisher}}</strong></li>\n  </ul>\n  <div *ngIf=\"!showAdminStuff()\">\n  <button class=\"btn btn-default\" (click)=\"issueBook()\">Issue Book</button>\n  </div>\n  <div style=\"margin-top: 20px\" *ngIf=\"showAdminStuff()\">\n    <button class=\"btn btn-default\" (click)=\"showEditBook()\">Edit Book Details</button>\n    <button class=\"btn btn-default\" (click)=\"deleteBook(this.bookDetails._id)\">Delete Book</button>\n  </div>\n</div>\n</div>\n\n<div *ngIf=\"!notShowEdit\">\n<h4 class=\"page-header\">Edit Book Details</h4>\n<form (submit)=\"onEditDetailsSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" value=\"{{title}}\">\n  </div>\n  <div class=\"form-group\">\n    <label>Author</label>\n    <input type=\"text\" [(ngModel)]=\"author\" name=\"author\" class=\"form-control\" value=\"{{author}}\">\n  </div>\n  <div class=\"form-group\">\n    <label>Edition</label>\n    <input type=\"text\" [(ngModel)]=\"edition\" name=\"edition\" class=\"form-control\" value=\"{{edition}}\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" value=\"{{description}}\">\n  </div>\n  <div class=\"form-group\">\n    <label>Publisher</label>\n    <input type=\"text\" [(ngModel)]=\"publisher\" name=\"publisher\" class=\"form-control\" value=\"{{publisher}}\">\n  </div>\n  <div class=\"form-group\">\n    <label>Image URL</label>\n    <input type=\"text\" [(ngModel)]=\"image_url\" name=\"image_url\" class=\"form-control\" value=\"{{image_url}}\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-top: 100px\">\n  <div class=\"row\">\n    <div *ngIf=\"showGenres\">\n      <div *ngIf=\"showAdminStuff()\">\n\n        <a class=\"btn submit-btn btn-default pull-left\" type=\"submit\" (click)=\"addGenre()\">Add Genre</a>\n\n        <a style=\"margin-left: 10px\" class=\"btn submit-btn btn-default pull-left\" type=\"submit\" (click)=\"editAndDeleteGenre()\">Edit and Delete Genre</a>\n\n      </div>\n    </div>\n  </div>\n\n\n\n  <div *ngIf=\"showGenres\">\n    <div *ngFor=\"let genre of genres\">\n      <div class=\"col-md-6\" style=\"display: inline\">\n        <input id=\"{{genre.type}}\" class=\"btn submit-btn btn-default genres\" type=\"submit\" value=\"{{genre.type | uppercase}}\"(click)=\"displayGenreRelatedBooks($event)\"/>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px; margin-bottom: 50px\">\n\n  <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"goBackToGenres()\">\n    <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n  </button>\n\n<div *ngIf=\"!showGenreEdit\">\n  <div>\n    <div *ngFor=\"let genre of genres\">\n    <h4 class=\"page-header\">Genre Details</h4>\n    <ul class=\"list group\">\n      <li class=\"list-group-item\">Genre Type : <strong>{{genre.type}}</strong></li>\n      <!--<li class=\"list-group-item\">Created On: {{genre.create_date | date:\"MMM d, y\"}}</li>-->\n    </ul>\n\n      <input style=\"margin-top: 10px; margin-left: 20px;\" type=\"submit\" class=\"btn btn-default\" (click)=\"showEditGenre(genre)\" value=\"Edit Genre Details\">\n\n      <input style=\"margin-top: 10px;\" type=\"submit\" class=\"btn btn-default\" (click)=\"deleteGenre(genre._id)\" value=\"Delete Genre\">\n\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showGenreEdit\">\n  <h4 class=\"page-header\">Edit Book Details</h4>\n  <form (submit)=\"onEditGenreDetailsSubmit(id)\">\n    <div class=\"form-group\">\n      <label>Genre Type</label>\n      <input type=\"text\" [(ngModel)]=\"type\" name=\"type\" class=\"form-control\" value=\"{{type}}\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "<!-- Original Content -->\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Lato:900|Slabo+27px\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css\">\n\n\n<section class=\"cover-photo\">\n  <div class=\"inner\">\n    <div class=\"content\">\n      <h1><strong> BHARATI BOOKSTOR<span class=\"underline\">E</span> </strong></h1>\n      <h2><span class=\"test\">A Computer Department Initiative</span></h2>\n    </div>\n  </div>\n</section>\n\n<section id=\"testimonial\">\n  <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img class=\"book\" src=\"https://image.flaticon.com/icons/png/128/171/171322.png\">\n      <p style=\"text-align: justify; padding-top: 10px;\">\n        Skim through the books offered by us, issue, learn, develop, and grow. Issue books for a week,\n        or your entire semester. Return the books on time, and you're welcome to issue again.      </p>\n    </div>\n    <div class=\"col-md-6\">\n      <img class=\"money\" src=\"https://d30y9cdsu7xlg0.cloudfront.net/png/113937-200.png\">\n      <p style=\"text-align: justify; padding-top: 10px;\">\n        For each semester issue that you make, deposit a security amount of INR 600 with us,\n        one-third of which will be refunded as soon as you return the books at the end of the semester.\n      </p>\n    </div>\n  </div>\n  </div>\n</section>\n\n<div class=\"container\">\n<section id=\"tech-stack\">\n\n  <h1 class=\"tech-stack-heading\" style=\"text-align: center\"><strong> TECHNOLOGY STAC<span class=\"underline\">K</span> </strong></h1>\n  <!-- Mongo DB Info Bar -->\n  <section id=\"info-mongodb\">\n  <div class=\"row\">\n    <div class=\"col-md-6\" align=\"center\" >\n      <div class=\"info-mongodb-left\">\n      <img class=\"img-responsive\" src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/800px-MongoDB-Logo.svg.png\"\n        style=\"width: 90%; align: center;\"\n      >\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"info-mongodb-right\">\n        <h4><strong> Mongo DB </strong></h4>\n      <p style=\"text-align: justify\">Mongodb is an open-source, document-based database. It makes use of JSON\n        documents along with schemas. Because of the increase in the volume and variety of data over the past few\n        years, there has been a need for a non-relational database. Mongodb fulfills this criteria, as it stores its data in a document-\n        oriented, file structure. Each database can have multiple collections and data in those collections is stored in the form of array\n        of JSON objects.\n      </p>\n      </div>\n    </div>\n  </div>\n  </section>\n\n  <hr>\n\n\n  <!-- Express Info Bar -->\n  <section id=\"info-expressjs\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"info-expressjs-left\">\n        <h4><strong> Express Backend </strong></h4>\n        <p style=\"text-align: justify\">A rock solid Node.js/Express server using Mongoose to organize models and query the database.\n          It provides a robust set of fundamental web application features without obscuring Node.js features.\n          Express makes it easy to create APIs because of access to\n          middleware. Middleware functions are functions which have access to the request and response objects along with a next\n          function, which when invoked, executes the middleware succeeding the current middleware.\n        </p>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"info-expressjs-right\">\n        <img class=\"img-responsive\" src=\"https://cdn.keycdn.com/support/wp-content/uploads/2015/12/express-cdn.png\"\n             style=\"width: 90%; align: center; margin-left: 30px\"\n        >\n      </div>\n    </div>\n  </div>\n  </section>\n\n  <hr>\n\n\n  <!-- Angular-CLI Info Bar -->\n  <section id=\"info-angular2\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"info-angular2-left\">\n          <img class=\"img-responsive\" src=\"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaem93qkEy9D0Jg3oYRjirr2VutYrQw0zha6O0TlScsC5-DGrz\"\n               style=\"width: 90%; align: center; margin-left: 30px\"\n          >\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"info-angular2-right\">\n          <h4><strong> Angular-CLI </strong></h4>\n          <p style=\"text-align: justify\">Angular is an open source web application framework, to create single page web application. It is a Javascript framework\n            which can be added to an HTML page or any web page, with a &lt;script&gt; tag. Angularjs uses ng-directives to extend HTML.\n            The Angularjs directives are simply HTML attributes to which a prefix is attached- ng. Angular forms the front end of the\n            MEAN stack.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <hr>\n\n\n\n  <!-- Node JS Info Bar -->\n  <section id=\"info-nodejs\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"info-nodejs-left\">\n          <h4><strong> Node js </strong></h4>\n          <p style=\"text-align: justify\">Node.js is an event-driven asynchronous JavaScript runtime which was primarily designed to make scalable network\n            applications and APIs. Node Js was built on Chrome V8 Engine which is an open-source JavaScript engine developed on\n            C++, and V8 implements the ECMAScript. Node.js uses an asynchronous event-driven, non-blocking I/O model that\n            makes it lightweight, efficient and high-performance.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-6\" align=\"center\">\n        <div class=\"info-nodejs-right\">\n          <img class=\"img-responsive\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2000px-Node.js_logo_2015.svg.png\"\n               style=\"width: 90%; align: center;\"\n          >\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <hr>\n\n\n  <!-- CSS3 Info Bar -->\n  <section id=\"info-css3\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"info-css3-left\">\n        <img class=\"img-responsive\" src=\"http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg\"\n             style=\"width: 85%; align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 30px\"\n        >\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"info-css3-right\">\n        <h4><strong> HTML 5 & CSS 3 </strong></h4>\n        <p style=\"text-align: justify\">HTML5 is a markup language used for structuring and presenting content on the World Wide Web.\n          HTML5 includes detailed processing models to encourage more interoperable implementations.\n          It is also a candidate for cross-platform mobile applications, because it includes features designed with low-powered devices in mind.\n\n          Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.\n          It is used to set the visual style of web pages and user interfaces written in HTML and XHTML.\n        </p>\n      </div>\n    </div>\n  </div>\n  </section>\n\n</section>\n  <hr>\n\n</div>\n\n\n\n<div class=\"container\">\n  <section id=\"team\">\n\n    <h1 align=\"center\" style=\"padding-top: 30px\"><strong> OUR TEA<span class=\"underline\">M</span> </strong></h1>\n\n    <div class=\"row team\">\n      <div class=\"col-md-4\">\n        <div align=\"center\">\n          <img class=\"img-responsive\" src=\"https://image.ibb.co/fzEN1Q/zomato_profile_crop_20160423_133148.jpg\" class=\"img-circle\">\n          <h3><strong>Stuti Khanna</strong></h3>\n          <p style=\"margin-top: 20px\">Front End Developer</p>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div align=\"center\">\n          <img class=\"img-responsive\" src=\"https://image.ibb.co/bMjSGQ/Shakir.jpg\" class=\"img-circle\">\n          <h3><strong>Shakir Jameel</strong></h3>\n          <p style=\"margin-top: 20px\"><strong>Full Stack Developer</strong></p>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div align=\"center\">\n          <img class=\"img-responsive\" src=\"https://image.ibb.co/i6brvk/2017_05_13_14_39_32.jpg\" class=\"img-circle\">\n          <h3><strong>Sakshi Rangappa</strong></h3>\n          <p style=\"margin-top: 20px\">Front End Developer</p>\n        </div>\n      </div>\n    </div>\n\n  </section>\n  <hr>\n</div>\n\n<section id=\"contact-us\">\n  <h1 align=\"center\" style=\"padding-bottom: 30px\"><strong> CONTACT U<span class=\"underline\">S</span> </strong></h1>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 social\">\n        <h5 align=\"center\"><strong>SOCIA<span class=\"underline-contact\">L</span> </strong></h5>\n        <div class=\"social-link\" align=\"center\"style=\"padding-top: 30px\">\n          <div class=\"fa fa-linkedin fa-lg fa-fw\" aria-hidden=\"true\" style=\"color: dodgerblue; vertical-align:middle;\"></div>\n          &nbsp; <br>\n            <p style=\"display: inline;font-weight: 100;\">Shakir Jameel</p><br>\n            <p style=\"display: inline\">linkedin.com/in/shakirjameel/</p><br>\n            <p style=\"display: inline;font-weight: 100;\">Stuti Khanna</p><br>\n          &nbsp; <p style=\"display: inline\">linkedin.com/in/stuti-khanna/</p><br>\n            <p style=\"display: inline;font-weight: 100;\">Sakshi Rangappa</p><br>\n          &nbsp; <p style=\"display: inline\">linkedin.com/in/sakshir/</p><br>\n\n        </div>\n      </div>\n      <div class=\"col-md-4 call-us\">\n        <h5 align=\"center\"><strong>CALL U<span class=\"underline-contact\">S</span> </strong></h5>\n        <div class=\"phone-link\" align=\"center\" style=\"padding-top: 30px\">\n          <div class=\"fa fa-phone-square fa-lg fa-fw\" aria-hidden=\"true\" style=\"color: lightslategrey; vertical-align:middle;\"></div>\n            <br>\n            <p style=\"display: inline;font-weight: 100;\">Shakir Jameel</p><br>\n          &nbsp; <p style=\"display: inline\">+91-9403473282</p><br>\n            <p style=\"display: inline;font-weight: 100;\">Stuti Khanna</p><br>\n            <p style=\"display: inline\">+91-7768982280</p><br>\n            <p style=\"display: inline;font-weight: 100;\">Sakshi Rangappa</p><br>\n            <p style=\"display: inline\">+91-8237296090</p><br>\n        </div>\n      </div>\n      <div class=\"col-md-4 our-email\">\n        <h5 align=\"center\"><strong>OUR EMAI<span class=\"underline-contact\">L</span></strong></h5>\n        <div class=\"email-link\" align=\"center\" style=\"padding-top: 30px\">\n          <div class=\"fa fa-envelope fa-lg fa-fw\" aria-hidden=\"true\" style=\"color: indianred; vertical-align:middle;\"></div>\n          <br>\n          <p style=\"display: inline;font-weight: 100;\">Shakir Jameel</p><br>\n          <p style=\"display: inline\">shakirjameel17@gmail.com</p><br>\n          <p style=\"display: inline;font-weight: 100;\">Stuti Khanna</p><br>\n          <p style=\"display: inline\">stuti.9582@gmail.com</p><br>\n          <p style=\"display: inline;font-weight: 100;\">Sakshi Rangappa</p><br>\n          <p style=\"display: inline\">sakshirangappa7@gmail.com</p><br>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<footer>\n  <p style=\"margin-top: 10px\"><strong>&copy; 2017 Bharati Bookstore | Designed and Developed by Shakir Jameel</strong></p>\n</footer>\n"

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h4 class=\"page-header\">Login</h4>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Login\">\n</form>\n</div>\n"

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\"><img class=\"img-responsive\" src=\"https://image.ibb.co/cJCRMQ/Logo.png\" style=\"width: 100%;\"/></a>\n\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"!clientLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/admin']\">Administrator</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!clientLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"!clientLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"clientLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/notifications']\">Notifications</a></li>\n        <li *ngIf=\"clientLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"showUserStuff() && clientLoggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"showUserStuff() && clientLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"onUserLogoutClick()\" href=\"#\">Logout</a></li>\n        <li *ngIf=\"!showUserStuff() && clientLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"onAdminLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" xmlns=\"http://www.w3.org/1999/html\">\n\n  <h3 class=\"page-header\">Notification Feed</h3>\n\n  <div *ngIf=\"showAdminStuff()\">\n    <form style=\"margin-bottom: 50px\">\n      <textarea required class=\"form-control\" maxlength=\"200\" rows=\"3\" placeholder=\"say something...\" name=\"notification_data\" [(ngModel)]=\"notification_data\"></textarea>\n      <input class=\"btn submit-btn btn-default pull-right\" type=\"submit\" value=\"Post!\" (click)=\"addNotification()\"/>\n    </form>\n  </div>\n\n  <div class=\"feed\" style=\"margin-top: 50px\" *ngIf=\"notifications.length >= 1\">\n    <div *ngFor=\"let notification of notifications; let isEven=even \"\n    [class.odd]=\"isOdd\"\n    [class.even]=\"isEven\">\n      <p class=\"well well-lg notification\" style=\"margin-top: 5px\"><strong>{{notification.notification}}</strong><br>\n        <small>Created By : <strong>{{notification.created_by}}</strong></small>\n        <small> and Created On : <strong>{{notification.created_on | date: 'medium'}}</strong></small>\n      </p>\n    </div>\n  </div>\n\n  <div style=\"padding-top: 50px\" *ngIf=\"notifications.length==0\">\n    <p style=\"margin-top: 10px\" class=\"well well-lg no-notification\">There are <strong>no notifications</strong> !</p>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.username}}</h2>\n  <ul class=\"list group\">\n    <li class=\"list-group-item\">Username : <strong>{{user.username}}</strong></li>\n    <li class=\"list-group-item\">Email : <strong>{{user.email}}</strong></li>\n    <li class=\"list-group-item\">Contact Number : <strong>{{user.mobile}}</strong></li>\n  </ul>\n</div>\n\n  <h3 class=\"page-header\">Weekly Issues</h3>\n\n  <div *ngIf=\"weeklyIssues.length >= 1\">\n    <div *ngFor=\"let weeklyIssue of weeklyIssues\">\n      <p style=\"margin-top: 10px\" class=\"well well-lg issue\">You have issued <strong>{{weeklyIssue.title}}</strong>\n        on <strong>{{weeklyIssue.issue_date | date:\"MMM d, y\"}}</strong> which is due on <strong>{{weeklyIssue.return_date | date:\"MMM d, y\"}}</strong> !\n      </p>\n    </div>\n  </div>\n\n  <div *ngIf=\"weeklyIssues.length==0\">\n    <p style=\"margin-top: 10px\" class=\"well well-lg no-issue\">You have made <strong>no weekly issue</strong> so far !</p>\n  </div>\n\n\n\n  <h3 class=\"page-header\">Semester Issues</h3>\n\n  <div *ngIf=\"semIssues.length >= 1\">\n      <div *ngFor=\"let semIssue of semIssues\">\n        <p style=\"margin-top: 10px\" class=\"well well-lg issue\">You have issued <strong>{{semIssue.title}}</strong> of <strong>Semester {{semIssue.semester}}</strong>\n          on <strong>{{semIssue.issue_date | date:\"MMM d, y\"}}</strong> which is due on <strong>{{semIssue.return_date | date:\"MMM d, y\"}}</strong> !\n        </p>\n      </div>\n  </div>\n\n  <div *ngIf=\"semIssues.length==0\">\n    <p style=\"margin-top: 10px\" class=\"well well-lg no-issue\">You have made <strong>no semester issue</strong> so far !</p>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h4 class=\"page-header\">Register</h4>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>PRN</label>\n    <input type=\"text\" [(ngModel)]=\"prn\" name=\"prn\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Contact Number</label>\n    <input type=\"text\" [(ngModel)]=\"mobile\" name=\"mobile\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Semester</label>\n    <input type=\"text\" [(ngModel)]=\"sem\" name=\"sem\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-top: 100px\">\n  <h4>Weekly Return Feed</h4>\n  <hr>\n  <div class=\"col-md-offset-2 col-md-8\">\n\n        <span id=\"post\" *ngFor=\"let weeklyBookData of weeklyBookDatas; let isOdd=odd; let isEven=even \"\n             [class.odd]=\"isOdd\"\n             [class.even]=\"isEven\">\n          <p style=\"margin-top: 10px\" class=\"well well-lg\"><strong>{{weeklyBookData.username}}</strong> - PRN {{weeklyBookData.prn}}\n            issued <strong>{{weeklyBookData.title}}</strong> on <strong>{{weeklyBookData.issue_date  | date:\"MMM d, y\"}}</strong>\n            which is due on <strong>{{weeklyBookData.return_date  | date:\"MMM d, y\"}}</strong>\n            <br>\n            <small class=\"small\">{{weeklyBookData.username}}'s Contact Information</small>\n            <br>\n            <small class=\"small\">Mobile Number : <strong>{{weeklyBookData.mobile}}</strong></small>\n            <small class=\"small\">Email ID : <strong>{{weeklyBookData.email}}</strong></small>\n          </p>\n          <input class=\"btn btn-default\" type=\"submit\" value=\"Return Book\"(click)=\"deleteReturnData(weeklyBookData)\"/>\n        </span>\n\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-top: 100px\">\n  <h4>Semester Return Feed</h4>\n  <hr>\n  <div class=\"col-md-offset-2 col-md-8\">\n\n        <span id=\"post\" *ngFor=\"let semesterBookData of semesterBookDatas; let isOdd=odd; let isEven=even \"\n              [class.odd]=\"isOdd\"\n              [class.even]=\"isEven\">\n          <p style=\"margin-top: 10px\" class=\"well well-lg\"><strong>{{semesterBookData.username}}</strong> - PRN {{semesterBookData.prn}}\n            issued <strong>{{semesterBookData.title}}</strong>\n            of <strong>Semester{{semesterBookData.semester}}</strong>\n            on <strong>{{semesterBookData.issue_date  | date:\"MMM d, y\"}}</strong>\n            which is due on <strong>{{semesterBookData.return_date  | date:\"MMM d, y\"}}</strong>\n            <br>\n            <small class=\"small\">{{semesterBookData.username}}'s Contact Information</small>\n            <br>\n            <small class=\"small\">Mobile Number : <strong>{{semesterBookData.mobile}}</strong></small>\n            <small class=\"small\">Email ID : <strong>{{semesterBookData.email}}</strong></small>\n          </p>\n          <input class=\"btn submit-btn\" type=\"submit\" value=\"Return Semester Book\"(click)=\"deleteReturnData(semesterBookData)\"/>\n        </span>\n\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-header\">Add Semester Book</h4>\n<form (submit)=\"onSemBookSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Image URL</label>\n    <input type=\"text\" [(ngModel)]=\"image_url\" name=\"image_url\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"notShowEdit\">\n    <div>\n      <h4 class=\"page-header\">Semester Book Details</h4>\n      <ul class=\"list group\">\n        <li class=\"list-group-item\">Title : <strong>{{this.bookDetails.title}}</strong></li>\n        <li class=\"list-group-item\">Description : <strong>{{this.bookDetails.description}}</strong></li>\n        <li class=\"list-group-item\">Semester : <strong>{{this.bookDetails.semester}}</strong></li>\n      </ul>\n      <div *ngIf=\"!showAdminStuff()\">\n        <button class=\"btn btn-default\" (click)=\"issueBook()\">Issue Book</button>\n      </div>\n      <div style=\"margin-top: 20px\" *ngIf=\"showAdminStuff()\">\n        <button class=\"btn btn-default\" (click)=\"showEditBook()\">Edit Details</button>\n        <button class=\"btn btn-default\" (click)=\"deleteBook(this.bookDetails._id)\">Delete Book</button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!notShowEdit\">\n    <h4 class=\"page-header\">Edit Book Details</h4>\n    <form (submit)=\"onEditDetailsSubmit()\">\n      <div class=\"form-group\">\n        <label>Title</label>\n        <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" value=\"{{title}}\">\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" value=\"{{description}}\">\n      </div>\n      <div class=\"form-group\">\n        <label>Image URL</label>\n        <input type=\"text\" [(ngModel)]=\"image_url\" name=\"image_url\" class=\"form-control\" value=\"{{image_url}}\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px\">\n\n  <div *ngIf=\"addBookNotClicked && notShowDetails\">\n\n    <div class=\"row\">\n      <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"goBackToGenres()\">\n        <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n      </button>\n\n      <span *ngIf=\"showAdminStuff()\">\n      <input style=\"margin-left: 10px; padding: 9px 9px 10px 10px;\" type=\"submit\" class=\"btn btn-default\" (click)=\"addBookFunction()\" value=\"Add Semester Book\">\n    </span>\n    </div>\n\n    <div *ngFor=\"let semRelatedBook of semRelatedBooks\">\n      <!-- Bind the selected Genre with the variable in the ts file-->\n      <div class=\"col-xs-12 col-md-6\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-image\">\n            <img src=\"{{semRelatedBook.image_url}}\" class=\"panel-image-preview\" />\n            <label for=\"toggle-4\"></label>\n          </div>\n          <input type=\"checkbox\" id=\"toggle-4\" checked class=\"panel-image-toggle\">\n          <div class=\"panel-body\">\n            <h5>{{semRelatedBook.title}}</h5>\n          </div>\n          <div class=\"panel-footer text-center\">\n            <!-- <input class=\"btn submit-btn\" type=\"submit\" value=\"Get Details\"(click)=\"getDetails(genreRelatedBook)\"/> -->\n            <a class=\"get-deets\" (click)=\"getDetails(semRelatedBook)\"><strong>Get Details</strong></a>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"notShowDetails && !addBookNotClicked\">\n    <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"addBookNotClicked=true\">\n      <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n    </button>\n    <app-addsembook [passSemSelected]=\"passSemSelected\"></app-addsembook>\n  </div>\n\n  <div *ngIf=\"!notShowDetails\">\n    <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"notShowDetails=true\">\n      <span class=\"glyphicon glyphicon-hand-left\" aria-hidden=\"true\"></span>\n    </button>\n    <app-detailsembook [bookDetails]=\"bookDetails\"></app-detailsembook>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 80px\">\n\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <input id=\"1\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester I\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n      </div>\n      <div class=\"col-md-6\">\n        <input id=\"2\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester II\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n      </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <input id=\"3\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester III\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n    </div>\n    <div class=\"col-md-6\">\n      <input id=\"4\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester IV\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <input id=\"5\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester V\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n    </div>\n    <div class=\"col-md-6\">\n      <input id=\"6\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester VI\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <input id=\"7\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester VII\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n    </div>\n    <div class=\"col-md-6\">\n      <input id=\"8\" class=\"btn submit-btn btn-default sem-genres\" type=\"submit\" value=\"Semester VIII\"(click)=\"displaySemesterRelatedBooks($event)\"/>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        console.log('In AuthService method registerUser');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateAdmin = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('admins/authenticate', admin, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        console.log('In get Profile');
        var userData = localStorage.getItem('user');
        var user = JSON.parse(userData);
        var user_id = user.id;
        console.log('User ID is - ' + user_id);
        return this.http.get('users/' + user_id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSemIssueData = function () {
        var user = localStorage.getItem('user');
        console.log(user);
        var userData = JSON.parse(user);
        return this.http.get('returnsemester/' + userData.id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getWeeklyIssueData = function () {
        var user = localStorage.getItem('user');
        console.log(user);
        var userData = JSON.parse(user);
        return this.http.get('return/' + userData.id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadUserToken = function () {
        console.log('In Load User Token');
        var userToken = localStorage.getItem('user_token');
        this.userAuthToken = userToken;
        console.log('The User Token is ' + this.userAuthToken);
    };
    AuthService.prototype.loadAdminToken = function () {
        var adminToken = localStorage.getItem('admin_token');
        this.adminAuthToken = adminToken;
    };
    AuthService.prototype.userLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('user_token');
    };
    AuthService.prototype.adminLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('admin_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('user_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.userAuthToken = token;
        this.user = user;
        console.log('In storeUserData, authToken ' + this.userAuthToken);
    };
    AuthService.prototype.storeAdminData = function (token, admin) {
        localStorage.setItem('admin_token', token);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.adminAuthToken = token;
        this.admin = admin;
        console.log('In storeAdminData, Admin authToken ' + this.adminAuthToken);
    };
    AuthService.prototype.userLogout = function () {
        console.log('user logged out');
        this.userAuthToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.adminLogout = function () {
        console.log('admin Logged out');
        this.adminAuthToken = null;
        this.admin = null;
        localStorage.clear();
    };
    AuthService.prototype.getWeeklyGenres = function () {
        return this.http.get('genres/weeklygenre')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addWeeklyGenres = function (genre) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('genres/weeklygenre', genre, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateWeeklyGenreDetails = function (updatedDetails) {
        console.log('In get Profile');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        console.log('In get Profile with adminAuthToken ' + this.adminAuthToken);
        headers.append('Authorization', this.adminAuthToken);
        console.log('In AuthService method updateGenreDetails');
        headers.append('Content-Type', 'application/json');
        return this.http.put('genres/weeklygenre/' + updatedDetails.id, updatedDetails, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteWeeklyGenre = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        return this.http.delete('genres/weeklygenre/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSelectedGenreBooks = function (whichGenreIsSelected) {
        var selectedGenre = whichGenreIsSelected;
        return this.http.get('books/' + selectedGenre)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addWeeklyBook = function (book) {
        console.log('In AuthService method addWeeklyBook');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('books/book', book, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //put request
    AuthService.prototype.updateWeeklyBook = function (updatedBook) {
        console.log('In AuthService method updateWeeklyBook');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('books/book/' + updatedBook.id, updatedBook, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete request
    AuthService.prototype.deleteWeeklyBook = function (bookID) {
        console.log('In AuthService method deleteWeeklyBook');
        //const headers = new Headers();
        //headers.append('Content-Type','application/json');,updatedBook, {headers: headers}
        return this.http.delete('books/book/' + bookID)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSelectedSemBooks = function (selectedSem) {
        var selectedSemester = selectedSem;
        return this.http.get('sembooks/' + selectedSemester)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addSemesterBook = function (book) {
        console.log('In AuthService method addSemesterBook');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('sembooks/sembook', book, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateSemesterBook = function (updatedBook) {
        console.log('In AuthService method updateSemesterBook');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('books/book/' + updatedBook.id, updatedBook, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteSemesterBook = function (bookID) {
        console.log('In AuthService method deleteWeeklyBook');
        //const headers = new Headers();
        //headers.append('Content-Type','application/json');,updatedBook, {headers: headers}
        return this.http.delete('sembooks/sembook/' + bookID)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addIssueData = function (bookData) {
        var _this = this;
        var user = localStorage.getItem('user');
        console.log(user);
        var id = bookData.id;
        var userData = JSON.parse(user);
        var returnWeeklyBook = {
            user_id: userData.id,
            username: userData.name,
            prn: userData.prn,
            email: userData.email,
            mobile: userData.mobile,
            sem: userData.sem,
            title: bookData.title,
            genre: bookData.genre,
            author: bookData.author,
            edition: bookData.edition,
            description: bookData.description,
            publisher: bookData.publisher,
            image_url: bookData.image_url
        };
        console.log('In AuthService method addIssueData');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //extremely important logic
        return this.http.delete('books/book/' + id).map(function (res) { return res.json(); }).flatMap(function (issueData) {
            return _this.http.post('return/returnweeklybook', returnWeeklyBook, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    AuthService.prototype.addSemesterIssueData = function (bookData) {
        var _this = this;
        var user = localStorage.getItem('user');
        console.log(user);
        var id = bookData.id;
        var userData = JSON.parse(user);
        var returnWeeklyBook = {
            user_id: userData.id,
            username: userData.name,
            prn: userData.prn,
            email: userData.email,
            mobile: userData.mobile,
            sem: userData.sem,
            title: bookData.title,
            semester: bookData.semester,
            description: bookData.description,
            image_url: bookData.image_url
        };
        console.log('In AuthService method addIssueData');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //extremely important logic
        return this.http.delete('sembooks/sembook/' + id).map(function (res) { return res.json(); }).flatMap(function (issueData) {
            return _this.http.post('returnsemester/returnsemesterbook', returnWeeklyBook, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    AuthService.prototype.getReturnWeeklies = function () {
        return this.http.get('return/returnweeklybook')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteWeeklyReturnEntry = function (returnBookData) {
        var _this = this;
        var Book = {
            title: returnBookData.title,
            genre: returnBookData.genre,
            author: returnBookData.author,
            edition: returnBookData.edition,
            description: returnBookData.description,
            publisher: returnBookData.publisher,
            image_url: returnBookData.image_url
        };
        console.log('In AuthService method deleteWeeklyReturnEntry');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        headers.append('Content-Type', 'application/json');
        //extremely important logic
        return this.http.delete('return/returnweeklybook/' + returnBookData._id, { headers: headers }).map(function (res) { return res.json(); }).flatMap(function (insertNewBookData) {
            return _this.http.post('books/book', Book, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    AuthService.prototype.getReturnSemesters = function () {
        return this.http.get('returnsemester/returnsemesterbook')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteSemesterReturnEntry = function (returnBookData) {
        var _this = this;
        var Book = {
            title: returnBookData.title,
            semester: returnBookData.semester,
            description: returnBookData.description,
            image_url: returnBookData.image_url
        };
        console.log('In AuthService method deleteSemesterReturnEntry');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        headers.append('Content-Type', 'application/json');
        //extremely important logic
        return this.http.delete('returnsemester/returnsemesterbook/' + returnBookData._id, { headers: headers }).map(function (res) { return res.json(); }).flatMap(function (insertNewBookData) {
            return _this.http.post('sembooks/sembook', Book, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    AuthService.prototype.getNotifications = function () {
        return this.http.get('notifications').map(function (res) { return res.json(); });
    };
    AuthService.prototype.addNotification = function (notificationData) {
        var admin = localStorage.getItem('admin');
        var adminData = JSON.parse(admin);
        var notification = {
            notification: notificationData,
            created_by: adminData.name
        };
        console.log('In AuthService method addNotification');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadAdminToken();
        headers.append('Authorization', this.adminAuthToken);
        //extremely important logic
        return this.http.post('notifications', notification, { headers: headers }).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=F:/bharatibookstoreTeam/angular-src/src/auth.service.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.bundle.map