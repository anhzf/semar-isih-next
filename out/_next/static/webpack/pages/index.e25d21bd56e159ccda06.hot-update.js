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



 // const customizedMarker = (item) => {
//   return (
//     <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
//       <i className={item.icon}></i>
//     </span>
//   );
// };

var customizedContent = function customizedContent(_ref) {
  var status = _ref.status,
      image = _ref.image,
      date = _ref.date,
      name = _ref.name,
      desc = _ref.desc;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: status,
    subTitle: date,
    children: [image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "showcase/demo/images/product/".concat(image),
      onError: function onError(e) {
        return e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';
      },
      alt: name,
      width: 200,
      className: "p-shadow-2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      className: "customized-timeline" // marker={customizedMarker}
      ,
      content: customizedContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9pbmRleC9UaGVUaW1lbGluZS5qc3giXSwibmFtZXMiOlsiY3VzdG9taXplZENvbnRlbnQiLCJzdGF0dXMiLCJpbWFnZSIsImRhdGUiLCJuYW1lIiwiZGVzYyIsImUiLCJ0YXJnZXQiLCJzcmMiLCJUaGVUaW1lbGluZSIsImV2ZW50czEiLCJpY29uIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUF5QztBQUFBLE1BQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDakUsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUVKLE1BQWI7QUFBcUIsWUFBUSxFQUFFRSxJQUEvQjtBQUFBLGVBQ0dELEtBQUssaUJBRUY7QUFDRSxTQUFHLHlDQUFrQ0EsS0FBbEMsQ0FETDtBQUVFLGFBQU8sRUFBRSxpQkFBQ0ksQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxHQUFULEdBQWUsdUVBQXRCO0FBQUEsT0FGWDtBQUdFLFNBQUcsRUFBRUosSUFIUDtBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsZUFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhOLGVBWUU7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FqQkQ7O0FBbUJlLFNBQVNJLFdBQVQsR0FBdUI7QUFDcEMsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRVQsVUFBTSxFQUFFLFNBQVY7QUFBcUJFLFFBQUksRUFBRSxrQkFBM0I7QUFBK0NRLFFBQUksRUFBRSxxQkFBckQ7QUFBNEVDLFNBQUssRUFBRSxTQUFuRjtBQUE4RlYsU0FBSyxFQUFFO0FBQXJHLEdBRGMsRUFFZDtBQUFFRCxVQUFNLEVBQUUsWUFBVjtBQUF3QkUsUUFBSSxFQUFFLGtCQUE5QjtBQUFrRFEsUUFBSSxFQUFFLFdBQXhEO0FBQXFFQyxTQUFLLEVBQUU7QUFBNUUsR0FGYyxFQUdkO0FBQUVYLFVBQU0sRUFBRSxTQUFWO0FBQXFCRSxRQUFJLEVBQUUsa0JBQTNCO0FBQStDUSxRQUFJLEVBQUUscUJBQXJEO0FBQTRFQyxTQUFLLEVBQUU7QUFBbkYsR0FIYyxFQUlkO0FBQUVYLFVBQU0sRUFBRSxXQUFWO0FBQXVCRSxRQUFJLEVBQUUsa0JBQTdCO0FBQWlEUSxRQUFJLEVBQUUsYUFBdkQ7QUFBc0VDLFNBQUssRUFBRTtBQUE3RSxHQUpjLENBQWhCO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQ0UsV0FBSyxFQUFFRixPQURUO0FBRUUsV0FBSyxFQUFDLFdBRlI7QUFHRSxlQUFTLEVBQUMscUJBSFosQ0FJRTtBQUpGO0FBS0UsYUFBTyxFQUFFVjtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDtLQW5CdUJTLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTI1ZDIxYmQ1NmUxNTljY2RhMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAncHJpbWVyZWFjdC90aW1lbGluZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAncHJpbWVyZWFjdC9jYXJkJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcblxuLy8gY29uc3QgY3VzdG9taXplZE1hcmtlciA9IChpdGVtKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3VzdG9tLW1hcmtlciBwLXNoYWRvdy0yXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yIH19PlxuLy8gICAgICAgPGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cbi8vICAgICA8L3NwYW4+XG4vLyAgICk7XG4vLyB9O1xuXG5jb25zdCBjdXN0b21pemVkQ29udGVudCA9ICh7IHN0YXR1cywgaW1hZ2UsIGRhdGUsIG5hbWUsIGRlc2MgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHRpdGxlPXtzdGF0dXN9IHN1YlRpdGxlPXtkYXRlfT5cbiAgICAgIHtpbWFnZVxuICAgICAgICAmJiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgc2hvd2Nhc2UvZGVtby9pbWFnZXMvcHJvZHVjdC8ke2ltYWdlfWB9XG4gICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gZS50YXJnZXQuc3JjID0gJ2h0dHBzOi8vd3d3LnByaW1lZmFjZXMub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L3BsYWNlaG9sZGVyLnBuZyd9XG4gICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1zaGFkb3ctMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPHA+e2Rlc2N9PC9wPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZVRpbWVsaW5lKCkge1xuICBjb25zdCBldmVudHMxID0gW1xuICAgIHsgc3RhdHVzOiAnT3JkZXJlZCcsIGRhdGU6ICcxNS8xMC8yMDIwIDEwOjMwJywgaWNvbjogJ3BpIHBpLXNob3BwaW5nLWNhcnQnLCBjb2xvcjogJyM5QzI3QjAnLCBpbWFnZTogJ2dhbWUtY29udHJvbGxlci5qcGcnIH0sXG4gICAgeyBzdGF0dXM6ICdQcm9jZXNzaW5nJywgZGF0ZTogJzE1LzEwLzIwMjAgMTQ6MDAnLCBpY29uOiAncGkgcGktY29nJywgY29sb3I6ICcjNjczQUI3JyB9LFxuICAgIHsgc3RhdHVzOiAnU2hpcHBlZCcsIGRhdGU6ICcxNS8xMC8yMDIwIDE2OjE1JywgaWNvbjogJ3BpIHBpLXNob3BwaW5nLWNhcnQnLCBjb2xvcjogJyNGRjk4MDAnIH0sXG4gICAgeyBzdGF0dXM6ICdEZWxpdmVyZWQnLCBkYXRlOiAnMTYvMTAvMjAyMCAxMDowMCcsIGljb246ICdwaSBwaS1jaGVjaycsIGNvbG9yOiAnIzYwN0Q4QicgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8VGltZWxpbmVcbiAgICAgICAgdmFsdWU9e2V2ZW50czF9XG4gICAgICAgIGFsaWduPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9taXplZC10aW1lbGluZVwiXG4gICAgICAgIC8vIG1hcmtlcj17Y3VzdG9taXplZE1hcmtlcn1cbiAgICAgICAgY29udGVudD17Y3VzdG9taXplZENvbnRlbnR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==