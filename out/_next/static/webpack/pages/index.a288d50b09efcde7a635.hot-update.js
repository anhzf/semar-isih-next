webpackHotUpdate_N_E("pages/index",{

/***/ "./components/blocks/TheNav.jsx":
/*!**************************************!*\
  !*** ./components/blocks/TheNav.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheNav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Menu */ "./components/Menu.jsx");
/* harmony import */ var components_elements_Space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/elements/Space */ "./components/elements/Space.jsx");


var _jsxFileName = "D:\\Repositories\\semar-isih-next\\components\\blocks\\TheNav.jsx",
    _s = $RefreshSig$();







function TheNav(_ref) {
  _s();

  var transparent = _ref.transparent;
  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "fixed hidden top-0 z-50 w-full px-16 py-2 ".concat(transparent ? 'navbar-transparent bg-transparent' : 'bg-white shadow-md', " sm:flex flex-row flex-nowrap items-center gap-x-8"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "relative w-14 h-14",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/assets/LOGO-SEMAR-IOT_no-text.png",
          alt: "Logo Semar IOT",
          layout: "fill"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_elements_Space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        label: "About",
        className: "p-button-text p-button-rounded text-white",
        onClick: function onClick(e) {
          return menuRef.current.toggle(e);
        },
        "aria-controls": "popup_menu",
        "aria-haspopup": true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ref: menuRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/#about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "About the Events"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/about-uns",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "About UNS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "/#terms",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        label: "Guidelines",
        className: "p-button-text p-button-rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "/#timeline",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        label: "Timeline",
        className: "p-button-text p-button-rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "/#judges",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        label: "Judges",
        className: "p-button-text p-button-rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "/#faq",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        label: "FAQ",
        className: "p-button-text p-button-rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "http://bit.ly/SemarIoT2021-register",
      target: "_blank",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        label: "Register",
        className: "p-button-rounded p-button-warning"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(TheNav, "wwfm6srM2YvI+yRyIz7GebNqWJI=");

_c = TheNav;
;

var _c;

$RefreshReg$(_c, "TheNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ja3MvVGhlTmF2LmpzeCJdLCJuYW1lcyI6WyJUaGVOYXYiLCJ0cmFuc3BhcmVudCIsIm1lbnVSZWYiLCJ1c2VSZWYiLCJlIiwiY3VycmVudCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlO0FBQzlDLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLHNEQUErQ0YsV0FBVyxHQUFHLG1DQUFILEdBQXlDLG9CQUFuRyx1REFBZDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBQSwrQkFDRSxxRUFBQyxpREFBRDtBQUNFLGFBQUcsRUFBQyxvQ0FETjtBQUVFLGFBQUcsRUFBQyxnQkFGTjtBQUdFLGdCQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWFFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUNFLGFBQUssRUFBQyxPQURSO0FBRUUsaUJBQVMsRUFBQywyQ0FGWjtBQUdFLGVBQU8sRUFBRSxpQkFBQUcsQ0FBQztBQUFBLGlCQUFJRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLE1BQWhCLENBQXVCRixDQUF2QixDQUFKO0FBQUEsU0FIWjtBQUlFLHlCQUFjLFlBSmhCO0FBS0U7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSxxRUFBQyx1REFBRDtBQUFNLFdBQUcsRUFBRUYsT0FBWDtBQUFBLGdDQUNFLHFFQUFDLHVEQUFELENBQU0sSUFBTjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxTQUFYO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FLHFFQUFDLHVEQUFELENBQU0sSUFBTjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxZQUFYO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQW9DRTtBQUFHLFVBQUksRUFBQyxTQUFSO0FBQUEsNkJBQ0UscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsWUFBZDtBQUEyQixpQkFBUyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENGLGVBd0NFO0FBQUcsVUFBSSxFQUFDLFlBQVI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxVQUFkO0FBQXlCLGlCQUFTLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q0YsZUE0Q0U7QUFBRyxVQUFJLEVBQUMsVUFBUjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFFBQWQ7QUFBdUIsaUJBQVMsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVDRixlQWdERTtBQUFHLFVBQUksRUFBQyxPQUFSO0FBQUEsNkJBQ0UscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFvQixpQkFBUyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaERGLGVBb0RFO0FBQUcsVUFBSSxFQUFDLHFDQUFSO0FBQThDLFlBQU0sRUFBQyxRQUFyRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFVBQWQ7QUFBeUIsaUJBQVMsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBERDs7R0E3RHVCRixNOztLQUFBQSxNO0FBNkR2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMjg4ZDUwYjA5ZWZjZGU3YTYzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgU3BhY2UgZnJvbSAnY29tcG9uZW50cy9lbGVtZW50cy9TcGFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZU5hdih7IHRyYW5zcGFyZW50IH0pIHtcbiAgY29uc3QgbWVudVJlZiA9IHVzZVJlZihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtgZml4ZWQgaGlkZGVuIHRvcC0wIHotNTAgdy1mdWxsIHB4LTE2IHB5LTIgJHt0cmFuc3BhcmVudCA/ICduYXZiYXItdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQnIDogJ2JnLXdoaXRlIHNoYWRvdy1tZCd9IHNtOmZsZXggZmxleC1yb3cgZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyIGdhcC14LThgfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTQgaC0xNFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9MT0dPLVNFTUFSLUlPVF9uby10ZXh0LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJMb2dvIFNlbWFyIElPVFwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxTcGFjZSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkFib3V0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0IHAtYnV0dG9uLXJvdW5kZWQgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgb25DbGljaz17ZSA9PiBtZW51UmVmLmN1cnJlbnQudG9nZ2xlKGUpfVxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwb3B1cF9tZW51XCJcbiAgICAgICAgICBhcmlhLWhhc3BvcHVwXG4gICAgICAgIC8+XG4gICAgICAgIDxNZW51IHJlZj17bWVudVJlZn0+XG4gICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2Fib3V0XCI+XG4gICAgICAgICAgICAgIDxhPkFib3V0IHRoZSBFdmVudHM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dC11bnNcIj5cbiAgICAgICAgICAgICAgPGE+QWJvdXQgVU5TPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGEgaHJlZj1cIi8jdGVybXNcIj5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkd1aWRlbGluZXNcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0IHAtYnV0dG9uLXJvdW5kZWRcIiAvPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiLyN0aW1lbGluZVwiPlxuICAgICAgICA8QnV0dG9uIGxhYmVsPVwiVGltZWxpbmVcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0IHAtYnV0dG9uLXJvdW5kZWRcIiAvPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiLyNqdWRnZXNcIj5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkp1ZGdlc1wiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHQgcC1idXR0b24tcm91bmRlZFwiIC8+XG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGhyZWY9XCIvI2ZhcVwiPlxuICAgICAgICA8QnV0dG9uIGxhYmVsPVwiRkFRXCIgY2xhc3NOYW1lPVwicC1idXR0b24tdGV4dCBwLWJ1dHRvbi1yb3VuZGVkXCIgLz5cbiAgICAgIDwvYT5cblxuICAgICAgPGEgaHJlZj1cImh0dHA6Ly9iaXQubHkvU2VtYXJJb1QyMDIxLXJlZ2lzdGVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxCdXR0b24gbGFiZWw9XCJSZWdpc3RlclwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIC8+XG4gICAgICA8L2E+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==