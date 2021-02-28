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
      lineNumber: 7,
      columnNumber: 23
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
      label: "Read more",
      className: "p-button-text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"], {
      value: events1,
      align: "alternate",
      className: "customized-timeline",
      marker: customizedMarker,
      content: customizedContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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

/***/ }),

/***/ "./node_modules/primereact/card.js":
/*!*****************************************!*\
  !*** ./node_modules/primereact/card.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/card/Card */ "./node_modules/primereact/components/card/Card.js");

/***/ }),

/***/ "./node_modules/primereact/components/card/Card.js":
/*!*********************************************************!*\
  !*** ./node_modules/primereact/components/card/Card.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ClassNames = __webpack_require__(/*! ../utils/ClassNames */ "./node_modules/primereact/components/utils/ClassNames.js");

var _ObjectUtils = _interopRequireDefault(__webpack_require__(/*! ../utils/ObjectUtils */ "./node_modules/primereact/components/utils/ObjectUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = /*#__PURE__*/function (_Component) {
  _inherits(Card, _Component);

  var _super = _createSuper(Card);

  function Card() {
    _classCallCheck(this, Card);

    return _super.apply(this, arguments);
  }

  _createClass(Card, [{
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "p-card-header"
        }, _ObjectUtils.default.getJSXElement(this.props.header, this.props));
      }

      return null;
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var title = this.props.title && /*#__PURE__*/_react.default.createElement("div", {
        className: "p-card-title"
      }, _ObjectUtils.default.getJSXElement(this.props.title, this.props));

      var subTitle = this.props.subTitle && /*#__PURE__*/_react.default.createElement("div", {
        className: "p-card-subtitle"
      }, _ObjectUtils.default.getJSXElement(this.props.subTitle, this.props));

      var children = this.props.children && /*#__PURE__*/_react.default.createElement("div", {
        className: "p-card-content"
      }, this.props.children);

      var footer = this.props.footer && /*#__PURE__*/_react.default.createElement("div", {
        className: "p-card-footer"
      }, _ObjectUtils.default.getJSXElement(this.props.footer, this.props));

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "p-card-body"
      }, title, subTitle, children, footer);
    }
  }, {
    key: "render",
    value: function render() {
      var header = this.renderHeader();
      var body = this.renderBody();
      var className = (0, _ClassNames.classNames)('p-card p-component', this.props.className);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className,
        style: this.props.style
      }, header, body);
    }
  }]);

  return Card;
}(_react.Component);

exports.Card = Card;

_defineProperty(Card, "defaultProps", {
  id: null,
  header: null,
  footer: null,
  title: null,
  subTitle: null,
  style: null,
  className: null
});

_defineProperty(Card, "propTypes", {
  id: _propTypes.default.string,
  header: _propTypes.default.any,
  footer: _propTypes.default.any,
  title: _propTypes.default.any,
  subTitle: _propTypes.default.any,
  style: _propTypes.default.object,
  className: _propTypes.default.string
});

/***/ }),

/***/ "./node_modules/primereact/components/timeline/Timeline.js":
/*!*****************************************************************!*\
  !*** ./node_modules/primereact/components/timeline/Timeline.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ClassNames = __webpack_require__(/*! ../utils/ClassNames */ "./node_modules/primereact/components/utils/ClassNames.js");

var _ObjectUtils = _interopRequireDefault(__webpack_require__(/*! ../utils/ObjectUtils */ "./node_modules/primereact/components/utils/ObjectUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Timeline = /*#__PURE__*/function (_Component) {
  _inherits(Timeline, _Component);

  var _super = _createSuper(Timeline);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _super.apply(this, arguments);
  }

  _createClass(Timeline, [{
    key: "getKey",
    value: function getKey(item, index) {
      return this.props.dataKey ? _ObjectUtils.default.resolveFieldData(item, this.props.dataKey) : "pr_id__".concat(index);
    }
  }, {
    key: "renderEvents",
    value: function renderEvents() {
      var _this = this;

      return this.props.value && this.props.value.map(function (item, index) {
        var opposite = _ObjectUtils.default.getJSXElement(_this.props.opposite, item, index);

        var marker = _ObjectUtils.default.getJSXElement(_this.props.marker, item, index) || /*#__PURE__*/_react.default.createElement("div", {
          className: "p-timeline-event-marker"
        });

        var connector = index !== _this.props.value.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
          className: "p-timeline-event-connector"
        });

        var content = _ObjectUtils.default.getJSXElement(_this.props.content, item, index);

        return /*#__PURE__*/_react.default.createElement("div", {
          key: _this.getKey(item, index),
          className: "p-timeline-event"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "p-timeline-event-opposite"
        }, opposite), /*#__PURE__*/_react.default.createElement("div", {
          className: "p-timeline-event-separator"
        }, marker, connector), /*#__PURE__*/_react.default.createElement("div", {
          className: "p-timeline-event-content"
        }, content));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var containerClassName = (0, _ClassNames.classNames)('p-timeline p-component', (_classNames = {}, _defineProperty(_classNames, "p-timeline-".concat(this.props.align), true), _defineProperty(_classNames, "p-timeline-".concat(this.props.layout), true), _classNames), this.props.className);
      var events = this.renderEvents();
      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.props.id,
        className: containerClassName,
        style: this.props.style
      }, events);
    }
  }]);

  return Timeline;
}(_react.Component);

exports.Timeline = Timeline;

_defineProperty(Timeline, "defaultProps", {
  id: null,
  value: null,
  align: 'left',
  layout: 'vertical',
  dataKey: null,
  className: null,
  style: null,
  opposite: null,
  marker: null,
  content: null
});

_defineProperty(Timeline, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.array,
  align: _propTypes.default.string,
  layout: _propTypes.default.string,
  dataKey: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  opposite: _propTypes.default.any,
  marker: _propTypes.default.any,
  content: _propTypes.default.any
});

/***/ }),

/***/ "./node_modules/primereact/timeline.js":
/*!*********************************************!*\
  !*** ./node_modules/primereact/timeline.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/timeline/Timeline */ "./node_modules/primereact/components/timeline/Timeline.js");


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var D_Repositories_semar_isih_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Repositories_semar_isih_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layouts/MainLayout */ "./components/layouts/MainLayout.jsx");
/* harmony import */ var components_ui_index_TheTimeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ui/index/TheTimeline */ "./components/ui/index/TheTimeline.jsx");




var _jsxFileName = "D:\\Repositories\\semar-isih-next\\pages\\index.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Repositories_semar_isih_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Section = function Section(_ref) {
  var title = _ref.title,
      children = _ref.children,
      props = Object(D_Repositories_semar_isih_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["title", "children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", _objectSpread(_objectSpread({
    id: title.toLowerCase(),
    className: "w-full px-16"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      className: "text-3xl text-center",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
      className: "w-full py-4 flex flex-col justify-center",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Section;
function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
      className: "relative w-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
        className: "w-full h-96 bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-500 flex flex-col justify-end",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "font-bold text-7xl text-center text-white",
          children: "SEMAR - ISIH"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: "font-medium text-2xl text-center text-white",
          children: "Sebelas Maret International Student IOT Hackathon 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
        className: "w-full bg-transparent fill-current text-indigo-500",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1440 180",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
          fill: "current",
          fillOpacity: "1",
          d: "M0,32L80,58.7C160,85,320,139,480,160C640,181,800,171,960,154.7C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: "mt-36 w-full flex flex-col gap-y-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
        title: "About",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque doloremque nobis necessitatibus libero, eveniet cupiditate voluptatibus a modi, ut, amet ex vero vitae veritatis rerum provident dolores iste? Temporibus."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
        title: "Timeline",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_ui_index_TheTimeline__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
        title: "Prize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
        title: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
        title: "Organized By"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
        title: "FAQ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
      className: "w-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
        className: "text-3xl text-center",
        children: "Ini footer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
_c2 = Home;
;

var _c, _c2;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9pbmRleC9UaGVUaW1lbGluZS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmltZXJlYWN0L2NhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmltZXJlYWN0L2NvbXBvbmVudHMvY2FyZC9DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpbWVyZWFjdC9jb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpbWVyZWFjdC90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImN1c3RvbWl6ZWRDb250ZW50IiwiaXRlbSIsInN0YXR1cyIsImRhdGUiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJuYW1lIiwiVGhlVGltZWxpbmUiLCJldmVudHMxIiwiaWNvbiIsImNvbG9yIiwiZXZlbnRzMiIsImN1c3RvbWl6ZWRNYXJrZXIiLCJTZWN0aW9uIiwidGl0bGUiLCJjaGlsZHJlbiIsInByb3BzIiwidG9Mb3dlckNhc2UiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFDbEMsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUVBLElBQUksQ0FBQ0MsTUFBbEI7QUFBMEIsWUFBUSxFQUFFRCxJQUFJLENBQUNFLElBQXpDO0FBQUEsZUFDSUYsSUFBSSxDQUFDRyxLQUFMLGlCQUFjO0FBQUssU0FBRyx5Q0FBa0NILElBQUksQ0FBQ0csS0FBdkMsQ0FBUjtBQUF3RCxhQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsR0FBVCxHQUFlLHVFQUF0QjtBQUFBLE9BQWpFO0FBQWdLLFNBQUcsRUFBRU4sSUFBSSxDQUFDTyxJQUExSztBQUFnTCxXQUFLLEVBQUUsR0FBdkw7QUFBNEwsZUFBUyxFQUFDO0FBQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEbEIsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBSUUscUVBQUMsTUFBRDtBQUFRLFdBQUssRUFBQyxXQUFkO0FBQTBCLGVBQVMsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztBQVdlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRVIsVUFBTSxFQUFFLFNBQVY7QUFBcUJDLFFBQUksRUFBRSxrQkFBM0I7QUFBK0NRLFFBQUksRUFBRSxxQkFBckQ7QUFBNEVDLFNBQUssRUFBRSxTQUFuRjtBQUE4RlIsU0FBSyxFQUFFO0FBQXJHLEdBRGMsRUFFZDtBQUFFRixVQUFNLEVBQUUsWUFBVjtBQUF3QkMsUUFBSSxFQUFFLGtCQUE5QjtBQUFrRFEsUUFBSSxFQUFFLFdBQXhEO0FBQXFFQyxTQUFLLEVBQUU7QUFBNUUsR0FGYyxFQUdkO0FBQUVWLFVBQU0sRUFBRSxTQUFWO0FBQXFCQyxRQUFJLEVBQUUsa0JBQTNCO0FBQStDUSxRQUFJLEVBQUUscUJBQXJEO0FBQTRFQyxTQUFLLEVBQUU7QUFBbkYsR0FIYyxFQUlkO0FBQUVWLFVBQU0sRUFBRSxXQUFWO0FBQXVCQyxRQUFJLEVBQUUsa0JBQTdCO0FBQWlEUSxRQUFJLEVBQUUsYUFBdkQ7QUFBc0VDLFNBQUssRUFBRTtBQUE3RSxHQUpjLENBQWhCO0FBT0EsTUFBTUMsT0FBTyxHQUFHLENBQ2QsTUFEYyxFQUNOLE1BRE0sRUFDRSxNQURGLEVBQ1UsTUFEVixDQUFoQjtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVILE9BRFQ7QUFFRSxXQUFLLEVBQUMsV0FGUjtBQUdFLGVBQVMsRUFBQyxxQkFIWjtBQUlFLFlBQU0sRUFBRUksZ0JBSlY7QUFLRSxhQUFPLEVBQUVkO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0F2QnVCUyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZFg7O0FBRWIsaUJBQWlCLG1CQUFPLENBQUMsaUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0ZwQzs7QUFFYix1QkFBdUIsMkJBQTJCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFeFg7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxxQ0FBcUMsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFcEQsd0NBQXdDLG1CQUFPLENBQUMsc0RBQVk7O0FBRTVELGtCQUFrQixtQkFBTyxDQUFDLHFGQUFxQjs7QUFFL0MsMENBQTBDLG1CQUFPLENBQUMsdUZBQXNCOztBQUV4RSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YscUNBQXFDLGdEQUFnRCwyQkFBMkIsaUVBQWlFLGNBQWMsR0FBRyxjQUFjOztBQUVoTix1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSw4RUFBOEUsU0FBUyxnQkFBZ0IsRUFBRSx3Q0FBd0MsK0JBQStCLHVCQUF1QixFQUFFLGlCQUFpQixzRkFBc0YsdUJBQXVCLHNEQUFzRCxxRkFBcUYsc0NBQXNDLDBDQUEwQyxFQUFFLE9BQU8sd0JBQXdCLEVBQUUsRUFBRSxFQUFFLHNCQUFzQixhQUFhLHdCQUF3QixFQUFFLGVBQWU7O0FBRXZ1QixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTiwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUV4SyxnQ0FBZ0MsNkRBQTZELHlDQUF5Qyw4Q0FBOEMsaUNBQWlDLG1EQUFtRCx5REFBeUQsRUFBRSxPQUFPLHVDQUF1QyxFQUFFLGlEQUFpRCxHQUFHOztBQUV2YSxpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssc0NBQXNDLHdFQUF3RSwwQ0FBMEMsOENBQThDLE1BQU0sd0VBQXdFLEdBQUcsYUFBYSxFQUFFLFlBQVksY0FBYyxFQUFFOztBQUVsVSw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUM5SFk7O0FBRWIsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRXhYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEscUNBQXFDLG1CQUFPLENBQUMsNENBQU87O0FBRXBELHdDQUF3QyxtQkFBTyxDQUFDLHNEQUFZOztBQUU1RCxrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBcUI7O0FBRS9DLDBDQUEwQyxtQkFBTyxDQUFDLHVGQUFzQjs7QUFFeEUsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHFDQUFxQyxnREFBZ0QsMkJBQTJCLGlFQUFpRSxjQUFjLEdBQUcsY0FBYzs7QUFFaE4sdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsOEVBQThFLFNBQVMsZ0JBQWdCLEVBQUUsd0NBQXdDLCtCQUErQix1QkFBdUIsRUFBRSxpQkFBaUIsc0ZBQXNGLHVCQUF1QixzREFBc0QscUZBQXFGLHNDQUFzQywwQ0FBMEMsRUFBRSxPQUFPLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxzQkFBc0IsYUFBYSx3QkFBd0IsRUFBRSxlQUFlOztBQUV2dUIsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7QUFFeEssZ0NBQWdDLDZEQUE2RCx5Q0FBeUMsOENBQThDLGlDQUFpQyxtREFBbUQseURBQXlELEVBQUUsT0FBTyx1Q0FBdUMsRUFBRSxpREFBaUQsR0FBRzs7QUFFdmEsaURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLHNDQUFzQyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLHdFQUF3RSxHQUFHLGFBQWEsRUFBRSxZQUFZLGNBQWMsRUFBRTs7QUFFbFUsNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHNHQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDdklZOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLGlHQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGekQ7QUFDQTs7QUFFQSxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLFFBQVYsUUFBVUEsUUFBVjtBQUFBLE1BQXVCQyxLQUF2Qjs7QUFBQSxzQkFDZDtBQUFTLE1BQUUsRUFBRUYsS0FBSyxDQUFDRyxXQUFOLEVBQWI7QUFBa0MsYUFBUyxFQUFDO0FBQTVDLEtBQStERCxLQUEvRDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHNCQUFkO0FBQUEsZ0JBQXNDRjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRTtBQUFTLGVBQVMsRUFBQywwQ0FBbkI7QUFBQSxnQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7S0FBTUYsTztBQVVTLFNBQVNLLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UscUVBQUMscUVBQUQ7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMscUdBQW5CO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDJDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFDLDZDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLG9EQUFmO0FBQW9FLGFBQUssRUFBQyw0QkFBMUU7QUFBdUcsZUFBTyxFQUFDLGNBQS9HO0FBQUEsK0JBQ0U7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFxQixxQkFBVyxFQUFDLEdBQWpDO0FBQXFDLFdBQUMsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUU7QUFBTSxlQUFTLEVBQUMscUNBQWhCO0FBQUEsOEJBQ0UscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBQyxPQUFmO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRSxxRUFBQyxPQUFEO0FBQVMsYUFBSyxFQUFDLFVBQWY7QUFBQSwrQkFDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0UscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQWFFLHFFQUFDLE9BQUQ7QUFBUyxhQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFpQkUscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkYsZUFxQkUscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFzQ0U7QUFBUSxlQUFTLEVBQUMsUUFBbEI7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsc0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNENEO01BN0N1QkEsSTtBQTZDdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTEzODJhNjYyZDI1NjllZDczYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAncHJpbWVyZWFjdC90aW1lbGluZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAncHJpbWVyZWFjdC9jYXJkJztcblxuY29uc3QgY3VzdG9taXplZENvbnRlbnQgPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHRpdGxlPXtpdGVtLnN0YXR1c30gc3ViVGl0bGU9e2l0ZW0uZGF0ZX0+XG4gICAgICB7IGl0ZW0uaW1hZ2UgJiYgPGltZyBzcmM9e2BzaG93Y2FzZS9kZW1vL2ltYWdlcy9wcm9kdWN0LyR7aXRlbS5pbWFnZX1gfSBvbkVycm9yPXsoZSkgPT4gZS50YXJnZXQuc3JjID0gJ2h0dHBzOi8vd3d3LnByaW1lZmFjZXMub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L3BsYWNlaG9sZGVyLnBuZyd9IGFsdD17aXRlbS5uYW1lfSB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJwLXNoYWRvdy0yXCIgLz59XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW52ZW50b3JlIHNlZCBjb25zZXF1dW50dXIgZXJyb3IgcmVwdWRpYW5kYWUgbnVtcXVhbSBkZXNlcnVudFxuICAgICAgICAgICAgICBxdWlzcXVhbSByZXBlbGxhdCBsaWJlcm8gYXNwZXJpb3JlcyBlYXJ1bSBuYW0gbm9iaXMsIGN1bHBhIHJhdGlvbmUgcXVhbSBwZXJmZXJlbmRpcyBlc3NlLCBjdXBpZGl0YXRlIG5lcXVlIHF1YXMhPC9wPlxuICAgICAgPEJ1dHRvbiBsYWJlbD1cIlJlYWQgbW9yZVwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHRcIj48L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVUaW1lbGluZSgpIHtcbiAgY29uc3QgZXZlbnRzMSA9IFtcbiAgICB7IHN0YXR1czogJ09yZGVyZWQnLCBkYXRlOiAnMTUvMTAvMjAyMCAxMDozMCcsIGljb246ICdwaSBwaS1zaG9wcGluZy1jYXJ0JywgY29sb3I6ICcjOUMyN0IwJywgaW1hZ2U6ICdnYW1lLWNvbnRyb2xsZXIuanBnJyB9LFxuICAgIHsgc3RhdHVzOiAnUHJvY2Vzc2luZycsIGRhdGU6ICcxNS8xMC8yMDIwIDE0OjAwJywgaWNvbjogJ3BpIHBpLWNvZycsIGNvbG9yOiAnIzY3M0FCNycgfSxcbiAgICB7IHN0YXR1czogJ1NoaXBwZWQnLCBkYXRlOiAnMTUvMTAvMjAyMCAxNjoxNScsIGljb246ICdwaSBwaS1zaG9wcGluZy1jYXJ0JywgY29sb3I6ICcjRkY5ODAwJyB9LFxuICAgIHsgc3RhdHVzOiAnRGVsaXZlcmVkJywgZGF0ZTogJzE2LzEwLzIwMjAgMTA6MDAnLCBpY29uOiAncGkgcGktY2hlY2snLCBjb2xvcjogJyM2MDdEOEInIH1cbiAgXTtcblxuICBjb25zdCBldmVudHMyID0gW1xuICAgICcyMDIwJywgJzIwMjEnLCAnMjAyMicsICcyMDIzJ1xuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPGg1PkN1c3RvbWl6ZWQ8L2g1PlxuICAgICAgPFRpbWVsaW5lXG4gICAgICAgIHZhbHVlPXtldmVudHMxfVxuICAgICAgICBhbGlnbj1cImFsdGVybmF0ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbWl6ZWQtdGltZWxpbmVcIlxuICAgICAgICBtYXJrZXI9e2N1c3RvbWl6ZWRNYXJrZXJ9XG4gICAgICAgIGNvbnRlbnQ9e2N1c3RvbWl6ZWRDb250ZW50fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2FyZC9DYXJkJyk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ2FyZCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfQ2xhc3NOYW1lcyA9IHJlcXVpcmUoXCIuLi91dGlscy9DbGFzc05hbWVzXCIpO1xuXG52YXIgX09iamVjdFV0aWxzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvT2JqZWN0VXRpbHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgQ2FyZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FyZCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDYXJkKTtcblxuICBmdW5jdGlvbiBDYXJkKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYXJkKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYXJkLCBbe1xuICAgIGtleTogXCJyZW5kZXJIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtY2FyZC1oZWFkZXJcIlxuICAgICAgICB9LCBfT2JqZWN0VXRpbHMuZGVmYXVsdC5nZXRKU1hFbGVtZW50KHRoaXMucHJvcHMuaGVhZGVyLCB0aGlzLnByb3BzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJCb2R5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJvZHkoKSB7XG4gICAgICB2YXIgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInAtY2FyZC10aXRsZVwiXG4gICAgICB9LCBfT2JqZWN0VXRpbHMuZGVmYXVsdC5nZXRKU1hFbGVtZW50KHRoaXMucHJvcHMudGl0bGUsIHRoaXMucHJvcHMpKTtcblxuICAgICAgdmFyIHN1YlRpdGxlID0gdGhpcy5wcm9wcy5zdWJUaXRsZSAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWNhcmQtc3VidGl0bGVcIlxuICAgICAgfSwgX09iamVjdFV0aWxzLmRlZmF1bHQuZ2V0SlNYRWxlbWVudCh0aGlzLnByb3BzLnN1YlRpdGxlLCB0aGlzLnByb3BzKSk7XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicC1jYXJkLWNvbnRlbnRcIlxuICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIHZhciBmb290ZXIgPSB0aGlzLnByb3BzLmZvb3RlciAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWNhcmQtZm9vdGVyXCJcbiAgICAgIH0sIF9PYmplY3RVdGlscy5kZWZhdWx0LmdldEpTWEVsZW1lbnQodGhpcy5wcm9wcy5mb290ZXIsIHRoaXMucHJvcHMpKTtcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInAtY2FyZC1ib2R5XCJcbiAgICAgIH0sIHRpdGxlLCBzdWJUaXRsZSwgY2hpbGRyZW4sIGZvb3Rlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaGVhZGVyID0gdGhpcy5yZW5kZXJIZWFkZXIoKTtcbiAgICAgIHZhciBib2R5ID0gdGhpcy5yZW5kZXJCb2R5KCk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9DbGFzc05hbWVzLmNsYXNzTmFtZXMpKCdwLWNhcmQgcC1jb21wb25lbnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgIH0sIGhlYWRlciwgYm9keSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhcmQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLkNhcmQgPSBDYXJkO1xuXG5fZGVmaW5lUHJvcGVydHkoQ2FyZCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBpZDogbnVsbCxcbiAgaGVhZGVyOiBudWxsLFxuICBmb290ZXI6IG51bGwsXG4gIHRpdGxlOiBudWxsLFxuICBzdWJUaXRsZTogbnVsbCxcbiAgc3R5bGU6IG51bGwsXG4gIGNsYXNzTmFtZTogbnVsbFxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShDYXJkLCBcInByb3BUeXBlc1wiLCB7XG4gIGlkOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBoZWFkZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXG4gIGZvb3RlcjogX3Byb3BUeXBlcy5kZWZhdWx0LmFueSxcbiAgdGl0bGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXG4gIHN1YlRpdGxlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuICBzdHlsZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UaW1lbGluZSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfQ2xhc3NOYW1lcyA9IHJlcXVpcmUoXCIuLi91dGlscy9DbGFzc05hbWVzXCIpO1xuXG52YXIgX09iamVjdFV0aWxzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvT2JqZWN0VXRpbHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgVGltZWxpbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRpbWVsaW5lLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRpbWVsaW5lKTtcblxuICBmdW5jdGlvbiBUaW1lbGluZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZWxpbmUpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRpbWVsaW5lLCBbe1xuICAgIGtleTogXCJnZXRLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0S2V5KGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhS2V5ID8gX09iamVjdFV0aWxzLmRlZmF1bHQucmVzb2x2ZUZpZWxkRGF0YShpdGVtLCB0aGlzLnByb3BzLmRhdGFLZXkpIDogXCJwcl9pZF9fXCIuY29uY2F0KGluZGV4KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckV2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgb3Bwb3NpdGUgPSBfT2JqZWN0VXRpbHMuZGVmYXVsdC5nZXRKU1hFbGVtZW50KF90aGlzLnByb3BzLm9wcG9zaXRlLCBpdGVtLCBpbmRleCk7XG5cbiAgICAgICAgdmFyIG1hcmtlciA9IF9PYmplY3RVdGlscy5kZWZhdWx0LmdldEpTWEVsZW1lbnQoX3RoaXMucHJvcHMubWFya2VyLCBpdGVtLCBpbmRleCkgfHwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLXRpbWVsaW5lLWV2ZW50LW1hcmtlclwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBpbmRleCAhPT0gX3RoaXMucHJvcHMudmFsdWUubGVuZ3RoIC0gMSAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtdGltZWxpbmUtZXZlbnQtY29ubmVjdG9yXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNvbnRlbnQgPSBfT2JqZWN0VXRpbHMuZGVmYXVsdC5nZXRKU1hFbGVtZW50KF90aGlzLnByb3BzLmNvbnRlbnQsIGl0ZW0sIGluZGV4KTtcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGtleTogX3RoaXMuZ2V0S2V5KGl0ZW0sIGluZGV4KSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC10aW1lbGluZS1ldmVudFwiXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZVwiXG4gICAgICAgIH0sIG9wcG9zaXRlKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLXRpbWVsaW5lLWV2ZW50LXNlcGFyYXRvclwiXG4gICAgICAgIH0sIG1hcmtlciwgY29ubmVjdG9yKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnRcIlxuICAgICAgICB9LCBjb250ZW50KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGNvbnRhaW5lckNsYXNzTmFtZSA9ICgwLCBfQ2xhc3NOYW1lcy5jbGFzc05hbWVzKSgncC10aW1lbGluZSBwLWNvbXBvbmVudCcsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwicC10aW1lbGluZS1cIi5jb25jYXQodGhpcy5wcm9wcy5hbGlnbiksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwicC10aW1lbGluZS1cIi5jb25jYXQodGhpcy5wcm9wcy5sYXlvdXQpLCB0cnVlKSwgX2NsYXNzTmFtZXMpLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgICB2YXIgZXZlbnRzID0gdGhpcy5yZW5kZXJFdmVudHMoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICBjbGFzc05hbWU6IGNvbnRhaW5lckNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgIH0sIGV2ZW50cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRpbWVsaW5lO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5UaW1lbGluZSA9IFRpbWVsaW5lO1xuXG5fZGVmaW5lUHJvcGVydHkoVGltZWxpbmUsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgaWQ6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICBhbGlnbjogJ2xlZnQnLFxuICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gIGRhdGFLZXk6IG51bGwsXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgc3R5bGU6IG51bGwsXG4gIG9wcG9zaXRlOiBudWxsLFxuICBtYXJrZXI6IG51bGwsXG4gIGNvbnRlbnQ6IG51bGxcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoVGltZWxpbmUsIFwicHJvcFR5cGVzXCIsIHtcbiAgaWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIHZhbHVlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXksXG4gIGFsaWduOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBsYXlvdXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGRhdGFLZXk6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgc3R5bGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QsXG4gIG9wcG9zaXRlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuICBtYXJrZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXG4gIGNvbnRlbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnlcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmUnKTtcbiIsImltcG9ydCBNYWluTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0cy9NYWluTGF5b3V0JztcbmltcG9ydCBUaGVUaW1lbGluZSBmcm9tICdjb21wb25lbnRzL3VpL2luZGV4L1RoZVRpbWVsaW5lJztcblxuY29uc3QgU2VjdGlvbiA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgLi4ucHJvcHMgIH0pID0+IChcbiAgPHNlY3Rpb24gaWQ9e3RpdGxlLnRvTG93ZXJDYXNlKCl9IGNsYXNzTmFtZT1cInctZnVsbCBweC0xNlwiIHsuLi5wcm9wc30+XG4gICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyXCI+e3RpdGxlfTwvaDM+XG5cbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hcnRpY2xlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxNYWluTGF5b3V0PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwidy1mdWxsIGgtOTYgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXB1cnBsZS00MDAgdmlhLXB1cnBsZS01MDAgdG8taW5kaWdvLTUwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTd4bCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+U0VNQVIgLSBJU0lIPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC0yeGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlNlYmVsYXMgTWFyZXQgSW50ZXJuYXRpb25hbCBTdHVkZW50IElPVCBIYWNrYXRob24gMjAyMTwvaDI+XG4gICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctZnVsbCBiZy10cmFuc3BhcmVudCBmaWxsLWN1cnJlbnQgdGV4dC1pbmRpZ28tNTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQ0MCAxODBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudFwiIGZpbGxPcGFjaXR5PVwiMVwiIGQ9XCJNMCwzMkw4MCw1OC43QzE2MCw4NSwzMjAsMTM5LDQ4MCwxNjBDNjQwLDE4MSw4MDAsMTcxLDk2MCwxNTQuN0MxMTIwLDEzOSwxMjgwLDExNywxMzYwLDEwNi43TDE0NDAsOTZMMTQ0MCwwTDEzNjAsMEMxMjgwLDAsMTEyMCwwLDk2MCwwQzgwMCwwLDY0MCwwLDQ4MCwwQzMyMCwwLDE2MCwwLDgwLDBMMCwwWlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTM2IHctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC15LTEyXCI+XG4gICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiQWJvdXRcIj5cbiAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb25zZXF1YXR1ciBuZXF1ZSBkb2xvcmVtcXVlIG5vYmlzIG5lY2Vzc2l0YXRpYnVzIGxpYmVybywgZXZlbmlldCBjdXBpZGl0YXRlIHZvbHVwdGF0aWJ1cyBhIG1vZGksIHV0LCBhbWV0IGV4IHZlcm8gdml0YWUgdmVyaXRhdGlzIHJlcnVtIHByb3ZpZGVudCBkb2xvcmVzIGlzdGU/IFRlbXBvcmlidXMuPC9wPlxuICAgICAgICA8L1NlY3Rpb24+XG5cbiAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJUaW1lbGluZVwiPlxuICAgICAgICAgIDxUaGVUaW1lbGluZSAvPlxuICAgICAgICA8L1NlY3Rpb24+XG5cbiAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJQcml6ZVwiPlxuXG4gICAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIlJlZ2lzdGVyXCI+XG5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiT3JnYW5pemVkIEJ5XCI+XG5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiRkFRXCI+XG5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj5JbmkgZm9vdGVyPC9oMz5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvTWFpbkxheW91dD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9