webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Eventos/Eventos.css":
/*!****************************************!*\
  !*** ./components/Eventos/Eventos.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
var _jsxFileName = "D:\\repos\\react_udemy\\react-next-bitcoin-app\\components\\Eventos\\Eventos.js";



var Eventos = function Eventos(props) {
  {
    console.log(props);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Eventos");
};

Eventos.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ }),

/***/ "./components/Eventos/index.js":
/*!*************************************!*\
  !*** ./components/Eventos/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Eventos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eventos */ "./components/Eventos/Eventos.js");

/* harmony default export */ __webpack_exports__["default"] = (_Eventos__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navegation_Navegation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navegation/Navegation */ "./components/Navegation/Navegation.js");
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Master */ "./components/Master/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Noticias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Noticias */ "./components/Noticias/index.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Eventos */ "./components/Eventos/index.js");

var _jsxFileName = "D:\\repos\\react_udemy\\react-next-bitcoin-app\\pages\\index.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Precio Actual: $", props.precioBitcoin.price.toFixed(2)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Ultima Hora:"), props.precioBitcoin.percent_change_1h, " %"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Ultimas 24h:"), props.precioBitcoin.percent_change_24h, " %"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Ultimos 7d:"), props.precioBitcoin.percent_change_7d, " %")))), console.log(props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Noticias sobre el BItcoin"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Noticias__WEBPACK_IMPORTED_MODULE_5__["default"], {
    noticias: props.noticias,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Proximos eventos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Eventos__WEBPACK_IMPORTED_MODULE_6__["default"], {
    eventos: props.eventos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, noticias, eventos, resPrecio, resNoticias, resEventos;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.coinmarketcap.com/v2/ticker/1/');

        case 3:
          precio = _context.sent;
          _context.next = 6;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://newsapi.org/v2/everything/?q=bitcoin&apiKey=1976374f9d1446b290be434e147ea4de&language=es");

        case 6:
          noticias = _context.sent;
          _context.next = 9;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://www.eventbriteapi.com/v3/events/search/?q=managua&location.address=Nicaragua&token=37IC2UCENTI4KE3DPJ3W');

        case 9:
          eventos = _context.sent;
          _context.next = 12;
          return precio.json();

        case 12:
          resPrecio = _context.sent;
          _context.next = 15;
          return noticias.json();

        case 15:
          resNoticias = _context.sent;
          _context.next = 18;
          return eventos.json();

        case 18:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticias: resNoticias.articles,
            eventos: resEventos
          });

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", {});

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 22]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.6b50eba9d2ff0d5738e2.hot-update.js.map