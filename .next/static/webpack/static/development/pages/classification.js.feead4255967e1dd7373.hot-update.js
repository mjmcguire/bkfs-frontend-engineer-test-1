webpackHotUpdate("static\\development\\pages\\classification.js",{

/***/ "./components/Customers.js":
/*!*********************************!*\
  !*** ./components/Customers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _customers_file_map_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customers-file-map.json */ "./customers-file-map.json");
var _customers_file_map_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../customers-file-map.json */ "./customers-file-map.json", 1);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
var _this = undefined,
    _jsxFileName = "D:\\Users\\Ndoto\\Documents\\GitHub\\bkfs-frontend-engineer-test-1\\components\\Customers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var customers_array = [];
Object.keys(_customers_file_map_json__WEBPACK_IMPORTED_MODULE_1__).map(function (customer) {
  return customers_array.push({
    value: customer,
    label: customer
  });
});

var Customers = function Customers() {
  return __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: customers_array,
    isMulti: "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Customers);

/***/ })

})
//# sourceMappingURL=classification.js.feead4255967e1dd7373.hot-update.js.map