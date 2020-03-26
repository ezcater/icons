webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_IconGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IconGrid */ "./components/IconGrid.js");
/* harmony import */ var _ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ezcater/icons/dist */ "../icons/dist/index.js");
/* harmony import */ var _ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/craigcavalier/workspace/icons/packages/www/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var allIcons = Object.keys(_ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_5__).map(function (key) {
  return _ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_5__[key];
});

var Home = function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      query = _React$useState2[0],
      setQuery = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(allIcons),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      icons = _React$useState4[0],
      setIcons = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var id = setTimeout(function () {
      var queryLower = query.toLowerCase();
      var subset = allIcons.filter(function (each) {
        return each.originalFilename.toLowerCase().includes(queryLower);
      });
      setIcons(subset);
    }, 25);
    return function () {
      clearTimeout(id);
    };
  }, [query]);
  return __jsx("div", {
    className: "py-24 flex flex-row justify-center min-h-screen bg-kale-green antialiased",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "@ezcater/icons"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row lg:text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-base leading-6 text-ez-green font-semibold tracking-wide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "@ezcater/icons"), __jsx("h3", {
    className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Icons for every occasion"), __jsx("p", {
    className: "mt-4 max-w-2xl text-xl leading-7 text-gray-400 lg:mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Our talented marketing folks have created hundreds of branded icons."), __jsx("p", {
    className: "mt-4 max-w-2xl text-xl leading-7 text-gray-400 lg:mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "For each SVG icon, import the respective React component using the", ' ', __jsx("a", {
    href: "https://github.com/ezcater/icons",
    className: "text-ez-green hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "@ezcater/icons"), ' ', "package, or click any icon below to copy the SVG source.")), __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "mt-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_components_IconGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icons: icons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6f10b17b5faf77b1436d.hot-update.js.map