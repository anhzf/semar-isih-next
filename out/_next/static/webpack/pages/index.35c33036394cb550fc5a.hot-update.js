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
  var events2 = ['2020', '2021', '2022', '2023'];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: "Customized"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"], {
      value: events1,
      align: "alternate",
      className: "customized-timeline",
      marker: customizedMarker,
      content: customizedContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9pbmRleC9UaGVUaW1lbGluZS5qc3giXSwibmFtZXMiOlsiY3VzdG9taXplZE1hcmtlciIsIml0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImljb24iLCJjdXN0b21pemVkQ29udGVudCIsInN0YXR1cyIsImRhdGUiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJuYW1lIiwiVGhlVGltZWxpbmUiLCJldmVudHMxIiwiZXZlbnRzMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBVTtBQUNqQyxzQkFDRTtBQUFNLGFBQVMsRUFBQywwQkFBaEI7QUFBMkMsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUVELElBQUksQ0FBQ0U7QUFBeEIsS0FBbEQ7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUYsSUFBSSxDQUFDRztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNKLElBQUQsRUFBVTtBQUNsQyxzQkFDRSxxRUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRUEsSUFBSSxDQUFDSyxNQUFsQjtBQUEwQixZQUFRLEVBQUVMLElBQUksQ0FBQ00sSUFBekM7QUFBQSxlQUNHTixJQUFJLENBQUNPLEtBQUwsaUJBRUc7QUFDRSxTQUFHLHlDQUFrQ1AsSUFBSSxDQUFDTyxLQUF2QyxDQURMO0FBRUUsYUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEdBQVQsR0FBZSx1RUFBdEI7QUFBQSxPQUZYO0FBR0UsU0FBRyxFQUFFVixJQUFJLENBQUNXLElBSFo7QUFJRSxXQUFLLEVBQUUsR0FKVDtBQUtFLGVBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFITixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFhRSxxRUFBQyx3REFBRDtBQUFRLFdBQUssRUFBQyxXQUFkO0FBQTBCLGVBQVMsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0FsQkQ7O0FBb0JlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRVIsVUFBTSxFQUFFLFNBQVY7QUFBcUJDLFFBQUksRUFBRSxrQkFBM0I7QUFBK0NILFFBQUksRUFBRSxxQkFBckQ7QUFBNEVELFNBQUssRUFBRSxTQUFuRjtBQUE4RkssU0FBSyxFQUFFO0FBQXJHLEdBRGMsRUFFZDtBQUFFRixVQUFNLEVBQUUsWUFBVjtBQUF3QkMsUUFBSSxFQUFFLGtCQUE5QjtBQUFrREgsUUFBSSxFQUFFLFdBQXhEO0FBQXFFRCxTQUFLLEVBQUU7QUFBNUUsR0FGYyxFQUdkO0FBQUVHLFVBQU0sRUFBRSxTQUFWO0FBQXFCQyxRQUFJLEVBQUUsa0JBQTNCO0FBQStDSCxRQUFJLEVBQUUscUJBQXJEO0FBQTRFRCxTQUFLLEVBQUU7QUFBbkYsR0FIYyxFQUlkO0FBQUVHLFVBQU0sRUFBRSxXQUFWO0FBQXVCQyxRQUFJLEVBQUUsa0JBQTdCO0FBQWlESCxRQUFJLEVBQUUsYUFBdkQ7QUFBc0VELFNBQUssRUFBRTtBQUE3RSxHQUpjLENBQWhCO0FBT0EsTUFBTVksT0FBTyxHQUFHLENBQ2QsTUFEYyxFQUNOLE1BRE0sRUFDRSxNQURGLEVBQ1UsTUFEVixDQUFoQjtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVELE9BRFQ7QUFFRSxXQUFLLEVBQUMsV0FGUjtBQUdFLGVBQVMsRUFBQyxxQkFIWjtBQUlFLFlBQU0sRUFBRWQsZ0JBSlY7QUFLRSxhQUFPLEVBQUVLO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0F2QnVCUSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1YzMzMDM2Mzk0Y2I1NTBmYzVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3ByaW1lcmVhY3QvdGltZWxpbmUnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3ByaW1lcmVhY3QvY2FyZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XG5cbmNvbnN0IGN1c3RvbWl6ZWRNYXJrZXIgPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1tYXJrZXIgcC1zaGFkb3ctMlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9fT5cbiAgICAgIDxpIGNsYXNzTmFtZT17aXRlbS5pY29ufT48L2k+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuY29uc3QgY3VzdG9taXplZENvbnRlbnQgPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHRpdGxlPXtpdGVtLnN0YXR1c30gc3ViVGl0bGU9e2l0ZW0uZGF0ZX0+XG4gICAgICB7aXRlbS5pbWFnZVxuICAgICAgICAmJiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgc2hvd2Nhc2UvZGVtby9pbWFnZXMvcHJvZHVjdC8ke2l0ZW0uaW1hZ2V9YH1cbiAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiBlLnRhcmdldC5zcmMgPSAnaHR0cHM6Ly93d3cucHJpbWVmYWNlcy5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvcGxhY2Vob2xkZXIucG5nJ31cbiAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtc2hhZG93LTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbnZlbnRvcmUgc2VkIGNvbnNlcXV1bnR1ciBlcnJvciByZXB1ZGlhbmRhZSBudW1xdWFtIGRlc2VydW50IHF1aXNxdWFtIHJlcGVsbGF0IGxpYmVybyBhc3BlcmlvcmVzIGVhcnVtIG5hbSBub2JpcywgY3VscGEgcmF0aW9uZSBxdWFtIHBlcmZlcmVuZGlzIGVzc2UsIGN1cGlkaXRhdGUgbmVxdWUgcXVhcyE8L3A+XG4gICAgICA8QnV0dG9uIGxhYmVsPVwiUmVhZCBtb3JlXCIgY2xhc3NOYW1lPVwicC1idXR0b24tdGV4dFwiPjwvQnV0dG9uPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZVRpbWVsaW5lKCkge1xuICBjb25zdCBldmVudHMxID0gW1xuICAgIHsgc3RhdHVzOiAnT3JkZXJlZCcsIGRhdGU6ICcxNS8xMC8yMDIwIDEwOjMwJywgaWNvbjogJ3BpIHBpLXNob3BwaW5nLWNhcnQnLCBjb2xvcjogJyM5QzI3QjAnLCBpbWFnZTogJ2dhbWUtY29udHJvbGxlci5qcGcnIH0sXG4gICAgeyBzdGF0dXM6ICdQcm9jZXNzaW5nJywgZGF0ZTogJzE1LzEwLzIwMjAgMTQ6MDAnLCBpY29uOiAncGkgcGktY29nJywgY29sb3I6ICcjNjczQUI3JyB9LFxuICAgIHsgc3RhdHVzOiAnU2hpcHBlZCcsIGRhdGU6ICcxNS8xMC8yMDIwIDE2OjE1JywgaWNvbjogJ3BpIHBpLXNob3BwaW5nLWNhcnQnLCBjb2xvcjogJyNGRjk4MDAnIH0sXG4gICAgeyBzdGF0dXM6ICdEZWxpdmVyZWQnLCBkYXRlOiAnMTYvMTAvMjAyMCAxMDowMCcsIGljb246ICdwaSBwaS1jaGVjaycsIGNvbG9yOiAnIzYwN0Q4QicgfVxuICBdO1xuXG4gIGNvbnN0IGV2ZW50czIgPSBbXG4gICAgJzIwMjAnLCAnMjAyMScsICcyMDIyJywgJzIwMjMnXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8aDU+Q3VzdG9taXplZDwvaDU+XG4gICAgICA8VGltZWxpbmVcbiAgICAgICAgdmFsdWU9e2V2ZW50czF9XG4gICAgICAgIGFsaWduPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9taXplZC10aW1lbGluZVwiXG4gICAgICAgIG1hcmtlcj17Y3VzdG9taXplZE1hcmtlcn1cbiAgICAgICAgY29udGVudD17Y3VzdG9taXplZENvbnRlbnR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==