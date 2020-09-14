(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\practest\myblog\src\main.ts */"zUnb");


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "60Vh":
/*!***********************************!*\
  !*** ./src/app/models/article.ts ***!
  \***********************************/
/*! exports provided: Article, Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
class Article {
    constructor() {
        this.slug = "";
        this.title = "";
        this.description = "";
        this.body = "";
        this.tagList = [];
        this.createdAt = "";
        this.updatedAt = "";
        this.favorited = false;
        this.favoritesCount = 0;
        this.author = new Author();
    }
}
class Author {
    constructor() {
        this.username = "";
        this.bio = "";
        this.image = "";
        this.following = false;
    }
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "y2tY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const a_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navArticle(a_r1.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1.author.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1.description);
} }
class HomeComponent {
    constructor(_blog, _router) {
        this._blog = _blog;
        this._router = _router;
    }
    ngOnInit() {
        this.getGlobalArticles();
    }
    navArticle(slug) {
        this._router.navigate(['/article', slug]);
    }
    getGlobalArticles() {
        this._blog.globalArticles()
            .subscribe(res => {
            this.articles = res["articles"];
            console.log(this.articles);
        }, err => console.log(err));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 1, consts: [[1, "banner-style"], [1, "feed-toggle", "pd4", "MT20"], [1, "nav", 2, "font-size", "17px"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "active", 1, "ptofil-name"], ["href", "", 1, "nav-link", "styl1"], [2, "margin-top", "0%"], [4, "ngFor", "ngForOf"], [1, "ptofil-name"], [1, "pd1"], [1, "rd-more", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A place to share knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Global Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Your Feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 12, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".login-box[_ngcontent-%COMP%]{\r\n    border: 1px black;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}\r\n.M20[_ngcontent-%COMP%]{\r\n    margin: 22px;\r\n}\r\n.MT20[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.border-styling[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    border-radius: 5%;\r\n}\r\n.foot-style[_ngcontent-%COMP%]{\r\n    background-color: #b1ded2;\r\n    padding: 2%;\r\n    color: grey;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%\r\n}\r\n.banner-style[_ngcontent-%COMP%]{\r\n    background: #a0ecd7;\r\n    width: 115%;\r\n    height: 78px;\r\n    padding: 2%;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px #00000091;\r\n    margin-left: -7%;\r\n}\r\n.styl1[_ngcontent-%COMP%]{\r\n    padding-top: 2%;\r\n    color: #7a8e86;\r\n}\r\n.pd4[_ngcontent-%COMP%]{\r\n    padding-left: 4%;\r\n}\r\n.menu-pannel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin: 27px;\r\n}\r\n.pd2[_ngcontent-%COMP%]{\r\n    padding : 2%;\r\n}\r\n.link-to-page[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-size: 15px;\r\n    margin-right: 18px;\r\n    font-weight: 500;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #a0ecd7!important;\r\n}\r\n.ptofil-name[_ngcontent-%COMP%]{\r\n    color: #4cd3ad;\r\n}\r\n.pd1[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n}\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin-right: -2%;\r\n\r\n}\r\n.article-head[_ngcontent-%COMP%]{\r\n    background: #656363;\r\n    width: 114%;\r\n    height: 150px;\r\n    padding: 2%;\r\n    color: white;\r\n    font-size: xx-large;\r\n    font-weight: 500;\r\n    margin-left: -7%;\r\n    padding-left: 9%;\r\n}\r\n.article-body[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    padding: 2%;\r\n}\r\n.rd-more[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background: none;\r\n    font-size: 11px;\r\n    color: #7b7777;\r\n}\r\n.M-misun-14[_ngcontent-%COMP%]{\r\n    margin-top: -14px\r\n}\r\n.M-R-13[_ngcontent-%COMP%]{\r\n    margin-right: 13px;\r\n}\r\n.BD-Rad[_ngcontent-%COMP%]{\r\n    border-radius: 4px !important;\r\n}\r\n.back-none[_ngcontent-%COMP%]{\r\n    background: none;\r\n}\r\n.MT10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.pd5[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.commenter-name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: x-large;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLk0yMHtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG4uTVQyMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uZm9vdC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRlZDI7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uYmFubmVyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZDogI2EwZWNkNztcclxuICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDAwMDA5MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbn1cclxuXHJcbi5zdHlsMXtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGNvbG9yOiAjN2E4ZTg2O1xyXG59XHJcbi5wZDR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5tZW51LXBhbm5lbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyN3B4O1xyXG59XHJcbi5wZDJ7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbn1cclxuLmxpbmstdG8tcGFnZXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhMGVjZDchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHRvZmlsLW5hbWV7XHJcbiAgICBjb2xvcjogIzRjZDNhZDtcclxufVxyXG4ucGQxe1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmhpZGUtb3ZlcmZsb3d7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMiU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzY1NjM2MztcclxuICAgIHdpZHRoOiAxMTQlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ucmQtbW9yZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzdiNzc3NztcclxufVxyXG4uTS1taXN1bi0xNHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4XHJcbn1cclxuLk0tUi0xM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4uQkQtUmFke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stbm9uZXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5NVDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBkNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRlci1uYW1le1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['../blog.css']
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DLXL":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/article */ "60Vh");
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/comment */ "YaP0");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "y2tY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ArticleComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_div_21_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const c_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteComment(c_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.author.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.body);
} }
class ArticleComponent {
    constructor(_blog, _route, _router) {
        this._blog = _blog;
        this._route = _route;
        this._router = _router;
        this.article = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        this.comment = new _models_comment__WEBPACK_IMPORTED_MODULE_2__["Comment"]();
    }
    ngOnInit() {
        const slugID = this._route.snapshot.paramMap.get('slug');
        this.fetchArticle(slugID);
    }
    fetchArticle(slugID) {
        this._blog.getArticle(slugID).subscribe(res => {
            this.article = res["article"];
            console.log(this.article);
            this.fetchComments(slugID);
        }, err => console.log(err));
    }
    fetchComments(slugID) {
        this._blog.getComments(slugID).subscribe(res => {
            this.comments = res["comments"];
            console.log(this.comments);
        }, err => console.log(err));
    }
    deleteArticle() {
        console.log(this.article);
        this._blog.deleteArticle(this.article.slug)
            .subscribe(res => {
            // localStorage.setItem('token', res.token)
            this._router.navigate(['/home']);
            console.log(res);
        }, err => console.log(err));
    }
    editArticle() {
        this._router.navigate(['/add-article', this.article.slug]);
    }
    addComment() {
        console.log(this.comment);
        this._blog.addComment(this.article.slug, this.comment.body)
            .subscribe(res => {
            // localStorage.setItem('token', res.token)
            // this._router.navigate(['/article',this.article.slug]);
            console.log(res);
            this.fetchComments(this.article.slug);
        }, err => console.log(err));
    }
    deleteComment(id) {
        console.log(this.article);
        this._blog.deleteComment(this.article.slug, id)
            .subscribe(res => {
            // localStorage.setItem('token', res.token)
            this._router.navigate(['/article', this.article.slug]);
            console.log(res);
            this.fetchComments(this.article.slug);
        }, err => console.log(err));
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 22, vars: 5, consts: [[1, "article-head"], [2, "margin-top", "-2%"], [2, "font-size", "small"], [1, "M-misun-14"], ["type", "button", "data-toggle", "tooltip", "title", "Delete", 1, "M-R-13", "btn", "btn-danger", "btn-sm", "rounded-0", "BD-Rad", "back-none"], [1, "fa", "fa-trash", 3, "click"], ["type", "button", "data-toggle", "tooltip", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", "BD-Rad", "back-none"], [1, "fa", "fa-edit", 3, "click"], [1, "article-body"], ["type", "comments", "placeholder", "Comment", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"], [1, "commenter-name"], ["type", "submit", 1, "btn", "btn-primary", "MT10", "fa", "fa-delete", 3, "click"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_i_click_7_listener() { return ctx.deleteArticle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_i_click_10_listener() { return ctx.editArticle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "COMMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArticleComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.comment.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_button_click_19_listener() { return ctx.addComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ArticleComponent_div_21_Template, 8, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.article.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.author.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.article.body, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".login-box[_ngcontent-%COMP%]{\r\n    border: 1px black;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}\r\n.M20[_ngcontent-%COMP%]{\r\n    margin: 22px;\r\n}\r\n.MT20[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.border-styling[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    border-radius: 5%;\r\n}\r\n.foot-style[_ngcontent-%COMP%]{\r\n    background-color: #b1ded2;\r\n    padding: 2%;\r\n    color: grey;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%\r\n}\r\n.banner-style[_ngcontent-%COMP%]{\r\n    background: #a0ecd7;\r\n    width: 115%;\r\n    height: 78px;\r\n    padding: 2%;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px #00000091;\r\n    margin-left: -7%;\r\n}\r\n.styl1[_ngcontent-%COMP%]{\r\n    padding-top: 2%;\r\n    color: #7a8e86;\r\n}\r\n.pd4[_ngcontent-%COMP%]{\r\n    padding-left: 4%;\r\n}\r\n.menu-pannel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin: 27px;\r\n}\r\n.pd2[_ngcontent-%COMP%]{\r\n    padding : 2%;\r\n}\r\n.link-to-page[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-size: 15px;\r\n    margin-right: 18px;\r\n    font-weight: 500;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #a0ecd7!important;\r\n}\r\n.ptofil-name[_ngcontent-%COMP%]{\r\n    color: #4cd3ad;\r\n}\r\n.pd1[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n}\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin-right: -2%;\r\n\r\n}\r\n.article-head[_ngcontent-%COMP%]{\r\n    background: #656363;\r\n    width: 114%;\r\n    height: 150px;\r\n    padding: 2%;\r\n    color: white;\r\n    font-size: xx-large;\r\n    font-weight: 500;\r\n    margin-left: -7%;\r\n    padding-left: 9%;\r\n}\r\n.article-body[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    padding: 2%;\r\n}\r\n.rd-more[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background: none;\r\n    font-size: 11px;\r\n    color: #7b7777;\r\n}\r\n.M-misun-14[_ngcontent-%COMP%]{\r\n    margin-top: -14px\r\n}\r\n.M-R-13[_ngcontent-%COMP%]{\r\n    margin-right: 13px;\r\n}\r\n.BD-Rad[_ngcontent-%COMP%]{\r\n    border-radius: 4px !important;\r\n}\r\n.back-none[_ngcontent-%COMP%]{\r\n    background: none;\r\n}\r\n.MT10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.pd5[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.commenter-name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: x-large;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLk0yMHtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG4uTVQyMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uZm9vdC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRlZDI7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uYmFubmVyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZDogI2EwZWNkNztcclxuICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDAwMDA5MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbn1cclxuXHJcbi5zdHlsMXtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGNvbG9yOiAjN2E4ZTg2O1xyXG59XHJcbi5wZDR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5tZW51LXBhbm5lbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyN3B4O1xyXG59XHJcbi5wZDJ7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbn1cclxuLmxpbmstdG8tcGFnZXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhMGVjZDchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHRvZmlsLW5hbWV7XHJcbiAgICBjb2xvcjogIzRjZDNhZDtcclxufVxyXG4ucGQxe1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmhpZGUtb3ZlcmZsb3d7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMiU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzY1NjM2MztcclxuICAgIHdpZHRoOiAxMTQlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ucmQtbW9yZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzdiNzc3NztcclxufVxyXG4uTS1taXN1bi0xNHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4XHJcbn1cclxuLk0tUi0xM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4uQkQtUmFke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stbm9uZXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5NVDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBkNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRlci1uYW1le1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['../blog.css']
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "JMem":
/*!**********************************************************!*\
  !*** ./src/app/specialevents/specialevents.component.ts ***!
  \**********************************************************/
/*! exports provided: SpecialeventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialeventsComponent", function() { return SpecialeventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpecialeventsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpecialeventsComponent.ɵfac = function SpecialeventsComponent_Factory(t) { return new (t || SpecialeventsComponent)(); };
SpecialeventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialeventsComponent, selectors: [["app-specialevents"]], decls: 2, vars: 0, template: function SpecialeventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "specialevents works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxldmVudHMvc3BlY2lhbGV2ZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialeventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-specialevents',
                templateUrl: './specialevents.component.html',
                styleUrls: ['./specialevents.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'myblog';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["role", "main", 1, "content"], [1, "foot-style"], [1, "container", "pd5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Powered by Demo@Nagarro\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".login-box[_ngcontent-%COMP%]{\r\n    border: 1px black;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}\r\n.M20[_ngcontent-%COMP%]{\r\n    margin: 22px;\r\n}\r\n.MT20[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.border-styling[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    border-radius: 5%;\r\n}\r\n.foot-style[_ngcontent-%COMP%]{\r\n    background-color: #b1ded2;\r\n    padding: 2%;\r\n    color: grey;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%\r\n}\r\n.banner-style[_ngcontent-%COMP%]{\r\n    background: #a0ecd7;\r\n    width: 115%;\r\n    height: 78px;\r\n    padding: 2%;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px #00000091;\r\n    margin-left: -7%;\r\n}\r\n.styl1[_ngcontent-%COMP%]{\r\n    padding-top: 2%;\r\n    color: #7a8e86;\r\n}\r\n.pd4[_ngcontent-%COMP%]{\r\n    padding-left: 4%;\r\n}\r\n.menu-pannel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin: 27px;\r\n}\r\n.pd2[_ngcontent-%COMP%]{\r\n    padding : 2%;\r\n}\r\n.link-to-page[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-size: 15px;\r\n    margin-right: 18px;\r\n    font-weight: 500;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #a0ecd7!important;\r\n}\r\n.ptofil-name[_ngcontent-%COMP%]{\r\n    color: #4cd3ad;\r\n}\r\n.pd1[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n}\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin-right: -2%;\r\n\r\n}\r\n.article-head[_ngcontent-%COMP%]{\r\n    background: #656363;\r\n    width: 114%;\r\n    height: 150px;\r\n    padding: 2%;\r\n    color: white;\r\n    font-size: xx-large;\r\n    font-weight: 500;\r\n    margin-left: -7%;\r\n    padding-left: 9%;\r\n}\r\n.article-body[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    padding: 2%;\r\n}\r\n.rd-more[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background: none;\r\n    font-size: 11px;\r\n    color: #7b7777;\r\n}\r\n.M-misun-14[_ngcontent-%COMP%]{\r\n    margin-top: -14px\r\n}\r\n.M-R-13[_ngcontent-%COMP%]{\r\n    margin-right: 13px;\r\n}\r\n.BD-Rad[_ngcontent-%COMP%]{\r\n    border-radius: 4px !important;\r\n}\r\n.back-none[_ngcontent-%COMP%]{\r\n    background: none;\r\n}\r\n.MT10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.pd5[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.commenter-name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: x-large;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLk0yMHtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG4uTVQyMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uZm9vdC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRlZDI7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uYmFubmVyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZDogI2EwZWNkNztcclxuICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDAwMDA5MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbn1cclxuXHJcbi5zdHlsMXtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGNvbG9yOiAjN2E4ZTg2O1xyXG59XHJcbi5wZDR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5tZW51LXBhbm5lbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyN3B4O1xyXG59XHJcbi5wZDJ7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbn1cclxuLmxpbmstdG8tcGFnZXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhMGVjZDchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHRvZmlsLW5hbWV7XHJcbiAgICBjb2xvcjogIzRjZDNhZDtcclxufVxyXG4ucGQxe1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmhpZGUtb3ZlcmZsb3d7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMiU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzY1NjM2MztcclxuICAgIHdpZHRoOiAxMTQlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ucmQtbW9yZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzdiNzc3NztcclxufVxyXG4uTS1taXN1bi0xNHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4XHJcbn1cclxuLk0tUi0xM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4uQkQtUmFke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stbm9uZXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5NVDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBkNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRlci1uYW1le1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./blog.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TJd8":
/*!******************************************************!*\
  !*** ./src/app/add-article/add-article.component.ts ***!
  \******************************************************/
/*! exports provided: AddArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddArticleComponent", function() { return AddArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/article */ "60Vh");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "y2tY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AddArticleComponent {
    constructor(_blog, _route, _router) {
        this._blog = _blog;
        this._route = _route;
        this._router = _router;
        this.articleData = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
    }
    ngOnInit() {
        const slugID = this._route.snapshot.paramMap.get('slug');
        this.fetchArticle(slugID);
    }
    fetchArticle(slugID) {
        this._blog.getArticle(slugID).subscribe(res => {
            this.articleData = res["article"];
            console.log(this.articleData);
        }, err => console.log(err));
    }
    addArticle() {
        console.log(this.articleData);
        this._blog.addArticle(this.articleData)
            .subscribe(res => {
            // localStorage.setItem('token', res.token)
            this._router.navigate(['/article', res.article.slug]);
            console.log(res);
        }, err => console.log(err));
    }
    editArticle() {
        console.log(this.articleData);
        this._blog.editArticle(this.articleData)
            .subscribe(res => {
            // localStorage.setItem('token', res.token)
            this._router.navigate(['/article', res.article.slug]);
            console.log(res);
        }, err => console.log(err));
    }
}
AddArticleComponent.ɵfac = function AddArticleComponent_Factory(t) { return new (t || AddArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddArticleComponent, selectors: [["app-add-article"]], decls: 9, vars: 3, consts: [[1, "form-group", "login-box"], ["type", "text", "placeholder", "Title", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Description", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["rows", "5", "placeholder", "Article Content", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function AddArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddArticleComponent_Template_input_ngModelChange_4_listener($event) { return ctx.articleData.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddArticleComponent_Template_input_ngModelChange_5_listener($event) { return ctx.articleData.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddArticleComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.articleData.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_Template_button_click_7_listener() { return ctx.addArticle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.articleData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.articleData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.articleData.body);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".login-box[_ngcontent-%COMP%]{\r\n    border: 1px black;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}\r\n.M20[_ngcontent-%COMP%]{\r\n    margin: 22px;\r\n}\r\n.MT20[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.border-styling[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    border-radius: 5%;\r\n}\r\n.foot-style[_ngcontent-%COMP%]{\r\n    background-color: #b1ded2;\r\n    padding: 2%;\r\n    color: grey;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%\r\n}\r\n.banner-style[_ngcontent-%COMP%]{\r\n    background: #a0ecd7;\r\n    width: 115%;\r\n    height: 78px;\r\n    padding: 2%;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px #00000091;\r\n    margin-left: -7%;\r\n}\r\n.styl1[_ngcontent-%COMP%]{\r\n    padding-top: 2%;\r\n    color: #7a8e86;\r\n}\r\n.pd4[_ngcontent-%COMP%]{\r\n    padding-left: 4%;\r\n}\r\n.menu-pannel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin: 27px;\r\n}\r\n.pd2[_ngcontent-%COMP%]{\r\n    padding : 2%;\r\n}\r\n.link-to-page[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-size: 15px;\r\n    margin-right: 18px;\r\n    font-weight: 500;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #a0ecd7!important;\r\n}\r\n.ptofil-name[_ngcontent-%COMP%]{\r\n    color: #4cd3ad;\r\n}\r\n.pd1[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n}\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin-right: -2%;\r\n\r\n}\r\n.article-head[_ngcontent-%COMP%]{\r\n    background: #656363;\r\n    width: 114%;\r\n    height: 150px;\r\n    padding: 2%;\r\n    color: white;\r\n    font-size: xx-large;\r\n    font-weight: 500;\r\n    margin-left: -7%;\r\n    padding-left: 9%;\r\n}\r\n.article-body[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    padding: 2%;\r\n}\r\n.rd-more[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background: none;\r\n    font-size: 11px;\r\n    color: #7b7777;\r\n}\r\n.M-misun-14[_ngcontent-%COMP%]{\r\n    margin-top: -14px\r\n}\r\n.M-R-13[_ngcontent-%COMP%]{\r\n    margin-right: 13px;\r\n}\r\n.BD-Rad[_ngcontent-%COMP%]{\r\n    border-radius: 4px !important;\r\n}\r\n.back-none[_ngcontent-%COMP%]{\r\n    background: none;\r\n}\r\n.MT10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.pd5[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.commenter-name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: x-large;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLk0yMHtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG4uTVQyMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uZm9vdC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRlZDI7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uYmFubmVyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZDogI2EwZWNkNztcclxuICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDAwMDA5MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbn1cclxuXHJcbi5zdHlsMXtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGNvbG9yOiAjN2E4ZTg2O1xyXG59XHJcbi5wZDR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5tZW51LXBhbm5lbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyN3B4O1xyXG59XHJcbi5wZDJ7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbn1cclxuLmxpbmstdG8tcGFnZXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhMGVjZDchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHRvZmlsLW5hbWV7XHJcbiAgICBjb2xvcjogIzRjZDNhZDtcclxufVxyXG4ucGQxe1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmhpZGUtb3ZlcmZsb3d7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMiU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzY1NjM2MztcclxuICAgIHdpZHRoOiAxMTQlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ucmQtbW9yZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzdiNzc3NztcclxufVxyXG4uTS1taXN1bi0xNHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4XHJcbn1cclxuLk0tUi0xM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4uQkQtUmFke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stbm9uZXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5NVDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBkNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRlci1uYW1le1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-article',
                templateUrl: './add-article.component.html',
                styleUrls: ['../blog.css']
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "YaP0":
/*!***********************************!*\
  !*** ./src/app/models/comment.ts ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "60Vh");

class Comment {
    constructor() {
        this.id = 0;
        this.createdAt = "";
        this.updatedAt = "";
        this.body = "";
        this.author = new _article__WEBPACK_IMPORTED_MODULE_0__["Author"]();
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _specialevents_specialevents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specialevents/specialevents.component */ "JMem");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog.service */ "y2tY");
/* harmony import */ var _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-article/add-article.component */ "TJd8");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "fECr");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _blog_service__WEBPACK_IMPORTED_MODULE_11__["BlogService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _specialevents_specialevents_component__WEBPACK_IMPORTED_MODULE_7__["SpecialeventsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_12__["AddArticleComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _specialevents_specialevents_component__WEBPACK_IMPORTED_MODULE_7__["SpecialeventsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_12__["AddArticleComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ],
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _blog_service__WEBPACK_IMPORTED_MODULE_11__["BlogService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
        this._registerUrl = "https://conduit.productionready.io/api/users";
        this._loginUrl = "https://conduit.productionready.io/api/users/login";
    }
    signup(user) {
        console.log(JSON.stringify(user));
        const userjson = {
            user
        };
        return this.http.post(this._registerUrl, userjson);
    }
    loginUser(user) {
        const userjson = {
            user
        };
        return this.http.post(this._loginUrl, userjson);
    }
    logoutUser() {
        localStorage.removeItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    isUserLoggedIn() {
        if (localStorage.getItem('token') === null && localStorage.getItem('token') === undefined) {
            return false;
        }
        return true;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HeaderComponent {
    constructor(_auth) {
        this._auth = _auth;
    }
    ngOnInit() {
    }
    logoutUser() {
        this._auth.logoutUser();
    }
    get isUserLoggedIn() {
        return this._auth.isUserLoggedIn();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 0, consts: [[1, "row"], [1, "col-lg-6"], ["src", "assets/images/logo.png", "alt", "logo", "width", "100", "height", "80"], [1, "menu-pannel"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "link-to-page"], ["routerLink", "/login", "routerLinkActive", "active", 1, "link-to-page"], ["routerLink", "/home", "routerLinkActive", "active", 1, "link-to-page"], ["routerLink", "/add-article", "routerLinkActive", "active", 1, "link-to-page"], ["routerLink", "/login", "routerLinkActive", "active", 1, "link-to-page", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SIGNUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ADD ARTICLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".login-box[_ngcontent-%COMP%]{\r\n    border: 1px black;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}\r\n.M20[_ngcontent-%COMP%]{\r\n    margin: 22px;\r\n}\r\n.MT20[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.border-styling[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    border-radius: 5%;\r\n}\r\n.foot-style[_ngcontent-%COMP%]{\r\n    background-color: #b1ded2;\r\n    padding: 2%;\r\n    color: grey;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%\r\n}\r\n.banner-style[_ngcontent-%COMP%]{\r\n    background: #a0ecd7;\r\n    width: 115%;\r\n    height: 78px;\r\n    padding: 2%;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px #00000091;\r\n    margin-left: -7%;\r\n}\r\n.styl1[_ngcontent-%COMP%]{\r\n    padding-top: 2%;\r\n    color: #7a8e86;\r\n}\r\n.pd4[_ngcontent-%COMP%]{\r\n    padding-left: 4%;\r\n}\r\n.menu-pannel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin: 27px;\r\n}\r\n.pd2[_ngcontent-%COMP%]{\r\n    padding : 2%;\r\n}\r\n.link-to-page[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-size: 15px;\r\n    margin-right: 18px;\r\n    font-weight: 500;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #a0ecd7!important;\r\n}\r\n.ptofil-name[_ngcontent-%COMP%]{\r\n    color: #4cd3ad;\r\n}\r\n.pd1[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n}\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin-right: -2%;\r\n\r\n}\r\n.article-head[_ngcontent-%COMP%]{\r\n    background: #656363;\r\n    width: 114%;\r\n    height: 150px;\r\n    padding: 2%;\r\n    color: white;\r\n    font-size: xx-large;\r\n    font-weight: 500;\r\n    margin-left: -7%;\r\n    padding-left: 9%;\r\n}\r\n.article-body[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    padding: 2%;\r\n}\r\n.rd-more[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background: none;\r\n    font-size: 11px;\r\n    color: #7b7777;\r\n}\r\n.M-misun-14[_ngcontent-%COMP%]{\r\n    margin-top: -14px\r\n}\r\n.M-R-13[_ngcontent-%COMP%]{\r\n    margin-right: 13px;\r\n}\r\n.BD-Rad[_ngcontent-%COMP%]{\r\n    border-radius: 4px !important;\r\n}\r\n.back-none[_ngcontent-%COMP%]{\r\n    background: none;\r\n}\r\n.MT10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.pd5[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.commenter-name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: x-large;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLk0yMHtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG4uTVQyMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uZm9vdC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRlZDI7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uYmFubmVyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZDogI2EwZWNkNztcclxuICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDAwMDA5MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbn1cclxuXHJcbi5zdHlsMXtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGNvbG9yOiAjN2E4ZTg2O1xyXG59XHJcbi5wZDR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5tZW51LXBhbm5lbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyN3B4O1xyXG59XHJcbi5wZDJ7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbn1cclxuLmxpbmstdG8tcGFnZXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhMGVjZDchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHRvZmlsLW5hbWV7XHJcbiAgICBjb2xvcjogIzRjZDNhZDtcclxufVxyXG4ucGQxe1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmhpZGUtb3ZlcmZsb3d7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMiU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzY1NjM2MztcclxuICAgIHdpZHRoOiAxMTQlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ucmQtbW9yZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzdiNzc3NztcclxufVxyXG4uTS1taXN1bi0xNHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4XHJcbn1cclxuLk0tUi0xM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4uQkQtUmFke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stbm9uZXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5NVDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBkNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRlci1uYW1le1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['../blog.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "2hxB");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class SignupComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.signupUserData = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ngOnInit() {
    }
    registerUser() {
        // this.signupUserData.token=this._auth.getToken();
        // this.signupUserData.bio="I work at statefarm";
        // this.signupUserData.image=null;
        console.log(this.signupUserData);
        this._auth.signup(this.signupUserData)
            .subscribe(res => {
            localStorage.setItem('token', res.token);
            this._router.navigate(['/login']);
            console.log(res);
        }, err => console.log(err));
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 9, vars: 3, consts: [[1, "form-group", "login-box", "border", "border-styling"], ["name", "username", "type", "text", "placeholder", "ID", "required", "", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", "placeholder", "email", "required", "", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "placeholder", "password", "required", "", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_4_listener($event) { return ctx.signupUserData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_5_listener($event) { return ctx.signupUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_6_listener($event) { return ctx.signupUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_7_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupUserData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupUserData.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".login-box[_ngcontent-%COMP%]{\r\n    border: 1px black;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}\r\n.M20[_ngcontent-%COMP%]{\r\n    margin: 22px;\r\n}\r\n.MT20[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.border-styling[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    border-radius: 5%;\r\n}\r\n.foot-style[_ngcontent-%COMP%]{\r\n    background-color: #b1ded2;\r\n    padding: 2%;\r\n    color: grey;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%\r\n}\r\n.banner-style[_ngcontent-%COMP%]{\r\n    background: #a0ecd7;\r\n    width: 115%;\r\n    height: 78px;\r\n    padding: 2%;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px #00000091;\r\n    margin-left: -7%;\r\n}\r\n.styl1[_ngcontent-%COMP%]{\r\n    padding-top: 2%;\r\n    color: #7a8e86;\r\n}\r\n.pd4[_ngcontent-%COMP%]{\r\n    padding-left: 4%;\r\n}\r\n.menu-pannel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin: 27px;\r\n}\r\n.pd2[_ngcontent-%COMP%]{\r\n    padding : 2%;\r\n}\r\n.link-to-page[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-size: 15px;\r\n    margin-right: 18px;\r\n    font-weight: 500;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #a0ecd7!important;\r\n}\r\n.ptofil-name[_ngcontent-%COMP%]{\r\n    color: #4cd3ad;\r\n}\r\n.pd1[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n}\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin-right: -2%;\r\n\r\n}\r\n.article-head[_ngcontent-%COMP%]{\r\n    background: #656363;\r\n    width: 114%;\r\n    height: 150px;\r\n    padding: 2%;\r\n    color: white;\r\n    font-size: xx-large;\r\n    font-weight: 500;\r\n    margin-left: -7%;\r\n    padding-left: 9%;\r\n}\r\n.article-body[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    padding: 2%;\r\n}\r\n.rd-more[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background: none;\r\n    font-size: 11px;\r\n    color: #7b7777;\r\n}\r\n.M-misun-14[_ngcontent-%COMP%]{\r\n    margin-top: -14px\r\n}\r\n.M-R-13[_ngcontent-%COMP%]{\r\n    margin-right: 13px;\r\n}\r\n.BD-Rad[_ngcontent-%COMP%]{\r\n    border-radius: 4px !important;\r\n}\r\n.back-none[_ngcontent-%COMP%]{\r\n    background: none;\r\n}\r\n.MT10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.pd5[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.commenter-name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: x-large;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLk0yMHtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG4uTVQyMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uZm9vdC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRlZDI7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uYmFubmVyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZDogI2EwZWNkNztcclxuICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDAwMDA5MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbn1cclxuXHJcbi5zdHlsMXtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGNvbG9yOiAjN2E4ZTg2O1xyXG59XHJcbi5wZDR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5tZW51LXBhbm5lbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyN3B4O1xyXG59XHJcbi5wZDJ7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbn1cclxuLmxpbmstdG8tcGFnZXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhMGVjZDchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHRvZmlsLW5hbWV7XHJcbiAgICBjb2xvcjogIzRjZDNhZDtcclxufVxyXG4ucGQxe1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmhpZGUtb3ZlcmZsb3d7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMiU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzY1NjM2MztcclxuICAgIHdpZHRoOiAxMTQlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ucmQtbW9yZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzdiNzc3NztcclxufVxyXG4uTS1taXN1bi0xNHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4XHJcbn1cclxuLk0tUi0xM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4uQkQtUmFke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stbm9uZXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5NVDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBkNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRlci1uYW1le1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['../blog.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-article/add-article.component */ "TJd8");









const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'article/:slug',
        component: _article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]
    },
    {
        path: 'add-article',
        component: _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_6__["AddArticleComponent"]
    },
    {
        path: 'add-article/:slug',
        component: _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_6__["AddArticleComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "2hxB");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    loginUser() {
        this._auth.loginUser(this.loginUserData)
            .subscribe(res => {
            localStorage.setItem('token', res.user.token);
            this._router.navigate(['/home']);
        }, err => console.log(err));
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 2, consts: [[1, "form-group", "login-box", "border", "border-styling"], ["type", "email", "placeholder", "ID", "required", "", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "password", "required", "", 1, "form-control", "M20", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.loginUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.loginUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".login-box[_ngcontent-%COMP%]{\r\n    border: 1px black;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}\r\n.M20[_ngcontent-%COMP%]{\r\n    margin: 22px;\r\n}\r\n.MT20[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.border-styling[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    border-radius: 5%;\r\n}\r\n.foot-style[_ngcontent-%COMP%]{\r\n    background-color: #b1ded2;\r\n    padding: 2%;\r\n    color: grey;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%\r\n}\r\n.banner-style[_ngcontent-%COMP%]{\r\n    background: #a0ecd7;\r\n    width: 115%;\r\n    height: 78px;\r\n    padding: 2%;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px #00000091;\r\n    margin-left: -7%;\r\n}\r\n.styl1[_ngcontent-%COMP%]{\r\n    padding-top: 2%;\r\n    color: #7a8e86;\r\n}\r\n.pd4[_ngcontent-%COMP%]{\r\n    padding-left: 4%;\r\n}\r\n.menu-pannel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin: 27px;\r\n}\r\n.pd2[_ngcontent-%COMP%]{\r\n    padding : 2%;\r\n}\r\n.link-to-page[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-size: 15px;\r\n    margin-right: 18px;\r\n    font-weight: 500;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #a0ecd7!important;\r\n}\r\n.ptofil-name[_ngcontent-%COMP%]{\r\n    color: #4cd3ad;\r\n}\r\n.pd1[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n}\r\n.hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin-right: -2%;\r\n\r\n}\r\n.article-head[_ngcontent-%COMP%]{\r\n    background: #656363;\r\n    width: 114%;\r\n    height: 150px;\r\n    padding: 2%;\r\n    color: white;\r\n    font-size: xx-large;\r\n    font-weight: 500;\r\n    margin-left: -7%;\r\n    padding-left: 9%;\r\n}\r\n.article-body[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    padding: 2%;\r\n}\r\n.rd-more[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background: none;\r\n    font-size: 11px;\r\n    color: #7b7777;\r\n}\r\n.M-misun-14[_ngcontent-%COMP%]{\r\n    margin-top: -14px\r\n}\r\n.M-R-13[_ngcontent-%COMP%]{\r\n    margin-right: 13px;\r\n}\r\n.BD-Rad[_ngcontent-%COMP%]{\r\n    border-radius: 4px !important;\r\n}\r\n.back-none[_ngcontent-%COMP%]{\r\n    background: none;\r\n}\r\n.MT10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.pd5[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.commenter-name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: x-large;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLk0yMHtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG4uTVQyMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4uZm9vdC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRlZDI7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uYmFubmVyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZDogI2EwZWNkNztcclxuICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDAwMDA5MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbn1cclxuXHJcbi5zdHlsMXtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGNvbG9yOiAjN2E4ZTg2O1xyXG59XHJcbi5wZDR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5tZW51LXBhbm5lbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyN3B4O1xyXG59XHJcbi5wZDJ7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbn1cclxuLmxpbmstdG8tcGFnZXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhMGVjZDchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHRvZmlsLW5hbWV7XHJcbiAgICBjb2xvcjogIzRjZDNhZDtcclxufVxyXG4ucGQxe1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmhpZGUtb3ZlcmZsb3d7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMiU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzY1NjM2MztcclxuICAgIHdpZHRoOiAxMTQlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ucmQtbW9yZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzdiNzc3NztcclxufVxyXG4uTS1taXN1bi0xNHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4XHJcbn1cclxuLk0tUi0xM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4uQkQtUmFke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stbm9uZXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5NVDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBkNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRlci1uYW1le1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['../blog.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "y2tY":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");





class BlogService {
    //jsonHeader = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this._url = "https://conduit.productionready.io/api";
    }
    globalArticles() {
        return this.http.get(this._url + '/articles');
    }
    getArticle(slug) {
        return this.http.get(this._url + '/articles/' + slug);
    }
    getComments(slug) {
        return this.http.get(this._url + '/articles/' + slug + '/comments');
    }
    addArticle(article) {
        const articlejson = {
            "article": {
                "title": article.title,
                "description": article.description,
                "body": article.body,
                "tagList": article.tagList
            }
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'Token ' + this.authService.getToken());
        return this.http.post(this._url + '/articles', articlejson, { 'headers': headers });
    }
    editArticle(article) {
        const articlejson = {
            article
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'Token ' + this.authService.getToken());
        return this.http.put(this._url + '/articles/' + article.slug, articlejson, { 'headers': headers });
    }
    deleteArticle(slug) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'Token ' + this.authService.getToken());
        return this.http.delete(this._url + '/articles/' + slug, { 'headers': headers });
    }
    addComment(slug, body) {
        const jsonPost = {
            "comment": {
                "body": body
            }
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'Token ' + this.authService.getToken());
        return this.http.post(this._url + '/articles/' + slug + '/comments', jsonPost, { 'headers': headers });
    }
    deleteComment(slug, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'Token ' + this.authService.getToken());
        return this.http.delete(this._url + '/articles/' + slug + '/comments/' + id, { 'headers': headers });
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map