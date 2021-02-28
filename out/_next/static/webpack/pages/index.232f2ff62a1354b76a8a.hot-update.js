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
      lineNumber: 18,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      label: "Read more",
      className: "p-button-text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"], {
      value: events1,
      align: "alternate",
      className: "customized-timeline",
      marker: customizedMarker,
      content: customizedContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9pbmRleC9UaGVUaW1lbGluZS5qc3giXSwibmFtZXMiOlsiY3VzdG9taXplZE1hcmtlciIsIml0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImljb24iLCJjdXN0b21pemVkQ29udGVudCIsInN0YXR1cyIsImRhdGUiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJuYW1lIiwiVGhlVGltZWxpbmUiLCJldmVudHMxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLDBCQUFoQjtBQUEyQyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRUQsSUFBSSxDQUFDRTtBQUF4QixLQUFsRDtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFRixJQUFJLENBQUNHO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztBQVFBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0osSUFBRCxFQUFVO0FBQ2xDLHNCQUNFLHFFQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFQSxJQUFJLENBQUNLLE1BQWxCO0FBQTBCLFlBQVEsRUFBRUwsSUFBSSxDQUFDTSxJQUF6QztBQUFBLGVBQ0dOLElBQUksQ0FBQ08sS0FBTCxpQkFFRztBQUNFLFNBQUcseUNBQWtDUCxJQUFJLENBQUNPLEtBQXZDLENBREw7QUFFRSxhQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsR0FBVCxHQUFlLHVFQUF0QjtBQUFBLE9BRlg7QUFHRSxTQUFHLEVBQUVWLElBQUksQ0FBQ1csSUFIWjtBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsZUFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhOLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWFFLHFFQUFDLHdEQUFEO0FBQVEsV0FBSyxFQUFDLFdBQWQ7QUFBMEIsZUFBUyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWxCRDs7QUFvQmUsU0FBU0MsV0FBVCxHQUF1QjtBQUNwQyxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUFFUixVQUFNLEVBQUUsU0FBVjtBQUFxQkMsUUFBSSxFQUFFLGtCQUEzQjtBQUErQ0gsUUFBSSxFQUFFLHFCQUFyRDtBQUE0RUQsU0FBSyxFQUFFLFNBQW5GO0FBQThGSyxTQUFLLEVBQUU7QUFBckcsR0FEYyxFQUVkO0FBQUVGLFVBQU0sRUFBRSxZQUFWO0FBQXdCQyxRQUFJLEVBQUUsa0JBQTlCO0FBQWtESCxRQUFJLEVBQUUsV0FBeEQ7QUFBcUVELFNBQUssRUFBRTtBQUE1RSxHQUZjLEVBR2Q7QUFBRUcsVUFBTSxFQUFFLFNBQVY7QUFBcUJDLFFBQUksRUFBRSxrQkFBM0I7QUFBK0NILFFBQUksRUFBRSxxQkFBckQ7QUFBNEVELFNBQUssRUFBRTtBQUFuRixHQUhjLEVBSWQ7QUFBRUcsVUFBTSxFQUFFLFdBQVY7QUFBdUJDLFFBQUksRUFBRSxrQkFBN0I7QUFBaURILFFBQUksRUFBRSxhQUF2RDtBQUFzRUQsU0FBSyxFQUFFO0FBQTdFLEdBSmMsQ0FBaEI7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVXLE9BRFQ7QUFFRSxXQUFLLEVBQUMsV0FGUjtBQUdFLGVBQVMsRUFBQyxxQkFIWjtBQUlFLFlBQU0sRUFBRWQsZ0JBSlY7QUFLRSxhQUFPLEVBQUVLO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO0tBbkJ1QlEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMzJmMmZmNjJhMTM1NGI3NmE4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICdwcmltZXJlYWN0L3RpbWVsaW5lJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdwcmltZXJlYWN0L2NhcmQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xuXG5jb25zdCBjdXN0b21pemVkTWFya2VyID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tbWFya2VyIHAtc2hhZG93LTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfX0+XG4gICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IGN1c3RvbWl6ZWRDb250ZW50ID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCB0aXRsZT17aXRlbS5zdGF0dXN9IHN1YlRpdGxlPXtpdGVtLmRhdGV9PlxuICAgICAge2l0ZW0uaW1hZ2VcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YHNob3djYXNlL2RlbW8vaW1hZ2VzL3Byb2R1Y3QvJHtpdGVtLmltYWdlfWB9XG4gICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gZS50YXJnZXQuc3JjID0gJ2h0dHBzOi8vd3d3LnByaW1lZmFjZXMub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L3BsYWNlaG9sZGVyLnBuZyd9XG4gICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLXNoYWRvdy0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW52ZW50b3JlIHNlZCBjb25zZXF1dW50dXIgZXJyb3IgcmVwdWRpYW5kYWUgbnVtcXVhbSBkZXNlcnVudCBxdWlzcXVhbSByZXBlbGxhdCBsaWJlcm8gYXNwZXJpb3JlcyBlYXJ1bSBuYW0gbm9iaXMsIGN1bHBhIHJhdGlvbmUgcXVhbSBwZXJmZXJlbmRpcyBlc3NlLCBjdXBpZGl0YXRlIG5lcXVlIHF1YXMhPC9wPlxuICAgICAgPEJ1dHRvbiBsYWJlbD1cIlJlYWQgbW9yZVwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHRcIj48L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVUaW1lbGluZSgpIHtcbiAgY29uc3QgZXZlbnRzMSA9IFtcbiAgICB7IHN0YXR1czogJ09yZGVyZWQnLCBkYXRlOiAnMTUvMTAvMjAyMCAxMDozMCcsIGljb246ICdwaSBwaS1zaG9wcGluZy1jYXJ0JywgY29sb3I6ICcjOUMyN0IwJywgaW1hZ2U6ICdnYW1lLWNvbnRyb2xsZXIuanBnJyB9LFxuICAgIHsgc3RhdHVzOiAnUHJvY2Vzc2luZycsIGRhdGU6ICcxNS8xMC8yMDIwIDE0OjAwJywgaWNvbjogJ3BpIHBpLWNvZycsIGNvbG9yOiAnIzY3M0FCNycgfSxcbiAgICB7IHN0YXR1czogJ1NoaXBwZWQnLCBkYXRlOiAnMTUvMTAvMjAyMCAxNjoxNScsIGljb246ICdwaSBwaS1zaG9wcGluZy1jYXJ0JywgY29sb3I6ICcjRkY5ODAwJyB9LFxuICAgIHsgc3RhdHVzOiAnRGVsaXZlcmVkJywgZGF0ZTogJzE2LzEwLzIwMjAgMTA6MDAnLCBpY29uOiAncGkgcGktY2hlY2snLCBjb2xvcjogJyM2MDdEOEInIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPFRpbWVsaW5lXG4gICAgICAgIHZhbHVlPXtldmVudHMxfVxuICAgICAgICBhbGlnbj1cImFsdGVybmF0ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbWl6ZWQtdGltZWxpbmVcIlxuICAgICAgICBtYXJrZXI9e2N1c3RvbWl6ZWRNYXJrZXJ9XG4gICAgICAgIGNvbnRlbnQ9e2N1c3RvbWl6ZWRDb250ZW50fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=