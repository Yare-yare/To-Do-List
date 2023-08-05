/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    box-shadow: #FFD0C5 2px 3px 20px 3px;
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

  `, "",{"version":3,"sources":["webpack://./dist/files/index.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,eAAe;EACjB;;EAEA,kDAAkD;EAClD;IACE,mBAAmB;IACnB,4CAA+C;EACjD;;AAEF;IACI,yCAAyC;IACzC,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,aAAa;IACb,iCAAiC;IACjC,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,gFAAgF;IAChF,kBAAkB;AACtB;;AAEA,6CAA6C;AAC7C;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;AAEF,yCAAyC;AACzC;IACI,aAAa;IACb,gCAAgC,EAAE,0BAA0B;IAC5D,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,WAAW;EACb;;EAEA;IACE,kBAAkB;EACpB;;EAEA,gCAAgC;EAChC;IACE,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,6BAA6B;EAC/B;;EAEA;IACE,yCAAyC;IACzC,sCAAsC;EACxC;;EAEA;IACE,WAAW,wBAAwB,EAAE;IACrC,MAAM,2BAA2B,EAAE,EAAE,wDAAwD;EAC/F;;EAEA,iCAAiC;EACjC;GACC,WAAW;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,oCAAoC;EACtC;;EAEA;IACE,yBAAyB;IACzB,oCAAoC;AACxC;;EAEE,mCAAmC;EACnC;IACE,yCAAyC;IACzC,aAAa;IACb,qBAAqB;EACvB;;EAEA;IACE,WAAW;EACb","sourcesContent":[":root {\n    --background-color: #FFF8DC;\n    --color:#000000;\n  }\n\n  /* changing the font to Caveat by Impalleri Type */\n  @font-face {\n    font-family: caveat;\n    src: url(../files/Caveat-VariableFont_wght.ttf);\n  }\n\nbody{\n    background-color: var(--background-color);\n    color: var(--color);\n    margin: 0%;\n    padding: 0;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n    overflow: hidden;\n    font-weight: bold;\n    font-family: caveat, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: x-large;\n}\n\n/* making the header and footer have colors */\n.header, .footer {\n    background-color: #333;\n    color: white;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n/*making the grid-container display:grid*/\n.gridContainer{\n    display: grid;\n    grid-template-columns: 200px 1fr; /* Sidebar, Main Content */\n    gap:20px;\n}\n\n.sideBar {\n    display: flex;\n    align-content: center;\n    text-align: center;\n    box-sizing: border-box;\n    padding: 10px;\n    flex-direction: column;\n    gap: 30px;\n    height: 80%;\n  }\n\n  .contentSection {\n    background-color: #C5C5A3;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  .footer{\n    position: absolute;\n    bottom: 0%;\n    width: 100%;\n  }\n\n  .footer span {\n    margin-right: 10px;\n  }\n\n  /* working on the asideContent */\n  .container{\n    font-family: caveat;\n    background-color: #C5C5A3;\n    border-radius: 1rem;\n    padding: 1rem;\n  }\n\n  button{\n    font-family: caveat;\n    font-size: x-large;\n    padding: 5px;\n    border-radius: .5rem;\n    box-shadow: #333  2px 3px 1px;\n  }\n\n  button:hover{\n    background-color: var(--background-color);\n    animation: bounceAnimation 2s infinite;\n  }\n\n  @keyframes bounceAnimation {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-5px); } /* Adjust the -20px value to control the bounce height */\n  }\n\n  /* editing the images of aside  */\n  .image{\n   width: 35px;\n  }\n\n  img{\n    width:50px;\n  }\n\n  .inbox {\n    background-color: #A3D9C5;\n    box-shadow: #FFC5E3 2px 3px 20px 3px; \n  }\n\n  .projects {\n    background-color: #A3C5D9;\n    box-shadow: #FFD0C5 2px 3px 20px 3px;\n}\n\n  /* working on the Content section */\n  .containerForMain{\n    background-color: var(--background-color);\n    padding: 1rem;\n    border-radius: 0.5rem;\n  }\n\n  .gitHubLogo{\n    width: 20px;\n  }\n\n  "],"sourceRoot":""}]);
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
//import the css file

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
containerForMain.innerHTML = "Welcome, <br> \nclick inbox to add a task <img src=\"./images/to-do-list.png\" alt=\"\" /> <br> \nclick project to add a project in mind! <img src=\"./images/project.png\" alt=\"\" />";
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

// Today
var today = document.createElement("button");
today.classList.add("today");
//image for today button
var todayImage = document.createElement("img");
todayImage.src = "./images/cinema.png ";
todayImage.alt = " today Png";
todayImage.classList.add("todayImage");
today.appendChild(todayImage);
//create a textNode for today
var dueToday = document.createTextNode("Due Today!");
today.appendChild(dueToday);
container.appendChild(today);

// Tomorrow
var tomorrow = document.createElement("button");
tomorrow.classList.add("tomorrow");
//create the tomorrow image
var tomorrowImage = document.createElement("img");
tomorrowImage.src = "./images/tomorrow.png ";
tomorrowImage.alt = " tommorow Png";
tomorrowImage.classList.add("tomorrowImage");
tomorrow.appendChild(tomorrowImage);
//create a textNode for tomrrow
var dueTomorrow = document.createTextNode("Due Tomorrow!");
tomorrow.appendChild(dueTomorrow);
container.appendChild(tomorrow);

// This Week
var week = document.createElement("button");
week.classList.add("week");
//create the image for week
var weekImage = document.createElement("img");
weekImage.classList.add("weekImage");
weekImage.src = "./images/week.png ";
weekImage.alt = " week Png";
week.appendChild(weekImage);
//create a textNode for due this week
var dueThisWeek = document.createTextNode("Due This Week!");
week.appendChild(dueThisWeek);
container.appendChild(week);

// This Month
var month = document.createElement("button");
month.classList.add("month");
//create image for month
var monthImage = document.createElement("img");
monthImage.classList.add("monthImage");
monthImage.src = "./images/month.png ";
monthImage.alt = " month Png";
month.appendChild(monthImage);
//create a text node for due in a month
var dueInAMonth = document.createTextNode("Due In a Month");
month.appendChild(dueInAMonth);
container.appendChild(month);

//projects
var project = document.createElement("button");
project.classList.add("projects");
var projectImage = document.createElement("img");
projectImage.src = "./images/project-management.png";
projectImage.alt = "project Image";
project.appendChild(projectImage);
//textNode for projects
var projectsText = document.createTextNode("Projects");
project.appendChild(projectsText);
container.appendChild(project);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2pDdEIsU0FBUyxDQUFDakIsV0FBVyxDQUFDcUMsT0FBTyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vZGlzdC9maWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9kaXN0L2ZpbGVzL2luZGV4LmNzcz9kYWZiIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9maWxlcy9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOERDO1xuICAgIC0tY29sb3I6IzAwMDAwMDtcbiAgfVxuXG4gIC8qIGNoYW5naW5nIHRoZSBmb250IHRvIENhdmVhdCBieSBJbXBhbGxlcmkgVHlwZSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogY2F2ZWF0O1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB9XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogY2F2ZWF0LCAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi8qIG1ha2luZyB0aGUgaGVhZGVyIGFuZCBmb290ZXIgaGF2ZSBjb2xvcnMgKi9cbi5oZWFkZXIsIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbi8qbWFraW5nIHRoZSBncmlkLWNvbnRhaW5lciBkaXNwbGF5OmdyaWQqL1xuLmdyaWRDb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjsgLyogU2lkZWJhciwgTWFpbiBDb250ZW50ICovXG4gICAgZ2FwOjIwcHg7XG59XG5cbi5zaWRlQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4O1xuICAgIGhlaWdodDogODAlO1xuICB9XG5cbiAgLmNvbnRlbnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUEzO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5mb290ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9vdGVyIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC8qIHdvcmtpbmcgb24gdGhlIGFzaWRlQ29udGVudCAqL1xuICAuY29udGFpbmVye1xuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzVBMztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICBidXR0b257XG4gICAgZm9udC1mYW1pbHk6IGNhdmVhdDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGJveC1zaGFkb3c6ICMzMzMgIDJweCAzcHggMXB4O1xuICB9XG5cbiAgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGFuaW1hdGlvbjogYm91bmNlQW5pbWF0aW9uIDJzIGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBib3VuY2VBbmltYXRpb24ge1xuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9IC8qIEFkanVzdCB0aGUgLTIwcHggdmFsdWUgdG8gY29udHJvbCB0aGUgYm91bmNlIGhlaWdodCAqL1xuICB9XG5cbiAgLyogZWRpdGluZyB0aGUgaW1hZ2VzIG9mIGFzaWRlICAqL1xuICAuaW1hZ2V7XG4gICB3aWR0aDogMzVweDtcbiAgfVxuXG4gIGltZ3tcbiAgICB3aWR0aDo1MHB4O1xuICB9XG5cbiAgLmluYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEOUM1O1xuICAgIGJveC1zaGFkb3c6ICNGRkM1RTMgMnB4IDNweCAyMHB4IDNweDsgXG4gIH1cblxuICAucHJvamVjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0M1RDk7XG4gICAgYm94LXNoYWRvdzogI0ZGRDBDNSAycHggM3B4IDIwcHggM3B4O1xufVxuXG4gIC8qIHdvcmtpbmcgb24gdGhlIENvbnRlbnQgc2VjdGlvbiAqL1xuICAuY29udGFpbmVyRm9yTWFpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgfVxuXG4gIC5naXRIdWJMb2dve1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG5cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L2ZpbGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCOztFQUVBLGtEQUFrRDtFQUNsRDtJQUNFLG1CQUFtQjtJQUNuQiw0Q0FBK0M7RUFDakQ7O0FBRUY7SUFDSSx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnRkFBZ0Y7SUFDaEYsa0JBQWtCO0FBQ3RCOztBQUVBLDZDQUE2QztBQUM3QztJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztBQUVGLHlDQUF5QztBQUN6QztJQUNJLGFBQWE7SUFDYixnQ0FBZ0MsRUFBRSwwQkFBMEI7SUFDNUQsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQSxnQ0FBZ0M7RUFDaEM7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLFdBQVcsd0JBQXdCLEVBQUU7SUFDckMsTUFBTSwyQkFBMkIsRUFBRSxFQUFFLHdEQUF3RDtFQUMvRjs7RUFFQSxpQ0FBaUM7RUFDakM7R0FDQyxXQUFXO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7RUFFRSxtQ0FBbUM7RUFDbkM7SUFDRSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0ZGRjhEQztcXG4gICAgLS1jb2xvcjojMDAwMDAwO1xcbiAgfVxcblxcbiAgLyogY2hhbmdpbmcgdGhlIGZvbnQgdG8gQ2F2ZWF0IGJ5IEltcGFsbGVyaSBUeXBlICovXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGNhdmVhdDtcXG4gICAgc3JjOiB1cmwoLi4vZmlsZXMvQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxuICB9XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogY2F2ZWF0LCAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4vKiBtYWtpbmcgdGhlIGhlYWRlciBhbmQgZm9vdGVyIGhhdmUgY29sb3JzICovXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuLyptYWtpbmcgdGhlIGdyaWQtY29udGFpbmVyIGRpc3BsYXk6Z3JpZCovXFxuLmdyaWRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyOyAvKiBTaWRlYmFyLCBNYWluIENvbnRlbnQgKi9cXG4gICAgZ2FwOjIwcHg7XFxufVxcblxcbi5zaWRlQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICB9XFxuXFxuICAuY29udGVudFNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUEzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAuZm9vdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZvb3RlciBzcGFuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgLyogd29ya2luZyBvbiB0aGUgYXNpZGVDb250ZW50ICovXFxuICAuY29udGFpbmVye1xcbiAgICBmb250LWZhbWlseTogY2F2ZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUEzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgYnV0dG9ue1xcbiAgICBmb250LWZhbWlseTogY2F2ZWF0O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6ICMzMzMgIDJweCAzcHggMXB4O1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2VBbmltYXRpb24gMnMgaW5maW5pdGU7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJvdW5jZUFuaW1hdGlvbiB7XFxuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfSAvKiBBZGp1c3QgdGhlIC0yMHB4IHZhbHVlIHRvIGNvbnRyb2wgdGhlIGJvdW5jZSBoZWlnaHQgKi9cXG4gIH1cXG5cXG4gIC8qIGVkaXRpbmcgdGhlIGltYWdlcyBvZiBhc2lkZSAgKi9cXG4gIC5pbWFnZXtcXG4gICB3aWR0aDogMzVweDtcXG4gIH1cXG5cXG4gIGltZ3tcXG4gICAgd2lkdGg6NTBweDtcXG4gIH1cXG5cXG4gIC5pbmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0Q5QzU7XFxuICAgIGJveC1zaGFkb3c6ICNGRkM1RTMgMnB4IDNweCAyMHB4IDNweDsgXFxuICB9XFxuXFxuICAucHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNDNUQ5O1xcbiAgICBib3gtc2hhZG93OiAjRkZEMEM1IDJweCAzcHggMjBweCAzcHg7XFxufVxcblxcbiAgLyogd29ya2luZyBvbiB0aGUgQ29udGVudCBzZWN0aW9uICovXFxuICAuY29udGFpbmVyRm9yTWFpbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5naXRIdWJMb2dve1xcbiAgICB3aWR0aDogMjBweDtcXG4gIH1cXG5cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9pbXBvcnQgdGhlIGNzcyBmaWxlXG5pbXBvcnQgXCIuLi9kaXN0L2ZpbGVzL2luZGV4LmNzc1wiO1xuLy9hZGRpbmcgdGhlIGljb25JbWFnZSB0byB0aGUgdGl0dGxlXG5jb25zdCBmYXZpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuZmF2aWNvbkxpbmsucmVsID0gXCJpY29uXCI7XG5mYXZpY29uTGluay5ocmVmID0gXCIuL2ltYWdlcy90YXNrLnBuZ1wiO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uTGluayk7XG5cbi8vY3JlYXRpbmcgdGhlIGhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuaGVhZGVyLmlubmVyVGV4dCA9IGBUby1Eby1MaXN0YDtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcik7XG5cbi8vY3JlYXRlIGEgZ3JpZENvbnRhaW5lclxuY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkQ29udGFpbmVyXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoZ3JpZENvbnRhaW5lcik7XG5cbi8vY3JlYXRpbmcgdGhlIGFzaWRlIGNvbnRlbnRcbmNvbnN0IGFzaWRlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbmFzaWRlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic2lkZUJhclwiKTtcbmdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXNpZGVDb250ZW50KTtcblxuLy9jcmVhdGluZyB0aGUgbWFpbiBjb250ZW50XG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW4uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRTZWN0aW9uXCIpO1xuLy9JIHdhbnQgdGhlIGJhY2tncm91bmQgb2YgYSBjb250YWluZXIgdG8gYmUgI2ZmZjhkY1xuY29uc3QgY29udGFpbmVyRm9yTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXJGb3JNYWluLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJGb3JNYWluXCIpO1xuY29udGFpbmVyRm9yTWFpbi5pbm5lckhUTUwgPSBgV2VsY29tZSwgPGJyPiBcbmNsaWNrIGluYm94IHRvIGFkZCBhIHRhc2sgPGltZyBzcmM9XCIuL2ltYWdlcy90by1kby1saXN0LnBuZ1wiIGFsdD1cIlwiIC8+IDxicj4gXG5jbGljayBwcm9qZWN0IHRvIGFkZCBhIHByb2plY3QgaW4gbWluZCEgPGltZyBzcmM9XCIuL2ltYWdlcy9wcm9qZWN0LnBuZ1wiIGFsdD1cIlwiIC8+YDtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyRm9yTWFpbik7XG5ncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4vL2NyZWF0aW5nIHRoZSBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5mb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuLy8gY3JlYXRlIGEgc3BhbiBlbGVtZW50IHRvIHdyYXAgdGhlIHRleHRcbmNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbmZvb3RlclRleHQuaW5uZXJUZXh0ID0gYENvcHlyaWdodCDCqSAyMDIzIFlhcmUteWFyZWA7XG5cbmNvbnN0IGZvb3RlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmZvb3RlckltYWdlLnNyYyA9IFwiLi9pbWFnZXMvZ2l0aHViLWxvZ28ucG5nXCI7XG5mb290ZXJJbWFnZS5hbHQgPSBcImdpdGh1YiBsb2dvXCI7XG5mb290ZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ2l0SHViTG9nb1wiKTtcblxuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckltYWdlKTtcblxuZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vKiB3b3JrIG9uIHRoZSBhc2lkZSBjb250ZW50czogKFRoaW5ncyBUbyBkby0+IE5vdyhBU0FQKSwgVG9kYXksIFRvbW1vcnJvdywgVGhpcyB3ZWVrLCBUaGlzIG1vbnRoKSwgKFByb2plY3RzLT4uLi4pICAqL1xuXG4vL2NvbnRhaW5lciBmb3IgdGhpbmdzVG9EbyAocGFyZW50IGRpdilcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbmFzaWRlQ29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4vL1RoaW5nc1RvZG9cbmNvbnN0IHRoaW5nc1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGhpbmdzVG9Eby5jbGFzc0xpc3QuYWRkKFwidGhpbmdzVG9Eb1wiKTtcbi8vY3JlYXRpbmcgaW1hZ2UgZm9yIFRoaW5ncyB0byBEbyAtLT4gYFwiaW1hZ2VcIiBUaGluZ3MgdG8gRG8hYFxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9hbGFybS5wbmdcIjtcbmltYWdlLmFsdCA9IFwiZmlyZUFsYXJtIGxvZ29cIjtcbmltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbnRoaW5nc1RvRG8uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuLy9jcmVhdGluZyB0ZXh0IG5vZGUgZm9yIFwiVGhpbmdzIHRvIERvIVwiXG5jb25zdCB0aGluZ3NUb0RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUaGluZ3MgdG8gRG8hYCk7XG50aGluZ3NUb0RvLmFwcGVuZENoaWxkKHRoaW5nc1RvRG9UZXh0KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGluZ3NUb0RvKTtcblxuLy8gTm93XG5jb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5pbmJveC5jbGFzc0xpc3QuYWRkKFwiaW5ib3hcIik7XG4vL2NyZWF0ZSBhbiBpbWFnZSBmb3Igbm93XG5jb25zdCBpbmJveEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmluYm94SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9lbWFpbC5wbmdcIjtcbmluYm94SW1hZ2UuYWx0ID0gXCJpbmJveEltYWdlXCI7XG5pbmJveEltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbmJveEltYWdlXCIpO1xuaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hJbWFnZSk7XG4vL2NyZWF0aW5nIHRleHQgbm9kZSBmb3IgXCJEdWUgTm93IVwiXG5jb25zdCBpbmJveE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgSW5ib3hgKTtcbmluYm94LmFwcGVuZENoaWxkKGluYm94TWVzc2FnZSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4vLyBUb2RheVxuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudG9kYXkuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuLy9pbWFnZSBmb3IgdG9kYXkgYnV0dG9uXG5jb25zdCB0b2RheUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnRvZGF5SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9jaW5lbWEucG5nIFwiO1xudG9kYXlJbWFnZS5hbHQgPSBcIiB0b2RheSBQbmdcIjtcbnRvZGF5SW1hZ2UuY2xhc3NMaXN0LmFkZChcInRvZGF5SW1hZ2VcIik7XG50b2RheS5hcHBlbmRDaGlsZCh0b2RheUltYWdlKTtcbi8vY3JlYXRlIGEgdGV4dE5vZGUgZm9yIHRvZGF5XG5jb25zdCBkdWVUb2RheSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBEdWUgVG9kYXkhYCk7XG50b2RheS5hcHBlbmRDaGlsZChkdWVUb2RheSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xuXG4vLyBUb21vcnJvd1xuY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudG9tb3Jyb3cuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93XCIpO1xuLy9jcmVhdGUgdGhlIHRvbW9ycm93IGltYWdlXG5jb25zdCB0b21vcnJvd0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnRvbW9ycm93SW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy90b21vcnJvdy5wbmcgXCI7XG50b21vcnJvd0ltYWdlLmFsdCA9IFwiIHRvbW1vcm93IFBuZ1wiO1xudG9tb3Jyb3dJbWFnZS5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dJbWFnZVwiKTtcbnRvbW9ycm93LmFwcGVuZENoaWxkKHRvbW9ycm93SW1hZ2UpO1xuLy9jcmVhdGUgYSB0ZXh0Tm9kZSBmb3IgdG9tcnJvd1xuY29uc3QgZHVlVG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgRHVlIFRvbW9ycm93IWApO1xudG9tb3Jyb3cuYXBwZW5kQ2hpbGQoZHVlVG9tb3Jyb3cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvbW9ycm93KTtcblxuLy8gVGhpcyBXZWVrXG5jb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbndlZWsuY2xhc3NMaXN0LmFkZChcIndlZWtcIik7XG4vL2NyZWF0ZSB0aGUgaW1hZ2UgZm9yIHdlZWtcbmNvbnN0IHdlZWtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG53ZWVrSW1hZ2UuY2xhc3NMaXN0LmFkZChcIndlZWtJbWFnZVwiKTtcbndlZWtJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3dlZWsucG5nIFwiO1xud2Vla0ltYWdlLmFsdCA9IFwiIHdlZWsgUG5nXCI7XG53ZWVrLmFwcGVuZENoaWxkKHdlZWtJbWFnZSk7XG4vL2NyZWF0ZSBhIHRleHROb2RlIGZvciBkdWUgdGhpcyB3ZWVrXG5jb25zdCBkdWVUaGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRHVlIFRoaXMgV2VlayFcIik7XG53ZWVrLmFwcGVuZENoaWxkKGR1ZVRoaXNXZWVrKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrKTtcblxuLy8gVGhpcyBNb250aFxuY29uc3QgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubW9udGguY2xhc3NMaXN0LmFkZChcIm1vbnRoXCIpO1xuLy9jcmVhdGUgaW1hZ2UgZm9yIG1vbnRoXG5jb25zdCBtb250aEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbm1vbnRoSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1vbnRoSW1hZ2VcIik7XG5tb250aEltYWdlLnNyYyA9IFwiLi9pbWFnZXMvbW9udGgucG5nIFwiO1xubW9udGhJbWFnZS5hbHQgPSBcIiBtb250aCBQbmdcIjtcbm1vbnRoLmFwcGVuZENoaWxkKG1vbnRoSW1hZ2UpO1xuLy9jcmVhdGUgYSB0ZXh0IG5vZGUgZm9yIGR1ZSBpbiBhIG1vbnRoXG5jb25zdCBkdWVJbkFNb250aCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRHVlIEluIGEgTW9udGhcIik7XG5tb250aC5hcHBlbmRDaGlsZChkdWVJbkFNb250aCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobW9udGgpO1xuXG4vL3Byb2plY3RzXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnByb2plY3RJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3QtbWFuYWdlbWVudC5wbmdcIjtcbnByb2plY3RJbWFnZS5hbHQgPSBcInByb2plY3QgSW1hZ2VcIjtcbnByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEltYWdlKTtcbi8vdGV4dE5vZGUgZm9yIHByb2plY3RzXG5jb25zdCBwcm9qZWN0c1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlByb2plY3RzXCIpO1xucHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0c1RleHQpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuIl0sIm5hbWVzIjpbImZhdmljb25MaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVsIiwiaHJlZiIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImJvZHkiLCJhcHBlbmQiLCJncmlkQ29udGFpbmVyIiwiYXNpZGVDb250ZW50IiwibWFpbiIsImNvbnRhaW5lckZvck1haW4iLCJpbm5lckhUTUwiLCJmb290ZXIiLCJmb290ZXJUZXh0IiwiZm9vdGVySW1hZ2UiLCJzcmMiLCJhbHQiLCJjb250YWluZXIiLCJ0aGluZ3NUb0RvIiwiaW1hZ2UiLCJ0aGluZ3NUb0RvVGV4dCIsImNyZWF0ZVRleHROb2RlIiwiaW5ib3giLCJpbmJveEltYWdlIiwiaW5ib3hNZXNzYWdlIiwidG9kYXkiLCJ0b2RheUltYWdlIiwiZHVlVG9kYXkiLCJ0b21vcnJvdyIsInRvbW9ycm93SW1hZ2UiLCJkdWVUb21vcnJvdyIsIndlZWsiLCJ3ZWVrSW1hZ2UiLCJkdWVUaGlzV2VlayIsIm1vbnRoIiwibW9udGhJbWFnZSIsImR1ZUluQU1vbnRoIiwicHJvamVjdCIsInByb2plY3RJbWFnZSIsInByb2plY3RzVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=