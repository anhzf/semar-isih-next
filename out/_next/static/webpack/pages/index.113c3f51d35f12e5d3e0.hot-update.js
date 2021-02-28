webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ui/index/TheTimeline.jsx":
/*!*********************************************!*\
  !*** ./components/ui/index/TheTimeline.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheTimeline; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/timeline */ "./node_modules/primereact/timeline.js");
/* harmony import */ var primereact_timeline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_timeline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/card */ "./node_modules/primereact/card.js");
/* harmony import */ var primereact_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Repositories\\semar-isih-next\\components\\ui\\index\\TheTimeline.jsx",
    _this = undefined;





var customizedMarker = function customizedMarker(item) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "custom-marker p-shadow-2",
    style: {
      backgroundColor: item.color
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: item.icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

var customizedContent = function customizedContent(item) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: item.status,
    subTitle: item.date,
    children: [item.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "showcase/demo/images/product/".concat(item.image),
      onError: function onError(e) {
        return e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';
      },
      alt: item.name,
      width: 200,
      className: "p-shadow-2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 23
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      label: "Read more",
      className: "p-button-text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

function TheTimeline() {
  var events1 = [{
    status: 'Ordered',
    date: '15/10/2020 10:30',
    icon: 'pi pi-shopping-cart',
    color: '#9C27B0',
    image: 'game-controller.jpg'
  }, {
    status: 'Processing',
    date: '15/10/2020 14:00',
    icon: 'pi pi-cog',
    color: '#673AB7'
  }, {
    status: 'Shipped',
    date: '15/10/2020 16:15',
    icon: 'pi pi-shopping-cart',
    color: '#FF9800'
  }, {
    status: 'Delivered',
    date: '16/10/2020 10:00',
    icon: 'pi pi-check',
    color: '#607D8B'
  }];
  var events2 = ['2020', '2021', '2022', '2023'];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: "Customized"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"], {
      value: events1,
      align: "alternate",
      className: "customized-timeline",
      marker: customizedMarker,
      content: customizedContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
_c = TheTimeline;

var _c;

$RefreshReg$(_c, "TheTimeline");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9pbmRleC9UaGVUaW1lbGluZS5qc3giXSwibmFtZXMiOlsiY3VzdG9taXplZE1hcmtlciIsIml0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImljb24iLCJjdXN0b21pemVkQ29udGVudCIsInN0YXR1cyIsImRhdGUiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJuYW1lIiwiVGhlVGltZWxpbmUiLCJldmVudHMxIiwiZXZlbnRzMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBVTtBQUNqQyxzQkFDRTtBQUFNLGFBQVMsRUFBQywwQkFBaEI7QUFBMkMsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUVELElBQUksQ0FBQ0U7QUFBeEIsS0FBbEQ7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUYsSUFBSSxDQUFDRztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNKLElBQUQsRUFBVTtBQUNsQyxzQkFDRSxxRUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRUEsSUFBSSxDQUFDSyxNQUFsQjtBQUEwQixZQUFRLEVBQUVMLElBQUksQ0FBQ00sSUFBekM7QUFBQSxlQUNJTixJQUFJLENBQUNPLEtBQUwsaUJBQWM7QUFBSyxTQUFHLHlDQUFrQ1AsSUFBSSxDQUFDTyxLQUF2QyxDQUFSO0FBQXdELGFBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxHQUFULEdBQWUsdUVBQXRCO0FBQUEsT0FBakU7QUFBZ0ssU0FBRyxFQUFFVixJQUFJLENBQUNXLElBQTFLO0FBQWdMLFdBQUssRUFBRSxHQUF2TDtBQUE0TCxlQUFTLEVBQUM7QUFBdE07QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURsQixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFJRSxxRUFBQyx3REFBRDtBQUFRLFdBQUssRUFBQyxXQUFkO0FBQTBCLGVBQVMsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztBQVdlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRVIsVUFBTSxFQUFFLFNBQVY7QUFBcUJDLFFBQUksRUFBRSxrQkFBM0I7QUFBK0NILFFBQUksRUFBRSxxQkFBckQ7QUFBNEVELFNBQUssRUFBRSxTQUFuRjtBQUE4RkssU0FBSyxFQUFFO0FBQXJHLEdBRGMsRUFFZDtBQUFFRixVQUFNLEVBQUUsWUFBVjtBQUF3QkMsUUFBSSxFQUFFLGtCQUE5QjtBQUFrREgsUUFBSSxFQUFFLFdBQXhEO0FBQXFFRCxTQUFLLEVBQUU7QUFBNUUsR0FGYyxFQUdkO0FBQUVHLFVBQU0sRUFBRSxTQUFWO0FBQXFCQyxRQUFJLEVBQUUsa0JBQTNCO0FBQStDSCxRQUFJLEVBQUUscUJBQXJEO0FBQTRFRCxTQUFLLEVBQUU7QUFBbkYsR0FIYyxFQUlkO0FBQUVHLFVBQU0sRUFBRSxXQUFWO0FBQXVCQyxRQUFJLEVBQUUsa0JBQTdCO0FBQWlESCxRQUFJLEVBQUUsYUFBdkQ7QUFBc0VELFNBQUssRUFBRTtBQUE3RSxHQUpjLENBQWhCO0FBT0EsTUFBTVksT0FBTyxHQUFHLENBQ2QsTUFEYyxFQUNOLE1BRE0sRUFDRSxNQURGLEVBQ1UsTUFEVixDQUFoQjtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVELE9BRFQ7QUFFRSxXQUFLLEVBQUMsV0FGUjtBQUdFLGVBQVMsRUFBQyxxQkFIWjtBQUlFLFlBQU0sRUFBRWQsZ0JBSlY7QUFLRSxhQUFPLEVBQUVLO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0F2QnVCUSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjExM2MzZjUxZDM1ZjEyZTVkM2UwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3ByaW1lcmVhY3QvdGltZWxpbmUnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3ByaW1lcmVhY3QvY2FyZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XG5cbmNvbnN0IGN1c3RvbWl6ZWRNYXJrZXIgPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1tYXJrZXIgcC1zaGFkb3ctMlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9fT5cbiAgICAgIDxpIGNsYXNzTmFtZT17aXRlbS5pY29ufT48L2k+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuY29uc3QgY3VzdG9taXplZENvbnRlbnQgPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHRpdGxlPXtpdGVtLnN0YXR1c30gc3ViVGl0bGU9e2l0ZW0uZGF0ZX0+XG4gICAgICB7IGl0ZW0uaW1hZ2UgJiYgPGltZyBzcmM9e2BzaG93Y2FzZS9kZW1vL2ltYWdlcy9wcm9kdWN0LyR7aXRlbS5pbWFnZX1gfSBvbkVycm9yPXsoZSkgPT4gZS50YXJnZXQuc3JjID0gJ2h0dHBzOi8vd3d3LnByaW1lZmFjZXMub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L3BsYWNlaG9sZGVyLnBuZyd9IGFsdD17aXRlbS5uYW1lfSB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJwLXNoYWRvdy0yXCIgLz59XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW52ZW50b3JlIHNlZCBjb25zZXF1dW50dXIgZXJyb3IgcmVwdWRpYW5kYWUgbnVtcXVhbSBkZXNlcnVudFxuICAgICAgICAgICAgICBxdWlzcXVhbSByZXBlbGxhdCBsaWJlcm8gYXNwZXJpb3JlcyBlYXJ1bSBuYW0gbm9iaXMsIGN1bHBhIHJhdGlvbmUgcXVhbSBwZXJmZXJlbmRpcyBlc3NlLCBjdXBpZGl0YXRlIG5lcXVlIHF1YXMhPC9wPlxuICAgICAgPEJ1dHRvbiBsYWJlbD1cIlJlYWQgbW9yZVwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHRcIj48L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVUaW1lbGluZSgpIHtcbiAgY29uc3QgZXZlbnRzMSA9IFtcbiAgICB7IHN0YXR1czogJ09yZGVyZWQnLCBkYXRlOiAnMTUvMTAvMjAyMCAxMDozMCcsIGljb246ICdwaSBwaS1zaG9wcGluZy1jYXJ0JywgY29sb3I6ICcjOUMyN0IwJywgaW1hZ2U6ICdnYW1lLWNvbnRyb2xsZXIuanBnJyB9LFxuICAgIHsgc3RhdHVzOiAnUHJvY2Vzc2luZycsIGRhdGU6ICcxNS8xMC8yMDIwIDE0OjAwJywgaWNvbjogJ3BpIHBpLWNvZycsIGNvbG9yOiAnIzY3M0FCNycgfSxcbiAgICB7IHN0YXR1czogJ1NoaXBwZWQnLCBkYXRlOiAnMTUvMTAvMjAyMCAxNjoxNScsIGljb246ICdwaSBwaS1zaG9wcGluZy1jYXJ0JywgY29sb3I6ICcjRkY5ODAwJyB9LFxuICAgIHsgc3RhdHVzOiAnRGVsaXZlcmVkJywgZGF0ZTogJzE2LzEwLzIwMjAgMTA6MDAnLCBpY29uOiAncGkgcGktY2hlY2snLCBjb2xvcjogJyM2MDdEOEInIH1cbiAgXTtcblxuICBjb25zdCBldmVudHMyID0gW1xuICAgICcyMDIwJywgJzIwMjEnLCAnMjAyMicsICcyMDIzJ1xuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPGg1PkN1c3RvbWl6ZWQ8L2g1PlxuICAgICAgPFRpbWVsaW5lXG4gICAgICAgIHZhbHVlPXtldmVudHMxfVxuICAgICAgICBhbGlnbj1cImFsdGVybmF0ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbWl6ZWQtdGltZWxpbmVcIlxuICAgICAgICBtYXJrZXI9e2N1c3RvbWl6ZWRNYXJrZXJ9XG4gICAgICAgIGNvbnRlbnQ9e2N1c3RvbWl6ZWRDb250ZW50fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=