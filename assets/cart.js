function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
var PaypalButtonContainer = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  function PaypalButtonContainer() {
    _classCallCheck(this, PaypalButtonContainer);
    return _callSuper(this, PaypalButtonContainer, arguments);
  }
  _inherits(PaypalButtonContainer, _HTMLElement);
  return _createClass(PaypalButtonContainer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;
      this.renderPaypalButton();
      document.addEventListener('cart:updated', function () {
        _this.renderPaypalButton();
      });
    }
  }, {
    key: "renderPaypalButton",
    value: function renderPaypalButton() {
      var _this2 = this;
      fetch('/cart.js').then(function (response) {
        return response.json();
      }).then(function (cartData) {
        var hasSubscription = cartData.items.some(function (item) {
          return item.selling_plan_allocation ? true : false;
        });
        // Remove any existing PayPal button inner div
        var existingBtnDiv = _this2.querySelector('#paypal-btn-inner');
        if (existingBtnDiv) {
          existingBtnDiv.remove();
        }
        _this2.innerHTML = '';
        if (!hasSubscription && cartData.items.length > 0) {
          // Load PayPal SDK if not already loaded
          if (!window.paypal) {
            var script = document.createElement('script');
            script.src = 'https://www.paypal.com/sdk/js?client-id=Ae6KAMr6YTKrJp07AHDqB01N4IN7lNPZmkqzVs3vtXtUSqQwLAqrpURJlijCKnwY_J98fXDXQQOFQkGX&currency=USD';
            script.onload = function () {
              return _this2.renderPaypalButton();
            };
            document.head.appendChild(script);
            return;
          }
          var btnDiv = document.createElement('div');
          btnDiv.id = 'paypal-btn-inner';
          btnDiv.style.overflow = 'auto';
          btnDiv.style.maxHeight = '320px';
          _this2.appendChild(btnDiv);
          paypal.Buttons({
            createOrder: function createOrder(data, actions) {
              var totalPrice = cartData.items.reduce(function (sum, item) {
                return sum + item.final_line_price;
              }, 0);
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: (totalPrice / 100).toFixed(2)
                  }
                }]
              });
            },
            onApprove: function onApprove(data, actions) {
              return actions.order.capture().then(function (details) {
                fetch('https://paypal-server-five.vercel.app/paypal-payment-success', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    orderID: data.orderID,
                    payerID: data.payerID,
                    cart: cartData,
                    paymentDetails: details
                  })
                }).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  if (data.success) {
                    sessionStorage.setItem('orderId', data.id);
                    window.location.href = '/pages/thank-you';
                  } else {
                    alert('Order creation failed!');
                  }
                });
              });
            },
            onCancel: function onCancel() {
              alert('Payment was cancelled. You can try again or choose another payment method.');
            }
          }).render('#paypal-btn-inner');
        }
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
document.addEventListener('DOMContentLoaded', function () {
  customElements.define('paypal-button-container', PaypalButtonContainer);
});
var CartRemoveButton = /*#__PURE__*/function (_HTMLElement2) {
  "use strict";

  function CartRemoveButton() {
    var _this3;
    _classCallCheck(this, CartRemoveButton);
    _this3 = _callSuper(this, CartRemoveButton);
    _this3.addEventListener('click', function (event) {
      event.preventDefault();
      var cartItems = _this3.closest('cart-items') || _this3.closest('cart-drawer-items');
      cartItems.updateQuantity(_this3.dataset.index, 0);
    });
    return _this3;
  }
  _inherits(CartRemoveButton, _HTMLElement2);
  return _createClass(CartRemoveButton);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('cart-remove-button', CartRemoveButton);
var CartItems = /*#__PURE__*/function (_HTMLElement3) {
  "use strict";

  function CartItems() {
    var _this4;
    _classCallCheck(this, CartItems);
    _this4 = _callSuper(this, CartItems);
    _defineProperty(_this4, "cartUpdateUnsubscriber", undefined);
    _this4.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');
    var debouncedOnChange = debounce(function (event) {
      _this4.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);
    _this4.addEventListener('change', debouncedOnChange.bind(_this4));
    return _this4;
  }
  _inherits(CartItems, _HTMLElement3);
  return _createClass(CartItems, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this5 = this;
      this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, function (event) {
        if (event.source === 'cart-items') {
          return;
        }
        _this5.onCartUpdate();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.cartUpdateUnsubscriber) {
        this.cartUpdateUnsubscriber();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));
    }
  }, {
    key: "onCartUpdate",
    value: function onCartUpdate() {
      var _this6 = this;
      fetch("".concat(routes.cart_url, "?section_id=main-cart-items")).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        var html = new DOMParser().parseFromString(responseText, 'text/html');
        var sourceQty = html.querySelector('cart-items');
        _this6.innerHTML = sourceQty.innerHTML;
      }).catch(function (e) {
        console.error(e);
      });
    }
  }, {
    key: "getSectionsToRender",
    value: function getSectionsToRender() {
      return [{
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents'
      }, {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      }, {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      }, {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents'
      }];
    }
  }, {
    key: "updateQuantity",
    value: function updateQuantity(line, quantity, name) {
      var _this7 = this;
      this.enableLoading(line);
      var body = JSON.stringify({
        line: line,
        quantity: quantity,
        sections: this.getSectionsToRender().map(function (section) {
          return section.section;
        }),
        sections_url: window.location.pathname
      });
      fetch("".concat(routes.cart_change_url), _objectSpread(_objectSpread({}, fetchConfig()), {
        body: body
      })).then(function (response) {
        return response.text();
      }).then(function (state) {
        var parsedState = JSON.parse(state);
        var quantityElement = document.getElementById("Quantity-".concat(line)) || document.getElementById("Drawer-quantity-".concat(line));
        var items = document.querySelectorAll('.cart-item');
        if (parsedState.errors) {
          quantityElement.value = quantityElement.getAttribute('value');
          _this7.updateLiveRegions(line, parsedState.errors);
          return;
        }
        _this7.classList.toggle('is-empty', parsedState.item_count === 0);
        var cartDrawerWrapper = document.querySelector('cart-drawer');
        var cartFooter = document.getElementById('main-cart-footer');
        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
        _this7.getSectionsToRender().forEach(function (section) {
          var elementToReplace = document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
          elementToReplace.innerHTML = _this7.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        });
        var updatedValue = parsedState.items[line - 1] ? parsedState.items[line - 1].quantity : undefined;
        var message = '';
        if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
          if (typeof updatedValue === 'undefined') {
            message = window.cartStrings.error;
          } else {
            message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
          }
        }
        _this7.updateLiveRegions(line, message);
        var lineItem = document.getElementById("CartItem-".concat(line)) || document.getElementById("CartDrawer-Item-".concat(line));
        if (lineItem && lineItem.querySelector("[name=\"".concat(name, "\"]"))) {
          cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector("[name=\"".concat(name, "\"]"))) : lineItem.querySelector("[name=\"".concat(name, "\"]")).focus();
        } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'));
        } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'));
        }
        publish(PUB_SUB_EVENTS.cartUpdate, {
          source: 'cart-items'
        });
      }).catch(function () {
        _this7.querySelectorAll('.loading-overlay').forEach(function (overlay) {
          return overlay.classList.add('hidden');
        });
        var errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
      }).finally(function () {
        _this7.disableLoading(line);
      });
    }
  }, {
    key: "updateLiveRegions",
    value: function updateLiveRegions(line, message) {
      var lineItemError = document.getElementById("Line-item-error-".concat(line)) || document.getElementById("CartDrawer-LineItemError-".concat(line));
      if (lineItemError) lineItemError.querySelector('.cart-item__error-text').innerHTML = message;
      this.lineItemStatusElement.setAttribute('aria-hidden', true);
      var cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
      cartStatus.setAttribute('aria-hidden', false);
      setTimeout(function () {
        cartStatus.setAttribute('aria-hidden', true);
      }, 1000);
    }
  }, {
    key: "getSectionInnerHTML",
    value: function getSectionInnerHTML(html, selector) {
      return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
    }
  }, {
    key: "enableLoading",
    value: function enableLoading(line) {
      var mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
      mainCartItems.classList.add('cart__items--disabled');
      var cartItemElements = this.querySelectorAll("#CartItem-".concat(line, " .loading-overlay"));
      var cartDrawerItemElements = this.querySelectorAll("#CartDrawer-Item-".concat(line, " .loading-overlay"));
      [].concat(_toConsumableArray(cartItemElements), _toConsumableArray(cartDrawerItemElements)).forEach(function (overlay) {
        return overlay.classList.remove('hidden');
      });
      document.activeElement.blur();
      this.lineItemStatusElement.setAttribute('aria-hidden', false);
    }
  }, {
    key: "disableLoading",
    value: function disableLoading(line) {
      var mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
      mainCartItems.classList.remove('cart__items--disabled');
      var cartItemElements = this.querySelectorAll("#CartItem-".concat(line, " .loading-overlay"));
      var cartDrawerItemElements = this.querySelectorAll("#CartDrawer-Item-".concat(line, " .loading-overlay"));
      cartItemElements.forEach(function (overlay) {
        return overlay.classList.add('hidden');
      });
      cartDrawerItemElements.forEach(function (overlay) {
        return overlay.classList.add('hidden');
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('cart-items', CartItems);
if (!customElements.get('cart-note')) {
  customElements.define('cart-note', /*#__PURE__*/function (_HTMLElement4) {
    "use strict";

    function CartNote() {
      var _this8;
      _classCallCheck(this, CartNote);
      _this8 = _callSuper(this, CartNote);
      _this8.addEventListener('change', debounce(function (event) {
        var body = JSON.stringify({
          note: event.target.value
        });
        fetch("".concat(routes.cart_update_url), _objectSpread(_objectSpread({}, fetchConfig()), {
          body: body
        }));
      }, ON_CHANGE_DEBOUNCE_TIMER));
      return _this8;
    }
    _inherits(CartNote, _HTMLElement4);
    return _createClass(CartNote);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}
;