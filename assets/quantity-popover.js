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
if (!customElements.get('quantity-popover')) {
  customElements.define('quantity-popover', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function QuantityPopover() {
      var _this;
      _classCallCheck(this, QuantityPopover);
      _this = _callSuper(this, QuantityPopover);
      _this.mql = window.matchMedia('(min-width: 1024px)');
      _this.mqlTablet = window.matchMedia('(min-width: 769px)');
      _this.infoButtonDesktop = _this.querySelector('.quantity-popover__info-button--icon-only');
      _this.infoButtonMobile = _this.querySelector('.quantity-popover__info-button--icon-with-label');
      _this.popoverInfo = _this.querySelector('.quantity-popover__info');
      _this.closeButton = _this.querySelector('.button-close');
      _this.eventMouseEnterHappened = false;
      if (_this.closeButton) {
        _this.closeButton.addEventListener('click', _this.closePopover.bind(_this));
      }
      if (_this.popoverInfo && _this.infoButtonDesktop && _this.mqlTablet.matches) {
        _this.popoverInfo.addEventListener('mouseleave', _this.closePopover.bind(_this));
      }
      if (_this.infoButtonDesktop) {
        _this.infoButtonDesktop.addEventListener('click', _this.togglePopover.bind(_this));
        _this.infoButtonDesktop.addEventListener('focusout', _this.closePopover.bind(_this));
      }
      if (_this.infoButtonMobile) {
        _this.infoButtonMobile.addEventListener('click', _this.togglePopover.bind(_this));
      }
      if (_this.infoButtonDesktop && _this.mqlTablet.matches) {
        _this.infoButtonDesktop.addEventListener('mouseenter', _this.togglePopover.bind(_this));
        _this.infoButtonDesktop.addEventListener('mouseleave', _this.closePopover.bind(_this));
      }
      return _this;
    }
    _inherits(QuantityPopover, _HTMLElement);
    return _createClass(QuantityPopover, [{
      key: "togglePopover",
      value: function togglePopover(event) {
        var _this2 = this;
        event.preventDefault();
        if (event.type === 'mouseenter') {
          this.eventMouseEnterHappened = true;
        }
        if (event.type === 'click' && this.eventMouseEnterHappened) return;
        var button = this.infoButtonDesktop && this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;
        var isExpanded = button.getAttribute('aria-expanded') === 'true';
        if (this.mql.matches && !isExpanded || event.type === 'click') {
          button.setAttribute('aria-expanded', !isExpanded);
          this.popoverInfo.toggleAttribute('hidden');
          button.classList.toggle('quantity-popover__info-button--open');
          this.infoButtonDesktop.classList.add('quantity-popover__info-button--icon-only--animation');
        }
        var isOpen = button.getAttribute('aria-expanded') === 'true';
        if (isOpen && event.type !== 'mouseenter') {
          button.focus();
          button.addEventListener('keyup', function (e) {
            if (e.key === 'Escape') {
              _this2.closePopover(e);
            }
          });
        }
      }
    }, {
      key: "closePopover",
      value: function closePopover(event) {
        event.preventDefault();
        var isButtonChild = this.infoButtonDesktop.contains(event.relatedTarget);
        var isPopoverChild = this.popoverInfo.contains(event.relatedTarget);
        var button = this.infoButtonDesktop && this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;
        if (!isButtonChild && !isPopoverChild) {
          button.setAttribute('aria-expanded', 'false');
          button.classList.remove('quantity-popover__info-button--open');
          this.popoverInfo.setAttribute('hidden', '');
          this.infoButtonDesktop.classList.remove('quantity-popover__info-button--icon-only--animation');
        }
        this.eventMouseEnterHappened = false;
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}