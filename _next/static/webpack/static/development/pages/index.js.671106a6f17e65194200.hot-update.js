webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Evento/Evento.js":
/*!*************************************!*\
  !*** ./components/Evento/Evento.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Evento_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evento.css */ "./components/Evento/Evento.css");
/* harmony import */ var _Evento_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Evento_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\repos\\react_udemy\\react-next-bitcoin-app\\components\\Evento\\Evento.js";



var Evento = function Evento(props) {
  var _props$info = props.info,
      url = _props$info.url,
      name = _props$info.name,
      description = _props$info.description;
  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 180) + '...';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "list-group-item bg-primary active mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, desc));
};

Evento.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.671106a6f17e65194200.hot-update.js.map