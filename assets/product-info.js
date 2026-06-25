function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
if (!customElements.get('product-info')) {
  customElements.define('product-info', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function ProductInfo() {
      var _this;
      _classCallCheck(this, ProductInfo);
      _this = _callSuper(this, ProductInfo);
      _defineProperty(_this, "cartUpdateUnsubscriber", undefined);
      _defineProperty(_this, "variantChangeUnsubscriber", undefined);
      _this.input = _this.querySelector('.quantity__input');
      _this.currentVariant = _this.querySelector('.product-variant-id');
      _this.variantSelects = _this.querySelector('variant-radios');
      _this.submitButton = _this.querySelector('[type="submit"]');
      return _this;
    }
    _inherits(ProductInfo, _HTMLElement);
    return _createClass(ProductInfo, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;
        if (!this.input) return;
        this.quantityForm = this.querySelector('.product-form__quantity');
        if (!this.quantityForm) return;
        this.setQuantityBoundries();
        if (!this.dataset.originalSection) {
          this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.fetchQuantityRules.bind(this));
        }
        this.variantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, function (event) {
          var sectionId = _this2.dataset.originalSection ? _this2.dataset.originalSection : _this2.dataset.section;
          if (event.data.sectionId !== sectionId) return;
          _this2.updateQuantityRules(event.data.sectionId, event.data.html);
          _this2.setQuantityBoundries();
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this.cartUpdateUnsubscriber) {
          this.cartUpdateUnsubscriber();
        }
        if (this.variantChangeUnsubscriber) {
          this.variantChangeUnsubscriber();
        }
      }
    }, {
      key: "setQuantityBoundries",
      value: function setQuantityBoundries() {
        var data = {
          cartQuantity: this.input.dataset.cartQuantity ? parseInt(this.input.dataset.cartQuantity) : 0,
          min: this.input.dataset.min ? parseInt(this.input.dataset.min) : 1,
          max: this.input.dataset.max ? parseInt(this.input.dataset.max) : null,
          step: this.input.step ? parseInt(this.input.step) : 1
        };
        var min = data.min;
        var max = data.max === null ? data.max : data.max - data.cartQuantity;
        if (max !== null) min = Math.min(min, max);
        if (data.cartQuantity >= data.min) min = Math.min(min, data.step);
        this.input.min = min;
        this.input.max = max;
        this.input.value = min;
        publish(PUB_SUB_EVENTS.quantityUpdate, undefined);
      }
    }, {
      key: "fetchQuantityRules",
      value: function fetchQuantityRules() {
        var _this3 = this;
        if (!this.currentVariant || !this.currentVariant.value) return;
        this.querySelector('.quantity__rules-cart .loading-overlay').classList.remove('hidden');
        fetch("".concat(this.dataset.url, "?variant=").concat(this.currentVariant.value, "&section_id=").concat(this.dataset.section)).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          var html = new DOMParser().parseFromString(responseText, 'text/html');
          _this3.updateQuantityRules(_this3.dataset.section, html);
          _this3.setQuantityBoundries();
        }).catch(function (e) {
          console.error(e);
        }).finally(function () {
          _this3.querySelector('.quantity__rules-cart .loading-overlay').classList.add('hidden');
        });
      }
    }, {
      key: "updateQuantityRules",
      value: function updateQuantityRules(sectionId, html) {
        var quantityFormUpdated = html.getElementById("Quantity-Form-".concat(sectionId));
        var selectors = ['.quantity__input', '.quantity__rules', '.quantity__label'];
        for (var _i = 0, _selectors = selectors; _i < _selectors.length; _i++) {
          var selector = _selectors[_i];
          var current = this.quantityForm.querySelector(selector);
          var updated = quantityFormUpdated.querySelector(selector);
          if (!current || !updated) continue;
          if (selector === '.quantity__input') {
            var attributes = ['data-cart-quantity', 'data-min', 'data-max', 'step'];
            for (var _i2 = 0, _attributes = attributes; _i2 < _attributes.length; _i2++) {
              var attribute = _attributes[_i2];
              var valueUpdated = updated.getAttribute(attribute);
              if (valueUpdated !== null) current.setAttribute(attribute, valueUpdated);
            }
          } else {
            current.innerHTML = updated.innerHTML;
          }
        }
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}
;