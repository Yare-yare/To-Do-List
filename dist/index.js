/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/seconed.js":
/*!************************!*\
  !*** ./src/seconed.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* this is where all of the classes will be:
     -->Task class 
     -->Project class
*/

var Task = /*#__PURE__*/function () {
  function Task(nameOfTask) {
    _classCallCheck(this, Task);
    this.nameOfTask = nameOfTask;
  }

  /* function to store the value/nameOftask in a local storage */
  _createClass(Task, [{
    key: "storingValue",
    value: function storingValue() {
      // Get the existing tasks from the local storage (if any)
      var existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

      // Adding the new task name to the existing tasks array
      existingTasks.push(this.nameOfTask);
      localStorage.setItem("tasks", JSON.stringify(existingTasks));
    }
  }, {
    key: "pushingValue",
    value: function pushingValue() {}
  }]);
  return Task;
}();
var Project = /*#__PURE__*/function () {
  function Project(nameOfProject) {
    _classCallCheck(this, Project);
    this.nameOfProject = nameOfProject;
  }
  _createClass(Project, [{
    key: "storingValue",
    value: function storingValue() {
      // Get the existing tasks from the local storage (if any)
      var existingTasks = JSON.parse(localStorage.getItem("projects")) || [];

      // Adding the new task name to the existing tasks array
      existingTasks.push(this.nameOfProject);
      localStorage.setItem("projects", JSON.stringify(existingTasks));
    }
  }, {
    key: "pushingValue",
    value: function pushingValue() {}
  }]);
  return Project;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/files/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/files/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../files/Caveat-VariableFont_wght.ttf */ "./dist/files/Caveat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --background-color: #FFF8DC;
    --color:#000000;
  }

  /* changing the font to Caveat by Impalleri Type */
  @font-face {
    font-family: caveat;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  }

body{
    background-color: var(--background-color);
    color: var(--color);
    margin: 0%;
    padding: 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    overflow: hidden;
    font-weight: bold;
    font-family: caveat, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: x-large;
}

/* making the header and footer have colors */
.header, .footer {
    background-color: #333;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

/*making the grid-container display:grid*/
.gridContainer{
    display: grid;
    grid-template-columns: 200px 1fr; /* Sidebar, Main Content */
    gap:20px;
}

.sideBar {
    display: flex;
    align-content: center;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    flex-direction: column;
    gap: 30px;
    height: 80%;
  }

  .contentSection {
    background-color: #C5C5A3;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .footer{
    position: absolute;
    bottom: 0%;
    width: 100%;
  }

  .footer span {
    margin-right: 10px;
  }

  /* working on the asideContent */
  .container{
    font-family: caveat;
    background-color: #C5C5A3;
    border-radius: 1rem;
    padding: 1rem;
  }

  button{
    font-family: caveat;
    font-size: x-large;
    padding: 5px;
    border-radius: .5rem;
    box-shadow: #333  2px 3px 1px;
  }

  button:hover{
    background-color: var(--background-color);
    animation: bounceAnimation 2s infinite;
  }

  @keyframes bounceAnimation {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); } /* Adjust the -20px value to control the bounce height */
  }

  /* editing the images of aside  */
  .image{
   width: 35px;
  }

  img{
    width:50px;
  }

  .inbox {
    background-color: #A3D9C5;
    box-shadow: #FFC5E3 2px 3px 20px 3px; 
  }

  .projects {
    background-color: #A3C5D9;
    box-shadow: #FFC5E3 2px 3px 20px 3px;
}

  /* working on the Content section */
  .containerForMain{
    background-color: var(--background-color);
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .gitHubLogo{
    width: 20px;
  }

  fieldset{
    background-color:#C5C5A3;
    border-radius: 0.5rem;
    box-shadow: rgb(0, 0, 0) 3px 3px 3px;
  }

/* working on the tasks/projects displayed */
.projectParentDiv{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin-top: 10px;
  background-color:#C5C5A3;
  border-radius: 0.5rem;
  box-shadow: rgb(0, 0, 0) 3px 3px 3px;
  gap: 10px;
}

.taskParentDiv{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin-top: 10px;
  background-color:#C5C5A3;
  border-radius: 0.5rem;
  box-shadow: rgb(0, 0, 0) 3px 3px 3px;
  gap: 10px;
}

.imageAndTaskAdded, .imageAndProjectAdded{
  display: flex;
  align-items: center;
}

.taskAdd{
  border-color: 1px var(--background-color) ;
}
`, "",{"version":3,"sources":["webpack://./dist/files/index.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,eAAe;EACjB;;EAEA,kDAAkD;EAClD;IACE,mBAAmB;IACnB,4CAA+C;EACjD;;AAEF;IACI,yCAAyC;IACzC,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,aAAa;IACb,iCAAiC;IACjC,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,gFAAgF;IAChF,kBAAkB;AACtB;;AAEA,6CAA6C;AAC7C;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;AAEF,yCAAyC;AACzC;IACI,aAAa;IACb,gCAAgC,EAAE,0BAA0B;IAC5D,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,WAAW;EACb;;EAEA;IACE,kBAAkB;EACpB;;EAEA,gCAAgC;EAChC;IACE,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,6BAA6B;EAC/B;;EAEA;IACE,yCAAyC;IACzC,sCAAsC;EACxC;;EAEA;IACE,WAAW,wBAAwB,EAAE;IACrC,MAAM,2BAA2B,EAAE,EAAE,wDAAwD;EAC/F;;EAEA,iCAAiC;EACjC;GACC,WAAW;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,oCAAoC;EACtC;;EAEA;IACE,yBAAyB;IACzB,oCAAoC;AACxC;;EAEE,mCAAmC;EACnC;IACE,yCAAyC;IACzC,aAAa;IACb,qBAAqB;EACvB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,wBAAwB;IACxB,qBAAqB;IACrB,oCAAoC;EACtC;;AAEF,4CAA4C;AAC5C;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,oCAAoC;EACpC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,oCAAoC;EACpC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":[":root {\n    --background-color: #FFF8DC;\n    --color:#000000;\n  }\n\n  /* changing the font to Caveat by Impalleri Type */\n  @font-face {\n    font-family: caveat;\n    src: url(../files/Caveat-VariableFont_wght.ttf);\n  }\n\nbody{\n    background-color: var(--background-color);\n    color: var(--color);\n    margin: 0%;\n    padding: 0;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n    overflow: hidden;\n    font-weight: bold;\n    font-family: caveat, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: x-large;\n}\n\n/* making the header and footer have colors */\n.header, .footer {\n    background-color: #333;\n    color: white;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n/*making the grid-container display:grid*/\n.gridContainer{\n    display: grid;\n    grid-template-columns: 200px 1fr; /* Sidebar, Main Content */\n    gap:20px;\n}\n\n.sideBar {\n    display: flex;\n    align-content: center;\n    text-align: center;\n    box-sizing: border-box;\n    padding: 10px;\n    flex-direction: column;\n    gap: 30px;\n    height: 80%;\n  }\n\n  .contentSection {\n    background-color: #C5C5A3;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  .footer{\n    position: absolute;\n    bottom: 0%;\n    width: 100%;\n  }\n\n  .footer span {\n    margin-right: 10px;\n  }\n\n  /* working on the asideContent */\n  .container{\n    font-family: caveat;\n    background-color: #C5C5A3;\n    border-radius: 1rem;\n    padding: 1rem;\n  }\n\n  button{\n    font-family: caveat;\n    font-size: x-large;\n    padding: 5px;\n    border-radius: .5rem;\n    box-shadow: #333  2px 3px 1px;\n  }\n\n  button:hover{\n    background-color: var(--background-color);\n    animation: bounceAnimation 2s infinite;\n  }\n\n  @keyframes bounceAnimation {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-5px); } /* Adjust the -20px value to control the bounce height */\n  }\n\n  /* editing the images of aside  */\n  .image{\n   width: 35px;\n  }\n\n  img{\n    width:50px;\n  }\n\n  .inbox {\n    background-color: #A3D9C5;\n    box-shadow: #FFC5E3 2px 3px 20px 3px; \n  }\n\n  .projects {\n    background-color: #A3C5D9;\n    box-shadow: #FFC5E3 2px 3px 20px 3px;\n}\n\n  /* working on the Content section */\n  .containerForMain{\n    background-color: var(--background-color);\n    padding: 1rem;\n    border-radius: 0.5rem;\n  }\n\n  .gitHubLogo{\n    width: 20px;\n  }\n\n  fieldset{\n    background-color:#C5C5A3;\n    border-radius: 0.5rem;\n    box-shadow: rgb(0, 0, 0) 3px 3px 3px;\n  }\n\n/* working on the tasks/projects displayed */\n.projectParentDiv{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  margin-top: 10px;\n  background-color:#C5C5A3;\n  border-radius: 0.5rem;\n  box-shadow: rgb(0, 0, 0) 3px 3px 3px;\n  gap: 10px;\n}\n\n.taskParentDiv{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  margin-top: 10px;\n  background-color:#C5C5A3;\n  border-radius: 0.5rem;\n  box-shadow: rgb(0, 0, 0) 3px 3px 3px;\n  gap: 10px;\n}\n\n.imageAndTaskAdded, .imageAndProjectAdded{\n  display: flex;\n  align-items: center;\n}\n\n.taskAdd{\n  border-color: 1px var(--background-color) ;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./dist/files/index.css":
/*!******************************!*\
  !*** ./dist/files/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./dist/files/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./dist/files/Caveat-VariableFont_wght.ttf":
/*!*************************************************!*\
  !*** ./dist/files/Caveat-VariableFont_wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "834178e16d110b21c85e.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_files_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/files/index.css */ "./dist/files/index.css");
/* harmony import */ var _seconed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seconed */ "./src/seconed.js");


//import the css file


//import the Task and Project classes



//import data-fns



//adding the iconImage to the tittle
var faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.href = "./images/task.png";
document.head.appendChild(faviconLink);

//creating the header
var header = document.createElement("div");
header.classList.add("header");
header.innerText = "To-Do-List";
document.body.append(header);

//create a gridContainer
var gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
document.body.append(gridContainer);

//creating the aside content
var asideContent = document.createElement("aside");
asideContent.classList.add("sideBar");
gridContainer.appendChild(asideContent);

//creating the main content
var main = document.createElement("div");
main.classList.add("contentSection");
//I want the background of a container to be #fff8dc
var containerForMain = document.createElement("div");
containerForMain.classList.add("containerForMain");
containerForMain.innerHTML = "Welcome, <br> \nclick Inbox to add a task <img src=\"./images/to-do-list.png\" alt=\"\" /> <br> \n ";
main.appendChild(containerForMain);
gridContainer.appendChild(main);

//creating the footer
var footer = document.createElement("footer");
footer.classList.add("footer");

// create a span element to wrap the text
var footerText = document.createElement("span");
footerText.innerText = "Copyright \xA9 2023 Yare-yare";
var footerImage = document.createElement("img");
footerImage.src = "./images/github-logo.png";
footerImage.alt = "github logo";
footerImage.classList.add("gitHubLogo");
footer.appendChild(footerText);
footer.appendChild(footerImage);
gridContainer.appendChild(footer);

/* work on the aside contents: (Things To do-> Now(ASAP), Today, Tommorrow, This week, This month), (Projects->...)  */

//container for thingsToDo (parent div)
var container = document.createElement("div");
container.classList.add("container");
asideContent.appendChild(container);

//ThingsTodo
var thingsToDo = document.createElement("div");
thingsToDo.classList.add("thingsToDo");
//creating image for Things to Do --> `"image" Things to Do!`
var image = document.createElement("img");
image.src = "./images/alarm.png";
image.alt = "fireAlarm logo";
image.classList.add("image");
thingsToDo.appendChild(image);
//creating text node for "Things to Do!"
var thingsToDoText = document.createTextNode("Things to Do!");
thingsToDo.appendChild(thingsToDoText);
container.appendChild(thingsToDo);

// Now
var inbox = document.createElement("button");
inbox.classList.add("inbox");
//create an image for now
var inboxImage = document.createElement("img");
inboxImage.src = "./images/email.png";
inboxImage.alt = "inboxImage";
inboxImage.classList.add("inboxImage");
inbox.appendChild(inboxImage);
//creating text node for "Due Now!"
var inboxMessage = document.createTextNode("Inbox");
inbox.appendChild(inboxMessage);
container.appendChild(inbox);

/* // Today
const today = document.createElement("button");
today.classList.add("today");
//image for today button
const todayImage = document.createElement("img");
todayImage.src = "./images/cinema.png ";
todayImage.alt = " today Png";
todayImage.classList.add("todayImage");
today.appendChild(todayImage);
//create a textNode for today
const dueToday = document.createTextNode(`Due Today!`);
today.appendChild(dueToday);
container.appendChild(today); */

/* // Tomorrow
const tomorrow = document.createElement("button");
tomorrow.classList.add("tomorrow");
//create the tomorrow image
const tomorrowImage = document.createElement("img");
tomorrowImage.src = "./images/tomorrow.png ";
tomorrowImage.alt = " tommorow Png";
tomorrowImage.classList.add("tomorrowImage");
tomorrow.appendChild(tomorrowImage);
//create a textNode for tomrrow
const dueTomorrow = document.createTextNode(`Due Tomorrow!`);
tomorrow.appendChild(dueTomorrow);
container.appendChild(tomorrow); */

/* // This Week
const week = document.createElement("button");
week.classList.add("week");
//create the image for week
const weekImage = document.createElement("img");
weekImage.classList.add("weekImage");
weekImage.src = "./images/week.png ";
weekImage.alt = " week Png";
week.appendChild(weekImage);
//create a textNode for due this week
const dueThisWeek = document.createTextNode("Due This Week!");
week.appendChild(dueThisWeek);
container.appendChild(week); */

/* // This Month
const month = document.createElement("button");
month.classList.add("month");
//create image for month
const monthImage = document.createElement("img");
monthImage.classList.add("monthImage");
monthImage.src = "./images/month.png ";
monthImage.alt = " month Png";
month.appendChild(monthImage);
//create a text node for due in a month
const dueInAMonth = document.createTextNode("Due In a Month");
month.appendChild(dueInAMonth);
container.appendChild(month);
 */
/* //projects
const project = document.createElement("button");
project.classList.add("projects");
const projectImage = document.createElement("img");
projectImage.src = "./images/project-management.png";
projectImage.alt = "project Image";
project.appendChild(projectImage);
//textNode for projects
const projectsText = document.createTextNode("Projects");
project.appendChild(projectsText);
container.appendChild(project); */
/* export the button names: */

/* when buttons are clicked: What the containerForMain will look like*/
//inbox button clicked
inbox.addEventListener("click", function () {
  containerForMain.innerHTML = "    \n  <form action=\"\" method=\"\" id = \"task\">\n  <fieldset>\n    <label for=\"addingTask\" name=\"addingTask\" class=\"addingTask\"\n      ><button class=\"addingTaskButton\">Add Task</button></label\n    >\n    <input type=\"text\" id=\"taskInput\" placeholder=\"Task Name\" />\n  </fieldset>\n</form>";
});

/* //projects button
project.addEventListener("click", () => {
  containerForMain.innerHTML = `  
    <form action="" method="" id = "project">
    <fieldset class = "fieldSet">
      <label for="addingProject" name="addingProject" class="addingProject"
        ><button class="addingProject">Add Project</button></label
      >
      <input type="text" id="projectInput" placeholder="Project Name" />
    </fieldset>

  </form>`;
}); */

/* creating a new instance and storing it in local storage every time someone clicks the add project/add task button */

document.body.addEventListener("submit", function (event) {
  event.preventDefault();
  //Task
  if (event.target.id === "task") {
    var taskInput = document.getElementById("taskInput");
    var taskName = taskInput.value;

    // Create an instance of the Task class with the input value as an argument
    var newTask = new _seconed__WEBPACK_IMPORTED_MODULE_1__.Task(taskName);

    // Store the task's name in the local storage using the storingValue() method
    newTask.storingValue();

    //create a div to hold everything after task is added
    var taskParentDiv = document.createElement("div");
    taskParentDiv.classList.add("taskParentDiv");

    //create a div to hold image and task added
    var imageAndTaskAdded = document.createElement("div");
    imageAndTaskAdded.classList.add("imageAndTaskAdded");

    //create div for taskCalanderIcon Parent
    var taskCalanderIconParent = document.createElement("div");
    //create div for calander Icon
    var taskCalanderIcon = document.createElement("input");
    taskCalanderIcon.type = "date";
    taskCalanderIcon.id = "taskCalanderIcon";
    //append the taskCalanderIcon to taskCalanderIconParent
    taskCalanderIconParent.appendChild(taskCalanderIcon);

    //add the task added to the containerForMain.innerText so that the user can see the project
    //create taskImage
    var taskImage = document.createElement("img");
    taskImage.src = "./images/approved.png";
    taskImage.alt = "task Image";
    var taskAdded = document.createElement("div"); //container/display for the newly added project
    taskAdded.classList.add("taskAdded");
    var storedTaskValue = taskInput.value;
    taskAdded.innerText = storedTaskValue;

    //append the image and then the task added into imageAndTaskAdded div
    imageAndTaskAdded.appendChild(taskImage); //image
    imageAndTaskAdded.appendChild(taskAdded); //task

    taskParentDiv.appendChild(imageAndTaskAdded); //image and task
    taskParentDiv.appendChild(taskCalanderIconParent); //date picker/calander
    containerForMain.appendChild(taskParentDiv);
  }

  /*  Date and image logic
    // Event listener for buttons
    today.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const currentDate = new Date();
      if (taskDate.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0)) {
        containerForMain.innerText = `${taskAdded.innerText} is due today`;
      }
    });
     tomorrow.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const tomorrowDate = new Date();
      tomorrowDate.setDate(tomorrowDate.getDate() + 1);
      if (taskDate.setHours(0, 0, 0, 0) === tomorrowDate.setHours(0, 0, 0, 0)) {
        containerForMain.innerText = `${taskAdded.innerText} is due tomorrow`;
      }
    });
     week.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const currentDate = new Date();
      const weekFromNow = new Date();
      weekFromNow.setDate(currentDate.getDate() + 7);
      if (taskDate >= currentDate && taskDate <= weekFromNow) {
        containerForMain.innerText = `${taskAdded.innerText} is due this week`;
      }
    });
     month.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const currentDate = new Date();
      const monthFromNow = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      if (taskDate >= currentDate && taskDate < monthFromNow) {
        containerForMain.innerText = `${taskAdded.innerText} is due a month from now`;
      }
    });
  } */

  /*
  //Project
  if (event.target.id === "project") {
  const projectInput = document.getElementById("projectInput"); //name of input
  const nameOfProject = projectInput.value;
   //create a new instance of the Project class and store it in local storage
  const newProject = new Project(nameOfProject);
  newProject.storingValue();
   //create a div to hold everything when the project is added
  const projectParentDiv = document.createElement("div");
  projectParentDiv.classList.add("projectParentDiv");
   //create a div to hold image and project added
  const imageAndProjectAdded = document.createElement("div");
  imageAndProjectAdded.classList.add("imageAndProjectAdded");
   //create div for projectCalanderIcon Parent
  const projectCalanderIconParent = document.createElement("div");
  //create div for projectCalanderIcon
  const projectCalanderIcon = document.createElement("input");
  projectCalanderIcon.type = "date";
  //append the projectCalanderIcon to projectCalanderIconParent
  projectCalanderIconParent.appendChild(projectCalanderIcon);
   //add the Project added to the containerForMain.innerText so that the user can see the project
  //create ProjectImage
  const projectImage = document.createElement("img");
  projectImage.src = "./images/approved.png";
  projectImage.alt = "project Image";
   //create
  //add the project added to the containerForMain.innerText so that the user can see the project
  const projectAdded = document.createElement("div"); //container/display for the newly added project
  projectAdded.classList.add("projectAdded");
  let storedValue = projectInput.value;
  projectAdded.innerText = storedValue;
   //append the image and then the task added into imageAndTaskAdded div
  imageAndProjectAdded.appendChild(projectImage); //image
  imageAndProjectAdded.appendChild(projectAdded); //project
   projectParentDiv.appendChild(imageAndProjectAdded); //image and project
  projectParentDiv.appendChild(projectCalanderIconParent); //date picker/calander
  containerForMain.appendChild(projectParentDiv);
   projectInput.value = "";
    Date and image logic 
   Event listener for buttons 
   today.addEventListener("click", () => {
     if(the taskCalanderIcon.value is currentDay){
     containerForMain.innerText = `${taskAdded} is due today`;
     }
   });
   tomorrow.addEventListener("click", () => {
     if(the taskCalanderIcon.value is tomorrow){
     containerForMain.innerText = `${taskAdded} is due tomorrow`;
     }
   });
   week.addEventListener("click", () => {
     if(the taskCalanderIcon.value is this week){
     containerForMain.innerText = `${taskAdded} is due this week`;
     }
   });
   month.addEventListener("click", () => {
     if(the taskCalanderIcon.value is a month away from currentday){
     containerForMain.innerText = `${taskAdded} is due a month from now`;
     }
   });
  }
  */

  /* 
                                    //To-Do-List:
         --> Figure out how to click on images and add event listeners to them.. using the image click
            as a way to complete the task, also add hover effect on it
                
        --> make sure the user can't just submit/add an empty input... also depending on how you feel, 
            check to see if the user put a date or not, if not add an error or not, up to you.
         --> make sure the web app is responsive on phones, and devices greater the 1920x1080
            --> so like use of drop-down menus when on mobile 
  */
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUEsSUFBSTtFQUNmLFNBQUFBLEtBQVlDLFVBQVUsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLElBQUE7SUFDdEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7RUFDOUI7O0VBRUE7RUFBQUUsWUFBQSxDQUFBSCxJQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUFDLGFBQUEsRUFBZTtNQUNiO01BQ0EsSUFBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFOztNQUVyRTtNQUNBSixhQUFhLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNYLFVBQVUsQ0FBQztNQUVuQ1MsWUFBWSxDQUFDRyxPQUFPLENBQUMsT0FBTyxFQUFFTCxJQUFJLENBQUNNLFNBQVMsQ0FBQ1AsYUFBYSxDQUFDLENBQUM7SUFDOUQ7RUFBQztJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBVSxhQUFBLEVBQWUsQ0FBQztFQUFDO0VBQUEsT0FBQWYsSUFBQTtBQUFBO0FBR1osSUFBTWdCLE9BQU87RUFDbEIsU0FBQUEsUUFBWUMsYUFBYSxFQUFFO0lBQUFmLGVBQUEsT0FBQWMsT0FBQTtJQUN6QixJQUFJLENBQUNDLGFBQWEsR0FBR0EsYUFBYTtFQUNwQztFQUFDZCxZQUFBLENBQUFhLE9BQUE7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsYUFBQSxFQUFlO01BQ2I7TUFDQSxJQUFNQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUU7O01BRXhFO01BQ0FKLGFBQWEsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ0ssYUFBYSxDQUFDO01BRXRDUCxZQUFZLENBQUNHLE9BQU8sQ0FBQyxVQUFVLEVBQUVMLElBQUksQ0FBQ00sU0FBUyxDQUFDUCxhQUFhLENBQUMsQ0FBQztJQUNqRTtFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFVLGFBQUEsRUFBZSxDQUFDO0VBQUM7RUFBQSxPQUFBQyxPQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNuQjtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmLFVBQVUsK0JBQStCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsd0JBQXdCLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssc0JBQXNCLG1DQUFtQyxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksaUNBQWlDLGtDQUFrQyxzQkFBc0Is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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlY29uZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL2Rpc3QvZmlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vZGlzdC9maWxlcy9pbmRleC5jc3M/ZGFmYiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0aGlzIGlzIHdoZXJlIGFsbCBvZiB0aGUgY2xhc3NlcyB3aWxsIGJlOlxuICAgICAtLT5UYXNrIGNsYXNzIFxuICAgICAtLT5Qcm9qZWN0IGNsYXNzXG4qL1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWVPZlRhc2spIHtcbiAgICB0aGlzLm5hbWVPZlRhc2sgPSBuYW1lT2ZUYXNrO1xuICB9XG5cbiAgLyogZnVuY3Rpb24gdG8gc3RvcmUgdGhlIHZhbHVlL25hbWVPZnRhc2sgaW4gYSBsb2NhbCBzdG9yYWdlICovXG4gIHN0b3JpbmdWYWx1ZSgpIHtcbiAgICAvLyBHZXQgdGhlIGV4aXN0aW5nIHRhc2tzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgKGlmIGFueSlcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcblxuICAgIC8vIEFkZGluZyB0aGUgbmV3IHRhc2sgbmFtZSB0byB0aGUgZXhpc3RpbmcgdGFza3MgYXJyYXlcbiAgICBleGlzdGluZ1Rhc2tzLnB1c2godGhpcy5uYW1lT2ZUYXNrKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdUYXNrcykpO1xuICB9XG5cbiAgcHVzaGluZ1ZhbHVlKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lT2ZQcm9qZWN0KSB7XG4gICAgdGhpcy5uYW1lT2ZQcm9qZWN0ID0gbmFtZU9mUHJvamVjdDtcbiAgfVxuXG4gIHN0b3JpbmdWYWx1ZSgpIHtcbiAgICAvLyBHZXQgdGhlIGV4aXN0aW5nIHRhc2tzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgKGlmIGFueSlcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuICAgIC8vIEFkZGluZyB0aGUgbmV3IHRhc2sgbmFtZSB0byB0aGUgZXhpc3RpbmcgdGFza3MgYXJyYXlcbiAgICBleGlzdGluZ1Rhc2tzLnB1c2godGhpcy5uYW1lT2ZQcm9qZWN0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdUYXNrcykpO1xuICB9XG5cbiAgcHVzaGluZ1ZhbHVlKCkge31cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9maWxlcy9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOERDO1xuICAgIC0tY29sb3I6IzAwMDAwMDtcbiAgfVxuXG4gIC8qIGNoYW5naW5nIHRoZSBmb250IHRvIENhdmVhdCBieSBJbXBhbGxlcmkgVHlwZSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogY2F2ZWF0O1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB9XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogY2F2ZWF0LCAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi8qIG1ha2luZyB0aGUgaGVhZGVyIGFuZCBmb290ZXIgaGF2ZSBjb2xvcnMgKi9cbi5oZWFkZXIsIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbi8qbWFraW5nIHRoZSBncmlkLWNvbnRhaW5lciBkaXNwbGF5OmdyaWQqL1xuLmdyaWRDb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjsgLyogU2lkZWJhciwgTWFpbiBDb250ZW50ICovXG4gICAgZ2FwOjIwcHg7XG59XG5cbi5zaWRlQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4O1xuICAgIGhlaWdodDogODAlO1xuICB9XG5cbiAgLmNvbnRlbnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUEzO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5mb290ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9vdGVyIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC8qIHdvcmtpbmcgb24gdGhlIGFzaWRlQ29udGVudCAqL1xuICAuY29udGFpbmVye1xuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzVBMztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICBidXR0b257XG4gICAgZm9udC1mYW1pbHk6IGNhdmVhdDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGJveC1zaGFkb3c6ICMzMzMgIDJweCAzcHggMXB4O1xuICB9XG5cbiAgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGFuaW1hdGlvbjogYm91bmNlQW5pbWF0aW9uIDJzIGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBib3VuY2VBbmltYXRpb24ge1xuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9IC8qIEFkanVzdCB0aGUgLTIwcHggdmFsdWUgdG8gY29udHJvbCB0aGUgYm91bmNlIGhlaWdodCAqL1xuICB9XG5cbiAgLyogZWRpdGluZyB0aGUgaW1hZ2VzIG9mIGFzaWRlICAqL1xuICAuaW1hZ2V7XG4gICB3aWR0aDogMzVweDtcbiAgfVxuXG4gIGltZ3tcbiAgICB3aWR0aDo1MHB4O1xuICB9XG5cbiAgLmluYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEOUM1O1xuICAgIGJveC1zaGFkb3c6ICNGRkM1RTMgMnB4IDNweCAyMHB4IDNweDsgXG4gIH1cblxuICAucHJvamVjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0M1RDk7XG4gICAgYm94LXNoYWRvdzogI0ZGQzVFMyAycHggM3B4IDIwcHggM3B4O1xufVxuXG4gIC8qIHdvcmtpbmcgb24gdGhlIENvbnRlbnQgc2VjdGlvbiAqL1xuICAuY29udGFpbmVyRm9yTWFpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgfVxuXG4gIC5naXRIdWJMb2dve1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG5cbiAgZmllbGRzZXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzVDNUEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgM3B4IDNweCAzcHg7XG4gIH1cblxuLyogd29ya2luZyBvbiB0aGUgdGFza3MvcHJvamVjdHMgZGlzcGxheWVkICovXG4ucHJvamVjdFBhcmVudERpdntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6I0M1QzVBMztcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgM3B4IDNweCAzcHg7XG4gIGdhcDogMTBweDtcbn1cblxuLnRhc2tQYXJlbnREaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNDNUM1QTM7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDNweCAzcHggM3B4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbWFnZUFuZFRhc2tBZGRlZCwgLmltYWdlQW5kUHJvamVjdEFkZGVke1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFza0FkZHtcbiAgYm9yZGVyLWNvbG9yOiAxcHggdmFyKC0tYmFja2dyb3VuZC1jb2xvcikgO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L2ZpbGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCOztFQUVBLGtEQUFrRDtFQUNsRDtJQUNFLG1CQUFtQjtJQUNuQiw0Q0FBK0M7RUFDakQ7O0FBRUY7SUFDSSx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnRkFBZ0Y7SUFDaEYsa0JBQWtCO0FBQ3RCOztBQUVBLDZDQUE2QztBQUM3QztJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztBQUVGLHlDQUF5QztBQUN6QztJQUNJLGFBQWE7SUFDYixnQ0FBZ0MsRUFBRSwwQkFBMEI7SUFDNUQsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQSxnQ0FBZ0M7RUFDaEM7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLFdBQVcsd0JBQXdCLEVBQUU7SUFDckMsTUFBTSwyQkFBMkIsRUFBRSxFQUFFLHdEQUF3RDtFQUMvRjs7RUFFQSxpQ0FBaUM7RUFDakM7R0FDQyxXQUFXO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7RUFFRSxtQ0FBbUM7RUFDbkM7SUFDRSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsb0NBQW9DO0VBQ3RDOztBQUVGLDRDQUE0QztBQUM1QztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOERDO1xcbiAgICAtLWNvbG9yOiMwMDAwMDA7XFxuICB9XFxuXFxuICAvKiBjaGFuZ2luZyB0aGUgZm9udCB0byBDYXZlYXQgYnkgSW1wYWxsZXJpIFR5cGUgKi9cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogY2F2ZWF0O1xcbiAgICBzcmM6IHVybCguLi9maWxlcy9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG4gIH1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQsICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi8qIG1ha2luZyB0aGUgaGVhZGVyIGFuZCBmb290ZXIgaGF2ZSBjb2xvcnMgKi9cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4vKm1ha2luZyB0aGUgZ3JpZC1jb250YWluZXIgZGlzcGxheTpncmlkKi9cXG4uZ3JpZENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7IC8qIFNpZGViYXIsIE1haW4gQ29udGVudCAqL1xcbiAgICBnYXA6MjBweDtcXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gIH1cXG5cXG4gIC5jb250ZW50U2VjdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNUM1QTM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5mb290ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZm9vdGVyIHNwYW4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICAvKiB3b3JraW5nIG9uIHRoZSBhc2lkZUNvbnRlbnQgKi9cXG4gIC5jb250YWluZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNUM1QTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICBidXR0b257XFxuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogIzMzMyAgMnB4IDNweCAxcHg7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBhbmltYXRpb246IGJvdW5jZUFuaW1hdGlvbiAycyBpbmZpbml0ZTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYm91bmNlQW5pbWF0aW9uIHtcXG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9IC8qIEFkanVzdCB0aGUgLTIwcHggdmFsdWUgdG8gY29udHJvbCB0aGUgYm91bmNlIGhlaWdodCAqL1xcbiAgfVxcblxcbiAgLyogZWRpdGluZyB0aGUgaW1hZ2VzIG9mIGFzaWRlICAqL1xcbiAgLmltYWdle1xcbiAgIHdpZHRoOiAzNXB4O1xcbiAgfVxcblxcbiAgaW1ne1xcbiAgICB3aWR0aDo1MHB4O1xcbiAgfVxcblxcbiAgLmluYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzRDlDNTtcXG4gICAgYm94LXNoYWRvdzogI0ZGQzVFMyAycHggM3B4IDIwcHggM3B4OyBcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0M1RDk7XFxuICAgIGJveC1zaGFkb3c6ICNGRkM1RTMgMnB4IDNweCAyMHB4IDNweDtcXG59XFxuXFxuICAvKiB3b3JraW5nIG9uIHRoZSBDb250ZW50IHNlY3Rpb24gKi9cXG4gIC5jb250YWluZXJGb3JNYWlue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgfVxcblxcbiAgLmdpdEh1YkxvZ297XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcblxcbiAgZmllbGRzZXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0M1QzVBMztcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgM3B4IDNweCAzcHg7XFxuICB9XFxuXFxuLyogd29ya2luZyBvbiB0aGUgdGFza3MvcHJvamVjdHMgZGlzcGxheWVkICovXFxuLnByb2plY3RQYXJlbnREaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiNDNUM1QTM7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgM3B4IDNweCAzcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrUGFyZW50RGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjojQzVDNUEzO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDNweCAzcHggM3B4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW1hZ2VBbmRUYXNrQWRkZWQsIC5pbWFnZUFuZFByb2plY3RBZGRlZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0FkZHtcXG4gIGJvcmRlci1jb2xvcjogMXB4IHZhcigtLWJhY2tncm91bmQtY29sb3IpIDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBhZGREYXlzLFxuICBpc1RvZGF5LFxuICBpc1RvbW9ycm93LFxuICBpc1RoaXNXZWVrLFxuICBpc1dpdGhpbkludGVydmFsLFxuICBhZGRNb250aHMsXG59IGZyb20gXCJkYXRlLWZuc1wiO1xuXG4vL2ltcG9ydCB0aGUgY3NzIGZpbGVcbmltcG9ydCBcIi4uL2Rpc3QvZmlsZXMvaW5kZXguY3NzXCI7XG5cbi8vaW1wb3J0IHRoZSBUYXNrIGFuZCBQcm9qZWN0IGNsYXNzZXNcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9zZWNvbmVkXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vc2Vjb25lZFwiO1xuXG4vL2ltcG9ydCBkYXRhLWZuc1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBmciB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcblxuLy9hZGRpbmcgdGhlIGljb25JbWFnZSB0byB0aGUgdGl0dGxlXG5jb25zdCBmYXZpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuZmF2aWNvbkxpbmsucmVsID0gXCJpY29uXCI7XG5mYXZpY29uTGluay5ocmVmID0gXCIuL2ltYWdlcy90YXNrLnBuZ1wiO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uTGluayk7XG5cbi8vY3JlYXRpbmcgdGhlIGhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuaGVhZGVyLmlubmVyVGV4dCA9IGBUby1Eby1MaXN0YDtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcik7XG5cbi8vY3JlYXRlIGEgZ3JpZENvbnRhaW5lclxuY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkQ29udGFpbmVyXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoZ3JpZENvbnRhaW5lcik7XG5cbi8vY3JlYXRpbmcgdGhlIGFzaWRlIGNvbnRlbnRcbmNvbnN0IGFzaWRlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbmFzaWRlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic2lkZUJhclwiKTtcbmdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXNpZGVDb250ZW50KTtcblxuLy9jcmVhdGluZyB0aGUgbWFpbiBjb250ZW50XG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW4uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRTZWN0aW9uXCIpO1xuLy9JIHdhbnQgdGhlIGJhY2tncm91bmQgb2YgYSBjb250YWluZXIgdG8gYmUgI2ZmZjhkY1xuY29uc3QgY29udGFpbmVyRm9yTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXJGb3JNYWluLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJGb3JNYWluXCIpO1xuY29udGFpbmVyRm9yTWFpbi5pbm5lckhUTUwgPSBgV2VsY29tZSwgPGJyPiBcbmNsaWNrIEluYm94IHRvIGFkZCBhIHRhc2sgPGltZyBzcmM9XCIuL2ltYWdlcy90by1kby1saXN0LnBuZ1wiIGFsdD1cIlwiIC8+IDxicj4gXG4gYDtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyRm9yTWFpbik7XG5ncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4vL2NyZWF0aW5nIHRoZSBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5mb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuLy8gY3JlYXRlIGEgc3BhbiBlbGVtZW50IHRvIHdyYXAgdGhlIHRleHRcbmNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbmZvb3RlclRleHQuaW5uZXJUZXh0ID0gYENvcHlyaWdodCDCqSAyMDIzIFlhcmUteWFyZWA7XG5cbmNvbnN0IGZvb3RlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmZvb3RlckltYWdlLnNyYyA9IFwiLi9pbWFnZXMvZ2l0aHViLWxvZ28ucG5nXCI7XG5mb290ZXJJbWFnZS5hbHQgPSBcImdpdGh1YiBsb2dvXCI7XG5mb290ZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ2l0SHViTG9nb1wiKTtcblxuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckltYWdlKTtcblxuZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vKiB3b3JrIG9uIHRoZSBhc2lkZSBjb250ZW50czogKFRoaW5ncyBUbyBkby0+IE5vdyhBU0FQKSwgVG9kYXksIFRvbW1vcnJvdywgVGhpcyB3ZWVrLCBUaGlzIG1vbnRoKSwgKFByb2plY3RzLT4uLi4pICAqL1xuXG4vL2NvbnRhaW5lciBmb3IgdGhpbmdzVG9EbyAocGFyZW50IGRpdilcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbmFzaWRlQ29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4vL1RoaW5nc1RvZG9cbmNvbnN0IHRoaW5nc1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGhpbmdzVG9Eby5jbGFzc0xpc3QuYWRkKFwidGhpbmdzVG9Eb1wiKTtcbi8vY3JlYXRpbmcgaW1hZ2UgZm9yIFRoaW5ncyB0byBEbyAtLT4gYFwiaW1hZ2VcIiBUaGluZ3MgdG8gRG8hYFxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9hbGFybS5wbmdcIjtcbmltYWdlLmFsdCA9IFwiZmlyZUFsYXJtIGxvZ29cIjtcbmltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbnRoaW5nc1RvRG8uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuLy9jcmVhdGluZyB0ZXh0IG5vZGUgZm9yIFwiVGhpbmdzIHRvIERvIVwiXG5jb25zdCB0aGluZ3NUb0RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUaGluZ3MgdG8gRG8hYCk7XG50aGluZ3NUb0RvLmFwcGVuZENoaWxkKHRoaW5nc1RvRG9UZXh0KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGluZ3NUb0RvKTtcblxuLy8gTm93XG5jb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5pbmJveC5jbGFzc0xpc3QuYWRkKFwiaW5ib3hcIik7XG4vL2NyZWF0ZSBhbiBpbWFnZSBmb3Igbm93XG5jb25zdCBpbmJveEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmluYm94SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9lbWFpbC5wbmdcIjtcbmluYm94SW1hZ2UuYWx0ID0gXCJpbmJveEltYWdlXCI7XG5pbmJveEltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbmJveEltYWdlXCIpO1xuaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hJbWFnZSk7XG4vL2NyZWF0aW5nIHRleHQgbm9kZSBmb3IgXCJEdWUgTm93IVwiXG5jb25zdCBpbmJveE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgSW5ib3hgKTtcbmluYm94LmFwcGVuZENoaWxkKGluYm94TWVzc2FnZSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4vKiAvLyBUb2RheVxuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudG9kYXkuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuLy9pbWFnZSBmb3IgdG9kYXkgYnV0dG9uXG5jb25zdCB0b2RheUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnRvZGF5SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9jaW5lbWEucG5nIFwiO1xudG9kYXlJbWFnZS5hbHQgPSBcIiB0b2RheSBQbmdcIjtcbnRvZGF5SW1hZ2UuY2xhc3NMaXN0LmFkZChcInRvZGF5SW1hZ2VcIik7XG50b2RheS5hcHBlbmRDaGlsZCh0b2RheUltYWdlKTtcbi8vY3JlYXRlIGEgdGV4dE5vZGUgZm9yIHRvZGF5XG5jb25zdCBkdWVUb2RheSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBEdWUgVG9kYXkhYCk7XG50b2RheS5hcHBlbmRDaGlsZChkdWVUb2RheSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXkpOyAqL1xuXG4vKiAvLyBUb21vcnJvd1xuY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudG9tb3Jyb3cuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93XCIpO1xuLy9jcmVhdGUgdGhlIHRvbW9ycm93IGltYWdlXG5jb25zdCB0b21vcnJvd0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnRvbW9ycm93SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy90b21vcnJvdy5wbmcgXCI7XG50b21vcnJvd0ltYWdlLmFsdCA9IFwiIHRvbW1vcm93IFBuZ1wiO1xudG9tb3Jyb3dJbWFnZS5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dJbWFnZVwiKTtcbnRvbW9ycm93LmFwcGVuZENoaWxkKHRvbW9ycm93SW1hZ2UpO1xuLy9jcmVhdGUgYSB0ZXh0Tm9kZSBmb3IgdG9tcnJvd1xuY29uc3QgZHVlVG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgRHVlIFRvbW9ycm93IWApO1xudG9tb3Jyb3cuYXBwZW5kQ2hpbGQoZHVlVG9tb3Jyb3cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvbW9ycm93KTsgKi9cblxuLyogLy8gVGhpcyBXZWVrXG5jb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbndlZWsuY2xhc3NMaXN0LmFkZChcIndlZWtcIik7XG4vL2NyZWF0ZSB0aGUgaW1hZ2UgZm9yIHdlZWtcbmNvbnN0IHdlZWtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG53ZWVrSW1hZ2UuY2xhc3NMaXN0LmFkZChcIndlZWtJbWFnZVwiKTtcbndlZWtJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3dlZWsucG5nIFwiO1xud2Vla0ltYWdlLmFsdCA9IFwiIHdlZWsgUG5nXCI7XG53ZWVrLmFwcGVuZENoaWxkKHdlZWtJbWFnZSk7XG4vL2NyZWF0ZSBhIHRleHROb2RlIGZvciBkdWUgdGhpcyB3ZWVrXG5jb25zdCBkdWVUaGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRHVlIFRoaXMgV2VlayFcIik7XG53ZWVrLmFwcGVuZENoaWxkKGR1ZVRoaXNXZWVrKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrKTsgKi9cblxuLyogLy8gVGhpcyBNb250aFxuY29uc3QgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubW9udGguY2xhc3NMaXN0LmFkZChcIm1vbnRoXCIpO1xuLy9jcmVhdGUgaW1hZ2UgZm9yIG1vbnRoXG5jb25zdCBtb250aEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbm1vbnRoSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1vbnRoSW1hZ2VcIik7XG5tb250aEltYWdlLnNyYyA9IFwiLi9pbWFnZXMvbW9udGgucG5nIFwiO1xubW9udGhJbWFnZS5hbHQgPSBcIiBtb250aCBQbmdcIjtcbm1vbnRoLmFwcGVuZENoaWxkKG1vbnRoSW1hZ2UpO1xuLy9jcmVhdGUgYSB0ZXh0IG5vZGUgZm9yIGR1ZSBpbiBhIG1vbnRoXG5jb25zdCBkdWVJbkFNb250aCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRHVlIEluIGEgTW9udGhcIik7XG5tb250aC5hcHBlbmRDaGlsZChkdWVJbkFNb250aCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobW9udGgpO1xuICovXG4vKiAvL3Byb2plY3RzXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnByb2plY3RJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3QtbWFuYWdlbWVudC5wbmdcIjtcbnByb2plY3RJbWFnZS5hbHQgPSBcInByb2plY3QgSW1hZ2VcIjtcbnByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEltYWdlKTtcbi8vdGV4dE5vZGUgZm9yIHByb2plY3RzXG5jb25zdCBwcm9qZWN0c1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlByb2plY3RzXCIpO1xucHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0c1RleHQpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpOyAqL1xuLyogZXhwb3J0IHRoZSBidXR0b24gbmFtZXM6ICovXG5cbi8qIHdoZW4gYnV0dG9ucyBhcmUgY2xpY2tlZDogV2hhdCB0aGUgY29udGFpbmVyRm9yTWFpbiB3aWxsIGxvb2sgbGlrZSovXG4vL2luYm94IGJ1dHRvbiBjbGlja2VkXG5pbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb250YWluZXJGb3JNYWluLmlubmVySFRNTCA9IGAgICAgXG4gIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlwiIGlkID0gXCJ0YXNrXCI+XG4gIDxmaWVsZHNldD5cbiAgICA8bGFiZWwgZm9yPVwiYWRkaW5nVGFza1wiIG5hbWU9XCJhZGRpbmdUYXNrXCIgY2xhc3M9XCJhZGRpbmdUYXNrXCJcbiAgICAgID48YnV0dG9uIGNsYXNzPVwiYWRkaW5nVGFza0J1dHRvblwiPkFkZCBUYXNrPC9idXR0b24+PC9sYWJlbFxuICAgID5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tJbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBOYW1lXCIgLz5cbiAgPC9maWVsZHNldD5cbjwvZm9ybT5gO1xufSk7XG5cbi8qIC8vcHJvamVjdHMgYnV0dG9uXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRhaW5lckZvck1haW4uaW5uZXJIVE1MID0gYCAgXG4gICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiXCIgaWQgPSBcInByb2plY3RcIj5cbiAgICA8ZmllbGRzZXQgY2xhc3MgPSBcImZpZWxkU2V0XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiYWRkaW5nUHJvamVjdFwiIG5hbWU9XCJhZGRpbmdQcm9qZWN0XCIgY2xhc3M9XCJhZGRpbmdQcm9qZWN0XCJcbiAgICAgICAgPjxidXR0b24gY2xhc3M9XCJhZGRpbmdQcm9qZWN0XCI+QWRkIFByb2plY3Q8L2J1dHRvbj48L2xhYmVsXG4gICAgICA+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3RJbnB1dFwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCIgLz5cbiAgICA8L2ZpZWxkc2V0PlxuXG4gIDwvZm9ybT5gO1xufSk7ICovXG5cbi8qIGNyZWF0aW5nIGEgbmV3IGluc3RhbmNlIGFuZCBzdG9yaW5nIGl0IGluIGxvY2FsIHN0b3JhZ2UgZXZlcnkgdGltZSBzb21lb25lIGNsaWNrcyB0aGUgYWRkIHByb2plY3QvYWRkIHRhc2sgYnV0dG9uICovXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy9UYXNrXG4gIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwidGFza1wiKSB7XG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrSW5wdXRcIik7XG4gICAgY29uc3QgdGFza05hbWUgPSB0YXNrSW5wdXQudmFsdWU7XG5cbiAgICAvLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFRhc2sgY2xhc3Mgd2l0aCB0aGUgaW5wdXQgdmFsdWUgYXMgYW4gYXJndW1lbnRcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza05hbWUpO1xuXG4gICAgLy8gU3RvcmUgdGhlIHRhc2sncyBuYW1lIGluIHRoZSBsb2NhbCBzdG9yYWdlIHVzaW5nIHRoZSBzdG9yaW5nVmFsdWUoKSBtZXRob2RcbiAgICBuZXdUYXNrLnN0b3JpbmdWYWx1ZSgpO1xuXG4gICAgLy9jcmVhdGUgYSBkaXYgdG8gaG9sZCBldmVyeXRoaW5nIGFmdGVyIHRhc2sgaXMgYWRkZWRcbiAgICBjb25zdCB0YXNrUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUGFyZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUGFyZW50RGl2XCIpO1xuXG4gICAgLy9jcmVhdGUgYSBkaXYgdG8gaG9sZCBpbWFnZSBhbmQgdGFzayBhZGRlZFxuICAgIGNvbnN0IGltYWdlQW5kVGFza0FkZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZUFuZFRhc2tBZGRlZC5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VBbmRUYXNrQWRkZWRcIik7XG5cbiAgICAvL2NyZWF0ZSBkaXYgZm9yIHRhc2tDYWxhbmRlckljb24gUGFyZW50XG4gICAgY29uc3QgdGFza0NhbGFuZGVySWNvblBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy9jcmVhdGUgZGl2IGZvciBjYWxhbmRlciBJY29uXG4gICAgY29uc3QgdGFza0NhbGFuZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrQ2FsYW5kZXJJY29uLnR5cGUgPSBcImRhdGVcIjtcbiAgICB0YXNrQ2FsYW5kZXJJY29uLmlkID0gXCJ0YXNrQ2FsYW5kZXJJY29uXCI7XG4gICAgLy9hcHBlbmQgdGhlIHRhc2tDYWxhbmRlckljb24gdG8gdGFza0NhbGFuZGVySWNvblBhcmVudFxuICAgIHRhc2tDYWxhbmRlckljb25QYXJlbnQuYXBwZW5kQ2hpbGQodGFza0NhbGFuZGVySWNvbik7XG5cbiAgICAvL2FkZCB0aGUgdGFzayBhZGRlZCB0byB0aGUgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgc28gdGhhdCB0aGUgdXNlciBjYW4gc2VlIHRoZSBwcm9qZWN0XG4gICAgLy9jcmVhdGUgdGFza0ltYWdlXG4gICAgY29uc3QgdGFza0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0YXNrSW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9hcHByb3ZlZC5wbmdcIjtcbiAgICB0YXNrSW1hZ2UuYWx0ID0gXCJ0YXNrIEltYWdlXCI7XG5cbiAgICBjb25zdCB0YXNrQWRkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NvbnRhaW5lci9kaXNwbGF5IGZvciB0aGUgbmV3bHkgYWRkZWQgcHJvamVjdFxuICAgIHRhc2tBZGRlZC5jbGFzc0xpc3QuYWRkKFwidGFza0FkZGVkXCIpO1xuICAgIGxldCBzdG9yZWRUYXNrVmFsdWUgPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgdGFza0FkZGVkLmlubmVyVGV4dCA9IHN0b3JlZFRhc2tWYWx1ZTtcblxuICAgIC8vYXBwZW5kIHRoZSBpbWFnZSBhbmQgdGhlbiB0aGUgdGFzayBhZGRlZCBpbnRvIGltYWdlQW5kVGFza0FkZGVkIGRpdlxuICAgIGltYWdlQW5kVGFza0FkZGVkLmFwcGVuZENoaWxkKHRhc2tJbWFnZSk7IC8vaW1hZ2VcbiAgICBpbWFnZUFuZFRhc2tBZGRlZC5hcHBlbmRDaGlsZCh0YXNrQWRkZWQpOyAvL3Rhc2tcblxuICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQoaW1hZ2VBbmRUYXNrQWRkZWQpOyAvL2ltYWdlIGFuZCB0YXNrXG4gICAgdGFza1BhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrQ2FsYW5kZXJJY29uUGFyZW50KTsgLy9kYXRlIHBpY2tlci9jYWxhbmRlclxuICAgIGNvbnRhaW5lckZvck1haW4uYXBwZW5kQ2hpbGQodGFza1BhcmVudERpdik7XG4gIH1cblxuICAvKiAgRGF0ZSBhbmQgaW1hZ2UgbG9naWNcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYnV0dG9uc1xuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tDYWxhbmRlckljb24udmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgaWYgKHRhc2tEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKSkge1xuICAgICAgICBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCA9IGAke3Rhc2tBZGRlZC5pbm5lclRleHR9IGlzIGR1ZSB0b2RheWA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0b21vcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrQ2FsYW5kZXJJY29uLnZhbHVlKTtcbiAgICAgIGNvbnN0IHRvbW9ycm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICB0b21vcnJvd0RhdGUuc2V0RGF0ZSh0b21vcnJvd0RhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICBpZiAodGFza0RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCkgPT09IHRvbW9ycm93RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKSkge1xuICAgICAgICBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCA9IGAke3Rhc2tBZGRlZC5pbm5lclRleHR9IGlzIGR1ZSB0b21vcnJvd2A7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3ZWVrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tDYWxhbmRlckljb24udmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3Qgd2Vla0Zyb21Ob3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgd2Vla0Zyb21Ob3cuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyA3KTtcbiAgICAgIGlmICh0YXNrRGF0ZSA+PSBjdXJyZW50RGF0ZSAmJiB0YXNrRGF0ZSA8PSB3ZWVrRnJvbU5vdykge1xuICAgICAgICBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCA9IGAke3Rhc2tBZGRlZC5pbm5lclRleHR9IGlzIGR1ZSB0aGlzIHdlZWtgO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9udGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFza0NhbGFuZGVySWNvbi52YWx1ZSk7XG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBtb250aEZyb21Ob3cgPSBuZXcgRGF0ZShcbiAgICAgICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgIGN1cnJlbnREYXRlLmdldERhdGUoKVxuICAgICAgKTtcbiAgICAgIGlmICh0YXNrRGF0ZSA+PSBjdXJyZW50RGF0ZSAmJiB0YXNrRGF0ZSA8IG1vbnRoRnJvbU5vdykge1xuICAgICAgICBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCA9IGAke3Rhc2tBZGRlZC5pbm5lclRleHR9IGlzIGR1ZSBhIG1vbnRoIGZyb20gbm93YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSAqL1xuXG4gIC8qXG4vL1Byb2plY3RcbmlmIChldmVudC50YXJnZXQuaWQgPT09IFwicHJvamVjdFwiKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdElucHV0XCIpOyAvL25hbWUgb2YgaW5wdXRcbiAgY29uc3QgbmFtZU9mUHJvamVjdCA9IHByb2plY3RJbnB1dC52YWx1ZTtcblxuICAvL2NyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgUHJvamVjdCBjbGFzcyBhbmQgc3RvcmUgaXQgaW4gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZU9mUHJvamVjdCk7XG4gIG5ld1Byb2plY3Quc3RvcmluZ1ZhbHVlKCk7XG5cbiAgLy9jcmVhdGUgYSBkaXYgdG8gaG9sZCBldmVyeXRoaW5nIHdoZW4gdGhlIHByb2plY3QgaXMgYWRkZWRcbiAgY29uc3QgcHJvamVjdFBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RQYXJlbnREaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RQYXJlbnREaXZcIik7XG5cbiAgLy9jcmVhdGUgYSBkaXYgdG8gaG9sZCBpbWFnZSBhbmQgcHJvamVjdCBhZGRlZFxuICBjb25zdCBpbWFnZUFuZFByb2plY3RBZGRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltYWdlQW5kUHJvamVjdEFkZGVkLmNsYXNzTGlzdC5hZGQoXCJpbWFnZUFuZFByb2plY3RBZGRlZFwiKTtcblxuICAvL2NyZWF0ZSBkaXYgZm9yIHByb2plY3RDYWxhbmRlckljb24gUGFyZW50XG4gIGNvbnN0IHByb2plY3RDYWxhbmRlckljb25QYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvL2NyZWF0ZSBkaXYgZm9yIHByb2plY3RDYWxhbmRlckljb25cbiAgY29uc3QgcHJvamVjdENhbGFuZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvamVjdENhbGFuZGVySWNvbi50eXBlID0gXCJkYXRlXCI7XG4gIC8vYXBwZW5kIHRoZSBwcm9qZWN0Q2FsYW5kZXJJY29uIHRvIHByb2plY3RDYWxhbmRlckljb25QYXJlbnRcbiAgcHJvamVjdENhbGFuZGVySWNvblBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FsYW5kZXJJY29uKTtcblxuICAvL2FkZCB0aGUgUHJvamVjdCBhZGRlZCB0byB0aGUgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgc28gdGhhdCB0aGUgdXNlciBjYW4gc2VlIHRoZSBwcm9qZWN0XG4gIC8vY3JlYXRlIFByb2plY3RJbWFnZVxuICBjb25zdCBwcm9qZWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBwcm9qZWN0SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9hcHByb3ZlZC5wbmdcIjtcbiAgcHJvamVjdEltYWdlLmFsdCA9IFwicHJvamVjdCBJbWFnZVwiO1xuXG4gIC8vY3JlYXRlXG4gIC8vYWRkIHRoZSBwcm9qZWN0IGFkZGVkIHRvIHRoZSBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBzZWUgdGhlIHByb2plY3RcbiAgY29uc3QgcHJvamVjdEFkZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jb250YWluZXIvZGlzcGxheSBmb3IgdGhlIG5ld2x5IGFkZGVkIHByb2plY3RcbiAgcHJvamVjdEFkZGVkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QWRkZWRcIik7XG4gIGxldCBzdG9yZWRWYWx1ZSA9IHByb2plY3RJbnB1dC52YWx1ZTtcbiAgcHJvamVjdEFkZGVkLmlubmVyVGV4dCA9IHN0b3JlZFZhbHVlO1xuXG4gIC8vYXBwZW5kIHRoZSBpbWFnZSBhbmQgdGhlbiB0aGUgdGFzayBhZGRlZCBpbnRvIGltYWdlQW5kVGFza0FkZGVkIGRpdlxuICBpbWFnZUFuZFByb2plY3RBZGRlZC5hcHBlbmRDaGlsZChwcm9qZWN0SW1hZ2UpOyAvL2ltYWdlXG4gIGltYWdlQW5kUHJvamVjdEFkZGVkLmFwcGVuZENoaWxkKHByb2plY3RBZGRlZCk7IC8vcHJvamVjdFxuXG4gIHByb2plY3RQYXJlbnREaXYuYXBwZW5kQ2hpbGQoaW1hZ2VBbmRQcm9qZWN0QWRkZWQpOyAvL2ltYWdlIGFuZCBwcm9qZWN0XG4gIHByb2plY3RQYXJlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdENhbGFuZGVySWNvblBhcmVudCk7IC8vZGF0ZSBwaWNrZXIvY2FsYW5kZXJcbiAgY29udGFpbmVyRm9yTWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0UGFyZW50RGl2KTtcblxuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICBEYXRlIGFuZCBpbWFnZSBsb2dpYyBcbiAgIEV2ZW50IGxpc3RlbmVyIGZvciBidXR0b25zIFxuICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgaWYodGhlIHRhc2tDYWxhbmRlckljb24udmFsdWUgaXMgY3VycmVudERheSl7XG4gICAgIGNvbnRhaW5lckZvck1haW4uaW5uZXJUZXh0ID0gYCR7dGFza0FkZGVkfSBpcyBkdWUgdG9kYXlgO1xuICAgICB9XG4gICB9KTtcbiAgIHRvbW9ycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgIGlmKHRoZSB0YXNrQ2FsYW5kZXJJY29uLnZhbHVlIGlzIHRvbW9ycm93KXtcbiAgICAgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgPSBgJHt0YXNrQWRkZWR9IGlzIGR1ZSB0b21vcnJvd2A7XG4gICAgIH1cbiAgIH0pO1xuICAgd2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICBpZih0aGUgdGFza0NhbGFuZGVySWNvbi52YWx1ZSBpcyB0aGlzIHdlZWspe1xuICAgICBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCA9IGAke3Rhc2tBZGRlZH0gaXMgZHVlIHRoaXMgd2Vla2A7XG4gICAgIH1cbiAgIH0pO1xuICAgbW9udGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgaWYodGhlIHRhc2tDYWxhbmRlckljb24udmFsdWUgaXMgYSBtb250aCBhd2F5IGZyb20gY3VycmVudGRheSl7XG4gICAgIGNvbnRhaW5lckZvck1haW4uaW5uZXJUZXh0ID0gYCR7dGFza0FkZGVkfSBpcyBkdWUgYSBtb250aCBmcm9tIG5vd2A7XG4gICAgIH1cbiAgIH0pO1xufVxuKi9cblxuICAvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVG8tRG8tTGlzdDpcblxuICAgICAgICAtLT4gRmlndXJlIG91dCBob3cgdG8gY2xpY2sgb24gaW1hZ2VzIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZW0uLiB1c2luZyB0aGUgaW1hZ2UgY2xpY2tcbiAgICAgICAgICAgIGFzIGEgd2F5IHRvIGNvbXBsZXRlIHRoZSB0YXNrLCBhbHNvIGFkZCBob3ZlciBlZmZlY3Qgb24gaXRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgLS0+IG1ha2Ugc3VyZSB0aGUgdXNlciBjYW4ndCBqdXN0IHN1Ym1pdC9hZGQgYW4gZW1wdHkgaW5wdXQuLi4gYWxzbyBkZXBlbmRpbmcgb24gaG93IHlvdSBmZWVsLCBcbiAgICAgICAgICAgIGNoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBwdXQgYSBkYXRlIG9yIG5vdCwgaWYgbm90IGFkZCBhbiBlcnJvciBvciBub3QsIHVwIHRvIHlvdS5cblxuICAgICAgICAtLT4gbWFrZSBzdXJlIHRoZSB3ZWIgYXBwIGlzIHJlc3BvbnNpdmUgb24gcGhvbmVzLCBhbmQgZGV2aWNlcyBncmVhdGVyIHRoZSAxOTIweDEwODBcbiAgICAgICAgICAgIC0tPiBzbyBsaWtlIHVzZSBvZiBkcm9wLWRvd24gbWVudXMgd2hlbiBvbiBtb2JpbGUgXG4qL1xufSk7XG4iXSwibmFtZXMiOlsiVGFzayIsIm5hbWVPZlRhc2siLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInN0b3JpbmdWYWx1ZSIsImV4aXN0aW5nVGFza3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwdXNoaW5nVmFsdWUiLCJQcm9qZWN0IiwibmFtZU9mUHJvamVjdCIsImFkZERheXMiLCJpc1RvZGF5IiwiaXNUb21vcnJvdyIsImlzVGhpc1dlZWsiLCJpc1dpdGhpbkludGVydmFsIiwiYWRkTW9udGhzIiwiY29tcGFyZUFzYyIsImZvcm1hdCIsImZyIiwiZmF2aWNvbkxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZWwiLCJocmVmIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiaGVhZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiYm9keSIsImFwcGVuZCIsImdyaWRDb250YWluZXIiLCJhc2lkZUNvbnRlbnQiLCJtYWluIiwiY29udGFpbmVyRm9yTWFpbiIsImlubmVySFRNTCIsImZvb3RlciIsImZvb3RlclRleHQiLCJmb290ZXJJbWFnZSIsInNyYyIsImFsdCIsImNvbnRhaW5lciIsInRoaW5nc1RvRG8iLCJpbWFnZSIsInRoaW5nc1RvRG9UZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJpbmJveCIsImluYm94SW1hZ2UiLCJpbmJveE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImlkIiwidGFza0lucHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXNrTmFtZSIsIm5ld1Rhc2siLCJ0YXNrUGFyZW50RGl2IiwiaW1hZ2VBbmRUYXNrQWRkZWQiLCJ0YXNrQ2FsYW5kZXJJY29uUGFyZW50IiwidGFza0NhbGFuZGVySWNvbiIsInR5cGUiLCJ0YXNrSW1hZ2UiLCJ0YXNrQWRkZWQiLCJzdG9yZWRUYXNrVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9