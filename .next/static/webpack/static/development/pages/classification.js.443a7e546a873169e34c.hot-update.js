webpackHotUpdate("static\\development\\pages\\classification.js",{

/***/ "./components/Documents.js":
/*!*********************************!*\
  !*** ./components/Documents.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _documents_file_map_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../documents-file-map.json */ "./documents-file-map.json");
var _documents_file_map_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../documents-file-map.json */ "./documents-file-map.json", 1);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
var _this = undefined,
    _jsxFileName = "D:\\Users\\Ndoto\\Documents\\GitHub\\bkfs-frontend-engineer-test-1\\components\\Documents.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var documents_array = []; //Right now the below code is only reading in the document type names from the JSON but
//this would be modified to also grab the corresponding sample pdf filenames.

Object.keys(_documents_file_map_json__WEBPACK_IMPORTED_MODULE_1__).map(function (document) {
  return documents_array.push({
    value: document,
    label: document
  });
});

var Documents = function Documents() {
  return __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: documents_array,
    isMulti: "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Documents);

/***/ })

})
//# sourceMappingURL=classification.js.443a7e546a873169e34c.hot-update.js.map