webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/IconGrid.js":
/*!********************************!*\
  !*** ./components/IconGrid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _this = undefined,
    _jsxFileName = "/Users/craigcavalier/workspace/icons/packages/www/components/IconGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import copyToClipboard from "./helpers/copyToClipboard"
 // safari doesn't support navigator.clipboard
// see: https://josephkhan.me/javascript-copy-clipboard-safari/

function copyToClipboard(textToCopy) {
  var textArea;

  function isOS() {
    //can use a better detection logic here
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text) {
    textArea = document.createElement('textArea');
    textArea.readOnly = true;
    textArea.contentEditable = true;
    textArea.value = text;
    document.body.appendChild(textArea);
  }

  function selectText() {
    var range, selection;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyTo() {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  createTextArea(textToCopy);
  selectText();
  copyTo();
}

var IconCard = function IconCard(_ref) {
  var Icon = _ref.Icon,
      name = _ref.name;
  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(name),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var handleClick = function handleClick(e) {
    var innerHTML;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleClick$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            innerHTML = ref.current.innerHTML;

            if (navigator.clipboard) {
              _context.next = 7;
              break;
            }

            copyToClipboard(outerHTML);
            setText('copied!');
            setTimeout(function () {
              setText(name);
            }, 1e3);
            _context.next = 16;
            break;

          case 7:
            _context.prev = 7;
            _context.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.clipboard.writeText(innerHTML));

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](7);
            console.error(_context.t0);
            return _context.abrupt("return");

          case 16:
            setText('copied!');
            setTimeout(function () {
              setText(name);
            }, 1e3);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[7, 12]], Promise);
  };

  return __jsx("div", {
    className: "pb-1/1 relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "absolute inset-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "flex flex-row justify-center items-center w-full h-full text-white hover:text-gray-100 bg-green-900 hover:bg-ez-green rounded-lg focus:outline-none shadow focus:shadow-outline",
    onPointerDown: function onPointerDown(e) {
      return e.preventDefault();
    },
    title: text,
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(Icon, {
    className: "w-8 h-8 fill-current text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "m-3 absolute inset-x-0 bottom-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-center font-semibold text-sm leading-snug truncate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, text)))));
};

var IconGrid = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (_ref2) {
  var icons = _ref2.icons;
  return __jsx("div", {
    style: {
      minHeight: 'calc(100vh - 6rem - 5.5rem - 1.5rem)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, icons.map(function (icon) {
    return __jsx(IconCard, {
      key: icon.name,
      name: icon.name,
      Icon: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    });
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (IconGrid);

/***/ })

})
//# sourceMappingURL=index.js.9b30c0afbebe4d873a7b.hot-update.js.map