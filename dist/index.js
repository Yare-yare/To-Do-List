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

.taskAdded{
  border-color: 1px var(--background-color) ;
}
`, "",{"version":3,"sources":["webpack://./dist/files/index.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,eAAe;EACjB;;EAEA,kDAAkD;EAClD;IACE,mBAAmB;IACnB,4CAA+C;EACjD;;AAEF;IACI,yCAAyC;IACzC,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,aAAa;IACb,iCAAiC;IACjC,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,gFAAgF;IAChF,kBAAkB;AACtB;;AAEA,6CAA6C;AAC7C;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;AAEF,yCAAyC;AACzC;IACI,aAAa;IACb,gCAAgC,EAAE,0BAA0B;IAC5D,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,WAAW;EACb;;EAEA;IACE,kBAAkB;EACpB;;EAEA,gCAAgC;EAChC;IACE,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,6BAA6B;EAC/B;;EAEA;IACE,yCAAyC;IACzC,sCAAsC;EACxC;;EAEA;IACE,WAAW,wBAAwB,EAAE;IACrC,MAAM,2BAA2B,EAAE,EAAE,wDAAwD;EAC/F;;EAEA,iCAAiC;EACjC;GACC,WAAW;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,oCAAoC;EACtC;;EAEA;IACE,yBAAyB;IACzB,oCAAoC;AACxC;;EAEE,mCAAmC;EACnC;IACE,yCAAyC;IACzC,aAAa;IACb,qBAAqB;EACvB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,wBAAwB;IACxB,qBAAqB;IACrB,oCAAoC;EACtC;;AAEF,4CAA4C;AAC5C;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,oCAAoC;EACpC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,oCAAoC;EACpC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":[":root {\n    --background-color: #FFF8DC;\n    --color:#000000;\n  }\n\n  /* changing the font to Caveat by Impalleri Type */\n  @font-face {\n    font-family: caveat;\n    src: url(../files/Caveat-VariableFont_wght.ttf);\n  }\n\nbody{\n    background-color: var(--background-color);\n    color: var(--color);\n    margin: 0%;\n    padding: 0;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n    overflow: hidden;\n    font-weight: bold;\n    font-family: caveat, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: x-large;\n}\n\n/* making the header and footer have colors */\n.header, .footer {\n    background-color: #333;\n    color: white;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n/*making the grid-container display:grid*/\n.gridContainer{\n    display: grid;\n    grid-template-columns: 200px 1fr; /* Sidebar, Main Content */\n    gap:20px;\n}\n\n.sideBar {\n    display: flex;\n    align-content: center;\n    text-align: center;\n    box-sizing: border-box;\n    padding: 10px;\n    flex-direction: column;\n    gap: 30px;\n    height: 80%;\n  }\n\n  .contentSection {\n    background-color: #C5C5A3;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  .footer{\n    position: absolute;\n    bottom: 0%;\n    width: 100%;\n  }\n\n  .footer span {\n    margin-right: 10px;\n  }\n\n  /* working on the asideContent */\n  .container{\n    font-family: caveat;\n    background-color: #C5C5A3;\n    border-radius: 1rem;\n    padding: 1rem;\n  }\n\n  button{\n    font-family: caveat;\n    font-size: x-large;\n    padding: 5px;\n    border-radius: .5rem;\n    box-shadow: #333  2px 3px 1px;\n  }\n\n  button:hover{\n    background-color: var(--background-color);\n    animation: bounceAnimation 2s infinite;\n  }\n\n  @keyframes bounceAnimation {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-5px); } /* Adjust the -20px value to control the bounce height */\n  }\n\n  /* editing the images of aside  */\n  .image{\n   width: 35px;\n  }\n\n  img{\n    width:50px;\n  }\n\n  .inbox {\n    background-color: #A3D9C5;\n    box-shadow: #FFC5E3 2px 3px 20px 3px; \n  }\n\n  .projects {\n    background-color: #A3C5D9;\n    box-shadow: #FFC5E3 2px 3px 20px 3px;\n}\n\n  /* working on the Content section */\n  .containerForMain{\n    background-color: var(--background-color);\n    padding: 1rem;\n    border-radius: 0.5rem;\n  }\n\n  .gitHubLogo{\n    width: 20px;\n  }\n\n  fieldset{\n    background-color:#C5C5A3;\n    border-radius: 0.5rem;\n    box-shadow: rgb(0, 0, 0) 3px 3px 3px;\n  }\n\n/* working on the tasks/projects displayed */\n.projectParentDiv{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  margin-top: 10px;\n  background-color:#C5C5A3;\n  border-radius: 0.5rem;\n  box-shadow: rgb(0, 0, 0) 3px 3px 3px;\n  gap: 10px;\n}\n\n.taskParentDiv{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  margin-top: 10px;\n  background-color:#C5C5A3;\n  border-radius: 0.5rem;\n  box-shadow: rgb(0, 0, 0) 3px 3px 3px;\n  gap: 10px;\n}\n\n.imageAndTaskAdded, .imageAndProjectAdded{\n  display: flex;\n  align-items: center;\n}\n\n.taskAdded{\n  border-color: 1px var(--background-color) ;\n}\n"],"sourceRoot":""}]);
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
    taskImage.addEventListener("click", function () {
      taskParentDiv.remove();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsd0JBQXdCLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssc0JBQXNCLG1DQUFtQyxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksaUNBQWlDLGtDQUFrQyxzQkFBc0Is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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQVlFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlY29uZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL2Rpc3QvZmlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vZGlzdC9maWxlcy9pbmRleC5jc3M/ZGFmYiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0aGlzIGlzIHdoZXJlIGFsbCBvZiB0aGUgY2xhc3NlcyB3aWxsIGJlOlxuICAgICAtLT5UYXNrIGNsYXNzIFxuICAgICAtLT5Qcm9qZWN0IGNsYXNzXG4qL1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWVPZlRhc2spIHtcbiAgICB0aGlzLm5hbWVPZlRhc2sgPSBuYW1lT2ZUYXNrO1xuICB9XG5cbiAgLyogZnVuY3Rpb24gdG8gc3RvcmUgdGhlIHZhbHVlL25hbWVPZnRhc2sgaW4gYSBsb2NhbCBzdG9yYWdlICovXG4gIHN0b3JpbmdWYWx1ZSgpIHtcbiAgICAvLyBHZXQgdGhlIGV4aXN0aW5nIHRhc2tzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgKGlmIGFueSlcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcblxuICAgIC8vIEFkZGluZyB0aGUgbmV3IHRhc2sgbmFtZSB0byB0aGUgZXhpc3RpbmcgdGFza3MgYXJyYXlcbiAgICBleGlzdGluZ1Rhc2tzLnB1c2godGhpcy5uYW1lT2ZUYXNrKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdUYXNrcykpO1xuICB9XG5cbiAgcHVzaGluZ1ZhbHVlKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lT2ZQcm9qZWN0KSB7XG4gICAgdGhpcy5uYW1lT2ZQcm9qZWN0ID0gbmFtZU9mUHJvamVjdDtcbiAgfVxuXG4gIHN0b3JpbmdWYWx1ZSgpIHtcbiAgICAvLyBHZXQgdGhlIGV4aXN0aW5nIHRhc2tzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgKGlmIGFueSlcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuICAgIC8vIEFkZGluZyB0aGUgbmV3IHRhc2sgbmFtZSB0byB0aGUgZXhpc3RpbmcgdGFza3MgYXJyYXlcbiAgICBleGlzdGluZ1Rhc2tzLnB1c2godGhpcy5uYW1lT2ZQcm9qZWN0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdUYXNrcykpO1xuICB9XG5cbiAgcHVzaGluZ1ZhbHVlKCkge31cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9maWxlcy9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOERDO1xuICAgIC0tY29sb3I6IzAwMDAwMDtcbiAgfVxuXG4gIC8qIGNoYW5naW5nIHRoZSBmb250IHRvIENhdmVhdCBieSBJbXBhbGxlcmkgVHlwZSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogY2F2ZWF0O1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB9XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogY2F2ZWF0LCAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi8qIG1ha2luZyB0aGUgaGVhZGVyIGFuZCBmb290ZXIgaGF2ZSBjb2xvcnMgKi9cbi5oZWFkZXIsIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbi8qbWFraW5nIHRoZSBncmlkLWNvbnRhaW5lciBkaXNwbGF5OmdyaWQqL1xuLmdyaWRDb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjsgLyogU2lkZWJhciwgTWFpbiBDb250ZW50ICovXG4gICAgZ2FwOjIwcHg7XG59XG5cbi5zaWRlQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4O1xuICAgIGhlaWdodDogODAlO1xuICB9XG5cbiAgLmNvbnRlbnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUEzO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5mb290ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9vdGVyIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC8qIHdvcmtpbmcgb24gdGhlIGFzaWRlQ29udGVudCAqL1xuICAuY29udGFpbmVye1xuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzVBMztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICBidXR0b257XG4gICAgZm9udC1mYW1pbHk6IGNhdmVhdDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGJveC1zaGFkb3c6ICMzMzMgIDJweCAzcHggMXB4O1xuICB9XG5cbiAgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGFuaW1hdGlvbjogYm91bmNlQW5pbWF0aW9uIDJzIGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBib3VuY2VBbmltYXRpb24ge1xuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9IC8qIEFkanVzdCB0aGUgLTIwcHggdmFsdWUgdG8gY29udHJvbCB0aGUgYm91bmNlIGhlaWdodCAqL1xuICB9XG5cbiAgLyogZWRpdGluZyB0aGUgaW1hZ2VzIG9mIGFzaWRlICAqL1xuICAuaW1hZ2V7XG4gICB3aWR0aDogMzVweDtcbiAgfVxuXG4gIGltZ3tcbiAgICB3aWR0aDo1MHB4O1xuICB9XG5cbiAgLmluYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEOUM1O1xuICAgIGJveC1zaGFkb3c6ICNGRkM1RTMgMnB4IDNweCAyMHB4IDNweDsgXG4gIH1cblxuICAucHJvamVjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0M1RDk7XG4gICAgYm94LXNoYWRvdzogI0ZGQzVFMyAycHggM3B4IDIwcHggM3B4O1xufVxuXG4gIC8qIHdvcmtpbmcgb24gdGhlIENvbnRlbnQgc2VjdGlvbiAqL1xuICAuY29udGFpbmVyRm9yTWFpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgfVxuXG4gIC5naXRIdWJMb2dve1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG5cbiAgZmllbGRzZXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzVDNUEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgM3B4IDNweCAzcHg7XG4gIH1cblxuLyogd29ya2luZyBvbiB0aGUgdGFza3MvcHJvamVjdHMgZGlzcGxheWVkICovXG4ucHJvamVjdFBhcmVudERpdntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6I0M1QzVBMztcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgM3B4IDNweCAzcHg7XG4gIGdhcDogMTBweDtcbn1cblxuLnRhc2tQYXJlbnREaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNDNUM1QTM7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDNweCAzcHggM3B4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbWFnZUFuZFRhc2tBZGRlZCwgLmltYWdlQW5kUHJvamVjdEFkZGVke1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFza0FkZGVke1xuICBib3JkZXItY29sb3I6IDFweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3QvZmlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7RUFDakI7O0VBRUEsa0RBQWtEO0VBQ2xEO0lBQ0UsbUJBQW1CO0lBQ25CLDRDQUErQztFQUNqRDs7QUFFRjtJQUNJLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdGQUFnRjtJQUNoRixrQkFBa0I7QUFDdEI7O0FBRUEsNkNBQTZDO0FBQzdDO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0FBRUYseUNBQXlDO0FBQ3pDO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQyxFQUFFLDBCQUEwQjtJQUM1RCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBLGdDQUFnQztFQUNoQztJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSx5Q0FBeUM7SUFDekMsc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsV0FBVyx3QkFBd0IsRUFBRTtJQUNyQyxNQUFNLDJCQUEyQixFQUFFLEVBQUUsd0RBQXdEO0VBQy9GOztFQUVBLGlDQUFpQztFQUNqQztHQUNDLFdBQVc7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztFQUVFLG1DQUFtQztFQUNuQztJQUNFLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQ0FBb0M7RUFDdEM7O0FBRUYsNENBQTRDO0FBQzVDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNGRkY4REM7XFxuICAgIC0tY29sb3I6IzAwMDAwMDtcXG4gIH1cXG5cXG4gIC8qIGNoYW5naW5nIHRoZSBmb250IHRvIENhdmVhdCBieSBJbXBhbGxlcmkgVHlwZSAqL1xcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XFxuICAgIHNyYzogdXJsKC4uL2ZpbGVzL0NhdmVhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbiAgfVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBtYXJnaW46IDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1mYW1pbHk6IGNhdmVhdCwgJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLyogbWFraW5nIHRoZSBoZWFkZXIgYW5kIGZvb3RlciBoYXZlIGNvbG9ycyAqL1xcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbi8qbWFraW5nIHRoZSBncmlkLWNvbnRhaW5lciBkaXNwbGF5OmdyaWQqL1xcbi5ncmlkQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjsgLyogU2lkZWJhciwgTWFpbiBDb250ZW50ICovXFxuICAgIGdhcDoyMHB4O1xcbn1cXG5cXG4uc2lkZUJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgfVxcblxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzVBMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmZvb3RlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mb290ZXIgc3BhbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG5cXG4gIC8qIHdvcmtpbmcgb24gdGhlIGFzaWRlQ29udGVudCAqL1xcbiAgLmNvbnRhaW5lcntcXG4gICAgZm9udC1mYW1pbHk6IGNhdmVhdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzVBMztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIGJ1dHRvbntcXG4gICAgZm9udC1mYW1pbHk6IGNhdmVhdDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAjMzMzICAycHggM3B4IDFweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlQW5pbWF0aW9uIDJzIGluZmluaXRlO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBib3VuY2VBbmltYXRpb24ge1xcbiAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH0gLyogQWRqdXN0IHRoZSAtMjBweCB2YWx1ZSB0byBjb250cm9sIHRoZSBib3VuY2UgaGVpZ2h0ICovXFxuICB9XFxuXFxuICAvKiBlZGl0aW5nIHRoZSBpbWFnZXMgb2YgYXNpZGUgICovXFxuICAuaW1hZ2V7XFxuICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuXFxuICBpbWd7XFxuICAgIHdpZHRoOjUwcHg7XFxuICB9XFxuXFxuICAuaW5ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEOUM1O1xcbiAgICBib3gtc2hhZG93OiAjRkZDNUUzIDJweCAzcHggMjBweCAzcHg7IFxcbiAgfVxcblxcbiAgLnByb2plY3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzQzVEOTtcXG4gICAgYm94LXNoYWRvdzogI0ZGQzVFMyAycHggM3B4IDIwcHggM3B4O1xcbn1cXG5cXG4gIC8qIHdvcmtpbmcgb24gdGhlIENvbnRlbnQgc2VjdGlvbiAqL1xcbiAgLmNvbnRhaW5lckZvck1haW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxuXFxuICAuZ2l0SHViTG9nb3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICB9XFxuXFxuICBmaWVsZHNldHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzVDNUEzO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSAzcHggM3B4IDNweDtcXG4gIH1cXG5cXG4vKiB3b3JraW5nIG9uIHRoZSB0YXNrcy9wcm9qZWN0cyBkaXNwbGF5ZWQgKi9cXG4ucHJvamVjdFBhcmVudERpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6I0M1QzVBMztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSAzcHggM3B4IDNweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2tQYXJlbnREaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiNDNUM1QTM7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgM3B4IDNweCAzcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbWFnZUFuZFRhc2tBZGRlZCwgLmltYWdlQW5kUHJvamVjdEFkZGVke1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQWRkZWR7XFxuICBib3JkZXItY29sb3I6IDFweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbiAgYWRkRGF5cyxcbiAgaXNUb2RheSxcbiAgaXNUb21vcnJvdyxcbiAgaXNUaGlzV2VlayxcbiAgaXNXaXRoaW5JbnRlcnZhbCxcbiAgYWRkTW9udGhzLFxufSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuLy9pbXBvcnQgdGhlIGNzcyBmaWxlXG5pbXBvcnQgXCIuLi9kaXN0L2ZpbGVzL2luZGV4LmNzc1wiO1xuXG4vL2ltcG9ydCB0aGUgVGFzayBhbmQgUHJvamVjdCBjbGFzc2VzXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vc2Vjb25lZFwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3NlY29uZWRcIjtcblxuLy9pbXBvcnQgZGF0YS1mbnNcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZnIgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5cbi8vYWRkaW5nIHRoZSBpY29uSW1hZ2UgdG8gdGhlIHRpdHRsZVxuY29uc3QgZmF2aWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbmZhdmljb25MaW5rLnJlbCA9IFwiaWNvblwiO1xuZmF2aWNvbkxpbmsuaHJlZiA9IFwiLi9pbWFnZXMvdGFzay5wbmdcIjtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbkxpbmspO1xuXG4vL2NyZWF0aW5nIHRoZSBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbmhlYWRlci5pbm5lclRleHQgPSBgVG8tRG8tTGlzdGA7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xuXG4vL2NyZWF0ZSBhIGdyaWRDb250YWluZXJcbmNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZENvbnRhaW5lclwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGdyaWRDb250YWluZXIpO1xuXG4vL2NyZWF0aW5nIHRoZSBhc2lkZSBjb250ZW50XG5jb25zdCBhc2lkZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG5hc2lkZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNpZGVCYXJcIik7XG5ncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGFzaWRlQ29udGVudCk7XG5cbi8vY3JlYXRpbmcgdGhlIG1haW4gY29udGVudFxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tYWluLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50U2VjdGlvblwiKTtcbi8vSSB3YW50IHRoZSBiYWNrZ3JvdW5kIG9mIGEgY29udGFpbmVyIHRvIGJlICNmZmY4ZGNcbmNvbnN0IGNvbnRhaW5lckZvck1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyRm9yTWFpbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyRm9yTWFpblwiKTtcbmNvbnRhaW5lckZvck1haW4uaW5uZXJIVE1MID0gYFdlbGNvbWUsIDxicj4gXG5jbGljayBJbmJveCB0byBhZGQgYSB0YXNrIDxpbWcgc3JjPVwiLi9pbWFnZXMvdG8tZG8tbGlzdC5wbmdcIiBhbHQ9XCJcIiAvPiA8YnI+IFxuIGA7XG5tYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lckZvck1haW4pO1xuZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuLy9jcmVhdGluZyB0aGUgZm9vdGVyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbi8vIGNyZWF0ZSBhIHNwYW4gZWxlbWVudCB0byB3cmFwIHRoZSB0ZXh0XG5jb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5mb290ZXJUZXh0LmlubmVyVGV4dCA9IGBDb3B5cmlnaHQgwqkgMjAyMyBZYXJlLXlhcmVgO1xuXG5jb25zdCBmb290ZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb290ZXJJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2dpdGh1Yi1sb2dvLnBuZ1wiO1xuZm9vdGVySW1hZ2UuYWx0ID0gXCJnaXRodWIgbG9nb1wiO1xuZm9vdGVySW1hZ2UuY2xhc3NMaXN0LmFkZChcImdpdEh1YkxvZ29cIik7XG5cbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJJbWFnZSk7XG5cbmdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuLyogd29yayBvbiB0aGUgYXNpZGUgY29udGVudHM6IChUaGluZ3MgVG8gZG8tPiBOb3coQVNBUCksIFRvZGF5LCBUb21tb3Jyb3csIFRoaXMgd2VlaywgVGhpcyBtb250aCksIChQcm9qZWN0cy0+Li4uKSAgKi9cblxuLy9jb250YWluZXIgZm9yIHRoaW5nc1RvRG8gKHBhcmVudCBkaXYpXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5hc2lkZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy9UaGluZ3NUb2RvXG5jb25zdCB0aGluZ3NUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRoaW5nc1RvRG8uY2xhc3NMaXN0LmFkZChcInRoaW5nc1RvRG9cIik7XG4vL2NyZWF0aW5nIGltYWdlIGZvciBUaGluZ3MgdG8gRG8gLS0+IGBcImltYWdlXCIgVGhpbmdzIHRvIERvIWBcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmltYWdlLnNyYyA9IFwiLi9pbWFnZXMvYWxhcm0ucG5nXCI7XG5pbWFnZS5hbHQgPSBcImZpcmVBbGFybSBsb2dvXCI7XG5pbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG50aGluZ3NUb0RvLmFwcGVuZENoaWxkKGltYWdlKTtcbi8vY3JlYXRpbmcgdGV4dCBub2RlIGZvciBcIlRoaW5ncyB0byBEbyFcIlxuY29uc3QgdGhpbmdzVG9Eb1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVGhpbmdzIHRvIERvIWApO1xudGhpbmdzVG9Eby5hcHBlbmRDaGlsZCh0aGluZ3NUb0RvVGV4dCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpbmdzVG9Ebyk7XG5cbi8vIE5vd1xuY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuaW5ib3guY2xhc3NMaXN0LmFkZChcImluYm94XCIpO1xuLy9jcmVhdGUgYW4gaW1hZ2UgZm9yIG5vd1xuY29uc3QgaW5ib3hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbmJveEltYWdlLnNyYyA9IFwiLi9pbWFnZXMvZW1haWwucG5nXCI7XG5pbmJveEltYWdlLmFsdCA9IFwiaW5ib3hJbWFnZVwiO1xuaW5ib3hJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW5ib3hJbWFnZVwiKTtcbmluYm94LmFwcGVuZENoaWxkKGluYm94SW1hZ2UpO1xuLy9jcmVhdGluZyB0ZXh0IG5vZGUgZm9yIFwiRHVlIE5vdyFcIlxuY29uc3QgaW5ib3hNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYEluYm94YCk7XG5pbmJveC5hcHBlbmRDaGlsZChpbmJveE1lc3NhZ2UpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94KTtcblxuLyogLy8gVG9kYXlcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbi8vaW1hZ2UgZm9yIHRvZGF5IGJ1dHRvblxuY29uc3QgdG9kYXlJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG50b2RheUltYWdlLnNyYyA9IFwiLi9pbWFnZXMvY2luZW1hLnBuZyBcIjtcbnRvZGF5SW1hZ2UuYWx0ID0gXCIgdG9kYXkgUG5nXCI7XG50b2RheUltYWdlLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUltYWdlXCIpO1xudG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJbWFnZSk7XG4vL2NyZWF0ZSBhIHRleHROb2RlIGZvciB0b2RheVxuY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgRHVlIFRvZGF5IWApO1xudG9kYXkuYXBwZW5kQ2hpbGQoZHVlVG9kYXkpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5KTsgKi9cblxuLyogLy8gVG9tb3Jyb3dcbmNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRvbW9ycm93LmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1wiKTtcbi8vY3JlYXRlIHRoZSB0b21vcnJvdyBpbWFnZVxuY29uc3QgdG9tb3Jyb3dJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG50b21vcnJvd0ltYWdlLnNyYyA9IFwiLi9pbWFnZXMvdG9tb3Jyb3cucG5nIFwiO1xudG9tb3Jyb3dJbWFnZS5hbHQgPSBcIiB0b21tb3JvdyBQbmdcIjtcbnRvbW9ycm93SW1hZ2UuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93SW1hZ2VcIik7XG50b21vcnJvdy5hcHBlbmRDaGlsZCh0b21vcnJvd0ltYWdlKTtcbi8vY3JlYXRlIGEgdGV4dE5vZGUgZm9yIHRvbXJyb3dcbmNvbnN0IGR1ZVRvbW9ycm93ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYER1ZSBUb21vcnJvdyFgKTtcbnRvbW9ycm93LmFwcGVuZENoaWxkKGR1ZVRvbW9ycm93KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b21vcnJvdyk7ICovXG5cbi8qIC8vIFRoaXMgV2Vla1xuY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG53ZWVrLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrXCIpO1xuLy9jcmVhdGUgdGhlIGltYWdlIGZvciB3ZWVrXG5jb25zdCB3ZWVrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xud2Vla0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrSW1hZ2VcIik7XG53ZWVrSW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy93ZWVrLnBuZyBcIjtcbndlZWtJbWFnZS5hbHQgPSBcIiB3ZWVrIFBuZ1wiO1xud2Vlay5hcHBlbmRDaGlsZCh3ZWVrSW1hZ2UpO1xuLy9jcmVhdGUgYSB0ZXh0Tm9kZSBmb3IgZHVlIHRoaXMgd2Vla1xuY29uc3QgZHVlVGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkR1ZSBUaGlzIFdlZWshXCIpO1xud2Vlay5hcHBlbmRDaGlsZChkdWVUaGlzV2Vlayk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQod2Vlayk7ICovXG5cbi8qIC8vIFRoaXMgTW9udGhcbmNvbnN0IG1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm1vbnRoLmNsYXNzTGlzdC5hZGQoXCJtb250aFwiKTtcbi8vY3JlYXRlIGltYWdlIGZvciBtb250aFxuY29uc3QgbW9udGhJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5tb250aEltYWdlLmNsYXNzTGlzdC5hZGQoXCJtb250aEltYWdlXCIpO1xubW9udGhJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL21vbnRoLnBuZyBcIjtcbm1vbnRoSW1hZ2UuYWx0ID0gXCIgbW9udGggUG5nXCI7XG5tb250aC5hcHBlbmRDaGlsZChtb250aEltYWdlKTtcbi8vY3JlYXRlIGEgdGV4dCBub2RlIGZvciBkdWUgaW4gYSBtb250aFxuY29uc3QgZHVlSW5BTW9udGggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkR1ZSBJbiBhIE1vbnRoXCIpO1xubW9udGguYXBwZW5kQ2hpbGQoZHVlSW5BTW9udGgpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoKTtcbiAqL1xuLyogLy9wcm9qZWN0c1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbmNvbnN0IHByb2plY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5wcm9qZWN0SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0LW1hbmFnZW1lbnQucG5nXCI7XG5wcm9qZWN0SW1hZ2UuYWx0ID0gXCJwcm9qZWN0IEltYWdlXCI7XG5wcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7XG4vL3RleHROb2RlIGZvciBwcm9qZWN0c1xuY29uc3QgcHJvamVjdHNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQcm9qZWN0c1wiKTtcbnByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdHNUZXh0KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTsgKi9cbi8qIGV4cG9ydCB0aGUgYnV0dG9uIG5hbWVzOiAqL1xuXG4vKiB3aGVuIGJ1dHRvbnMgYXJlIGNsaWNrZWQ6IFdoYXQgdGhlIGNvbnRhaW5lckZvck1haW4gd2lsbCBsb29rIGxpa2UqL1xuLy9pbmJveCBidXR0b24gY2xpY2tlZFxuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGFpbmVyRm9yTWFpbi5pbm5lckhUTUwgPSBgICAgIFxuICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJcIiBpZCA9IFwidGFza1wiPlxuICA8ZmllbGRzZXQ+XG4gICAgPGxhYmVsIGZvcj1cImFkZGluZ1Rhc2tcIiBuYW1lPVwiYWRkaW5nVGFza1wiIGNsYXNzPVwiYWRkaW5nVGFza1wiXG4gICAgICA+PGJ1dHRvbiBjbGFzcz1cImFkZGluZ1Rhc2tCdXR0b25cIj5BZGQgVGFzazwvYnV0dG9uPjwvbGFiZWxcbiAgICA+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrSW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgTmFtZVwiIC8+XG4gIDwvZmllbGRzZXQ+XG48L2Zvcm0+YDtcbn0pO1xuXG4vKiAvL3Byb2plY3RzIGJ1dHRvblxucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb250YWluZXJGb3JNYWluLmlubmVySFRNTCA9IGAgIFxuICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlwiIGlkID0gXCJwcm9qZWN0XCI+XG4gICAgPGZpZWxkc2V0IGNsYXNzID0gXCJmaWVsZFNldFwiPlxuICAgICAgPGxhYmVsIGZvcj1cImFkZGluZ1Byb2plY3RcIiBuYW1lPVwiYWRkaW5nUHJvamVjdFwiIGNsYXNzPVwiYWRkaW5nUHJvamVjdFwiXG4gICAgICAgID48YnV0dG9uIGNsYXNzPVwiYWRkaW5nUHJvamVjdFwiPkFkZCBQcm9qZWN0PC9idXR0b24+PC9sYWJlbFxuICAgICAgPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0SW5wdXRcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIC8+XG4gICAgPC9maWVsZHNldD5cblxuICA8L2Zvcm0+YDtcbn0pOyAqL1xuXG4vKiBjcmVhdGluZyBhIG5ldyBpbnN0YW5jZSBhbmQgc3RvcmluZyBpdCBpbiBsb2NhbCBzdG9yYWdlIGV2ZXJ5IHRpbWUgc29tZW9uZSBjbGlja3MgdGhlIGFkZCBwcm9qZWN0L2FkZCB0YXNrIGJ1dHRvbiAqL1xuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vVGFza1xuICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcInRhc2tcIikge1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0lucHV0XCIpO1xuICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza0lucHV0LnZhbHVlO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBUYXNrIGNsYXNzIHdpdGggdGhlIGlucHV0IHZhbHVlIGFzIGFuIGFyZ3VtZW50XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lKTtcblxuICAgIC8vIFN0b3JlIHRoZSB0YXNrJ3MgbmFtZSBpbiB0aGUgbG9jYWwgc3RvcmFnZSB1c2luZyB0aGUgc3RvcmluZ1ZhbHVlKCkgbWV0aG9kXG4gICAgbmV3VGFzay5zdG9yaW5nVmFsdWUoKTtcblxuICAgIC8vY3JlYXRlIGEgZGl2IHRvIGhvbGQgZXZlcnl0aGluZyBhZnRlciB0YXNrIGlzIGFkZGVkXG4gICAgY29uc3QgdGFza1BhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1BhcmVudERpdi5jbGFzc0xpc3QuYWRkKFwidGFza1BhcmVudERpdlwiKTtcblxuICAgIC8vY3JlYXRlIGEgZGl2IHRvIGhvbGQgaW1hZ2UgYW5kIHRhc2sgYWRkZWRcbiAgICBjb25zdCBpbWFnZUFuZFRhc2tBZGRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2VBbmRUYXNrQWRkZWQuY2xhc3NMaXN0LmFkZChcImltYWdlQW5kVGFza0FkZGVkXCIpO1xuXG4gICAgLy9jcmVhdGUgZGl2IGZvciB0YXNrQ2FsYW5kZXJJY29uIFBhcmVudFxuICAgIGNvbnN0IHRhc2tDYWxhbmRlckljb25QYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vY3JlYXRlIGRpdiBmb3IgY2FsYW5kZXIgSWNvblxuICAgIGNvbnN0IHRhc2tDYWxhbmRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0NhbGFuZGVySWNvbi50eXBlID0gXCJkYXRlXCI7XG4gICAgdGFza0NhbGFuZGVySWNvbi5pZCA9IFwidGFza0NhbGFuZGVySWNvblwiO1xuICAgIC8vYXBwZW5kIHRoZSB0YXNrQ2FsYW5kZXJJY29uIHRvIHRhc2tDYWxhbmRlckljb25QYXJlbnRcbiAgICB0YXNrQ2FsYW5kZXJJY29uUGFyZW50LmFwcGVuZENoaWxkKHRhc2tDYWxhbmRlckljb24pO1xuXG4gICAgLy9hZGQgdGhlIHRhc2sgYWRkZWQgdG8gdGhlIGNvbnRhaW5lckZvck1haW4uaW5uZXJUZXh0IHNvIHRoYXQgdGhlIHVzZXIgY2FuIHNlZSB0aGUgcHJvamVjdFxuICAgIC8vY3JlYXRlIHRhc2tJbWFnZVxuICAgIGNvbnN0IHRhc2tJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGFza0ltYWdlLnNyYyA9IFwiLi9pbWFnZXMvYXBwcm92ZWQucG5nXCI7XG4gICAgdGFza0ltYWdlLmFsdCA9IFwidGFzayBJbWFnZVwiO1xuXG4gICAgY29uc3QgdGFza0FkZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jb250YWluZXIvZGlzcGxheSBmb3IgdGhlIG5ld2x5IGFkZGVkIHByb2plY3RcbiAgICB0YXNrQWRkZWQuY2xhc3NMaXN0LmFkZChcInRhc2tBZGRlZFwiKTtcbiAgICBsZXQgc3RvcmVkVGFza1ZhbHVlID0gdGFza0lucHV0LnZhbHVlO1xuICAgIHRhc2tBZGRlZC5pbm5lclRleHQgPSBzdG9yZWRUYXNrVmFsdWU7XG5cbiAgICAvL2FwcGVuZCB0aGUgaW1hZ2UgYW5kIHRoZW4gdGhlIHRhc2sgYWRkZWQgaW50byBpbWFnZUFuZFRhc2tBZGRlZCBkaXZcbiAgICBpbWFnZUFuZFRhc2tBZGRlZC5hcHBlbmRDaGlsZCh0YXNrSW1hZ2UpOyAvL2ltYWdlXG4gICAgaW1hZ2VBbmRUYXNrQWRkZWQuYXBwZW5kQ2hpbGQodGFza0FkZGVkKTsgLy90YXNrXG5cbiAgICB0YXNrUGFyZW50RGl2LmFwcGVuZENoaWxkKGltYWdlQW5kVGFza0FkZGVkKTsgLy9pbWFnZSBhbmQgdGFza1xuICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFza0NhbGFuZGVySWNvblBhcmVudCk7IC8vZGF0ZSBwaWNrZXIvY2FsYW5kZXJcbiAgICBjb250YWluZXJGb3JNYWluLmFwcGVuZENoaWxkKHRhc2tQYXJlbnREaXYpO1xuXG4gICAgdGFza0ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0YXNrUGFyZW50RGl2LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogIERhdGUgYW5kIGltYWdlIGxvZ2ljXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGJ1dHRvbnNcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrQ2FsYW5kZXJJY29uLnZhbHVlKTtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGlmICh0YXNrRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gY3VycmVudERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCkpIHtcbiAgICAgICAgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgPSBgJHt0YXNrQWRkZWQuaW5uZXJUZXh0fSBpcyBkdWUgdG9kYXlgO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdG9tb3Jyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFza0NhbGFuZGVySWNvbi52YWx1ZSk7XG4gICAgICBjb25zdCB0b21vcnJvd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdG9tb3Jyb3dEYXRlLnNldERhdGUodG9tb3Jyb3dEYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgaWYgKHRhc2tEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSB0b21vcnJvd0RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCkpIHtcbiAgICAgICAgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgPSBgJHt0YXNrQWRkZWQuaW5uZXJUZXh0fSBpcyBkdWUgdG9tb3Jyb3dgO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrQ2FsYW5kZXJJY29uLnZhbHVlKTtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHdlZWtGcm9tTm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHdlZWtGcm9tTm93LnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgNyk7XG4gICAgICBpZiAodGFza0RhdGUgPj0gY3VycmVudERhdGUgJiYgdGFza0RhdGUgPD0gd2Vla0Zyb21Ob3cpIHtcbiAgICAgICAgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgPSBgJHt0YXNrQWRkZWQuaW5uZXJUZXh0fSBpcyBkdWUgdGhpcyB3ZWVrYDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tDYWxhbmRlckljb24udmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgbW9udGhGcm9tTm93ID0gbmV3IERhdGUoXG4gICAgICAgIGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICBjdXJyZW50RGF0ZS5nZXREYXRlKClcbiAgICAgICk7XG4gICAgICBpZiAodGFza0RhdGUgPj0gY3VycmVudERhdGUgJiYgdGFza0RhdGUgPCBtb250aEZyb21Ob3cpIHtcbiAgICAgICAgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgPSBgJHt0YXNrQWRkZWQuaW5uZXJUZXh0fSBpcyBkdWUgYSBtb250aCBmcm9tIG5vd2A7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gKi9cblxuICAvKlxuLy9Qcm9qZWN0XG5pZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcInByb2plY3RcIikge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJbnB1dFwiKTsgLy9uYW1lIG9mIGlucHV0XG4gIGNvbnN0IG5hbWVPZlByb2plY3QgPSBwcm9qZWN0SW5wdXQudmFsdWU7XG5cbiAgLy9jcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFByb2plY3QgY2xhc3MgYW5kIHN0b3JlIGl0IGluIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWVPZlByb2plY3QpO1xuICBuZXdQcm9qZWN0LnN0b3JpbmdWYWx1ZSgpO1xuXG4gIC8vY3JlYXRlIGEgZGl2IHRvIGhvbGQgZXZlcnl0aGluZyB3aGVuIHRoZSBwcm9qZWN0IGlzIGFkZGVkXG4gIGNvbnN0IHByb2plY3RQYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0UGFyZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0UGFyZW50RGl2XCIpO1xuXG4gIC8vY3JlYXRlIGEgZGl2IHRvIGhvbGQgaW1hZ2UgYW5kIHByb2plY3QgYWRkZWRcbiAgY29uc3QgaW1hZ2VBbmRQcm9qZWN0QWRkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZUFuZFByb2plY3RBZGRlZC5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VBbmRQcm9qZWN0QWRkZWRcIik7XG5cbiAgLy9jcmVhdGUgZGl2IGZvciBwcm9qZWN0Q2FsYW5kZXJJY29uIFBhcmVudFxuICBjb25zdCBwcm9qZWN0Q2FsYW5kZXJJY29uUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy9jcmVhdGUgZGl2IGZvciBwcm9qZWN0Q2FsYW5kZXJJY29uXG4gIGNvbnN0IHByb2plY3RDYWxhbmRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RDYWxhbmRlckljb24udHlwZSA9IFwiZGF0ZVwiO1xuICAvL2FwcGVuZCB0aGUgcHJvamVjdENhbGFuZGVySWNvbiB0byBwcm9qZWN0Q2FsYW5kZXJJY29uUGFyZW50XG4gIHByb2plY3RDYWxhbmRlckljb25QYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhbGFuZGVySWNvbik7XG5cbiAgLy9hZGQgdGhlIFByb2plY3QgYWRkZWQgdG8gdGhlIGNvbnRhaW5lckZvck1haW4uaW5uZXJUZXh0IHNvIHRoYXQgdGhlIHVzZXIgY2FuIHNlZSB0aGUgcHJvamVjdFxuICAvL2NyZWF0ZSBQcm9qZWN0SW1hZ2VcbiAgY29uc3QgcHJvamVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcHJvamVjdEltYWdlLnNyYyA9IFwiLi9pbWFnZXMvYXBwcm92ZWQucG5nXCI7XG4gIHByb2plY3RJbWFnZS5hbHQgPSBcInByb2plY3QgSW1hZ2VcIjtcblxuICAvL2NyZWF0ZVxuICAvL2FkZCB0aGUgcHJvamVjdCBhZGRlZCB0byB0aGUgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgc28gdGhhdCB0aGUgdXNlciBjYW4gc2VlIHRoZSBwcm9qZWN0XG4gIGNvbnN0IHByb2plY3RBZGRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY29udGFpbmVyL2Rpc3BsYXkgZm9yIHRoZSBuZXdseSBhZGRlZCBwcm9qZWN0XG4gIHByb2plY3RBZGRlZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFkZGVkXCIpO1xuICBsZXQgc3RvcmVkVmFsdWUgPSBwcm9qZWN0SW5wdXQudmFsdWU7XG4gIHByb2plY3RBZGRlZC5pbm5lclRleHQgPSBzdG9yZWRWYWx1ZTtcblxuICAvL2FwcGVuZCB0aGUgaW1hZ2UgYW5kIHRoZW4gdGhlIHRhc2sgYWRkZWQgaW50byBpbWFnZUFuZFRhc2tBZGRlZCBkaXZcbiAgaW1hZ2VBbmRQcm9qZWN0QWRkZWQuYXBwZW5kQ2hpbGQocHJvamVjdEltYWdlKTsgLy9pbWFnZVxuICBpbWFnZUFuZFByb2plY3RBZGRlZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkZWQpOyAvL3Byb2plY3RcblxuICBwcm9qZWN0UGFyZW50RGl2LmFwcGVuZENoaWxkKGltYWdlQW5kUHJvamVjdEFkZGVkKTsgLy9pbWFnZSBhbmQgcHJvamVjdFxuICBwcm9qZWN0UGFyZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RDYWxhbmRlckljb25QYXJlbnQpOyAvL2RhdGUgcGlja2VyL2NhbGFuZGVyXG4gIGNvbnRhaW5lckZvck1haW4uYXBwZW5kQ2hpbGQocHJvamVjdFBhcmVudERpdik7XG5cbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcblxuICAgRGF0ZSBhbmQgaW1hZ2UgbG9naWMgXG4gICBFdmVudCBsaXN0ZW5lciBmb3IgYnV0dG9ucyBcbiAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgIGlmKHRoZSB0YXNrQ2FsYW5kZXJJY29uLnZhbHVlIGlzIGN1cnJlbnREYXkpe1xuICAgICBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCA9IGAke3Rhc2tBZGRlZH0gaXMgZHVlIHRvZGF5YDtcbiAgICAgfVxuICAgfSk7XG4gICB0b21vcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICBpZih0aGUgdGFza0NhbGFuZGVySWNvbi52YWx1ZSBpcyB0b21vcnJvdyl7XG4gICAgIGNvbnRhaW5lckZvck1haW4uaW5uZXJUZXh0ID0gYCR7dGFza0FkZGVkfSBpcyBkdWUgdG9tb3Jyb3dgO1xuICAgICB9XG4gICB9KTtcbiAgIHdlZWsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgaWYodGhlIHRhc2tDYWxhbmRlckljb24udmFsdWUgaXMgdGhpcyB3ZWVrKXtcbiAgICAgY29udGFpbmVyRm9yTWFpbi5pbm5lclRleHQgPSBgJHt0YXNrQWRkZWR9IGlzIGR1ZSB0aGlzIHdlZWtgO1xuICAgICB9XG4gICB9KTtcbiAgIG1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgIGlmKHRoZSB0YXNrQ2FsYW5kZXJJY29uLnZhbHVlIGlzIGEgbW9udGggYXdheSBmcm9tIGN1cnJlbnRkYXkpe1xuICAgICBjb250YWluZXJGb3JNYWluLmlubmVyVGV4dCA9IGAke3Rhc2tBZGRlZH0gaXMgZHVlIGEgbW9udGggZnJvbSBub3dgO1xuICAgICB9XG4gICB9KTtcbn1cbiovXG5cbiAgLyogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RvLURvLUxpc3Q6XG5cbiAgICAgICAgLS0+IEZpZ3VyZSBvdXQgaG93IHRvIGNsaWNrIG9uIGltYWdlcyBhbmQgYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGVtLi4gdXNpbmcgdGhlIGltYWdlIGNsaWNrXG4gICAgICAgICAgICBhcyBhIHdheSB0byBjb21wbGV0ZSB0aGUgdGFzaywgYWxzbyBhZGQgaG92ZXIgZWZmZWN0IG9uIGl0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC0tPiBtYWtlIHN1cmUgdGhlIHVzZXIgY2FuJ3QganVzdCBzdWJtaXQvYWRkIGFuIGVtcHR5IGlucHV0Li4uIGFsc28gZGVwZW5kaW5nIG9uIGhvdyB5b3UgZmVlbCwgXG4gICAgICAgICAgICBjaGVjayB0byBzZWUgaWYgdGhlIHVzZXIgcHV0IGEgZGF0ZSBvciBub3QsIGlmIG5vdCBhZGQgYW4gZXJyb3Igb3Igbm90LCB1cCB0byB5b3UuXG5cbiAgICAgICAgLS0+IG1ha2Ugc3VyZSB0aGUgd2ViIGFwcCBpcyByZXNwb25zaXZlIG9uIHBob25lcywgYW5kIGRldmljZXMgZ3JlYXRlciB0aGUgMTkyMHgxMDgwXG4gICAgICAgICAgICAtLT4gc28gbGlrZSB1c2Ugb2YgZHJvcC1kb3duIG1lbnVzIHdoZW4gb24gbW9iaWxlIFxuKi9cbn0pO1xuIl0sIm5hbWVzIjpbIlRhc2siLCJuYW1lT2ZUYXNrIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzdG9yaW5nVmFsdWUiLCJleGlzdGluZ1Rhc2tzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHVzaGluZ1ZhbHVlIiwiUHJvamVjdCIsIm5hbWVPZlByb2plY3QiLCJhZGREYXlzIiwiaXNUb2RheSIsImlzVG9tb3Jyb3ciLCJpc1RoaXNXZWVrIiwiaXNXaXRoaW5JbnRlcnZhbCIsImFkZE1vbnRocyIsImNvbXBhcmVBc2MiLCJmb3JtYXQiLCJmciIsImZhdmljb25MaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVsIiwiaHJlZiIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImJvZHkiLCJhcHBlbmQiLCJncmlkQ29udGFpbmVyIiwiYXNpZGVDb250ZW50IiwibWFpbiIsImNvbnRhaW5lckZvck1haW4iLCJpbm5lckhUTUwiLCJmb290ZXIiLCJmb290ZXJUZXh0IiwiZm9vdGVySW1hZ2UiLCJzcmMiLCJhbHQiLCJjb250YWluZXIiLCJ0aGluZ3NUb0RvIiwiaW1hZ2UiLCJ0aGluZ3NUb0RvVGV4dCIsImNyZWF0ZVRleHROb2RlIiwiaW5ib3giLCJpbmJveEltYWdlIiwiaW5ib3hNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJpZCIsInRhc2tJbnB1dCIsImdldEVsZW1lbnRCeUlkIiwidGFza05hbWUiLCJuZXdUYXNrIiwidGFza1BhcmVudERpdiIsImltYWdlQW5kVGFza0FkZGVkIiwidGFza0NhbGFuZGVySWNvblBhcmVudCIsInRhc2tDYWxhbmRlckljb24iLCJ0eXBlIiwidGFza0ltYWdlIiwidGFza0FkZGVkIiwic3RvcmVkVGFza1ZhbHVlIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==