webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Search.js":
false,

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ezcater/icons/dist */ "../icons/dist/index.js");
/* harmony import */ var _ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/craigcavalier/workspace/icons/packages/www/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Search = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Search */ "./components/Search.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/Search */ "./components/Search.js")];
    },
    modules: ['../components/Search']
  }
});
var IconGrid = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/IconGrid */ "./components/IconGrid.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/IconGrid */ "./components/IconGrid.js")];
    },
    modules: ['../components/IconGrid']
  }
});
var allIcons = Object.keys(_ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_4__).map(function (key) {
  return _ezcater_icons_dist__WEBPACK_IMPORTED_MODULE_4__[key];
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
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "@ezcater/icons"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-base leading-6 text-ez-green font-semibold tracking-wide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "@ezcater/icons"), __jsx("h3", {
    className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Icons for every occasion"), __jsx("p", {
    className: "mt-4 max-w-2xl text-xl leading-7 text-gray-400 lg:mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Our talented marketing folks have created hundreds of branded icons."), __jsx("p", {
    className: "mt-4 max-w-2xl text-xl leading-7 text-gray-400 lg:mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "For each SVG icon, import the respective React component using the", ' ', __jsx("a", {
    href: "https://github.com/ezcater/icons",
    className: "text-ez-green hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "@ezcater/icons"), ' ', "package, or click any icon below to copy the SVG source.")), __jsx(Search, {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "mt-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(IconGrid, {
    icons: icons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8caba6a4b92f43315469.hot-update.js.map