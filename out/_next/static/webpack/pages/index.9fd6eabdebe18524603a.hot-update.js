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
/* harmony import */ var primereact_tabmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/tabmenu */ "./node_modules/primereact/tabmenu.js");
/* harmony import */ var primereact_tabmenu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_tabmenu__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Repositories\\semar-isih-next\\components\\blocks\\TheNav.jsx";
 // import { Button } from 'primereact/button';

function TheNav(_ref) {
  var reveal = _ref.reveal;
  // const elm = useRef();
  // const bgColor = reveal ? 'bg-white' : 'bg-transparent';
  var items = [{
    label: 'Home',
    icon: 'pi pi-fw pi-home'
  }, {
    label: 'Calendar',
    icon: 'pi pi-fw pi-calendar'
  }, {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil'
  }, {
    label: 'Documentation',
    icon: 'pi pi-fw pi-file'
  }, {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_tabmenu__WEBPACK_IMPORTED_MODULE_1__["TabMenu"], {
    model: items,
    activeItem: activeItem,
    onTabChange: function onTabChange(e) {
      return setActiveItem(e.value);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this) // <nav className={`fixed w-full px-16 py-4 ${bgColor} flex flex-row flex-nowrap justify-end gap-x-8 shadow-md`}>
  //   <a href="#about">
  //     <Button label="About" className="p-button-text p-button-rounded" />
  //   </a>
  //   <a href="#timeline">
  //     <Button label="Timeline" className="p-button-text p-button-rounded" />
  //   </a>
  //   <a href="#prize">
  //     <Button label="Prize" className="p-button-text p-button-rounded" />
  //   </a>
  //   <a href="#contact">
  //     <Button label="Contact" className="p-button-text p-button-rounded" />
  //   </a>
  //   <a href="#faq">
  //     <Button label="FAQ" className="p-button-text p-button-rounded" />
  //   </a>
  //   <a href="#register">
  //     <Button label="Register" className="p-button-rounded p-button-warning" />
  //   </a>
  // </nav>
  ;
}
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

/***/ }),

/***/ "./node_modules/primereact/button.js":
false,

/***/ "./node_modules/primereact/components/button/Button.js":
false,

/***/ "./node_modules/primereact/components/tabmenu/TabMenu.js":
/*!***************************************************************!*\
  !*** ./node_modules/primereact/components/tabmenu/TabMenu.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabMenu = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ClassNames = __webpack_require__(/*! ../utils/ClassNames */ "./node_modules/primereact/components/utils/ClassNames.js");

var _DomHandler = _interopRequireDefault(__webpack_require__(/*! ../utils/DomHandler */ "./node_modules/primereact/components/utils/DomHandler.js"));

var _ObjectUtils = _interopRequireDefault(__webpack_require__(/*! ../utils/ObjectUtils */ "./node_modules/primereact/components/utils/ObjectUtils.js"));

var _Ripple = __webpack_require__(/*! ../ripple/Ripple */ "./node_modules/primereact/components/ripple/Ripple.js");

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

var TabMenu = /*#__PURE__*/function (_Component) {
  _inherits(TabMenu, _Component);

  var _super = _createSuper(TabMenu);

  function TabMenu(props) {
    var _this;

    _classCallCheck(this, TabMenu);

    _this = _super.call(this, props);

    if (!_this.props.onTabChange) {
      _this.state = {
        activeItem: props.activeItem
      };
    }

    return _this;
  }

  _createClass(TabMenu, [{
    key: "itemClick",
    value: function itemClick(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.url) {
        event.preventDefault();
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }

      if (this.props.onTabChange) {
        this.props.onTabChange({
          originalEvent: event,
          value: item
        });
      } else {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "getActiveItem",
    value: function getActiveItem() {
      return this.props.onTabChange ? this.props.activeItem : this.state.activeItem;
    }
  }, {
    key: "getActiveIndex",
    value: function getActiveIndex() {
      var activeItem = this.getActiveItem();

      if (this.props.model) {
        for (var i = 0; i < this.props.model.length; i++) {
          if (activeItem === this.props.model[i]) {
            return i;
          }
        }
      }

      return null;
    }
  }, {
    key: "updateInkBar",
    value: function updateInkBar() {
      var activeIndex = this.getActiveIndex();
      var tabHeader = this["tab_".concat(activeIndex)];
      this.inkbar.style.width = _DomHandler.default.getWidth(tabHeader) + 'px';
      this.inkbar.style.left = _DomHandler.default.getOffset(tabHeader).left - _DomHandler.default.getOffset(this.nav).left + 'px';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateInkBar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateInkBar();
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(item, index) {
      var _this2 = this;

      var activeItem = this.getActiveItem();
      var active = activeItem ? activeItem === item : index === 0;
      var className = (0, _ClassNames.classNames)('p-tabmenuitem', {
        'p-highlight': active,
        'p-disabled': item.disabled
      }, item.className);
      var iconClassName = (0, _ClassNames.classNames)('p-menuitem-icon', item.icon);

      var icon = item.icon && /*#__PURE__*/_react.default.createElement("span", {
        className: iconClassName
      });

      var label = item.label && /*#__PURE__*/_react.default.createElement("span", {
        className: "p-menuitem-text"
      }, item.label);

      var content = /*#__PURE__*/_react.default.createElement("a", {
        href: item.url || '#',
        className: "p-menuitem-link",
        target: item.target,
        onClick: function onClick(event) {
          return _this2.itemClick(event, item);
        },
        role: "presentation"
      }, icon, label, /*#__PURE__*/_react.default.createElement(_Ripple.Ripple, null));

      if (item.template) {
        var defaultContentOptions = {
          onClick: function onClick(event) {
            return _this2.itemClick(event, item);
          },
          className: 'p-menuitem-link',
          labelClassName: 'p-menuitem-text',
          iconClassName: iconClassName,
          element: content,
          props: this.props,
          active: active
        };
        content = _ObjectUtils.default.getJSXElement(item.template, item, defaultContentOptions);
      }

      return /*#__PURE__*/_react.default.createElement("li", {
        ref: function ref(el) {
          return _this2["tab_".concat(index)] = el;
        },
        key: item.label + '_' + index,
        className: className,
        style: item.style,
        role: "tab",
        "aria-selected": active,
        "aria-expanded": active
      }, content);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this3 = this;

      return this.props.model.map(function (item, index) {
        return _this3.renderMenuItem(item, index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.model) {
        var className = (0, _ClassNames.classNames)('p-tabmenu p-component', this.props.className);
        var items = this.renderItems();
        return /*#__PURE__*/_react.default.createElement("div", {
          id: this.props.id,
          className: className,
          style: this.props.style
        }, /*#__PURE__*/_react.default.createElement("ul", {
          ref: function ref(el) {
            return _this4.nav = el;
          },
          className: "p-tabmenu-nav p-reset",
          role: "tablist"
        }, items, /*#__PURE__*/_react.default.createElement("li", {
          ref: function ref(el) {
            return _this4.inkbar = el;
          },
          className: "p-tabmenu-ink-bar"
        })));
      }

      return null;
    }
  }]);

  return TabMenu;
}(_react.Component);

exports.TabMenu = TabMenu;

_defineProperty(TabMenu, "defaultProps", {
  id: null,
  model: null,
  activeItem: null,
  style: null,
  className: null,
  onTabChange: null
});

_defineProperty(TabMenu, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  activeItem: _propTypes.default.any,
  style: _propTypes.default.any,
  className: _propTypes.default.string,
  onTabChange: _propTypes.default.func
});

/***/ }),

/***/ "./node_modules/primereact/components/tooltip/Tooltip.js":
false,

/***/ "./node_modules/primereact/components/utils/ConnectedOverlayScrollHandler.js":
false,

/***/ "./node_modules/primereact/tabmenu.js":
/*!********************************************!*\
  !*** ./node_modules/primereact/tabmenu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/tabmenu/TabMenu */ "./node_modules/primereact/components/tabmenu/TabMenu.js");

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ja3MvVGhlTmF2LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaW1lcmVhY3QvY29tcG9uZW50cy90YWJtZW51L1RhYk1lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmltZXJlYWN0L3RhYm1lbnUuanMiXSwibmFtZXMiOlsiVGhlTmF2IiwicmV2ZWFsIiwiaXRlbXMiLCJsYWJlbCIsImljb24iLCJhY3RpdmVJdGVtIiwiZSIsInNldEFjdGl2ZUl0ZW0iLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRWUsU0FBU0EsTUFBVCxPQUE2QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMxQztBQUNBO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFBQ0MsU0FBSyxFQUFFLE1BQVI7QUFBZ0JDLFFBQUksRUFBRTtBQUF0QixHQURZLEVBRVo7QUFBQ0QsU0FBSyxFQUFFLFVBQVI7QUFBb0JDLFFBQUksRUFBRTtBQUExQixHQUZZLEVBR1o7QUFBQ0QsU0FBSyxFQUFFLE1BQVI7QUFBZ0JDLFFBQUksRUFBRTtBQUF0QixHQUhZLEVBSVo7QUFBQ0QsU0FBSyxFQUFFLGVBQVI7QUFBeUJDLFFBQUksRUFBRTtBQUEvQixHQUpZLEVBS1o7QUFBQ0QsU0FBSyxFQUFFLFVBQVI7QUFBb0JDLFFBQUksRUFBRTtBQUExQixHQUxZLENBQWQ7QUFRQSxzQkFDRSxxRUFBQywwREFBRDtBQUFTLFNBQUssRUFBRUYsS0FBaEI7QUFBdUIsY0FBVSxFQUFFRyxVQUFuQztBQUErQyxlQUFXLEVBQUUscUJBQUNDLENBQUQ7QUFBQSxhQUFPQyxhQUFhLENBQUNELENBQUMsQ0FBQ0UsS0FBSCxDQUFwQjtBQUFBO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUVk7O0FBRWIsaUJBQWlCLG1CQUFPLENBQUMsNkZBQThCLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWZkNmVhYmRlYmUxODUyNDYwM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYk1lbnUgfSBmcm9tICdwcmltZXJlYWN0L3RhYm1lbnUnO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVOYXYgKHsgcmV2ZWFsIH0pIHtcbiAgLy8gY29uc3QgZWxtID0gdXNlUmVmKCk7XG4gIC8vIGNvbnN0IGJnQ29sb3IgPSByZXZlYWwgPyAnYmctd2hpdGUnIDogJ2JnLXRyYW5zcGFyZW50JztcbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge2xhYmVsOiAnSG9tZScsIGljb246ICdwaSBwaS1mdyBwaS1ob21lJ30sXG4gICAge2xhYmVsOiAnQ2FsZW5kYXInLCBpY29uOiAncGkgcGktZncgcGktY2FsZW5kYXInfSxcbiAgICB7bGFiZWw6ICdFZGl0JywgaWNvbjogJ3BpIHBpLWZ3IHBpLXBlbmNpbCd9LFxuICAgIHtsYWJlbDogJ0RvY3VtZW50YXRpb24nLCBpY29uOiAncGkgcGktZncgcGktZmlsZSd9LFxuICAgIHtsYWJlbDogJ1NldHRpbmdzJywgaWNvbjogJ3BpIHBpLWZ3IHBpLWNvZyd9XG5dO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYk1lbnUgbW9kZWw9e2l0ZW1zfSBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfSBvblRhYkNoYW5nZT17KGUpID0+IHNldEFjdGl2ZUl0ZW0oZS52YWx1ZSl9Lz5cbiAgICAvLyA8bmF2IGNsYXNzTmFtZT17YGZpeGVkIHctZnVsbCBweC0xNiBweS00ICR7YmdDb2xvcn0gZmxleCBmbGV4LXJvdyBmbGV4LW5vd3JhcCBqdXN0aWZ5LWVuZCBnYXAteC04IHNoYWRvdy1tZGB9PlxuICAgIC8vICAgPGEgaHJlZj1cIiNhYm91dFwiPlxuICAgIC8vICAgICA8QnV0dG9uIGxhYmVsPVwiQWJvdXRcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0IHAtYnV0dG9uLXJvdW5kZWRcIiAvPlxuICAgIC8vICAgPC9hPlxuXG4gICAgLy8gICA8YSBocmVmPVwiI3RpbWVsaW5lXCI+XG4gICAgLy8gICAgIDxCdXR0b24gbGFiZWw9XCJUaW1lbGluZVwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHQgcC1idXR0b24tcm91bmRlZFwiIC8+XG4gICAgLy8gICA8L2E+XG5cbiAgICAvLyAgIDxhIGhyZWY9XCIjcHJpemVcIj5cbiAgICAvLyAgICAgPEJ1dHRvbiBsYWJlbD1cIlByaXplXCIgY2xhc3NOYW1lPVwicC1idXR0b24tdGV4dCBwLWJ1dHRvbi1yb3VuZGVkXCIgLz5cbiAgICAvLyAgIDwvYT5cblxuICAgIC8vICAgPGEgaHJlZj1cIiNjb250YWN0XCI+XG4gICAgLy8gICAgIDxCdXR0b24gbGFiZWw9XCJDb250YWN0XCIgY2xhc3NOYW1lPVwicC1idXR0b24tdGV4dCBwLWJ1dHRvbi1yb3VuZGVkXCIgLz5cbiAgICAvLyAgIDwvYT5cblxuICAgIC8vICAgPGEgaHJlZj1cIiNmYXFcIj5cbiAgICAvLyAgICAgPEJ1dHRvbiBsYWJlbD1cIkZBUVwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHQgcC1idXR0b24tcm91bmRlZFwiIC8+XG4gICAgLy8gICA8L2E+XG5cbiAgICAvLyAgIDxhIGhyZWY9XCIjcmVnaXN0ZXJcIj5cbiAgICAvLyAgICAgPEJ1dHRvbiBsYWJlbD1cIlJlZ2lzdGVyXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgLz5cbiAgICAvLyAgIDwvYT5cbiAgICAvLyA8L25hdj5cbiAgKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UYWJNZW51ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9DbGFzc05hbWVzID0gcmVxdWlyZShcIi4uL3V0aWxzL0NsYXNzTmFtZXNcIik7XG5cbnZhciBfRG9tSGFuZGxlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL0RvbUhhbmRsZXJcIikpO1xuXG52YXIgX09iamVjdFV0aWxzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvT2JqZWN0VXRpbHNcIikpO1xuXG52YXIgX1JpcHBsZSA9IHJlcXVpcmUoXCIuLi9yaXBwbGUvUmlwcGxlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgVGFiTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGFiTWVudSwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUYWJNZW51KTtcblxuICBmdW5jdGlvbiBUYWJNZW51KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhYk1lbnUpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBpZiAoIV90aGlzLnByb3BzLm9uVGFiQ2hhbmdlKSB7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlSXRlbTogcHJvcHMuYWN0aXZlSXRlbVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGFiTWVudSwgW3tcbiAgICBrZXk6IFwiaXRlbUNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGl0ZW1DbGljayhldmVudCwgaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWl0ZW0udXJsKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmNvbW1hbmQpIHtcbiAgICAgICAgaXRlbS5jb21tYW5kKHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblRhYkNoYW5nZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVGFiQ2hhbmdlKHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZUl0ZW06IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEFjdGl2ZUl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aXZlSXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uVGFiQ2hhbmdlID8gdGhpcy5wcm9wcy5hY3RpdmVJdGVtIDogdGhpcy5zdGF0ZS5hY3RpdmVJdGVtO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBY3RpdmVJbmRleFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3RpdmVJbmRleCgpIHtcbiAgICAgIHZhciBhY3RpdmVJdGVtID0gdGhpcy5nZXRBY3RpdmVJdGVtKCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGVsKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5tb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhY3RpdmVJdGVtID09PSB0aGlzLnByb3BzLm1vZGVsW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUlua0JhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVJbmtCYXIoKSB7XG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgICB2YXIgdGFiSGVhZGVyID0gdGhpc1tcInRhYl9cIi5jb25jYXQoYWN0aXZlSW5kZXgpXTtcbiAgICAgIHRoaXMuaW5rYmFyLnN0eWxlLndpZHRoID0gX0RvbUhhbmRsZXIuZGVmYXVsdC5nZXRXaWR0aCh0YWJIZWFkZXIpICsgJ3B4JztcbiAgICAgIHRoaXMuaW5rYmFyLnN0eWxlLmxlZnQgPSBfRG9tSGFuZGxlci5kZWZhdWx0LmdldE9mZnNldCh0YWJIZWFkZXIpLmxlZnQgLSBfRG9tSGFuZGxlci5kZWZhdWx0LmdldE9mZnNldCh0aGlzLm5hdikubGVmdCArICdweCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy51cGRhdGVJbmtCYXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5rQmFyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck1lbnVJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGl0ZW0sIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSB0aGlzLmdldEFjdGl2ZUl0ZW0oKTtcbiAgICAgIHZhciBhY3RpdmUgPSBhY3RpdmVJdGVtID8gYWN0aXZlSXRlbSA9PT0gaXRlbSA6IGluZGV4ID09PSAwO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9ICgwLCBfQ2xhc3NOYW1lcy5jbGFzc05hbWVzKSgncC10YWJtZW51aXRlbScsIHtcbiAgICAgICAgJ3AtaGlnaGxpZ2h0JzogYWN0aXZlLFxuICAgICAgICAncC1kaXNhYmxlZCc6IGl0ZW0uZGlzYWJsZWRcbiAgICAgIH0sIGl0ZW0uY2xhc3NOYW1lKTtcbiAgICAgIHZhciBpY29uQ2xhc3NOYW1lID0gKDAsIF9DbGFzc05hbWVzLmNsYXNzTmFtZXMpKCdwLW1lbnVpdGVtLWljb24nLCBpdGVtLmljb24pO1xuXG4gICAgICB2YXIgaWNvbiA9IGl0ZW0uaWNvbiAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbGFiZWwgPSBpdGVtLmxhYmVsICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLW1lbnVpdGVtLXRleHRcIlxuICAgICAgfSwgaXRlbS5sYWJlbCk7XG5cbiAgICAgIHZhciBjb250ZW50ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgICAgaHJlZjogaXRlbS51cmwgfHwgJyMnLFxuICAgICAgICBjbGFzc05hbWU6IFwicC1tZW51aXRlbS1saW5rXCIsXG4gICAgICAgIHRhcmdldDogaXRlbS50YXJnZXQsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLml0ZW1DbGljayhldmVudCwgaXRlbSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCJcbiAgICAgIH0sIGljb24sIGxhYmVsLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUmlwcGxlLlJpcHBsZSwgbnVsbCkpO1xuXG4gICAgICBpZiAoaXRlbS50ZW1wbGF0ZSkge1xuICAgICAgICB2YXIgZGVmYXVsdENvbnRlbnRPcHRpb25zID0ge1xuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuaXRlbUNsaWNrKGV2ZW50LCBpdGVtKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3AtbWVudWl0ZW0tbGluaycsXG4gICAgICAgICAgbGFiZWxDbGFzc05hbWU6ICdwLW1lbnVpdGVtLXRleHQnLFxuICAgICAgICAgIGljb25DbGFzc05hbWU6IGljb25DbGFzc05hbWUsXG4gICAgICAgICAgZWxlbWVudDogY29udGVudCxcbiAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9O1xuICAgICAgICBjb250ZW50ID0gX09iamVjdFV0aWxzLmRlZmF1bHQuZ2V0SlNYRWxlbWVudChpdGVtLnRlbXBsYXRlLCBpdGVtLCBkZWZhdWx0Q29udGVudE9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMltcInRhYl9cIi5jb25jYXQoaW5kZXgpXSA9IGVsO1xuICAgICAgICB9LFxuICAgICAgICBrZXk6IGl0ZW0ubGFiZWwgKyAnXycgKyBpbmRleCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBpdGVtLnN0eWxlLFxuICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogYWN0aXZlLFxuICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogYWN0aXZlXG4gICAgICB9LCBjb250ZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVySXRlbXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbXMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMubW9kZWwubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLnJlbmRlck1lbnVJdGVtKGl0ZW0sIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGVsKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX0NsYXNzTmFtZXMuY2xhc3NOYW1lcykoJ3AtdGFibWVudSBwLWNvbXBvbmVudCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5yZW5kZXJJdGVtcygpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM0Lm5hdiA9IGVsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtdGFibWVudS1uYXYgcC1yZXNldFwiLFxuICAgICAgICAgIHJvbGU6IFwidGFibGlzdFwiXG4gICAgICAgIH0sIGl0ZW1zLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5pbmtiYXIgPSBlbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLXRhYm1lbnUtaW5rLWJhclwiXG4gICAgICAgIH0pKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUYWJNZW51O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5UYWJNZW51ID0gVGFiTWVudTtcblxuX2RlZmluZVByb3BlcnR5KFRhYk1lbnUsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgaWQ6IG51bGwsXG4gIG1vZGVsOiBudWxsLFxuICBhY3RpdmVJdGVtOiBudWxsLFxuICBzdHlsZTogbnVsbCxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBvblRhYkNoYW5nZTogbnVsbFxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUYWJNZW51LCBcInByb3BUeXBlc1wiLCB7XG4gIGlkOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBtb2RlbDogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5LFxuICBhY3RpdmVJdGVtOiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuICBzdHlsZTogX3Byb3BUeXBlcy5kZWZhdWx0LmFueSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBvblRhYkNoYW5nZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGFibWVudS9UYWJNZW51Jyk7Il0sInNvdXJjZVJvb3QiOiIifQ==