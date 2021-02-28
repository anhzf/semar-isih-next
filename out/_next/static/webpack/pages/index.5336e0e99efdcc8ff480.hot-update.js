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
      className: "customized-timeline",
      marker: customizedMarker,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9pbmRleC9UaGVUaW1lbGluZS5qc3giXSwibmFtZXMiOlsiY3VzdG9taXplZE1hcmtlciIsIml0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImljb24iLCJjdXN0b21pemVkQ29udGVudCIsInN0YXR1cyIsImltYWdlIiwiZGF0ZSIsIm5hbWUiLCJkZXNjIiwiZSIsInRhcmdldCIsInNyYyIsIlRoZVRpbWVsaW5lIiwiZXZlbnRzMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBVTtBQUNqQyxzQkFDRTtBQUFNLGFBQVMsRUFBQywwQkFBaEI7QUFBMkMsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUVELElBQUksQ0FBQ0U7QUFBeEIsS0FBbEQ7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUYsSUFBSSxDQUFDRztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXlDO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNqRSxzQkFDRSxxRUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRUosTUFBYjtBQUFxQixZQUFRLEVBQUVFLElBQS9CO0FBQUEsZUFDR0QsS0FBSyxpQkFFRjtBQUNFLFNBQUcseUNBQWtDQSxLQUFsQyxDQURMO0FBRUUsYUFBTyxFQUFFLGlCQUFDSSxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEdBQVQsR0FBZSx1RUFBdEI7QUFBQSxPQUZYO0FBR0UsU0FBRyxFQUFFSixJQUhQO0FBSUUsV0FBSyxFQUFFLEdBSlQ7QUFLRSxlQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSE4sZUFZRTtBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQWpCRDs7QUFtQmUsU0FBU0ksV0FBVCxHQUF1QjtBQUNwQyxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUFFVCxVQUFNLEVBQUUsU0FBVjtBQUFxQkUsUUFBSSxFQUFFLGtCQUEzQjtBQUErQ0osUUFBSSxFQUFFLHFCQUFyRDtBQUE0RUQsU0FBSyxFQUFFLFNBQW5GO0FBQThGSSxTQUFLLEVBQUU7QUFBckcsR0FEYyxFQUVkO0FBQUVELFVBQU0sRUFBRSxZQUFWO0FBQXdCRSxRQUFJLEVBQUUsa0JBQTlCO0FBQWtESixRQUFJLEVBQUUsV0FBeEQ7QUFBcUVELFNBQUssRUFBRTtBQUE1RSxHQUZjLEVBR2Q7QUFBRUcsVUFBTSxFQUFFLFNBQVY7QUFBcUJFLFFBQUksRUFBRSxrQkFBM0I7QUFBK0NKLFFBQUksRUFBRSxxQkFBckQ7QUFBNEVELFNBQUssRUFBRTtBQUFuRixHQUhjLEVBSWQ7QUFBRUcsVUFBTSxFQUFFLFdBQVY7QUFBdUJFLFFBQUksRUFBRSxrQkFBN0I7QUFBaURKLFFBQUksRUFBRSxhQUF2RDtBQUFzRUQsU0FBSyxFQUFFO0FBQTdFLEdBSmMsQ0FBaEI7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVZLE9BRFQ7QUFFRSxXQUFLLEVBQUMsV0FGUjtBQUdFLGVBQVMsRUFBQyxxQkFIWjtBQUlFLFlBQU0sRUFBRWYsZ0JBSlY7QUFLRSxhQUFPLEVBQUVLO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO0tBbkJ1QlMsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MzM2ZTBlOTllZmRjYzhmZjQ4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICdwcmltZXJlYWN0L3RpbWVsaW5lJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdwcmltZXJlYWN0L2NhcmQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xuXG5jb25zdCBjdXN0b21pemVkTWFya2VyID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tbWFya2VyIHAtc2hhZG93LTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfX0+XG4gICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IGN1c3RvbWl6ZWRDb250ZW50ID0gKHsgc3RhdHVzLCBpbWFnZSwgZGF0ZSwgbmFtZSwgZGVzYyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgdGl0bGU9e3N0YXR1c30gc3ViVGl0bGU9e2RhdGV9PlxuICAgICAge2ltYWdlXG4gICAgICAgICYmIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2BzaG93Y2FzZS9kZW1vL2ltYWdlcy9wcm9kdWN0LyR7aW1hZ2V9YH1cbiAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiBlLnRhcmdldC5zcmMgPSAnaHR0cHM6Ly93d3cucHJpbWVmYWNlcy5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvcGxhY2Vob2xkZXIucG5nJ31cbiAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLXNoYWRvdy0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8cD57ZGVzY308L3A+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlVGltZWxpbmUoKSB7XG4gIGNvbnN0IGV2ZW50czEgPSBbXG4gICAgeyBzdGF0dXM6ICdPcmRlcmVkJywgZGF0ZTogJzE1LzEwLzIwMjAgMTA6MzAnLCBpY29uOiAncGkgcGktc2hvcHBpbmctY2FydCcsIGNvbG9yOiAnIzlDMjdCMCcsIGltYWdlOiAnZ2FtZS1jb250cm9sbGVyLmpwZycgfSxcbiAgICB7IHN0YXR1czogJ1Byb2Nlc3NpbmcnLCBkYXRlOiAnMTUvMTAvMjAyMCAxNDowMCcsIGljb246ICdwaSBwaS1jb2cnLCBjb2xvcjogJyM2NzNBQjcnIH0sXG4gICAgeyBzdGF0dXM6ICdTaGlwcGVkJywgZGF0ZTogJzE1LzEwLzIwMjAgMTY6MTUnLCBpY29uOiAncGkgcGktc2hvcHBpbmctY2FydCcsIGNvbG9yOiAnI0ZGOTgwMCcgfSxcbiAgICB7IHN0YXR1czogJ0RlbGl2ZXJlZCcsIGRhdGU6ICcxNi8xMC8yMDIwIDEwOjAwJywgaWNvbjogJ3BpIHBpLWNoZWNrJywgY29sb3I6ICcjNjA3RDhCJyB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxUaW1lbGluZVxuICAgICAgICB2YWx1ZT17ZXZlbnRzMX1cbiAgICAgICAgYWxpZ249XCJhbHRlcm5hdGVcIlxuICAgICAgICBjbGFzc05hbWU9XCJjdXN0b21pemVkLXRpbWVsaW5lXCJcbiAgICAgICAgbWFya2VyPXtjdXN0b21pemVkTWFya2VyfVxuICAgICAgICBjb250ZW50PXtjdXN0b21pemVkQ29udGVudH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9