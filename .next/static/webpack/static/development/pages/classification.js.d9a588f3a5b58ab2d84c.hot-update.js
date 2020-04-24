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



var documents_array = [];
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
      lineNumber: 12,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Documents);

/***/ }),

/***/ "./documents-file-map.json":
/*!*********************************!*\
  !*** ./documents-file-map.json ***!
  \*********************************/
/*! exports provided: Appraisal Report, Automated Underwriting Feedback - DU Codified Findings, Closing Disclosure, Credit Report, Security Intrument Rider - ARM, Pay Stub, W2, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Appraisal Report\":\"samples/Appraisal Report.pdf\",\"Automated Underwriting Feedback - DU Codified Findings\":\"samples/Automated Underwriting Feedback - DU Codified Findings.pdf\",\"Closing Disclosure\":\"samples/Closing Disclosure.pdf\",\"Credit Report\":\"samples/Credit Report.pdf\",\"Security Intrument Rider - ARM\":\"samples/Security Intrument Rider - ARM.pdf\",\"Pay Stub\":\"\",\"W2\":\"\"}");

/***/ }),

/***/ "./pages/classification.js":
/*!*********************************!*\
  !*** ./pages/classification.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Classification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_LikeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LikeButton */ "./components/LikeButton.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_Customers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Customers */ "./components/Customers.js");
/* harmony import */ var _components_Documents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Documents */ "./components/Documents.js");
var _jsxFileName = "D:\\Users\\Ndoto\\Documents\\GitHub\\bkfs-frontend-engineer-test-1\\pages\\classification.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Classification() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Document Classifications by Customer"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "Document Classifications by Customer")), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Select a Customer", __jsx(_components_Customers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Select a Document Type", __jsx(_components_Documents__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    striped: true,
    bordered: true,
    hover: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, "Document Types"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, "First Customer"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Second Customer"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "Document A"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, "First Customer's Document A"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, "Second Customer's Document A")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "Document B"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "First Customer's Document B"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Second Customer's Document B"))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(_components_LikeButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 24
    }
  })))));
}
;

/***/ })

})
//# sourceMappingURL=classification.js.d9a588f3a5b58ab2d84c.hot-update.js.map