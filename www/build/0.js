webpackJsonp([0],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieDetailsPageModule = /** @class */ (function () {
    function MovieDetailsPageModule() {
    }
    MovieDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */]),
            ],
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());

//# sourceMappingURL=movie-details.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_like_like__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailsPage = /** @class */ (function () {
    function MovieDetailsPage(navCtrl, navParams, likeProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.likeProvider = likeProvider;
        this.isLiked = false;
        this.movie = this.navParams.get('movie');
        this.likeProvider.isLiked(this.movie.episode_id).then(function (isLK) {
            _this.isLiked = isLK;
        });
    }
    MovieDetailsPage.prototype.likeMovie = function () {
        var _this = this;
        this.likeProvider.likeMovie(this.movie.episode_id).then(function () {
            _this.isLiked = true;
        });
    };
    MovieDetailsPage.prototype.unlikeMovie = function () {
        var _this = this;
        this.likeProvider.unlikeMovie(this.movie.episode_id).then(function () {
            _this.isLiked = false;
        });
    };
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovieDetailsPage');
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-details',template:/*ion-inline-start:"/home/hossam/x/src/pages/movie-details/movie-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ movie.title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="unlikeMovie()" *ngIf="isLiked"><ion-icon name="thumbs-down"></ion-icon></button>\n      <button ion-button icon-only (click)="likeMovie()" *ngIf="!isLiked"><ion-icon name="thumbs-up"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      {{ movie.opening_crawl }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/hossam/x/src/pages/movie-details/movie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_like_like__["a" /* LikeProvider */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

//# sourceMappingURL=movie-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map