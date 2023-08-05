/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/seconed.js ***!
  \************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25lZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxJQUFJO0VBQ2YsU0FBQUEsS0FBWUMsVUFBVSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsSUFBQTtJQUN0QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtFQUFBRSxZQUFBLENBQUFILElBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQUMsYUFBQSxFQUFlO01BQ2I7TUFDQSxJQUFNQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7O01BRXJFO01BQ0FKLGFBQWEsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ1gsVUFBVSxDQUFDO01BRW5DUyxZQUFZLENBQUNHLE9BQU8sQ0FBQyxPQUFPLEVBQUVMLElBQUksQ0FBQ00sU0FBUyxDQUFDUCxhQUFhLENBQUMsQ0FBQztJQUM5RDtFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFVLGFBQUEsRUFBZSxDQUFDO0VBQUM7RUFBQSxPQUFBZixJQUFBO0FBQUE7QUFHWixJQUFNZ0IsT0FBTztFQUNsQixTQUFBQSxRQUFZQyxhQUFhLEVBQUU7SUFBQWYsZUFBQSxPQUFBYyxPQUFBO0lBQ3pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQSxhQUFhO0VBQ3BDO0VBQUNkLFlBQUEsQ0FBQWEsT0FBQTtJQUFBWixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxhQUFBLEVBQWU7TUFDYjtNQUNBLElBQU1DLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRTs7TUFFeEU7TUFDQUosYUFBYSxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDSyxhQUFhLENBQUM7TUFFdENQLFlBQVksQ0FBQ0csT0FBTyxDQUFDLFVBQVUsRUFBRUwsSUFBSSxDQUFDTSxTQUFTLENBQUNQLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFO0VBQUM7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVUsYUFBQSxFQUFlLENBQUM7RUFBQztFQUFBLE9BQUFDLE9BQUE7QUFBQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2Vjb25lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIHRoaXMgaXMgd2hlcmUgYWxsIG9mIHRoZSBjbGFzc2VzIHdpbGwgYmU6XG4gICAgIC0tPlRhc2sgY2xhc3MgXG4gICAgIC0tPlByb2plY3QgY2xhc3NcbiovXG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZU9mVGFzaykge1xuICAgIHRoaXMubmFtZU9mVGFzayA9IG5hbWVPZlRhc2s7XG4gIH1cblxuICAvKiBmdW5jdGlvbiB0byBzdG9yZSB0aGUgdmFsdWUvbmFtZU9mdGFzayBpbiBhIGxvY2FsIHN0b3JhZ2UgKi9cbiAgc3RvcmluZ1ZhbHVlKCkge1xuICAgIC8vIEdldCB0aGUgZXhpc3RpbmcgdGFza3MgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSAoaWYgYW55KVxuICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuXG4gICAgLy8gQWRkaW5nIHRoZSBuZXcgdGFzayBuYW1lIHRvIHRoZSBleGlzdGluZyB0YXNrcyBhcnJheVxuICAgIGV4aXN0aW5nVGFza3MucHVzaCh0aGlzLm5hbWVPZlRhc2spO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Rhc2tzKSk7XG4gIH1cblxuICBwdXNoaW5nVmFsdWUoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWVPZlByb2plY3QpIHtcbiAgICB0aGlzLm5hbWVPZlByb2plY3QgPSBuYW1lT2ZQcm9qZWN0O1xuICB9XG5cbiAgc3RvcmluZ1ZhbHVlKCkge1xuICAgIC8vIEdldCB0aGUgZXhpc3RpbmcgdGFza3MgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSAoaWYgYW55KVxuICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG4gICAgLy8gQWRkaW5nIHRoZSBuZXcgdGFzayBuYW1lIHRvIHRoZSBleGlzdGluZyB0YXNrcyBhcnJheVxuICAgIGV4aXN0aW5nVGFza3MucHVzaCh0aGlzLm5hbWVPZlByb2plY3QpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Rhc2tzKSk7XG4gIH1cblxuICBwdXNoaW5nVmFsdWUoKSB7fVxufVxuIl0sIm5hbWVzIjpbIlRhc2siLCJuYW1lT2ZUYXNrIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzdG9yaW5nVmFsdWUiLCJleGlzdGluZ1Rhc2tzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHVzaGluZ1ZhbHVlIiwiUHJvamVjdCIsIm5hbWVPZlByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9