webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Evento/Evento.css":
/*!**************************************!*\
  !*** ./components/Evento/Evento.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Evento");
};

Evento.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ }),

/***/ "./components/Eventos/Eventos.js":
/*!***************************************!*\
  !*** ./components/Eventos/Eventos.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Eventos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Eventos.css */ "./components/Eventos/Eventos.css");
/* harmony import */ var _Eventos_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Eventos_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Evento_Evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Evento/Evento */ "./components/Evento/Evento.js");
var _jsxFileName = "D:\\repos\\react_udemy\\react-next-bitcoin-app\\components\\Eventos\\Eventos.js";




var Eventos = function Eventos(props) {
  {
    console.log(props);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.eventos.map(function (evento) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Evento_Evento__WEBPACK_IMPORTED_MODULE_2__["default"], {
      info: evento,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

Eventos.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.933f4e096b4665a75998.hot-update.js.map