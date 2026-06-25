function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var DetailsDisclosure = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  function DetailsDisclosure() {
    var _this;
    _classCallCheck(this, DetailsDisclosure);
    _this = _callSuper(this, DetailsDisclosure);
    _this.mainDetailsToggle = _this.querySelector('details');
    _this.content = _this.mainDetailsToggle.querySelector('summary').nextElementSibling;
    _this.mainDetailsToggle.addEventListener('focusout', _this.onFocusOut.bind(_this));
    _this.mainDetailsToggle.addEventListener('toggle', _this.onToggle.bind(_this));
    return _this;
  }
  _inherits(DetailsDisclosure, _HTMLElement);
  return _createClass(DetailsDisclosure, [{
    key: "onFocusOut",
    value: function onFocusOut() {
      var _this2 = this;
      setTimeout(function () {
        if (!_this2.contains(document.activeElement)) _this2.close();
      });
    }
  }, {
    key: "onToggle",
    value: function onToggle() {
      if (!this.animations) this.animations = this.content.getAnimations();
      if (this.mainDetailsToggle.hasAttribute('open')) {
        this.animations.forEach(function (animation) {
          return animation.play();
        });
      } else {
        this.animations.forEach(function (animation) {
          return animation.cancel();
        });
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.mainDetailsToggle.removeAttribute('open');
      this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('details-disclosure', DetailsDisclosure);
var HeaderMenu = /*#__PURE__*/function (_DetailsDisclosure) {
  "use strict";

  function HeaderMenu() {
    var _this3;
    _classCallCheck(this, HeaderMenu);
    _this3 = _callSuper(this, HeaderMenu);
    _this3.header = document.querySelector('.header-wrapper');
    return _this3;
  }
  _inherits(HeaderMenu, _DetailsDisclosure);
  return _createClass(HeaderMenu, [{
    key: "onToggle",
    value: function onToggle() {
      if (!this.header) return;
      this.header.preventHide = this.mainDetailsToggle.open;
      if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
      document.documentElement.style.setProperty('--header-bottom-position-desktop', "".concat(Math.floor(this.header.getBoundingClientRect().bottom), "px"));
    }
  }]);
}(DetailsDisclosure);
customElements.define('header-menu', HeaderMenu);