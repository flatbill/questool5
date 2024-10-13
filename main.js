"use strict";
(self["webpackChunkdev5"] = self["webpackChunkdev5"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _quest_quest_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quest/quest.component */ 674);


class AppComponent {
    constructor() {
        this.siteTitle = ' QnA Tool by  Fly Tech Free';
    }
    // //initialCountInAppComponent: number = 10
    // myCount: number = 1000;
    // myFriend = '?'
    // msgFromBeyond = '?'
    // nango = 'nangoDude'
    // gdArray1 = ['start1','start2','start3']
    // parentFun2(event) { 
    //   this.myCount = event;
    //   this.msgFromBeyond = 'msg from parentFun2'
    //  }
    // parentFun1(myFriendParmIn:string): void {
    //   this.msgFromBeyond =   " Msg from parentFun1 "
    //   this.myFriend = myFriendParmIn
    // }
    // parentFun3(gdaParmIn)   {
    //   this.gdArray1 = gdaParmIn    //  ['cars','bars','guitars']
    // }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "has-background-primary"], [1, "ml-3", "subtitle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-quest");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.siteTitle, " ");
    } }, directives: [_quest_quest_component__WEBPACK_IMPORTED_MODULE_0__.QuestComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _quest_quest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quest/quest.component */ 674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _quest_quest_component__WEBPACK_IMPORTED_MODULE_1__.QuestComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule] }); })();


/***/ }),

/***/ 674:
/*!******************************************!*\
  !*** ./src/app/quest/quest.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestComponent": () => (/* binding */ QuestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var src_utils_getEnvVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/getEnvVars */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);



// import apiFirestore from 'src/utils/apiFirestore'



function QuestComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QuestComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 12)(4, "tr")(5, "td")(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "First Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QuestComponent_section_3_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.firstNameChg(_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tr")(12, "td")(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Last Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QuestComponent_section_3_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.lastNameChg(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tr")(19, "td")(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Phone (last four digits): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td")(23, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QuestComponent_section_3_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.phoneChg(_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td")(29, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestComponent_section_3_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.doSign(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "go");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " \u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.surveyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstNameInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastNameInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r1.phoneInput);
} }
function QuestComponent_section_4_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r16.curPreQuest, " ");
} }
function QuestComponent_section_4_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.curPreQuest, " ");
} }
function QuestComponent_section_4_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r18.curQuestTxt, " ");
} }
function QuestComponent_section_4_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r19.curQuestTxt, " ");
} }
function QuestComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, QuestComponent_section_4_h3_3_Template, 2, 1, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, QuestComponent_section_4_h3_4_Template, 2, 1, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, QuestComponent_section_4_h2_5_Template, 2, 1, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, QuestComponent_section_4_h2_6_Template, 2, 1, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.questHasLinBrk);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.questHasLinBrk);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.questHasLinBrk);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.questHasLinBrk);
} }
function QuestComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const caf_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", caf_r21, " ");
} }
function QuestComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuestComponent_div_5_div_1_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.curAcaFrame);
} }
function QuestComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestComponent_div_6_div_1_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const i_r24 = restoredCtx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.answerClicked(i_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const x_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r23);
} }
function QuestComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuestComponent_div_6_div_1_Template, 3, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.curAca);
} }
function QuestComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Your results have been forwarded to an administrator. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " This QnA Tool was created by the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Fly Tech Free ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " company. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " We appreciate your comments about this particular QnA or the QnA Tool in general. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Please email us at: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "flyTechFree@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function QuestComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.setScrDiagOnOff(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " show/hide diagnostics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function QuestComponent_section_9_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const s_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", s_r34.subset, " ");
} }
function QuestComponent_section_9_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const q_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r35.questNbr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r35.preQuest, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r35.questTxt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r35.subset, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r35.accum[0], " ");
} }
function QuestComponent_section_9_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const r_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", r_r36.accum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", r_r36.oper, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", r_r36.thresh, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", r_r36.subset, " ");
} }
function QuestComponent_section_9_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const q_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r37.questNbr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r37.preQuest, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r37.questTxt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r37.subset, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", q_r37.accum[0], " ");
} }
function QuestComponent_section_9_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const g_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", g_r38.cust, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", g_r38.qid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", g_r38.groupNbr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", g_r38.groupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", g_r38.seq, " ");
} }
function QuestComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 41)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 42)(5, "thead", 43)(6, "tr")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "subset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, QuestComponent_section_9_tr_10_Template, 3, 1, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 42)(12, "thead", 43)(13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "nbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "preQuest");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "questTxt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "subset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "accum");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, QuestComponent_section_9_tr_25_Template, 11, 5, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "table", 42)(27, "thead", 43)(28, "tr")(29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "accum");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "oper");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "thresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "subset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, QuestComponent_section_9_tr_38_Template, 9, 4, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "table", 42)(40, "thead", 43)(41, "tr")(42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "nbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "preQuest");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "questTxt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "subset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "accum");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, QuestComponent_section_9_tr_53_Template, 11, 5, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "table", 42)(55, "thead", 43)(56, "tr")(57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "cust");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "qid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "groupNbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "groupName");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "seq");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, QuestComponent_section_9_tr_68_Template, 11, 5, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" previous answer points: ", ctx_r7.hisAnsPoints, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.subsetArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.allQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.rulesArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.activeQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.groupArray);
} }
// part0 pp signOn                       ========================
// part1a pp prep: read survey db tables ========================
// part1b pp prep: fancy array match     ========================
// part2 qna session                     ========================
// part3 ww wrap up                      ========================
class QuestComponent {
    constructor() {
        this.faunaOrSupabase = 'fauna'; // default
        this.debugLvl = '?'; // read queryString, set to 1 or 2 to debug.
        this.cust = '?';
        this.qid = '?';
        this.promo = '?';
        this.qUserId = '?';
        this.priorQ = '?';
        this.hisAns = '0';
        this.hisAnsPoints = 0;
        this.aqx = 0; // active question index
        this.curQuestTxt = '';
        this.curPreQuest = '';
        this.curQuestNbr = '';
        this.curAca = []; //aca is Answer Choice Array.  One aca per question.
        this.curAcaFrame = []; //text above answer choices, like never,sometimes,always
        // qtDbDataObj: object = {}
        this.allQuestions = [];
        this.activeQuestions = [];
        this.showQuestHtml = false;
        this.showAnswerGroupHtml = false;
        this.showDoneHtml = false;
        this.showDiagHtml = false;
        this.showSignHtml = true;
        this.todaysDate = new Date().toJSON().split("T")[0] + "T00:00:00";
        this.dateTimeNow = new Date().toJSON().split(".")[0] + "Z";
        this.userObj = {};
        // answerObj:object = {}
        this.answerObj = {};
        // accumObj: object = {}
        this.accumObj = {};
        // scoreObj: object = {}
        // ruleObj: object = {}
        this.accumArray = [];
        this.timeGap = 0;
        this.answerStartTime = performance.now();
        this.answerEndTime = performance.now();
        this.answerClickedCnt = 0;
        this.answerArray = [];
        this.qnaRound = 0;
        this.rulesArray = [];
        this.msg1 = ' ';
        this.firstNameInput = '';
        this.lastNameInput = '';
        this.phoneInput = '';
        this.userFoundInDb = false;
        // pastAnswers = []
        this.showDiagButHtml = false; // turn on with ctrl shift alt
        this.questHasLinBrk = false; // questions with line breaks hit different html
        this.groupArray = [];
        this.scoreDiagArray = [];
        // readScoreProm   = new Promise<string>((res, rej) => {})
        // addScoreProm  = new Promise<string>((res, rej) => {})
        // chgScoreProm = new Promise<string>((res, rej) => {})
        // writeAnswerProm = new Promise<string>((res4, rej4) => {})
        // unresolvedProm = new Promise<string>((resu, reju) => {})
        this.surveyName = '';
        this.surveyIcode = '';
        this.querystringIcode = '';
        this.answerArrayStoredToDb = [];
        this.accumIx = 0;
        this.diagMainAnsweredCnt = 0;
        this.diagMainNotAnsweredCnt = 0;
        this.pastAnswerCount = 0;
        this.diagMsgArray = [];
        this.diagMsgObj = {};
        this.supaFldsCustQid = {};
        this.supaFldsCustQidUser = {};
        this.supaFldsCustQidUserAccum = {};
        // supaKeyFlds = {}
        this.supaEtlEnabled = false;
        this.supaArray = [];
        this.faunaData = {};
        this.faunaArray = [];
        // participantFoundYn = 'n'
        this.surveyArray = [];
        this.participantArray = [];
        this.scoresArray = [];
    }
    onKeydownHandler(event) {
        if (event.ctrlKey && event.shiftKey && event.altKey) {
            this.ctrlShiftAltWasHit();
        } // end if
        if (event.key == 'Enter') {
            this.enterKeyWasHit();
        } // end if
    } // end onKeydownHandler
    // may 2021. need to figure out date time for all db files.
    // as of may 2021, we set answers and scores with 00:00 time.
    // but user db has the real latest time, so ya can see reality.
    // so, the user db duznt match answer/scores. but that seems ok.
    // when done building allQuestions array,
    // and done building pastAnswers array,
    // and before asking any questions,
    // we mark those recs in allQuestions array 
    // that have been answered already.
    // later, when choosing a smaller set of questions,
    // further filter by only those questions no-yet-answered.
    // score recs are useful to the admin, after the participant finishes.
    // score recs are not used in this qna session.
    // how to write a score rec:
    // at the start of the test, 
    // when building a list of accumulators for all questions,
    // write a question count total for each accumulator.
    // this is how many question/answers will eventually add to the accumulator.
    // later, during the qna, when adding points to an accumulator, 
    // keep track of how many questions were answered for this accumulator.
    // when the questions answered = the question count total,
    //  ** aha moment **  time to write a score rec.
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.setQueryStringParms();
            this.faunaOrSupabase = yield src_utils_getEnvVars__WEBPACK_IMPORTED_MODULE_2__["default"].getFaunaOrSupabase();
            this.logFun('fauna or supabase: ');
            this.logFun(this.faunaOrSupabase);
            this.supaFldsCustQid = {
                "cust": this.cust,
                "qid": this.qid
            };
            if (this.cust > '' && this.qid > '') {
                this.msg1 = 'finding your survey...';
                if (this.faunaOrSupabase == 'fauna') {
                    this.surveyArray = yield this.launchFaunaReadSurvey();
                } // end if fauna
                if (this.faunaOrSupabase == 'supabase') {
                    this.surveyArray = yield this.launchReadSupabase('qtSurveys', this.supaFldsCustQid);
                } // end if supabase
                this.logFun('142 surveyArray:');
                this.logFun(this.surveyArray);
                if (this.surveyArray.length > 0) {
                    this.surveyName = this.surveyArray[0].surveyName;
                    this.surveyIcode = this.surveyArray[0].icode;
                }
            } // end if cust and qid > blank
            this.msg1 = 'Welcome. Please sign in to start the Qna.';
        });
    } // end ngOnInit
    setQueryStringParms() {
        this.logFun('pp1 running setQueryStringParms ');
        // Dec2021 need promo programming.
        let locSearchResult = new URLSearchParams(location.search);
        let locSearchResultCust = locSearchResult.get('cust');
        let locSearchResultQid = locSearchResult.get('qid');
        let locSearchResultIcode = locSearchResult.get('icode');
        let locSearchResultPromo = locSearchResult.get('promo');
        let locSearchResultDebugLvl = locSearchResult.get('debugLvl');
        let locSearchResultPriorQ = locSearchResult.get('priorQ');
        if (locSearchResultCust != null) {
            this.cust = locSearchResultCust;
        }
        if (locSearchResultQid != null) {
            this.qid = locSearchResultQid;
        }
        if (locSearchResultPromo != null) {
            this.logFun('131 setting promo:');
            this.promo = locSearchResultPromo;
            this.logFun(this.promo);
        }
        if (locSearchResultIcode != null) {
            this.logFun('136 setting icode:');
            this.querystringIcode = locSearchResultIcode;
            this.logFun(this.querystringIcode);
        }
        if (locSearchResultDebugLvl != null) {
            this.logFun('143 setting debugLvl:');
            this.debugLvl = locSearchResultDebugLvl;
            this.logFun(this.debugLvl);
        }
        if (locSearchResultPriorQ != null) {
            this.logFun('147 setting priorQ:');
            this.priorQ = locSearchResultPriorQ;
            this.logFun(this.priorQ);
        }
        // when no querystring, set defaults:
        if (this.cust == '?') {
            this.cust = '2';
        } // demo survey is 2,1
        if (this.qid == '?') {
            this.qid = '1';
        }
        if (this.promo == '?') {
            this.promo = 'none';
        }
        if (this.debugLvl == '?') {
            this.debugLvl = '0';
        }
    } // end setQueryStringParms
    // part0 sign on ===========================================
    doSign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('running doSign ');
            this.validateSignOnFields();
            if (this.msg1 == 'ok') {
                // signon fields are ok.
                this.supaFldsCustQidUser = {
                    "cust": this.cust,
                    "qid": this.qid,
                    "qUserId": this.qUserId
                }; // end set supaFlds
                yield this.checkUser();
                if (this.userObj['status'] != 'done') {
                    this.doSurvey();
                } // end if
                if (this.userObj['status'] == 'done') {
                    this.finalize(); // he already finished the survey.
                } // end if
            } // end if
        });
    } // end doSign
    validateSignOnFields() {
        this.logFun('running validateSignOnFields');
        this.msg1 = '';
        if (this.phoneInput.length < 4) {
            this.msg1 = 'Please enter a phone number.';
        }
        if (this.lastNameInput.length < 1) {
            this.msg1 = 'Please enter your last name.';
        }
        if (this.firstNameInput.length < 1) {
            this.msg1 = 'Please enter your first name.';
        }
        if (this.surveyIcode > ''
            && this.querystringIcode != this.surveyIcode
            //&& this.cust !='2' && this.qid !='1'){ // qnc demo is 2,1. 
            && this.cust + this.qid != '21') { // qnc demo is 2,1. 
            this.msg1 = 'Your email invitation link is invalid or expired.'
                + ' To start this Qna, please follow the link from your email.';
        }
        if (this.msg1.length == 0) {
            this.msg1 = 'ok';
            this.qUserId = this.firstNameInput.trim()
                + this.lastNameInput.trim()
                + this.phoneInput.trim();
            this.showSignHtml = false;
        }
    } // end validateSignOn
    firstNameChg(firstNameParmIn) {
        this.logFun('running firstNameChg');
        this.logFun(firstNameParmIn);
        // this.firstNameInput = 
        //   ev.target.value[0].toUpperCase() + ev.target.value.substring(1)
        this.firstNameInput =
            firstNameParmIn[0].toUpperCase() + firstNameParmIn.substring(1);
    } // end firstNameChg
    lastNameChg(lastNameParmIn) {
        // this.lastNameInput = 
        //   ev.target.value[0].toUpperCase() + ev.target.value.substring(1)
        this.lastNameInput =
            lastNameParmIn[0].toUpperCase() + lastNameParmIn.substring(1);
    } // end lastNameChg
    phoneChg(phoneParmIn) {
        // this.phoneInput = ev.target.value 
        this.phoneInput = phoneParmIn;
    } // end phoneChg
    buildUserObj(dbUserObj) {
        this.logFun('202 running buildUserObj');
        this.userObj =
            {
                "cust": this.cust,
                "qid": this.qid,
                "qUserId": this.qUserId,
                "firstName": this.firstNameInput,
                "lastName": this.lastNameInput,
                "phone": this.phoneInput,
                "userDateTime": dbUserObj.userDateTime,
                "status": dbUserObj.status,
                "priorQ": dbUserObj.priorQ,
                "answerCnt": dbUserObj.answerCnt
                // "icode": this.surveyIcode,
                // "promo": this.promo
            }; // end obj
        this.logFun('247 answer cnt:');
        this.logFun(this.userObj['answerCnt']);
    } // end buildUserObj
    buildNewUserObj() {
        this.logFun('running buildNewUserObj');
        this.userObj =
            {
                "cust": this.cust,
                "qid": this.qid,
                "qUserId": this.qUserId,
                "firstName": this.firstNameInput,
                "lastName": this.lastNameInput,
                "phone": this.phoneInput,
                "userDateTime": this.dateTimeNow,
                "status": "active",
                "priorQ": this.priorQ,
                "answerCnt": "0",
                "icode": this.surveyIcode,
                "promo": this.promo
            };
    } // end buildNewUserObj
    checkUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('running checkUser');
            this.msg1 = "let's look you up, " + this.firstNameInput + ' ...';
            if (this.faunaOrSupabase == 'fauna') {
                this.participantArray = yield this.launchFaunaReadParticipant();
            }
            if (this.faunaOrSupabase == 'supabase') {
                this.participantArray = yield this.launchReadSupabase('qtUsers', this.supaFldsCustQidUser);
            } // end if == supabase 
            if (this.participantArray.length > 0) {
                this.buildUserObj(this.participantArray[0]);
                if (this.userObj['status'] != 'done') {
                    Object.assign(this.userObj, { userDateTime: this.dateTimeNow });
                    if (this.faunaOrSupabase == 'fauna') {
                        yield this.launchFaunaChgParticipant(this.userObj, 'from readParticipant');
                    } // end if fauna
                    if (this.faunaOrSupabase == 'supabase') {
                        Object.assign(this.userObj, { id: this.participantArray[0].id });
                        yield this.launchChgSupabase('qtUsers', this.userObj);
                    } // end if fauna
                    this.msg1 = 'welcome back, ' + this.firstNameInput + '.';
                } // end if status not done
            } // end if participantArray len > 0
            if (this.participantArray.length == 0) {
                this.msg1 = 'adding you as a new user...';
                this.buildNewUserObj();
                if (this.faunaOrSupabase == 'fauna') {
                    this.participantArray = yield this.launchFaunaAddParticipant();
                }
                if (this.faunaOrSupabase == 'supabase') {
                    this.participantArray = yield this.launchAddSupabase('qtUsers', this.userObj);
                } // end if supabase
            } // end if participant len
            this.logFun('done with checkUser');
        });
    } // end checkUser
    // end part0 participant sign on ========================
    // part1a prep: read survey db tables ========================
    //   read questions, rules, groups, pastAnswers into arrays
    // part1b prep: fancy array match     ========================
    // part2 qNa session                  ========================
    doSurvey() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('running doSurvey');
            this.msg1 = 'Starting Qna for '
                + this.firstNameInput + ' ' + this.lastNameInput
                + '.';
            this.showSignHtml = false;
            if (this.participantArray.length > 0) {
                // if user found, read past answers
                if (this.faunaOrSupabase == 'fauna') {
                    this.answerArray = yield this.launchFaunaReadPastAnswers();
                }
                if (this.faunaOrSupabase == 'supabase') {
                    this.answerArray = yield this.launchReadSupabase('qtAnswers', this.supaFldsCustQidUser);
                }
            } // end if 
            if (this.faunaOrSupabase == 'fauna') {
                this.groupArray = yield this.launchFaunaReadGroups();
            }
            if (this.faunaOrSupabase == 'supabase') {
                this.groupArray = yield this.launchReadSupabase('qtGroups', this.supaFldsCustQid);
            }
            this.setGroups();
            this.sortListOfGroups();
            if (this.faunaOrSupabase == 'fauna') {
                this.allQuestions = yield this.launchFaunaReadQuestions();
            }
            if (this.faunaOrSupabase == 'supabase') {
                this.allQuestions = yield this.launchReadSupabase('qtQuestions', this.supaFldsCustQid);
            }
            this.setQuestions();
            this.buildListOfAccumsFromAllQuestions();
            this.matchAllQuestionsToAlreadyAnsweredQuestions();
            this.setAlreadyCompletedGroups();
            if (this.faunaOrSupabase == 'fauna') {
                this.rulesArray = yield this.launchFaunaReadRules();
            }
            if (this.faunaOrSupabase == 'supabase') {
                this.rulesArray = yield this.launchReadSupabase('qtRules', this.supaFldsCustQid);
            }
            // this.setRules()
            yield this.calcPointsSetAccum(); // set accumArray from prior answers
            this.findGroupsWithNoRules();
            this.findNextRoundOfActiveQuestions();
            this.sortRoundOfActiveQuestions();
            this.setRoundFirstActiveQuest(); // sets html on. participant sees/answers questions.
        });
    } // end doSurvey
    answerClicked(hisAnsAcaIxFromHtml) {
        // called from html, he clicked an answer
        this.logFun('aa278 running answerClicked ');
        this.answerClickedCnt = this.answerClickedCnt + 1;
        this.curAca = []; // block him from answering same question too quickly
        this.curAcaFrame = []; //text above answer choices, like never,sometimes,always
        this.curQuestTxt = '... loading ...';
        this.curPreQuest = '';
        this.calcAnswerTimeGap();
        this.storeAnswer(hisAnsAcaIxFromHtml);
        // Selzer Dec 2022 =====================
        // find index of allquestions where cust=x qid=x questionnbr = x
        // replace allQuestions[x].answeredThisRound = 'y' (for end compare)
        let pos = this.allQuestions
            .findIndex(a => a.cust == this.cust && a.qid == this.qid && a.questNbr == this.activeQuestions[this.aqx].questNbr);
        if (pos > -1) {
            this.allQuestions[pos].answeredThisSession = 'y'; //diagnostics
            this.priorQ = this.allQuestions[pos].questNbr; // 
        } // end if pos > -1
        // end Dec 2022 =====================
        if (this.aqx < this.activeQuestions.length - 1) {
            this.aqx = this.aqx + 1; //increments question we are about to ask.
            this.curQuestTxt = this.activeQuestions[this.aqx].questTxt;
            this.curPreQuest = this.activeQuestions[this.aqx].preQuest;
            this.curQuestNbr = this.activeQuestions[this.aqx].questNbr;
            this.curAca = this.activeQuestions[this.aqx].aca;
            this.curAcaFrame = this.activeQuestions[this.aqx].acaFrame;
            if (this.curQuestTxt.includes('\n')) {
                this.questHasLinBrk = true;
            }
            else {
                this.questHasLinBrk = false;
            } // end if includes \n
        }
        else { //we are at the end of active questions
            // set next groups and set next round of active questions:
            this.closeOutActiveAndPrepNextQuestions();
            this.aqx = 0;
        } // end if this.aqx
        this.appendToQueryString();
    } // end answerClicked
    closeOutActiveAndPrepNextQuestions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('qna278 running closeOutActiveAndPrepNextQuestions');
            for (let i = 0; i < this.groupArray.length; i++) {
                if (this.groupArray[i].statusQnA == 'active') {
                    this.logFun('closing out group:');
                    this.logFun(this.groupArray[i]);
                    this.groupArray[i]['statusQnA'] = 'done';
                } // end if
            } // end for  close out groups
            yield this.calcPointsSetAccum();
            //this.compareRulesScoresGroups(this.accumIx)
            this.findNextRoundOfActiveQuestions();
            this.sortRoundOfActiveQuestions();
            this.setRoundFirstActiveQuest();
            if (this.activeQuestions.length == 0) { // no more questions
                this.logFun('qna278 no more questions ');
                this.wrapUp();
            } // end if
        });
    } // end closeOutActiveAndPrepNextQuestions
    calcAnswerTimeGap() {
        this.answerEndTime = performance.now();
        let tdif = (this.answerEndTime - this.answerStartTime) / 1000;
        this.timeGap = Math.round(tdif);
        this.answerStartTime = performance.now();
    } // end calcAnswerTimeGap
    storeAnswer(hisAnsAcaIx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('aa322 running storeAnswer ');
            // for the recently answered question (the active question),
            // set a point value into hisAnsPoints.
            // he gave an answer, and we captured it into hisAnsAcaIx.
            // for a question, aca and acaPointVals are two data-synced arrays.
            // so we can use hisAnsAcaIx as an index to acaPointVals
            // to determine the point value.
            this.hisAnsPoints =
                this.activeQuestions[this.aqx].acaPointVals[hisAnsAcaIx];
            this.hisAns =
                this.activeQuestions[this.aqx].aca[hisAnsAcaIx];
            // hisAnsPoints now contains points to be added for his answer
            this.buildAnswerObj();
            this.answerArray.push(this.answerObj);
            if (this.faunaOrSupabase == 'fauna') {
                this.launchFaunaAddAnswer(this.answerObj);
            }
            if (this.faunaOrSupabase == 'supabase') {
                yield this.launchAddSupabase('qtAnswers', this.answerObj);
            }
            yield this.calcPointsSetAccum(); // this happens in mulitple spots
            this.msg1 = this.firstNameInput + "'s "
                + 'answer count: ' + this.answerClickedCnt;
            // update participant db every 5 answers
            if (this.answerClickedCnt / 5 == Math.round(this.answerClickedCnt / 5)) {
                Object.assign(this.userObj, { userDateTime: this.dateTimeNow });
                Object.assign(this.userObj, { status: 'active' });
                Object.assign(this.userObj, { priorQ: this.curQuestNbr });
                Object.assign(this.userObj, { answerCnt: this.answerClickedCnt });
                if (this.faunaOrSupabase == 'fauna') {
                    this.launchFaunaChgParticipant(this.userObj, 'from writeAnswer');
                }
                if (this.faunaOrSupabase == 'supabase') {
                    Object.assign(this.userObj, { id: this.participantArray[0].id }); // billy bug
                    this.launchChgSupabase('qtUsers', this.userObj);
                } // end if supabase
            } // end if ans / 5
        });
    } // end storeAnswer
    buildAnswerObj() {
        this.logFun('aa350 running buildAnswerObj');
        // let myAccum = this.activeQuestions[this.aqx].accum
        this.logFun('493 active questions accum: ');
        this.logFun(Array.isArray(this.activeQuestions[this.aqx].accum)); // true
        this.logFun(this.activeQuestions[this.aqx].accum);
        let myAccumArray = []; // Jul 2023 now accum is an array.
        if (this.activeQuestions[this.aqx].accum != undefined) {
            for (let i = 0; i < this.activeQuestions[this.aqx].accum.length; i++) {
                myAccumArray.push(this.activeQuestions[this.aqx].accum[i]);
            } // end for
        } // end if
        this.answerObj =
            {
                "cust": this.cust,
                "qid": this.activeQuestions[this.aqx].qid,
                "questNbr": this.activeQuestions[this.aqx].questNbr,
                "answerDate": this.todaysDate,
                "qUserId": this.qUserId,
                "answer": this.hisAns,
                "answerPoints": this.hisAnsPoints,
                "timeGap": this.timeGap,
                "accum": myAccumArray,
                'addPointsStatus': 'pending',
                'questTxt': this.activeQuestions[this.aqx].questTxt.substring(0, 40)
            }; // end answerObj
        // "accum" : this.activeQuestions[this.aqx].accum,
        // when building an answer rec, we copy-in the accum array 
        // from the question to help later with scoring.
        // we are NOT adding to answers.accum here,
        // we use answers.addPointsStatus later, to add to accumArray
        // to keep track of whether the answer points have been added yet.
        // we store answers to the database as we go.
    } // end buildAnswerObj
    calcPointsSetAccum() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('aa435 running calcPointsSetAccum ');
            // read answerArray, set accumArray.
            // look at answers not-yet-added to accumArray
            // normally, this is answers recently given,
            // but might be answers from a prior session (participant returner)
            // exit this paragrf with nice values in accumArray.
            // for each answer he gave:
            // add ansPoints to one or more accumulators,
            // depending on which accumulators were tied to the question.
            // look at answerArray.addPointsStatus = 'pending'
            //                     (points not yet added))
            this.logFun('541 answerArray:');
            this.logFun(this.answerArray);
            for (let i = 0; i < this.answerArray.length; i++) {
                if (this.answerArray[i].addPointsStatus == 'pending') {
                    // answer points not added to accumArray yet
                    for (let j = 0; j < this.answerArray[i].accum.length; j++) {
                        yield this.findAccumAndAddPoints(this.answerArray[i].accum[j], this.answerArray[i].answerPoints, this.answerArray[i].timeGap);
                    } // end for j
                    //this.answerArray[i].scoreRound  = this.qnaRound
                    this.answerArray[i].addPointsStatus = 'done';
                } // end if answerArray[i].addPointsStatus == pending
            } // end for i
            this.logFun('done with calcPointsSetAccum');
        });
    } // end calcPointsSetAccum
    findAccumAndAddPoints(accumParmIn, ansPointsParmIn, ansTimeGapParmIn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // if(ansPointsParmIn==0){'adding zero to accum!'}
            this.logFun('aa440 running findAccumAndAddPoints. accum: ' + accumParmIn);
            this.logFun(ansPointsParmIn);
            // called for one accum (from answerArray). update accumArray.
            // find matching accumArray row.
            let pos = 0;
            if (accumParmIn !== undefined) {
                pos = this.accumArray
                    .findIndex(a => a.accum.toLowerCase() == accumParmIn.toLowerCase());
            }
            if (pos >= 0) {
                this.accumArray[pos].accumScore += ansPointsParmIn;
                this.accumArray[pos].accumQuestCnt += 1;
                this.accumArray[pos].accumTimeGap += ansTimeGapParmIn;
                // this.logFun(this.accumArray[pos])
                if (this.accumArray[pos].accumQuestCnt ==
                    this.accumArray[pos].accumQuestCntTot) {
                    // he answered the last question that adds to this accum.
                    // hmmm, what about returner where scores not yet upserted?
                    // this  is this a good place to compare rules to thresh.
                    this.logFun('aa455 he answered last question for this accum:'
                        + this.accumArray[pos].accum);
                    //this.logFun(this.accumArray[pos].accum)
                    this.compareRulesScoresGroups(pos);
                    this.accumArray[pos].accumNeedsDbScoreUpsert = 'y';
                    yield this.readOneScoreChgOrAddOneScore(pos);
                    this.logFun('aa466 returned from readOneScoreChgOrAddOneScore');
                    // read/write score is now running on its own thread.
                } // end if
            } // end if
            // this.logFun('aa466 bottom of findAccumAndAddPoints' )
            // this.logFun('aa462 accumArray:')
            // this.logFun(this.accumArray)
            this.logFun('done with findAccumAndAddPoints');
        });
    } // end findAccumAndAddPoints
    readOneScoreChgOrAddOneScore(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('bb529 running readOneScoreChgOrAddOneScore');
            let myScoreObj = this.buildScoreObj(i);
            if (this.faunaOrSupabase == 'fauna') {
                this.scoresArray = yield this.launchFaunaReadScore(myScoreObj);
            } // end if
            if (this.faunaOrSupabase == 'supabase') {
                this.scoresArray = yield this.launchReadSupabase('qtScores', this.supaFldsCustQidUserAccum);
            } // end if
            if (this.scoresArray.length > 0) { //score rec found
                this.logFun('604 score rec found.');
                if (this.scoresArray[0]['score'] != this.accumArray[i].accumScore) {
                    // user answered that resulted in a change to the score.
                    // lets chg a score rec on the db.
                    if (this.faunaOrSupabase == 'fauna') {
                        yield this.launchFaunaChgScore(myScoreObj);
                    }
                    if (this.faunaOrSupabase == 'supabase') {
                        Object.assign(myScoreObj, { id: this.scoresArray[0].id });
                        yield this.launchChgSupabase('qtScores', myScoreObj);
                    } // end if supabase
                    this.accumArray[i].accumNeedsDbScoreUpsert = 'n';
                    let sdx = this.scoreDiagArray
                        .findIndex(sda => sda.accum == this.accumArray[i].accum);
                    this.scoreDiagArray.splice(sdx, 1, myScoreObj);
                } // end if score not eq accum
            }
            else { // score rec not found. lets add a score rec to the db.
                this.logFun('620 score rec not found');
                if (this.faunaOrSupabase == 'fauna') {
                    yield this.launchFaunaAddScore(myScoreObj);
                }
                if (this.faunaOrSupabase == 'supabase') {
                    yield this.launchAddSupabase('qtScores', myScoreObj);
                }
                this.accumArray[i].accumNeedsDbScoreUpsert = 'n';
                this.scoreDiagArray.push(myScoreObj);
            } // end if scoresArray len  0
        });
    } // end readOneScoreChgOrAddOneScore
    buildScoreObj(i) {
        this.logFun('bb576 running buildScoreObj for accum: '
            + this.accumArray[i].accum);
        let scoreObj = {
            'cust': this.cust,
            'qid': this.qid,
            'qUserId': this.qUserId,
            'testDate': this.todaysDate,
            'accum': this.accumArray[i].accum,
            'score': this.accumArray[i].accumScore,
            'wscore': this.accumArray[i].accumScore,
            'questCnt': this.accumArray[i].accumQuestCnt,
            'timeGap': this.accumArray[i].accumTimeGap,
        };
        // this.supaFldsCustQidUserAccum = scoreObj.cust + scoreObj.qid + scoreObj.qUserId + scoreObj.accum
        this.supaFldsCustQidUserAccum = {
            "cust": scoreObj.cust,
            "qid": scoreObj.qid,
            "qUserId": scoreObj.qUserId,
            "accum": scoreObj.accum
        };
        return scoreObj;
    } // end buildScoreObj
    buildDiagMsgObj(diagMsgDateTime, diagMsgParmIn) {
        //this.logFun('617 running buildDiagMsgObj' )
        this.diagMsgObj =
            {
                "cust": this.cust,
                "qid": this.qid,
                "qUserId": this.qUserId,
                "diagMsgDateTime": diagMsgDateTime,
                "diagMsg": diagMsgParmIn
            }; // end diagMsgObj
    } // end fun buildDiagMsgObj
    matchAllQuestionsToAlreadyAnsweredQuestions() {
        this.logFun('pp626 running matchAllQuestionsToAlreadyAnsweredQuestions ');
        this.logFun('count of past answers: ' + this.answerArray.length);
        this.logFun('pp626 past answers array:');
        this.logFun(this.answerArray);
        // pastAnswers questNbr
        // if ya find a match: set allQuestions.answeredAlready to 'y'
        let j = 0;
        for (let i = 0; i < this.answerArray.length; i++) {
            // find question that matches this pastAnswer, by questNbr
            j = this.allQuestions
                .findIndex(q => q.questNbr == this.answerArray[i].questNbr);
            if (j > -1) { //mark this question as answered already
                this.allQuestions[j].answeredAlready = 'y';
            }
        } // end for
    } // end matchAllQuestionsToAlreadyAnsweredQuestions
    setAlreadyCompletedGroups() {
        this.logFun('pp650 running setAlreadyCompletedGroups ');
        this.logFun('658 allQuestion:');
        this.logFun(this.allQuestions);
        this.logFun('662 activeQuestions:');
        this.logFun(this.activeQuestions);
        // if participant is returning,
        // he has already answered some questions.
        // we flagged those questions already. (alreadyAnswered)
        // now compare questions to groups.
        // does a group have any unansweredQuestions? groupHasMoreQuestions
        // if all questions for a group have been answered,
        // then flag the group as done.
        // this helps later, when we look for unanswered groups.
        // this paragrf is driven by groupArray, reads allQuestions.
        let groupHasMoreQuestions = false;
        for (let i = 0; i < this.groupArray.length; i++) {
            // are there any unanswered questions for this group?
            groupHasMoreQuestions = false;
            for (let j = 0; j < this.allQuestions.length; j++) {
                if (this.allQuestions[j].subset.toLowerCase()
                    == this.groupArray[i].groupName.toLowerCase()) {
                    if (this.allQuestions[j].answeredAlready == 'n') {
                        groupHasMoreQuestions = true;
                        break; // break out of j loop
                    }
                } // end if
            } // end inner for j loop
            if (!groupHasMoreQuestions) {
                this.groupArray[i].statusQnA = 'done';
                this.logFun(' 681 no more questions for group:');
                this.logFun(this.groupArray[i]);
            }
        } // end for
        // this.logFun('pp650 bottom of setAlreadyCompletedGroups. ')
    } // end setAlreadyCompletedGroups
    findNextRoundOfActiveQuestions() {
        this.logFun('qna686 running findNextRoundOfActiveQuestions ');
        this.logFun('643 groupArray:');
        this.logFun(this.groupArray);
        // driven by groupArray. status=pending, threshHit==y
        this.msg1 = 'building next round of questions...';
        this.activeQuestions.length = 0; // start fresh for the upcoming round
        // part a:
        // look thru groupArray for the first group seq not yet asked.
        // group seq is a grouper-of-groups.
        // use this group seq as a driver for the next set of groups.
        // i mean, flag all groups (with this seq) in groupArray
        //  with status 'active'.
        // part b:
        // then find questions that are in one of these newly active groups.
        // these are the questions we want stuffed into activeQuestions.
        // rats, we might have asked all the questions in this newly active group.
        // then we accidentally quit the session early.
        let gax = -1;
        gax = this.groupArray
            .findIndex(g => g.statusQnA == 'pending' && g.threshHit == 'y');
        this.logFun('qna686 gax: ' + gax);
        let myGroupSeq = '9999';
        if (gax > -1) {
            myGroupSeq = this.groupArray[gax].seq.toLowerCase();
            this.logFun('qna686 myGroupSeq: ' + myGroupSeq);
            // this.logFun(myGroupSeq)
        }
        for (let i = 0; i < this.groupArray.length; i++) {
            if (this.groupArray[i].seq.toLowerCase() == myGroupSeq
                && this.groupArray[i].threshHit == 'y'
                && this.groupArray[i].statusQnA == 'pending') {
                this.groupArray[i]['statusQnA'] = 'active';
                this.logFun('715 chg stat pend to active. GroupName: '
                    + this.groupArray[i].groupName);
            } // end if 
        } // end for
        let activeGroups = [];
        for (let i = 0; i < this.groupArray.length; i++) {
            if (this.groupArray[i].statusQnA == 'active') {
                this.logFun('qna686 pushing into activeGroups. GroupName: '
                    + this.groupArray[i].groupName);
                activeGroups.push(this.groupArray[i].groupName.toLowerCase());
            } // end if
        } // end for
        // part b:  stuff into activeQuestions
        this.logFun('743 active groups:');
        this.logFun(activeGroups);
        for (let i = 0; i < this.allQuestions.length; i++) {
            if (activeGroups.includes(this.allQuestions[i].subset.toLowerCase())) {
                if (this.allQuestions[i].answeredAlready == 'n') {
                    this.activeQuestions.push(this.allQuestions[i]);
                } // end if
            } // end if
        } // end for
        this.qnaRound = this.qnaRound + 1;
        this.logFun('activeQuestions:');
        this.logFun(this.activeQuestions);
        this.logFun('qna686 bottom of findNextRoundOfActiveQuestions');
        // this.logFun('qna686 myGroupSeq:')
        // this.logFun(myGroupSeq)
    } // end findNextRoundOfActiveQuestions
    sortRoundOfActiveQuestions() {
        this.logFun('qna753 running sortRoundOfActiveQuestions ');
        function compareSeq(a, b) {
            let comparison = 0;
            if (Number(a.questSeq) && Number(b.questSeq)) {
                // a and b are both numbers
                if (Number(a.questSeq) > Number(b.questSeq)) {
                    comparison = 1;
                }
                if (Number(a.questSeq) < Number(b.questSeq)) {
                    comparison = -1;
                }
            }
            else {
                // a or b is alpha
                if (a.questSeq > b.questSeq) {
                    comparison = 1;
                }
                if (a.questSeq < b.questSeq) {
                    comparison = -1;
                }
            } // end if/else
            return comparison;
        } // end function compareSeq
        this.activeQuestions.sort(compareSeq);
        // this.logFun(this.activeQuestions)
    } // end sortRoundOfActiveQuestions
    setRoundFirstActiveQuest() {
        this.logFun('qna773 running setRoundFirstActiveQuest ');
        this.msg1 = 'starting a round of questions. ';
        this.curQuestTxt = '';
        this.curPreQuest = '';
        this.curAca = [];
        this.curAcaFrame = [];
        this.logFun('877 activeQuestions:');
        this.logFun(this.activeQuestions);
        if (this.activeQuestions.length > 0) {
            this.showQuestHtml = true; // turns on the survey.
            this.showAnswerGroupHtml = true;
            this.curQuestTxt = this.activeQuestions[0].questTxt;
            this.curPreQuest = this.activeQuestions[0].preQuest;
            this.curAca = this.activeQuestions[0].aca;
            this.curAcaFrame = this.activeQuestions[0].acaFrame;
            if (this.curQuestTxt.includes('\n')) {
                this.questHasLinBrk = true;
            }
            else {
                this.questHasLinBrk = false;
            } // end if includes \n    
        } // end if
        if (this.activeQuestions.length == 0) { // the participant is active, but there are no questions.
            this.finalize();
        }
        this.logFun('qna766 bottom of setRoundFirstActiveQuest');
    } // end setRoundFirstActiveQuest
    wrapUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('ww789 running wrapUp ');
            //this.msg1 = 'wrapping up answers and scores...'
            // this.showQuestHtml = false
            // this.showAnswerGroupHtml = false
            this.logFun('ww794 final answers in answerArray:');
            this.logFun(this.answerArray);
            this.logFun('ww794 final accums in accumArray:');
            this.logFun(this.accumArray);
            this.checkForAnyMissingScores();
            // this.logFun('812 wrap up')
            // somehow, wait for db updates to answers,scores,participants
            // before telling him thank you.
            // tried promises to wait for db, but promises are confusing.
            // Promise.all([
            //   this.readScoreProm,
            //   this.addScoreProm,
            //   this.chgScoreProm,
            //   this.writeAnswerProm])
            //   .then((allPromVals) => {
            //})
            ///=== hack to wait for db updates. wait for 3500 milliseconds.
            this.logFun('ww start timeout wait ');
            this.msg1 = ' Wrapping up answers and scores... '
                + this.answerArray.length.toString() + ' answers. '
                + this.accumArray.filter(a => a.accumScore > 0).length.toString()
                + ' scores.  ';
            let promise1 = new Promise((resolve, reject) => {
                setTimeout(() => resolve(" timeout resolve"), 3500); // 3.5 seconds
            });
            let prom1var = yield promise1; // wait until promise1 resolves (*)
            this.logFun('ww end timeout wait ');
            ///=== done waiting, now run the rest of this paragraph.
            this.userObj['status'] = 'done';
            this.userObj['userDateTime'] = this.dateTimeNow;
            this.userObj['priorQ'] = this.curQuestNbr;
            this.userObj['answerCnt'] = this.answerClickedCnt;
            if (this.faunaOrSupabase == 'fauna') {
                this.launchFaunaChgParticipant(this.userObj, 'from wrapUp');
            }
            if (this.faunaOrSupabase == 'supabase') {
                this.launchChgSupabase('qtUsers', this.userObj);
            }
            this.atEndCompareQuestionCounts();
            this.atEndCompareAccumsAndScores();
            this.atEndCompareAnswerCounts();
            // this.logFun('830 diagMsgArray:')
            // this.logFun(this.diagMsgArray) 
            this.finalize();
        });
    } // end wrapUp
    finalize() {
        this.logFun('running finalize');
        this.msg1 = 'Thank you, ' + this.firstNameInput
            + ', for taking this Qna. ';
        this.showDoneHtml = true;
        this.showQuestHtml = false;
        this.showAnswerGroupHtml = false;
    } // end finalize
    checkForAnyMissingScores() {
        this.logFun('running checkForAnyMissingScores ');
        // Dec 2022 Selzer. 
        // look for any scores not yet written, and write them:
        // read accumArray, see if there are any not-yet-written scores.
        // look for a mismatch between questions asked and total questions.
        // these might be for questions that were never asked,
        // cuz they are part of un-asked (never triggered) groups,
        // yet some groups WERE asked. (there is a score > 0)
        this.logFun('851 accumArray:');
        this.logFun(this.accumArray);
        for (let i = 0; i < this.accumArray.length; i++) {
            if (this.accumArray[i].accumScore > 0) {
                if (this.accumArray[i].accumQuestCnt
                    != this.accumArray[i].accumQuestCntTot) {
                    this.logFun('854 found a not-yet-scored accumArray row.');
                    this.logFun('calling para to store this one accum: '
                        + this.accumArray[i].accum);
                    //  this.accumArray[i].accumNeedsDbScoreUpsert = 'y'
                    this.readOneScoreChgOrAddOneScore(i);
                } // end inner if
            } // end outer if
        } // end for
    } // end checkForAnyMissingScores
    atEndCompareAccumsAndScores() {
        // run diagnostics at the end of the survey/assessment.
        this.logFun('ww824 running atEndCompareAccumsAndScores');
        this.logFun('910 accumArray:');
        this.logFun(this.accumArray);
        this.logFun('912 scoreDiagArray:');
        this.logFun(this.scoreDiagArray);
        for (let i = 0; i < this.accumArray.length; i++) {
            for (let j = 0; j < this.scoreDiagArray.length; j++) {
                if (this.accumArray[i].accum == this.scoreDiagArray[j].accum) {
                    this.logFun('922 scoreDiagArray[j].accum:');
                    this.logFun(this.scoreDiagArray[j].accum);
                    this.logFun('925 accumArray[i].accum:');
                    this.logFun(this.accumArray[i].accum);
                } // end if
            } // end for k
        } // end for i
    } // end atEndCompareAccumsAndScores
    oldatEndCompareAccumsAndScores() {
        this.logFun('ww824 running atEndCompareAccumsAndScores');
        this.logFun('912 accumArray:');
        this.logFun(this.accumArray);
        this.logFun('914 scoreDiagArray:');
        this.logFun(this.scoreDiagArray);
        // run diagnostics at the end of the survey/assessment.
        let sdx = -1;
        for (let i = 0; i < this.accumArray.length; i++) {
            // scoreDebugger array: we built that thing
            // when we inserted & updated score recs.
            // loop j accumArray[i].accum[j]
            // find a match for scoreDiagArray[] == accumArray[i].accum[j]
            sdx = this.scoreDiagArray
                .findIndex(sda => sda.accum == this.accumArray[i].accum);
            if (sdx == -1 && this.accumArray[i].accumQuestCnt > 0) {
                this.logFun('ww824 rats, no scoredebugger rec to match accumArray accum:');
                this.logFun(this.accumArray[i].accum);
            }
            if (sdx > -1 && this.accumArray[i].accumScore != this.scoreDiagArray[sdx].score) {
                this.logFun('ww824 rats, mismatch accumArray and scoreDiagArray.');
                this.logFun('ww824 accumArray accum: ' + this.accumArray[i].accum);
                this.logFun('ww824 accumArray accumscore: ' + this.accumArray[i].accumScore);
                this.logFun('ww824 scoreDiagArray accum: ' + this.scoreDiagArray[sdx].accum);
                this.logFun('ww824 scoreDiagArray score: ' + this.scoreDiagArray[sdx].score);
            } // end if
        } // end for
        // compare accum question count with accum question count total:
        for (let i = 0; i < this.accumArray.length; i++) {
            if (this.accumArray[i].questCnt != this.accumArray[i].questCntTot) {
                this.logFun('ww824 rats, accum questCnt <> questCntTot');
                this.logFun('accumArray question count:');
                this.logFun(this.accumArray[i].questCnt);
                this.logFun('accumArray question count total:');
                this.logFun(this.accumArray[i].questCnt);
                // compare scores written to scores array?
            } // end if
        } // end for
    } // end oldatEndCompareAccumsAndScores
    atEndCompareAnswerCounts() {
        this.logFun('ww824 running atEndCompareAnswerCounts');
        this.logFun('past answers count: ' + this.pastAnswerCount);
        this.logFun('answer clicked this session count: ' + this.answerClickedCnt);
        this.logFun('answers captured this session count: ' + this.answerArrayStoredToDb.length);
        // let answersThisSessionCount = 
        //   this.allQuestions.filter(a=>a.answeredThisSession == 'y').length
        if (this.answerClickedCnt != this.answerArrayStoredToDb.length) {
            this.logFun('908 rats, answerCount mismatch.');
        } // end if
        let questionsNotAsked = this.allQuestions
            .filter(a => a.answeredAlready == 'n'
            && a.answeredThisSession == 'n');
        this.logFun('answers stored to db this session count:' + this.answerArrayStoredToDb.length);
        this.logFun('questions not answered (assume not asked) count: '
            + questionsNotAsked.length);
        this.logFun('924 allQuestions array: ');
        this.logFun(this.allQuestions);
        this.logFun('920 questions not answered (assume not asked) array: ');
        this.logFun(questionsNotAsked);
        this.logFun('922 answerArray:');
        this.logFun(this.answerArray);
    } // end atEndCompareAnswerCounts
    atEndCompareQuestionCounts() {
        this.logFun('939 running atEndCompareQuestionCounts');
        // Dec 2022 group main diagnostics
        // count  not-yet-answered questions in group 'Main'
        // count  already-answered questions in group 'Main'
        this.diagMainAnsweredCnt = this.allQuestions
            .filter(a => a.subset == 'Main' && a.answeredThisSession == 'y')
            .length;
        this.diagMainNotAnsweredCnt = this.allQuestions
            .filter(a => a.subset == 'Main' && a.answeredThisSession != 'y')
            .length;
        this.logFun('Main questions asked: ' + this.diagMainAnsweredCnt);
        this.logFun('Main questions not asked: ' + this.diagMainNotAnsweredCnt);
    } // end atEndCompareQuestionCounts
    setQuestions() {
        this.logFun('pp866 running setQuestions ');
        for (let i = 0; i < this.allQuestions.length; i++) {
            this.allQuestions[i].answeredAlready = 'n';
            this.allQuestions[i].answeredThisSession = 'n';
            // for (let j = 0; j < this.allQuestions[i].accum.length; j++) {
            //   if (this.allQuestions[i].accum[j] != undefined
            //   && this.allQuestions[i].accum[j].length > 0){
            //     // don't convert to lowercase here.  
            //     // It causes lowercase qtAnswers.acuum
            //     // this.allQuestions[i].accum[j] = this.allQuestions[i].accum[j].toLowerCase()
            //   } // end if accum not blank
            // } // end for j
        } // end for i
    } // end setQuestions
    // setRules(){
    //   // in the rules table, accum is just a text field (not an array)
    //   for (let i = 0; i < this.rulesArray.length; i++) {
    //     this.rulesArray[i].accum = this.rulesArray[i].accum.toLowerCase()
    //   }
    // }
    loadQuestionsFromDbToAllQuestions(qtDbObj) {
        this.logFun('pp866 running loadQuestionsFromDbToAllQuestions ');
        // input is qtDbObj from database and output allQuestions array.
        // get here after .then of reading db,
        // so qtDbObj is ready to use.
        this.allQuestions.length = 0; //blank out array, then load it
        for (let i = 0; i < qtDbObj.length; i++) {
            this.allQuestions.push(qtDbObj[i].data);
            this.allQuestions[i].answeredAlready = 'n';
            this.allQuestions[i].answeredThisSession = 'n';
            // this.allQuestions[i].subset = this.allQuestions[i].subset.toLowerCase()
            // for(let j=0; j<this.allQuestions[i].accum.length; j++){
            //   // this.allQuestions[i].accum[j] = this.allQuestions[i].accum[j].toLowerCase()
            // } // end inner for
        } // end outer for
        // this.logFun('bottom of loadQuestionsFromDbToAllQuestions')
        // this.logFun(this.allQuestions)
    } // end loadQuestionsFromDbToAllQuestions
    buildListOfAccumsFromAllQuestions() {
        this.logFun('pp885 running buildListOfAccumsFromAllQuestions ');
        // read all questions array, find the unique accumulators.
        // push a newly discovered accum into accumArray.
        let pos = -1;
        for (let i = 0; i < this.allQuestions.length; i++) {
            // this question has an array of accumulators.
            for (let j = 0; j < this.allQuestions[i].accum.length; j++) {
                // find the accum in accumArray. if not found, add it.
                pos = this.accumArray
                    .findIndex(a => a.accum.toLowerCase()
                    == this.allQuestions[i].accum[j].toLowerCase());
                if (pos >= 0) { // add to an existing accum
                    this.accumArray[pos].accumQuestCntTot += 1;
                }
                else { // append a new accum 
                    this.accumObj = {
                        'accum': this.allQuestions[i].accum[j],
                        'accumScore': 0,
                        'accumQuestCntTot': 1,
                        'accumQuestCnt': 0,
                        'accumTimeGap': 0,
                        'accumScoreRound': 0,
                        'accumNeedsDbScoreUpsert': 'n',
                    };
                    this.accumArray.push(this.accumObj);
                } // end if
            } // end inner for
        } // end outer for
        // this.logFun('pp885 bottom of buildListOfAccumsFromAllQuestions.')
        // this.logFun(this.accumArray)
    } // end buildListOfAccumsFromAllQuestions
    setGroups() {
        this.logFun('running setGroups');
        for (let j = 0; j < this.groupArray.length; j++) {
            this.groupArray[j]["statusQnA"] = 'pending';
            this.groupArray[j]["threshHit"] = 'n';
            // this.groupArray[j][ "groupName" ] = this.groupArray[j][ "groupName" ].toLowerCase()        
            // this.groupArray[j][ "subset" ] = this.groupArray[j][ "subset" ] //.toLowerCase()        
        } // end for loop j
        this.logFun('1032 groupArray:');
        this.logFun(this.groupArray);
    } // end setGroups
    sortListOfGroups() {
        this.logFun('pp955 running sortListOfGroups ');
        function compareSeq(a, b) {
            let comparison = 0;
            if (Number(a.seq) && Number(b.seq)) {
                // a and b are both numbers
                if (Number(a.seq) > Number(b.seq)) {
                    comparison = 1;
                }
                if (Number(a.seq) < Number(b.seq)) {
                    comparison = -1;
                }
            }
            else {
                // a or b is alpha
                if (a.seq > b.seq) {
                    comparison = 1;
                }
                if (a.seq < b.seq) {
                    comparison = -1;
                }
            } // end if/else
            //   if (Number(a.seq) > Number(b.seq)) { comparison=1 } 
            //   else { if (Number(a.seq) <  Number(b.seq)) { comparison=-1}
            // } 
            //===
            //     if (a.seq.toString().padStart(4,'0') 
            //     > b.seq.toString().padStart(4,'0')) {
            //    comparison = 1;
            //  } else if (a.seq.toString().padStart(4,'0') 
            //            < b.seq.toString().padStart(4,'0')) {
            //    comparison = -1;
            //  }
            //===
            return comparison;
        } // end function compareSeq
        this.groupArray.sort(compareSeq);
        this.logFun('950 sorted groupArray:');
        this.logFun(this.groupArray);
    } // end sortListOfGroups
    findGroupsWithNoRules() {
        this.logFun('pp1023 running findGroupsWithNoRules ');
        // this is run at the start of a qna session.
        // look for groups that have no rule.
        // for groups with no rule,  set group.threshHit to 'y' 
        // becuz groups without rules are the same as hitting a thresh.
        let rax = 0;
        for (let gax = 0; gax < this.groupArray.length; gax++) {
            rax = this.rulesArray
                .findIndex(r => r.subset.toLowerCase() == this.groupArray[gax].groupName.toLowerCase());
            if (rax == -1) {
                // we found no rule for this group.
                this.logFun('1057 no rule for: ' + this.groupArray[gax].groupName.toLowerCase());
                this.groupArray[gax].threshHit = 'y';
            } // end if
        } // end for
        this.logFun('pp1023 end of findGroupsWithNoRules. groupArray:');
        this.logFun(this.groupArray);
    } // end findGroupsWithNoRules
    newCompareRulesScoresGroups(accumIxParmIn) {
        this.logFun('pp1046 running newCompareRulesScoresGroups ');
        // selzer Dec 2022 sax is now an input parm.
        let sax = accumIxParmIn;
        for (let rax = 0; rax < this.rulesArray.length; rax++) {
            for (let gax = 0; gax < this.groupArray.length; gax++) {
                if (this.groupArray[gax].groupName == this.rulesArray[rax].subset) {
                    this.logFun('group row and rules array row to compare:');
                    this.logFun(this.groupArray[gax]);
                    this.logFun(this.rulesArray[rax]);
                    this.checkThresh(rax, gax, sax);
                } // end if group == subset
            } // end for gax
        } // end for rax
    } // end newCompareRulesScoresGroups
    compareRulesScoresGroups(accumIxParmIn) {
        this.logFun('pp1046 running compareRulesScoresGroups ');
        this.logFun(this.rulesArray);
        let sax = accumIxParmIn;
        /// this para is driven by rulesArray, 
        /// uses accumArray, groupArray --- updates groupArray.
        //   loop thru rules rax++  find a score for the rule(rax)
        //   if ya got a score for the rule,
        //    check thresh of the rule compare to score
        //   if thresh hit
        //    find group for this rule: 'will trigger group'  (rulesArray.subset) 
        //    and set groupArray(gax).threshHit = 'y'
        // done loop thru all rules.
        // dec 2022 do this just for one accum ==== accumIxParmIn.
        // call this para only when he answered a final question for this accum.
        for (let rax = 0; rax < this.rulesArray.length; rax++) {
            //
            for (let gax = 0; gax < this.groupArray.length; gax++) {
            }
            //
            if (this.rulesArray[rax].accum == this.accumArray[sax].accum) {
                let gax = -1;
                gax = this.groupArray
                    .findIndex(g => g.groupName.toLowerCase() == this.rulesArray[rax].subset.toLowerCase());
                if (gax > -1) {
                    this.logFun('group row and rules array row to compare:');
                    this.logFun(this.groupArray[gax]);
                    this.logFun(this.rulesArray[rax]);
                    this.checkThresh(rax, gax, sax);
                } // end if
            } // end if
        } // end for
        // this.logFun('pp1046 bottom of compareRulesScoresGroups.')
    } // end compareRulesScoresGroups
    checkThresh(rax, gax, sax) {
        this.logFun('1085 running checkThresh... ');
        // we are current on a rule,   group,  & scoreboard.
        // check if a rule threshold is hit for this group.
        // rax: rules array index (was set before we got here)
        // gax: group array index (was set before we got here)
        // sax: accum array index (was set before we got here)
        if ((this.rulesArray[rax].oper == '>='
            || this.rulesArray[rax].oper == 'greater than or equal to')
            && this.accumArray[sax].accumScore >= this.rulesArray[rax].thresh) {
            this.groupArray[gax].threshHit = 'y';
        } // end if oper >=
        if ((this.rulesArray[rax].oper == '<='
            || this.rulesArray[rax].oper == 'less than or equal to')
            && this.accumArray[sax].accumScore <= this.rulesArray[rax].thresh) {
            this.groupArray[gax].threshHit = 'y';
        } // end if oper <=
        if ((this.rulesArray[rax].oper == '!='
            || this.rulesArray[rax].oper == 'not equal to')
            && this.accumArray[gax].accumScore != this.rulesArray[rax].thresh) {
            this.groupArray[gax].threshHit = 'y';
        } // end if oper !=
        if ((this.rulesArray[rax].oper == '=='
            || this.rulesArray[rax].oper == 'equal to')
            && this.accumArray[sax].accumScore == this.rulesArray[rax].thresh) {
            this.groupArray[gax].threshHit = 'y';
        } // end if oper ==
        if ((this.rulesArray[rax].oper == '='
            || this.rulesArray[rax].oper == 'equal to')
            && this.accumArray[sax].accumScore == this.rulesArray[rax].thresh) {
            this.groupArray[gax].threshHit = 'y';
        } // end if oper =
        if (this.rulesArray[rax].oper == '<'
            || this.rulesArray[rax].oper == 'less than') {
            if (this.accumArray[sax].accumScore < this.rulesArray[rax].thresh) {
                this.groupArray[gax].threshHit = 'y';
                this.logFun('1140 less than threshHit..*-* ');
                this.logFun('rulesArray[rax].accum:');
                this.logFun(this.rulesArray[rax].accum);
                this.logFun('rulesArray[rax].subset:');
                this.logFun(this.rulesArray[rax].subset);
            } // end inner if 
        } // end outer if
        if ((this.rulesArray[rax].oper == '>'
            || this.rulesArray[rax].oper == 'greater than')
            && this.accumArray[sax].accumScore > this.rulesArray[rax].thresh) {
            this.groupArray[gax].threshHit = 'y';
            this.logFun('threshHit greater than *-*');
            this.logFun('rulesArray[rax].accum:');
            this.logFun(this.rulesArray[rax].accum);
            this.logFun('rulesArray[rax].subset:');
            this.logFun(this.rulesArray[rax].subset);
        } // end if oper >
    } // end checkThresh
    //////////////////////  database launches read/chg/add ///////
    launchFaunaReadSurvey() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('1149 running launchFaunaReadSurvey ');
            let faunaDataArray = [];
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadSurvey(this.cust, this.qid)
                .catch(() => {
                this.msg1 = 'error reading survey.';
                this.logFun('1165 apiFauna.readSurvey error.' + this.cust + this.qid);
            });
            for (let i = 0; i < rawFauna.length; i++) {
                faunaDataArray.push(rawFauna[i].data);
            } // end for
            this.logFun('fauna read survey fauna array:');
            this.logFun(faunaDataArray);
            this.logFun('1196 read survey faunaDataArray is Array true/false:');
            this.logFun(Array.isArray(faunaDataArray)); // true
            // this results in one entry in an array.
            return faunaDataArray;
        });
    } // end readFaunaSurvey
    launchFaunaReadParticipant() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('aa1141 running launchFaunaReadParticipant');
            this.msg1 = 'reading participant...';
            let faunaDataArray = [];
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadUser(this.cust, this.qid, this.qUserId);
            this.logFun(' read participant rawFauna:');
            this.logFun(rawFauna);
            this.logFun('1208 read participant rawFauna is Array true/false:');
            this.logFun(Array.isArray(rawFauna)); // true
            for (let i = 0; i < rawFauna.length; i++) {
                faunaDataArray.push(rawFauna[i].data);
            } // end for
            return faunaDataArray;
        });
    } // end launchFaunaReadParticipant
    launchFaunaChgParticipant(userObjParmIn, fromWhere) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('594 running launchFaunaChgParticipant');
            this.logFun(userObjParmIn);
            //this.msg1 = 'updating participant...'
            this.faunaData = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateParticipant(userObjParmIn)
                .catch(() => {
                this.msg1 = 'error updating participant.';
                this.logFun('601 launchFaunaChgParticipant error. userObjParmIn:');
                this.logFun(userObjParmIn);
            });
            this.logFun('fauna chg participant faunaData:');
            this.logFun(this.faunaData);
            this.logFun('qtUpdateParticipant faunaData is Array true/false:');
            this.logFun(Array.isArray(this.faunaData)); // false
        });
    } // end launchFaunaChgParticipant
    launchFaunaAddParticipant() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('1165 running launchFaunaAddParticipant ');
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtAddParticipant(this.userObj)
                .catch(() => {
                this.msg1 = 'error adding participant.';
                this.logFun('1165 apiFauna.qtAddParticipant error. userObj:');
                this.logFun(this.userObj);
            }); //end catch
            this.logFun('fauna add participant rawFauna:');
            this.logFun(rawFauna);
            this.logFun('qtAddParticipant rawFauna is Array true/false:');
            this.logFun(Array.isArray(rawFauna)); // false  
            let myNewArray = [];
            myNewArray.push(rawFauna);
            return myNewArray; // result is one participant stuffed into an array.
        });
    } // end launchFaunaAddParticipant
    launchFaunaReadPastAnswers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('pp387 running launchFaunaReadPastAnswers ');
            this.msg1 = 'reading past answers...';
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadAnswers(this.cust, this.qid, this.qUserId)
                .catch(() => {
                this.msg1 = 'error reading answers.';
                this.logFun('apiFauna.qtReadAnswers error. cust & qid & user ');
                this.logFun(this.cust + ' ' + this.qid + ' ' + this.qUserId);
            });
            this.logFun('1273  read answers rawFauna:');
            this.logFun(rawFauna);
            this.logFun('qtReadAnswers rawFauna is Array true/false:');
            this.logFun(Array.isArray(rawFauna)); // true
            let faunaDataArray = [];
            for (let i = 0; i < rawFauna.length; i++) {
                faunaDataArray.push(rawFauna[i].data);
            } // end for
            return faunaDataArray;
        });
    } // end launchFaunaReadPastAnswers
    launchFaunaReadGroups() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('pp918 running launchFaunaReadGroups ');
            this.msg1 = 'reading question groups...';
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadGroups(this.cust, this.qid)
                .catch(() => {
                this.msg1 = '1122 error reading groups.';
                this.logFun('apiFauna.qtReadGroups error.');
                this.logFun('cust & qid: ' + this.cust + this.qid);
            });
            this.logFun('1147 read group rawFauna:');
            this.logFun(rawFauna);
            this.logFun('qtReadGroups rawFauna is array true/false:');
            this.logFun(Array.isArray(rawFauna)); // true
            let faunaDataArray = [];
            for (let i = 0; i < rawFauna.length; i++) {
                faunaDataArray.push(rawFauna[i].data);
            } // end for
            return faunaDataArray;
        });
    } // end launchFaunaReadGroups
    launchFaunaReadRules() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('pp986 running launchFaunaReadRules ');
            this.msg1 = 'reading rules...';
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadRules(this.cust, this.qid)
                .catch(() => {
                this.msg1 = 'error reading rules.';
                this.logFun('apiFauna.qtReadRules error. cust and qid:');
                this.logFun(this.cust + this.qid);
            });
            this.logFun('rawFauna:');
            this.logFun(rawFauna);
            this.logFun('qtReadRules rawFauna is an array true/false:'); //  
            this.logFun(Array.isArray(rawFauna)); // true
            let faunaDataArray = [];
            for (let i = 0; i < rawFauna.length; i++) {
                faunaDataArray.push(rawFauna[i].data);
            } // end for
            this.logFun('1319 fauna rules array:');
            this.logFun(faunaDataArray);
            this.logFun(' done with launchFaunaReadRules');
            return faunaDataArray;
        });
    } // end launchFaunaReadRules
    launchFaunaReadQuestions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('pp846 running launchFaunaReadQuestions');
            this.msg1 = 'reading questions...';
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadQuestions(this.cust, this.qid)
                .catch(() => {
                this.msg1 = 'error reading questions.';
                this.logFun('apiFauna.qtReadQuestions error. cust and qid:');
                this.logFun(this.cust + this.qid);
            });
            this.logFun('1317 qtReadQuestions rawFauna:');
            this.logFun(rawFauna);
            this.logFun('qtReadQuestions rawFauna is array true/false:');
            this.logFun(Array.isArray(rawFauna)); // true
            let faunaDataArray = [];
            for (let i = 0; i < rawFauna.length; i++) {
                faunaDataArray.push(rawFauna[i].data);
            } // end for
            this.logFun(faunaDataArray);
            return faunaDataArray;
        });
    } // end launchFaunaReadQuestions
    launchFaunaReadScore(scoreObjParmIn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('bb636 running launchFaunaReadScore');
            let rawFauna = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadScore(this.cust, this.qid, this.qUserId, scoreObjParmIn['accum'])
                .catch(() => {
                this.logFun('apiFauna.qtReadScore error.');
                this.logFun('cust & qid: & user & scoreboardName:');
                this.logFun(this.cust + this.qid + this.qUserId + scoreObjParmIn['accum']);
            }); // end 
            this.logFun('rawFauna:');
            this.logFun(rawFauna);
            this.logFun('1358  qtReadScore array test true/false');
            this.logFun(Array.isArray(rawFauna)); // true
            let faunaDataArray = [];
            for (let i = 0; i < rawFauna.length; i++) {
                faunaDataArray.push(rawFauna[i].data);
            } // end for
            this.logFun('bb578 bottom of launchFaunaReadScore');
            return faunaDataArray;
        });
    } // end launchFaunaReadScore
    launchFaunaAddScore(scoreObjParmIn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('bb573 running launchFaunaAddScore ');
            // this.logFun(scoreObjParmIn.accum)
            // this.logFun(scoreObjParmIn.score)
            //this.msg1 = 'writing score...'
            // write to db table qtScores
            let faunaRtnObj = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtWriteScore(scoreObjParmIn)
                .catch(() => {
                this.msg1 = 'error writing score.';
                this.logFun('bb573 qtWriteScore error. scoreObjParmIn:');
                this.logFun(scoreObjParmIn);
            });
            // console.log('608 fauna array test:',Array.isArray(faunaRtnObj)) // false
            this.logFun('faunaRtnObj');
            this.logFun(faunaRtnObj);
            return faunaRtnObj;
        });
    } // end launchFaunaAddScore
    launchFaunaChgScore(scoreObjParmIn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('bb588 running launchFaunaChgScore ');
            this.msg1 = 'updating score...';
            // this.logFun('bb588 scoreObjParmIn: =====')
            // this.logFun(scoreObjParmIn)
            let faunaRtnObj = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateScore(scoreObjParmIn)
                .catch(() => {
                this.msg1 = 'error updating score.';
                this.logFun('qtUpdateScore error. ');
                this.logFun(faunaRtnObj);
            }); // end catch
            // console.log('628 fauna array test:',Array.isArray(faunaRtnObj)) // false
            this.logFun('faunaRtnObj');
            this.logFun(faunaRtnObj);
            return faunaRtnObj;
        });
    } // end launchFaunaChgScore
    launchFaunaAddAnswer(answerObjParm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('aa354 running launchFaunaAddAnswer');
            // writing to the db is helpful for later admin retrieval,
            // but for now, only the answerArray is useful.
            this.msg1 = 'saving answer...';
            this.faunaData = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtWriteAnswer(answerObjParm)
                .catch(() => {
                this.msg1 = 'error writing answer.';
                this.logFun('aa354 qtWriteAnswer error. answerObj:');
                this.logFun(answerObjParm);
                this.debugAnswerError(answerObjParm);
            }); // end catch
            // this.qtDbDataObj = faunaData.data
            this.answerArrayStoredToDb.push(answerObjParm);
        });
    } // end launchFaunaAddAnswer
    launchReadSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('aa354 running launchReadSupabase');
            this.logFun('tbl:');
            this.logFun(tbl);
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].readSupabase(tbl, flds);
            this.supaArray = supaRes.supabaseData;
            if (this.supaArray === null) {
                this.supaArray = [];
            }
            this.logFun('1445 supaArray from launchReadSupabase:');
            this.logFun(this.supaArray);
            return this.supaArray;
        });
    } // end launchReadSupabase
    launchAddSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('aa354 running launchAddSupabase');
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].addSupabase(tbl, flds);
            this.supaArray = supaRes.supabaseData;
            if (this.supaArray === null) {
                this.supaArray = [];
            }
            this.logFun('1455 supaArray from launchAddSupabase:');
            this.logFun(this.supaArray);
            if (this.supaArray.length > 0) {
                if (tbl == 'qtAnswers') {
                    this.answerArrayStoredToDb.push(flds);
                } // end if qtanswers
            } // end if supaArray len
            return this.supaArray;
        });
    } // end launchAddSupabase
    launchChgSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logFun('aa354 running launchChgSupabase');
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].chgSupabase(tbl, flds);
            this.supaArray = supaRes.supabaseData;
            if (this.supaArray === null) {
                this.supaArray = [];
            }
            return this.supaArray;
        });
    } // end launchChgSupabase
    ////////////////////// end database launches ///////
    debugAnswerError(answerObjParm) {
        this.logFun('1204 running debugAnswerError. ');
    } // end debugAnswerError
    appendToQueryString() {
        this.logFun('1329 running appendToQueryString');
        let loco = new URLSearchParams(location.search);
        // loco.set('topic', 'main')
        loco.set('priorQ', this.priorQ);
        this.logFun('loco' + loco.toString());
        window.history.replaceState({}, 'unused', `${location.pathname}?${loco}`);
        // billyy now try setting history to the prior question
        let myNewUrl = new URL(window.location.toString());
        window.history.pushState({}, '', myNewUrl);
        this.logFun('myNewUrl ' + myNewUrl);
        // pushstate might work, but now ya gotta find that priorQ.
        // billyy
    }
    ctrlShiftAltWasHit() {
        this.logFun('running ctrlShiftAltWasHit ');
        // toggle diagnostic button on off
        if (this.showDiagButHtml) {
            this.showDiagButHtml = false; // ctrl shift alt
        }
        else {
            this.showDiagButHtml = true; // ctrl shift alt
        }
    } // end ctrlShiftAltWasHit
    enterKeyWasHit() {
        // he hit enter instead of go button. same thing.
        this.logFun('running enterKeyWasHit');
        if (this.showSignHtml) {
            this.doSign();
        } // end if
    } // end enterKeyWasHit
    setScrDiagOnOff() {
        this.logFun('running setScrDiagOnOff ');
        // as of Spring 2021, control diagnostics with ctrl+alt+shift
        if (this.showDiagHtml == true) {
            this.showDiagHtml = false;
            this.msg1 = 'diagnostics turned off.';
        }
        else {
            this.showDiagHtml = true;
            this.msg1 = 'diagnostics turned on.';
        } // end if
    } // end setScrDiagOnOff
    logFun(logParmIn1) {
        // use this instead of console.log and console.table.
        // logs only if debugLvl not equal 0.
        if (this.debugLvl == '0') {
            return;
        }
        let nd = new Date(); //format datetime to 2022/12/31 01:31:32.555
        let a = nd.toLocaleDateString('zh-CN');
        let b = nd.getHours().toString().padStart(2, '0');
        let c = nd.getMinutes().toString().padStart(2, '0');
        let d = nd.getSeconds().toString().padStart(2, '0');
        let e = nd.getMilliseconds().toString().padStart(3, '0');
        let myDateTime = a + ' ' + b + ':' + c + ':' + d + '.' + e;
        if (typeof logParmIn1 == 'object') {
            console.table(logParmIn1);
            console.log('💫', myDateTime);
            //💫 Dizzy https://emojipedia.org/emoji-1.0/
        }
        else {
            console.log(myDateTime, '💠', logParmIn1);
            //💠 Diamond with a Dot
            this.buildDiagMsgObj(myDateTime, logParmIn1);
            this.diagMsgArray.push(this.diagMsgObj);
            // maybe someday write to fauna log    
            // this.writeDiagMsgToDb(this.diagMsgObj) 
        } // end if 
    } // end logfun
} // end class QuestComponent
QuestComponent.ɵfac = function QuestComponent_Factory(t) { return new (t || QuestComponent)(); };
QuestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QuestComponent, selectors: [["app-quest"]], hostBindings: function QuestComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function QuestComponent_keydown_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    } }, decls: 10, vars: 8, consts: [[1, "mr-3", "ml-3", "mt-3", "mb-3"], ["class", "tag is-dark is-small", 4, "ngIf"], ["class", "mr-2 ml-3 mt-3", 4, "ngIf"], ["class", "hero", 4, "ngIf"], ["class", "level is-mobile", 4, "ngIf"], ["class", "columns is-mobile box ", 4, "ngIf"], ["class", " ml-3 mr-3 has-background-primary-light", 4, "ngIf"], ["class", "button is-link", 3, "click", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], [1, "tag", "is-dark", "is-small"], [1, "mr-2", "ml-3", "mt-3"], [1, "subtitle", "mt-3", "mb-3"], [1, "table", "has-background-success-light", "is-narrow"], ["autofocus", "", "size", "16", "autocomplete", "off", 3, "value", "change"], ["firstName", ""], ["size", "16", "autocomplete", "off", 3, "value", "change"], ["lastName", ""], ["maxlength", "4", "size", "4", "autocomplete", "off", 3, "value", "change"], ["phone", ""], [1, "button", "is-link", "is-pulled-right", "is-small", "is-outlined", 3, "click"], [1, "hero"], [1, "hero-body"], [1, "container"], ["class", "subtitle mb-5 has-text-centered", 4, "ngIf"], ["class", "subtitlev mb-5", 4, "ngIf"], ["class", "title  has-text-centered", 4, "ngIf"], ["class", "title  selz-pre-line", 4, "ngIf"], [1, "subtitle", "mb-5", "has-text-centered"], [1, "subtitlev", "mb-5"], [1, "title", "has-text-centered"], [1, "title", "selz-pre-line"], [1, "level", "is-mobile"], ["class", "level-item has-text-weight-semibold", 4, "ngFor", "ngForOf"], [1, "level-item", "has-text-weight-semibold"], [1, "columns", "is-mobile", "box"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], [1, "button", "is-link", "is-fullwidth", 3, "click"], [1, "ml-3", "mr-3", "has-background-primary-light"], ["href", "https://flyTechFree.com"], [1, "button", "is-link", 3, "click"], [1, "ml-2"], [1, "table", "is-striped", "is-bordered"], [1, "has-background-info"], [4, "ngFor", "ngForOf"]], template: function QuestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuestComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, QuestComponent_section_3_Template, 32, 4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, QuestComponent_section_4_Template, 7, 4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, QuestComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, QuestComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, QuestComponent_div_7_Template, 13, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, QuestComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, QuestComponent_section_9_Template, 69, 6, "section", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSignHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showQuestHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAnswerGroupHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAnswerGroupHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDoneHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDiagButHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDiagHtml);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




//import {api} from './utils/api'
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4238:
/*!*******************************!*\
  !*** ./src/utils/apiFauna.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Api methods to call /functions */

const create = (data) => {
  return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAll = () => {
  return fetch('/.netlify/functions/todos-read-all').then((response) => {
    return response.json()
  })
}

const update = (todoId, data) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteTodo = (todoId) => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const batchDeleteTodo = (todoIds) => {
  return fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
// const qtRead01 = (todoId, data) => {
//   return fetch(`/.netlify/functions/qtRead01/${todoId}`, {
//     body: JSON.stringify(data),
//     //method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }
// const qtRead02 = (todoId, data) => {
//   return fetch(`/.netlify/functions/qtRead02/${todoId}`, {
//     body: JSON.stringify(data),
//     //method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }
// const qtRead03 = (faunaRecId, data) => {
//   //return fetch(`/.netlify/functions/qtRead03/${todoId}`, {
//     return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtRead03/${faunaRecId}`, {
//     body: JSON.stringify(data),
//     //method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }

const qtWriteAnswer = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteAnswer`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtWriteQuestion = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

// const qtWriteSubset = (data) => {
//   return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteSubset`, {
//     body: JSON.stringify(data),
//     method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }

const qtDeleteQuestion = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateQuestion = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateRule = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateRule`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

// const qtUpdateSubset = (data) => {
//   return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateSubset`, {
//     body: JSON.stringify(data),
//     method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }

const qtDeleteRule = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteRule`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtReadQuestions = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadQuestions'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

// const qtReadSubsets = (custParmIn,qidParmIn) => {
//   let myUrl = 
//   'https://qncsurvey.netlify.app/.netlify/functions/qtReadSubsets'
//   +'?cust=' + custParmIn
//   +'&qid=' + qidParmIn
//   return fetch(myUrl)
//    .then((response) => {
//     return response.json()
//   })
// }

const qtReadRules= (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtReadRules'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}

const qtWriteScore = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteScore`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtWriteRule = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteRule`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtMassDeleteAnswers = (custParmIn,qidParmIn,userParmIn) => {
  //alert('api.js 194'+userParmIn)
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteAnswers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}
const qtMassDeleteScores = (custParmIn,qidParmIn,userParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteScores'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}
const qtMassDeleteQuestions = (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteQuestions'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}

const qtMassDeleteRules = (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteRules'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}

const qtReadScores = (custParmIn,qidParmIn,quserIdParmin,userDateTimeParmin) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScores'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&userId=' + quserIdParmin
  + '&userDateTime=' + userDateTimeParmin
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
// const qtReadMultScores = (custParmIn,qidParmIn,quserIdParmin,userDateTimeParmin) => {
const qtReadMultScores = (custParmIn,qidParmIn) => {
    let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultScores'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}


const qtReadAnswers = (custParmIn,qidParmIn,quserIdParmin,userDateTimeParmin) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadAnswers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&userId=' + quserIdParmin
  + '&userDateTime=' + userDateTimeParmin
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadInvitations = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadInvitations'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadUsers = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadUsers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadSubscribers = (subscriberParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadSubscribers'
  + '?subscriber=' + subscriberParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadTeamMembers = (teamMemberParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadTeamMembers'
  + '?teamMember=' + teamMemberParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
} 
const qtReadScoreboards = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScoreboards'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtUpdateScoreboard = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateScoreboard`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtDeleteScoreboard = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteScoreboard`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtAddScoreboard = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddScoreboard`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtAddParticipant = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddParticipant`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtUpdateParticipant = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateParticipant`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtReadUser = (custParmIn,qidParmIn,userParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadUser'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadGroups = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qna.flyTechFree.com/.netlify/functions/qtReadGroups'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtAddGroup = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddGroup`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateGroup = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateGroup`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtDeleteGroup = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteGroup`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtDeleteParticipant = (custParmIn,qidParmIn,userParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtDeleteParticipant'
  + '?cust=' + custParmIn
  + '&qid='  + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
} // end qtDeleteParticipant

const qtUpdateScore = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateScore`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadScore = (custParmIn,qidParmIn,userParmIn,scoreboardNameParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScore'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  + '&scoreboardName=' + scoreboardNameParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtAddSurvey = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddSurvey`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadSurveys = (custParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadSurveys'
  + '?cust=' + custParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadSurvey = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadSurvey'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => { return response.json() })
}
const qtUpdateSurvey = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateSurvey`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadScoreboardRanges = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScoreboardRanges'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => { return response.json() })
}
 
const qtAddScoreboardRange = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddScoreboardRange`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateScoreboardRange = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateScoreboardRange`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtDeleteScoreboardRange = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteScoreboardRange`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadMultAnswers = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultAnswers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadMultSubscribers = () => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultSubscribers'
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadMultTeamMembers = () => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultTeamMembers'
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadMultSurveys = () => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultSurveys'
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
} // end qtReadMultSurveys

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo,
  qtWriteQuestion: qtWriteQuestion,
  qtDeleteQuestion: qtDeleteQuestion,
  qtDeleteRule: qtDeleteRule,
  qtWriteAnswer: qtWriteAnswer,
  qtReadQuestions: qtReadQuestions,
  qtWriteScore: qtWriteScore,
  qtReadRules: qtReadRules,
  qtWriteRule: qtWriteRule,
  qtUpdateQuestion: qtUpdateQuestion,
  qtUpdateRule: qtUpdateRule,
  qtMassDeleteAnswers: qtMassDeleteAnswers,
  qtMassDeleteScores: qtMassDeleteScores,
  qtMassDeleteQuestions: qtMassDeleteQuestions,
  qtMassDeleteRules: qtMassDeleteRules,
  qtReadScores: qtReadScores,
  qtReadAnswers: qtReadAnswers,
  qtReadInvitations: qtReadInvitations,
  qtReadUsers: qtReadUsers,
  qtReadUser: qtReadUser,
  qtReadSubscribers: qtReadSubscribers,
  qtReadTeamMembers: qtReadTeamMembers,
  qtReadScoreboards: qtReadScoreboards,
  qtAddScoreboard: qtAddScoreboard,
  qtAddParticipant:qtAddParticipant,
  qtUpdateScoreboard: qtUpdateScoreboard,
  qtUpdateParticipant: qtUpdateParticipant,
  qtDeleteScoreboard: qtDeleteScoreboard,
  qtReadGroups: qtReadGroups,
  qtAddGroup: qtAddGroup,
  qtUpdateGroup: qtUpdateGroup,
  qtDeleteGroup: qtDeleteGroup,
  qtUpdateScore: qtUpdateScore,
  qtReadScore: qtReadScore,
  qtDeleteParticipant: qtDeleteParticipant,
  qtAddSurvey: qtAddSurvey,
  qtReadSurveys: qtReadSurveys,
  qtReadSurvey: qtReadSurvey,
  qtUpdateSurvey: qtUpdateSurvey,
  qtReadMultScores: qtReadMultScores,
  qtReadScoreboardRanges : qtReadScoreboardRanges,
  qtAddScoreboardRange : qtAddScoreboardRange,
  qtUpdateScoreboardRange : qtUpdateScoreboardRange,
  qtDeleteScoreboardRange : qtDeleteScoreboardRange,
  qtReadMultAnswers : qtReadMultAnswers,
  qtReadMultSubscribers : qtReadMultSubscribers,
  qtReadMultTeamMembers : qtReadMultTeamMembers,
  qtReadMultSurveys :qtReadMultSurveys
}); 

/***/ }),

/***/ 2979:
/*!**********************************!*\
  !*** ./src/utils/apiSupabase.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Bill_flyNewSky2020_dev5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


// callers of funcs in this here apiSupabase must await  fetch-promise to resolve.
// example from a caller:
// this.supaRes = await apiSupabase.addSupabase(tbl,flds)
// grand parent and great grandparent func will have to wait, if they use fetch response.
let readSupabase = (tbl, flds) => {
  console.log(Date.now() / 10000, 'running readSupabase in apiSupabase');
  let myFldNamesArray = Object.keys(flds); //.map(x => x )

  let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

  let myUrl = 'https://play.flytechfree.com/.netlify/functions/readSupabase';
  myUrl += '?tbl=' + tbl;

  for (let i = 0; i < myFldNamesArray.length; i++) {
    myUrl += '&' + myFldNamesArray[i];
    myUrl += '=' + myFldValsArray[i];
  } // end for loop


  console.log('12 apiSupabase readSupabase myUrl: ', myUrl);
  return fetch(myUrl).then(response => {
    console.log(Date.now() / 10000, '15 readSupabase .then of fetch');
    return response.json();
  }); // end .then
}; // end readSupabase //////////////////////////////////////////////////////


function addSupabase(_x, _x2) {
  return _addSupabase.apply(this, arguments);
} // end addSupabase //////////////////////////////////////////////////////////


function _addSupabase() {
  _addSupabase = (0,C_Users_Bill_flyNewSky2020_dev5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tbl, flds) {
    console.log(Date.now() / 10000, '21 running addSupabase in apiSupabase.js');
    let myFldNamesArray = Object.keys(flds); //.map(x => x )

    let myFldValsArray = Object.values(flds); //.map(x => x )

    let myUrl = new URL("https://play.flytechfree.com/.netlify/functions/addSupabase");
    let myType = '';
    let tmpFldVal = '';
    myUrl.searchParams.append("tbl", tbl);

    for (let i = 0; i < myFldNamesArray.length; i++) {
      myType = typeof myFldValsArray[i];
      tmpFldVal = '' + myFldValsArray[i];

      if (tmpFldVal.includes('"')) {
        console.log('tmpFldVal includes a dbl quote.'); //chg double quotes cuz supabase chokes.

        tmpFldVal = '' + myFldValsArray[i].replaceAll('"', "'");
        myFldValsArray[i] = tmpFldVal;
        console.log('myFldValsArray[i]', myFldValsArray[i]);
      } // end if


      if (tmpFldVal.includes('\n')) {
        console.log('tmpFldVal includes a newline.'); //chg newline cuz supabase chokes.

        tmpFldVal = '' + myFldValsArray[i].replaceAll('\n', "\\n");
        myFldValsArray[i] = tmpFldVal;
        console.log('myFldValsArray[i]', myFldValsArray[i]);
      } // end if


      if (myType == 'object') {
        //console.log('yes myType is an object.').  in this case, it means this is a sub-array.
        myFldValsArray[i] = '{' + myFldValsArray[i] + '}'; // postGres wants brackets on sub-array.
      } // end if


      myUrl.searchParams.append(myFldNamesArray[i], myFldValsArray[i]); // magic url append
    } // end for


    let response = yield fetch(myUrl); // first return is a promise,

    return response.json(); // caller of api.addSupbase must wait also.
  });
  return _addSupabase.apply(this, arguments);
}

function delSupabase(_x3, _x4) {
  return _delSupabase.apply(this, arguments);
} // end delSupabase //////////////////////////////////////////////////////


function _delSupabase() {
  _delSupabase = (0,C_Users_Bill_flyNewSky2020_dev5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tbl, flds) {
    console.log(Date.now() / 10000, 'running delSupabase in apiSupabase');
    let myFldNamesArray = Object.keys(flds); //.map(x => x )

    let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

    let myUrl = 'https://play.flytechfree.com/.netlify/functions/delSupabase';
    myUrl += '?tbl=' + tbl;

    for (let i = 0; i < myFldNamesArray.length; i++) {
      myUrl += '&' + myFldNamesArray[i];
      myUrl += '=' + myFldValsArray[i];
    } // end for loop


    console.log('69 apiSupabase delSupabase myUrl: ', myUrl);
    let response = yield fetch(myUrl);
    return response.json();
  });
  return _delSupabase.apply(this, arguments);
}

let chgSupabase = (tbl, flds) => {
  console.log(Date.now() / 10000, 'running chgSupabase in apiSupabase');
  let myFldNamesArray = Object.keys(flds); //.map(x => x )

  let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

  let myUrl = 'https://play.flytechfree.com/.netlify/functions/chgSupabase';
  myUrl += '?tbl=' + tbl;

  for (let i = 0; i < myFldNamesArray.length; i++) {
    myUrl += '&' + myFldNamesArray[i];
    myUrl += '=' + myFldValsArray[i];
  } // end for loop


  console.log('87 apiSupabase chgSupabase myUrl: ', myUrl);
  return fetch(myUrl).then(response => {
    console.log(Date.now() / 10000, '90 chgSupabase .then of fetch');
    return response.json();
  }); // end .then
}; // end chgSupabase //////////////////////////////////////////////////////


let delSupabaseMulti = (tbl, flds) => {
  console.log(Date.now() / 10000, 'running delSupabaseMulti in apiSupabase');
  let myFldNamesArray = Object.keys(flds); //.map(x => x )

  let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

  let myUrl = 'https://play.flytechfree.com/.netlify/functions/delSupabaseMulti';
  myUrl += '?tbl=' + tbl;

  for (let i = 0; i < myFldNamesArray.length; i++) {
    myUrl += '&' + myFldNamesArray[i];
    myUrl += '=' + myFldValsArray[i];
  } // end for loop


  console.log('12 apiSupabase delSupabaseMulti myUrl: ', myUrl);
  return fetch(myUrl).then(response => {
    console.log(Date.now() / 10000, '15 delSupabaseMulti .then of fetch');
    return response.json();
  }); // end .then
}; // end delSupabaseMulti //////////////////////////////////////////////////////


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  readSupabase: readSupabase,
  addSupabase: addSupabase,
  chgSupabase: chgSupabase,
  delSupabase: delSupabase,
  delSupabaseMulti: delSupabaseMulti
}); // end export

/***/ }),

/***/ 9075:
/*!*********************************!*\
  !*** ./src/utils/getEnvVars.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Bill_flyNewSky2020_dev5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


function getFaunaOrSupabase() {
  return _getFaunaOrSupabase.apply(this, arguments);
} // end  fetchEnvFaunaOrSupabase


function _getFaunaOrSupabase() {
  _getFaunaOrSupabase = (0,C_Users_Bill_flyNewSky2020_dev5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    console.log('running getFaunaOrSupabase in getEnvVars.js');
    let myUrl = 'https://qna.flytechfree.com/.netlify/functions/getFaunaOrSupabase';
    let response = yield fetch(myUrl); // magic double-await, promise / result

    let resObj = yield response.json(); // resObj is like: {faunaOrSupabase: 'fauna'}
    // let resTxt   =   await response.text() // .text() or .json() cant do both! 
    // looking at the reponse can only be done once !!!!

    console.log('resObj from getFaunaOrSupabase');
    console.log(resObj);
    console.log('but overriding faunaOrSupabase to fauna til we get this puzzle figures out'); // resObj is like: {faunaOrSupabase: 'fauna'}

    let myResponseString = resObj.faunaOrSupabase;

    if (myResponseString != 'fauna' && myResponseString != 'supabase') {
      myResponseString = 'fauna'; // default
    } //selz oct2024 puzzle why always supabase?
    //let's do fauna til you get this figured out.


    myResponseString = 'fauna'; // default

    return myResponseString; // a string 'fauna' or 'supabase'
    // let faunaOrSupabase  =  process.env.faunaOrSupabase
  });
  return _getFaunaOrSupabase.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getFaunaOrSupabase: getFaunaOrSupabase
}); // end export

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map