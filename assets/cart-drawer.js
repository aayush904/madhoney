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
var CartDrawer = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  function CartDrawer() {
    var _this;
    _classCallCheck(this, CartDrawer);
    _this = _callSuper(this, CartDrawer);
    _this.addEventListener('keyup', function (evt) {
      return evt.code === 'Escape' && _this.close();
    });
    _this.querySelector('#CartDrawer-Overlay').addEventListener('click', _this.close.bind(_this));
    _this.setHeaderCartIconAccessibility();
    return _this;
  }
  
  _inherits(CartDrawer, _HTMLElement);
  return _createClass(CartDrawer, [{
    key: "setHeaderCartIconAccessibility",
    value: function setHeaderCartIconAccessibility() {
      var _this2 = this;
      var cartLink = document.querySelector('#cart-icon-bubble');
      if (!cartLink) return;
      cartLink.setAttribute('role', 'button');
      cartLink.setAttribute('aria-haspopup', 'dialog');
      cartLink.addEventListener('click', function (event) {
        event.preventDefault();
        _this2.open(cartLink);
      });

      cartLink.addEventListener('keydown', function (event) {
        if (event.code.toUpperCase() === 'SPACE') {
          event.preventDefault();
          _this2.open(cartLink);
        }
      });
    }
  }, {
    key: "open",
    value: function open(triggeredBy) {
      var _this3 = this;
      if (triggeredBy) this.setActiveElement(triggeredBy);
      var cartDrawerNote = this.querySelector('[id^="Details-"] summary');
      if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
      // here the animation doesn't seem to always get triggered. A timeout seem to help
      setTimeout(function () {
        _this3.classList.add('animate', 'active');
      });
      this.addEventListener('transitionend', function () {
        var containerToTrapFocusOn = _this3.classList.contains('is-empty') ? _this3.querySelector('.drawer__inner-empty') : document.getElementById('CartDrawer');
        var focusElement = _this3.querySelector('.drawer__inner') || _this3.querySelector('.drawer__close');
        trapFocus(containerToTrapFocusOn, focusElement);
      }, {
        once: true
      });
      document.body.classList.add('overflow-hidden');
    }
  }, {
    key: "close",
    value: function close() {
      this.classList.remove('active');
      removeTrapFocus(this.activeElement);
      document.body.classList.remove('overflow-hidden');
    }
  }, {
    key: "setSummaryAccessibility",
    value: function setSummaryAccessibility(cartDrawerNote) {
      cartDrawerNote.setAttribute('role', 'button');
      cartDrawerNote.setAttribute('aria-expanded', 'false');
      if (cartDrawerNote.nextElementSibling.getAttribute('id')) {
        cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
      }
      cartDrawerNote.addEventListener('click', function (event) {
        event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
      });
      cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
    }
  }, {
    key: "renderContents",
    value: function renderContents(parsedState) {
      var _this4 = this;
      this.querySelector('.drawer__inner').classList.contains('is-empty') && this.querySelector('.drawer__inner').classList.remove('is-empty');
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach(function (section) {
        var sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
        if (!sectionElement) return;
        sectionElement.innerHTML = _this4.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      });
      setTimeout(function () {
        _this4.querySelector('#CartDrawer-Overlay').addEventListener('click', _this4.close.bind(_this4));
        _this4.open();
      });
    }
  }, {
    key: "getSectionInnerHTML",
    value: function getSectionInnerHTML(html) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.shopify-section';
      return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
    }
  }, {
    key: "getSectionsToRender",
    value: function getSectionsToRender() {
      return [{
        id: 'cart-drawer',
        selector: '#CartDrawer'
      }, {
        id: 'cart-icon-bubble'
      }];
    }
  }, {
    key: "getSectionDOM",
    value: function getSectionDOM(html) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.shopify-section';
      return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
    }
  }, {
    key: "setActiveElement",
    value: function setActiveElement(element) {
      this.activeElement = element;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('cart-drawer', CartDrawer);
var CartDrawerItems = /*#__PURE__*/function (_CartItems) {
  "use strict";

  function CartDrawerItems() {
    _classCallCheck(this, CartDrawerItems);
    return _callSuper(this, CartDrawerItems, arguments);
  }
  _inherits(CartDrawerItems, _CartItems);
  return _createClass(CartDrawerItems, [{
    key: "getSectionsToRender",
    value: function getSectionsToRender() {
      return [{
        id: 'CartDrawer',
        section: 'cart-drawer',
        selector: '.drawer__inner'
      }, {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      }];
    }
  }]);
}(CartItems);
customElements.define('cart-drawer-items', CartDrawerItems);