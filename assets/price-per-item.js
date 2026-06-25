function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
if (!customElements.get('price-per-item')) {
  customElements.define('price-per-item', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function PricePerItem() {
      var _this;
      _classCallCheck(this, PricePerItem);
      _this = _callSuper(this, PricePerItem);
      _defineProperty(_this, "updatePricePerItemUnsubscriber", undefined);
      _defineProperty(_this, "variantIdChangedUnsubscriber", undefined);
      _this.variantId = _this.dataset.variantId;
      _this.input = document.getElementById("Quantity-".concat(_this.dataset.sectionId || _this.dataset.variantId));
      if (_this.input) {
        _this.input.addEventListener('change', _this.onInputChange.bind(_this));
      }
      _this.getVolumePricingArray();
      return _this;
    }
    _inherits(PricePerItem, _HTMLElement);
    return _createClass(PricePerItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;
        // Update variantId if variant is switched on product page
        this.variantIdChangedUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, function (event) {
          _this2.variantId = event.data.variant.id.toString();
          _this2.getVolumePricingArray();
        });
        this.updatePricePerItemUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, function (response) {
          if (!response.cartData) return;

          // Item was added to cart via product page
          if (response.cartData['variant_id'] !== undefined) {
            if (response.productVariantId === _this2.variantId) _this2.updatePricePerItem(response.cartData.quantity);
            // Qty was updated in cart
          } else if (response.cartData.item_count !== 0) {
            var isVariant = response.cartData.items.find(function (item) {
              return item.variant_id.toString() === _this2.variantId;
            });
            if (isVariant && isVariant.id.toString() === _this2.variantId) {
              // The variant is still in cart
              _this2.updatePricePerItem(isVariant.quantity);
            } else {
              // The variant was removed from cart, qty is 0
              _this2.updatePricePerItem(0);
            }
            // All items were removed from cart
          } else {
            _this2.updatePricePerItem(0);
          }
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this.updatePricePerItemUnsubscriber) {
          this.updatePricePerItemUnsubscriber();
        }
        if (this.variantIdChangedUnsubscriber) {
          this.variantIdChangedUnsubscriber();
        }
      }
    }, {
      key: "onInputChange",
      value: function onInputChange() {
        this.updatePricePerItem();
      }
    }, {
      key: "updatePricePerItem",
      value: function updatePricePerItem(updatedCartQuantity) {
        if (this.input) {
          this.enteredQty = parseInt(this.input.value);
          this.step = parseInt(this.input.step);
        }

        // updatedCartQuantity is undefined when qty is updated on product page. We need to sum entered qty and current qty in cart.
        // updatedCartQuantity is not undefined when qty is updated in cart. We need to sum qty in cart and min qty for product.
        this.currentQtyForVolumePricing = updatedCartQuantity === undefined ? this.getCartQuantity(updatedCartQuantity) + this.enteredQty : this.getCartQuantity(updatedCartQuantity) + parseInt(this.step);
        if (this.classList.contains('variant-item__price-per-item')) {
          this.currentQtyForVolumePricing = this.getCartQuantity(updatedCartQuantity);
        }
        var _iterator = _createForOfIteratorHelper(this.qtyPricePairs),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pair = _step.value;
            if (this.currentQtyForVolumePricing >= pair[0]) {
              var pricePerItemCurrent = document.querySelector("price-per-item[id^=\"Price-Per-Item-".concat(this.dataset.sectionId || this.dataset.variantId, "\"] .price-per-item span"));
              this.classList.contains('variant-item__price-per-item') ? pricePerItemCurrent.innerHTML = window.quickOrderListStrings.each.replace('[money]', pair[1]) : pricePerItemCurrent.innerHTML = pair[1];
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "getCartQuantity",
      value: function getCartQuantity(updatedCartQuantity) {
        return updatedCartQuantity || updatedCartQuantity === 0 ? updatedCartQuantity : parseInt(this.input.dataset.cartQuantity);
      }
    }, {
      key: "getVolumePricingArray",
      value: function getVolumePricingArray() {
        var _this3 = this;
        var volumePricing = document.getElementById("Volume-".concat(this.dataset.sectionId || this.dataset.variantId));
        this.qtyPricePairs = [];
        if (volumePricing) {
          volumePricing.querySelectorAll('li').forEach(function (li) {
            var qty = parseInt(li.querySelector('span:first-child').textContent);
            var price = li.querySelector('span:not(:first-child):last-child').dataset.text;
            _this3.qtyPricePairs.push([qty, price]);
          });
        }
        this.qtyPricePairs.reverse();
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}