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
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
      lineNumber: 15,
      columnNumber: 23
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
      label: "Read more",
      className: "p-button-text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"], {
      value: events1,
      align: "alternate",
      className: "customized-timeline",
      marker: customizedMarker,
      content: customizedContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9pbmRleC9UaGVUaW1lbGluZS5qc3giXSwibmFtZXMiOlsiY3VzdG9taXplZE1hcmtlciIsIml0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImljb24iLCJjdXN0b21pemVkQ29udGVudCIsInN0YXR1cyIsImRhdGUiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJuYW1lIiwiVGhlVGltZWxpbmUiLCJldmVudHMxIiwiZXZlbnRzMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLDBCQUFoQjtBQUEyQyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRUQsSUFBSSxDQUFDRTtBQUF4QixLQUFsRDtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFRixJQUFJLENBQUNHO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztBQVFBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0osSUFBRCxFQUFVO0FBQ2xDLHNCQUNFLHFFQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFQSxJQUFJLENBQUNLLE1BQWxCO0FBQTBCLFlBQVEsRUFBRUwsSUFBSSxDQUFDTSxJQUF6QztBQUFBLGVBQ0lOLElBQUksQ0FBQ08sS0FBTCxpQkFBYztBQUFLLFNBQUcseUNBQWtDUCxJQUFJLENBQUNPLEtBQXZDLENBQVI7QUFBd0QsYUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEdBQVQsR0FBZSx1RUFBdEI7QUFBQSxPQUFqRTtBQUFnSyxTQUFHLEVBQUVWLElBQUksQ0FBQ1csSUFBMUs7QUFBZ0wsV0FBSyxFQUFFLEdBQXZMO0FBQTRMLGVBQVMsRUFBQztBQUF0TTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGxCLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUlFLHFFQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUMsV0FBZDtBQUEwQixlQUFTLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7QUFXZSxTQUFTQyxXQUFULEdBQXVCO0FBQ3BDLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQUVSLFVBQU0sRUFBRSxTQUFWO0FBQXFCQyxRQUFJLEVBQUUsa0JBQTNCO0FBQStDSCxRQUFJLEVBQUUscUJBQXJEO0FBQTRFRCxTQUFLLEVBQUUsU0FBbkY7QUFBOEZLLFNBQUssRUFBRTtBQUFyRyxHQURjLEVBRWQ7QUFBRUYsVUFBTSxFQUFFLFlBQVY7QUFBd0JDLFFBQUksRUFBRSxrQkFBOUI7QUFBa0RILFFBQUksRUFBRSxXQUF4RDtBQUFxRUQsU0FBSyxFQUFFO0FBQTVFLEdBRmMsRUFHZDtBQUFFRyxVQUFNLEVBQUUsU0FBVjtBQUFxQkMsUUFBSSxFQUFFLGtCQUEzQjtBQUErQ0gsUUFBSSxFQUFFLHFCQUFyRDtBQUE0RUQsU0FBSyxFQUFFO0FBQW5GLEdBSGMsRUFJZDtBQUFFRyxVQUFNLEVBQUUsV0FBVjtBQUF1QkMsUUFBSSxFQUFFLGtCQUE3QjtBQUFpREgsUUFBSSxFQUFFLGFBQXZEO0FBQXNFRCxTQUFLLEVBQUU7QUFBN0UsR0FKYyxDQUFoQjtBQU9BLE1BQU1ZLE9BQU8sR0FBRyxDQUNkLE1BRGMsRUFDTixNQURNLEVBQ0UsTUFERixFQUNVLE1BRFYsQ0FBaEI7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDREQUFEO0FBQ0UsV0FBSyxFQUFFRCxPQURUO0FBRUUsV0FBSyxFQUFDLFdBRlI7QUFHRSxlQUFTLEVBQUMscUJBSFo7QUFJRSxZQUFNLEVBQUVkLGdCQUpWO0FBS0UsYUFBTyxFQUFFSztBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEO0tBdkJ1QlEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTdjZmZlNWE4YzEzYWNkNTRhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICdwcmltZXJlYWN0L3RpbWVsaW5lJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdwcmltZXJlYWN0L2NhcmQnO1xuXG5jb25zdCBjdXN0b21pemVkTWFya2VyID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tbWFya2VyIHAtc2hhZG93LTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfX0+XG4gICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IGN1c3RvbWl6ZWRDb250ZW50ID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCB0aXRsZT17aXRlbS5zdGF0dXN9IHN1YlRpdGxlPXtpdGVtLmRhdGV9PlxuICAgICAgeyBpdGVtLmltYWdlICYmIDxpbWcgc3JjPXtgc2hvd2Nhc2UvZGVtby9pbWFnZXMvcHJvZHVjdC8ke2l0ZW0uaW1hZ2V9YH0gb25FcnJvcj17KGUpID0+IGUudGFyZ2V0LnNyYyA9ICdodHRwczovL3d3dy5wcmltZWZhY2VzLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9wbGFjZWhvbGRlci5wbmcnfSBhbHQ9e2l0ZW0ubmFtZX0gd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwicC1zaGFkb3ctMlwiIC8+fVxuICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEludmVudG9yZSBzZWQgY29uc2VxdXVudHVyIGVycm9yIHJlcHVkaWFuZGFlIG51bXF1YW0gZGVzZXJ1bnRcbiAgICAgICAgICAgICAgcXVpc3F1YW0gcmVwZWxsYXQgbGliZXJvIGFzcGVyaW9yZXMgZWFydW0gbmFtIG5vYmlzLCBjdWxwYSByYXRpb25lIHF1YW0gcGVyZmVyZW5kaXMgZXNzZSwgY3VwaWRpdGF0ZSBuZXF1ZSBxdWFzITwvcD5cbiAgICAgIDxCdXR0b24gbGFiZWw9XCJSZWFkIG1vcmVcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0XCI+PC9CdXR0b24+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlVGltZWxpbmUoKSB7XG4gIGNvbnN0IGV2ZW50czEgPSBbXG4gICAgeyBzdGF0dXM6ICdPcmRlcmVkJywgZGF0ZTogJzE1LzEwLzIwMjAgMTA6MzAnLCBpY29uOiAncGkgcGktc2hvcHBpbmctY2FydCcsIGNvbG9yOiAnIzlDMjdCMCcsIGltYWdlOiAnZ2FtZS1jb250cm9sbGVyLmpwZycgfSxcbiAgICB7IHN0YXR1czogJ1Byb2Nlc3NpbmcnLCBkYXRlOiAnMTUvMTAvMjAyMCAxNDowMCcsIGljb246ICdwaSBwaS1jb2cnLCBjb2xvcjogJyM2NzNBQjcnIH0sXG4gICAgeyBzdGF0dXM6ICdTaGlwcGVkJywgZGF0ZTogJzE1LzEwLzIwMjAgMTY6MTUnLCBpY29uOiAncGkgcGktc2hvcHBpbmctY2FydCcsIGNvbG9yOiAnI0ZGOTgwMCcgfSxcbiAgICB7IHN0YXR1czogJ0RlbGl2ZXJlZCcsIGRhdGU6ICcxNi8xMC8yMDIwIDEwOjAwJywgaWNvbjogJ3BpIHBpLWNoZWNrJywgY29sb3I6ICcjNjA3RDhCJyB9XG4gIF07XG5cbiAgY29uc3QgZXZlbnRzMiA9IFtcbiAgICAnMjAyMCcsICcyMDIxJywgJzIwMjInLCAnMjAyMydcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxoNT5DdXN0b21pemVkPC9oNT5cbiAgICAgIDxUaW1lbGluZVxuICAgICAgICB2YWx1ZT17ZXZlbnRzMX1cbiAgICAgICAgYWxpZ249XCJhbHRlcm5hdGVcIlxuICAgICAgICBjbGFzc05hbWU9XCJjdXN0b21pemVkLXRpbWVsaW5lXCJcbiAgICAgICAgbWFya2VyPXtjdXN0b21pemVkTWFya2VyfVxuICAgICAgICBjb250ZW50PXtjdXN0b21pemVkQ29udGVudH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9