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
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
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
// class PaypalButtonContainer extends HTMLElement {
//   connectedCallback() {
//     this.renderPaypalButton();
//     document.addEventListener('cart:updated', () => {
//       this.renderPaypalButton();
//     });
//   }
//   renderPaypalButton() {
//     fetch('/cart.js')
//       .then(response => response.json())
//       .then(cartData => {
//         var hasSubscription = cartData.items.some(function(item) {
//           return item.selling_plan_allocation ? true : false;
//         });
//         // Remove any existing PayPal button inner div
//         const existingBtnDiv = this.querySelector('#paypal-btn-inner');
//         if (existingBtnDiv) {
//           existingBtnDiv.remove();
//         }
//         this.innerHTML = '';
//         if (!hasSubscription && cartData.items.length > 0) {
//           // Load PayPal SDK if not already loaded
//           if (!window.paypal) {
//             var script = document.createElement('script');
//             script.src = 'https://www.paypal.com/sdk/js?client-id=AeDxqzkiqMy8W22D2bfGvgNZV-FqLunKtAtE3-1ggZUrMmoUaUfJRqsQ5YVIg7JdRg76YzMJwZX05Sp-&currency=USD';
//             script.onload = () => this.renderPaypalButton();
//             document.head.appendChild(script);
//             return;
//           }
//           var btnDiv = document.createElement('div');
//           btnDiv.id = 'paypal-btn-inner';
//           this.appendChild(btnDiv);
//           paypal.Buttons({
//             createOrder: function (data, actions) {
//               var totalPrice = cartData.items.reduce(function(sum, item) {
//                 return sum + item.final_line_price;
//               }, 0);
//               return actions.order.create({
//                 purchase_units: [{
//                   amount: { value: (totalPrice / 100).toFixed(2) }
//                 }]
//               });
//             },
//             onApprove: function (data, actions) {
//               return actions.order.capture().then(function (details) {
//                 fetch('https://paypal-server-five.vercel.app/paypal-payment-success', {
//                   method: 'POST',
//                   headers: { 'Content-Type': 'application/json' },
//                   body: JSON.stringify({
//                     orderID: data.orderID,
//                     payerID: data.payerID,
//                     cart: cartData,
//                     paymentDetails: details
//                   })
//                 })
//                 .then(response => response.json())
//                 .then(data => {
//                   if (data.success) {
//                     sessionStorage.setItem('orderId', data.id);
//                     window.location.href = '/pages/thank-you';
//                   } else {
//                     alert('Order creation failed!');
//                   }
//                 });
//               });
//             },
//             onCancel: function () {
//               alert('Payment was cancelled. You can try again or choose another payment method.');
//             }
//           }).render('#paypal-btn-inner');
//         }
//       });
//   }
// }
// document.addEventListener('DOMContentLoaded', () => {
//   customElements.define('paypal-button-container', PaypalButtonContainer);
// });
var CartRemoveButton = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  function CartRemoveButton() {
    var _this;
    _classCallCheck(this, CartRemoveButton);
    _this = _callSuper(this, CartRemoveButton);
    _this.addEventListener('click', function (event) {
      event.preventDefault();
      var cartItems = _this.closest('cart-items') || _this.closest('cart-drawer-items');
      cartItems.updateQuantity(_this.dataset.index, 0, event);
    });
    return _this;
  }
  _inherits(CartRemoveButton, _HTMLElement);
  return _createClass(CartRemoveButton);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('cart-remove-button', CartRemoveButton);
var CartItems = /*#__PURE__*/function (_HTMLElement2) {
  "use strict";

  function CartItems() {
    var _this2;
    _classCallCheck(this, CartItems);
    _this2 = _callSuper(this, CartItems);
    _defineProperty(_this2, "cartUpdateUnsubscriber", undefined);
    _this2.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');
    var debouncedOnChange = debounce(function (event) {
      _this2.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);
    _this2.addEventListener('change', debouncedOnChange.bind(_this2));
    return _this2;
  }
  _inherits(CartItems, _HTMLElement2);
  return _createClass(CartItems, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this3 = this;
      this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, function (event) {
        if (event.source === 'cart-items') {
          return;
        }
        return _this3.onCartUpdate();
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
    key: "resetQuantityInput",
    value: function resetQuantityInput(id) {
      var input = this.querySelector("#Quantity-".concat(id));
      input.value = input.getAttribute('value');
      this.isEnterPressed = false;
    }
  }, {
    key: "setValidity",
    value: function setValidity(event, index, message) {
      event.target.setCustomValidity(message);
      event.target.reportValidity();
      this.resetQuantityInput(index);
      event.target.select();
    }
  }, {
    key: "validateQuantity",
    value: function validateQuantity(event) {
      var inputValue = parseInt(event.target.value);
      var index = event.target.dataset.index;
      var message = '';
      if (inputValue < event.target.dataset.min) {
        message = window.quickOrderListStrings.min_error.replace('[min]', event.target.dataset.min);
      } else if (inputValue > parseInt(event.target.max)) {
        message = window.quickOrderListStrings.max_error.replace('[max]', event.target.max);
      } else if (inputValue % parseInt(event.target.step) !== 0) {
        message = window.quickOrderListStrings.step_error.replace('[step]', event.target.step);
      }
      if (message) {
        this.setValidity(event, index, message);
      } else {
        event.target.setCustomValidity('');
        event.target.reportValidity();
        this.updateQuantity(index, inputValue, event, document.activeElement.getAttribute('name'), event.target.dataset.quantityVariantId);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.validateQuantity(event);
    }
  }, {
    key: "onCartUpdate",
    value: function onCartUpdate() {
      var _this4 = this;
      if (this.tagName === 'CART-DRAWER-ITEMS') {
        return fetch("".concat(routes.cart_url, "?section_id=cart-drawer")).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          var html = new DOMParser().parseFromString(responseText, 'text/html');
          var selectors = ['cart-drawer-items', '.cart-drawer__footer'];
          for (var _i = 0, _selectors = selectors; _i < _selectors.length; _i++) {
            var selector = _selectors[_i];
            var targetElement = document.querySelector(selector);
            var sourceElement = html.querySelector(selector);
            if (targetElement && sourceElement) {
              targetElement.replaceWith(sourceElement);
            }
          }
        }).catch(function (e) {
          console.error(e);
        });
      } else {
        return fetch("".concat(routes.cart_url, "?section_id=main-cart-items")).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          var html = new DOMParser().parseFromString(responseText, 'text/html');
          var sourceQty = html.querySelector('cart-items');
          _this4.innerHTML = sourceQty.innerHTML;
        }).catch(function (e) {
          console.error(e);
        });
      }
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
    value: function updateQuantity(line, quantity, event, name, variantId) {
      var _this5 = this;
      this.enableLoading(line);
      var body = JSON.stringify({
        line: line,
        quantity: quantity,
        sections: this.getSectionsToRender().map(function (section) {
          return section.section;
        }),
        sections_url: window.location.pathname
      });
      var eventTarget = event.currentTarget instanceof CartRemoveButton ? 'clear' : 'change';
      fetch("".concat(routes.cart_change_url), _objectSpread(_objectSpread({}, fetchConfig()), {
        body: body
      })).then(function (response) {
        return response.text();
      }).then(function (state) {
        var parsedState = JSON.parse(state);
        CartPerformance.measure("".concat(eventTarget, ":paint-updated-sections\""), function () {
          var quantityElement = document.getElementById("Quantity-".concat(line)) || document.getElementById("Drawer-quantity-".concat(line));
          var items = document.querySelectorAll('.cart-item');
          if (parsedState.errors) {
            quantityElement.value = quantityElement.getAttribute('value');
            _this5.updateLiveRegions(line, parsedState.errors);
            return;
          }
          _this5.classList.toggle('is-empty', parsedState.item_count === 0);
          var cartDrawerWrapper = document.querySelector('cart-drawer');
          var cartFooter = document.getElementById('main-cart-footer');
          if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
          if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
          _this5.getSectionsToRender().forEach(function (section) {
            var elementToReplace = document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
            elementToReplace.innerHTML = _this5.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
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
          _this5.updateLiveRegions(line, message);
          var lineItem = document.getElementById("CartItem-".concat(line)) || document.getElementById("CartDrawer-Item-".concat(line));
          if (lineItem && lineItem.querySelector("[name=\"".concat(name, "\"]"))) {
            cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector("[name=\"".concat(name, "\"]"))) : lineItem.querySelector("[name=\"".concat(name, "\"]")).focus();
          } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
            trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'));
          } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
            trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'));
          }
        });
        CartPerformance.measureFromEvent("".concat(eventTarget, ":user-action"), event);
        publish(PUB_SUB_EVENTS.cartUpdate, {
          source: 'cart-items',
          cartData: parsedState,
          variantId: variantId
        });
        document.dispatchEvent(new CustomEvent('cart:updated'));
      }).catch(function () {
        _this5.querySelectorAll('.loading__spinner').forEach(function (overlay) {
          return overlay.classList.add('hidden');
        });
        var errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
      }).finally(function () {
        _this5.disableLoading(line);
      });
    }
  }, {
    key: "updateLiveRegions",
    value: function updateLiveRegions(line, message) {
      var lineItemError = document.getElementById("Line-item-error-".concat(line)) || document.getElementById("CartDrawer-LineItemError-".concat(line));
      if (lineItemError) lineItemError.querySelector('.cart-item__error-text').textContent = message;
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
      var cartItemElements = this.querySelectorAll("#CartItem-".concat(line, " .loading__spinner"));
      var cartDrawerItemElements = this.querySelectorAll("#CartDrawer-Item-".concat(line, " .loading__spinner"));
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
      var cartItemElements = this.querySelectorAll("#CartItem-".concat(line, " .loading__spinner"));
      var cartDrawerItemElements = this.querySelectorAll("#CartDrawer-Item-".concat(line, " .loading__spinner"));
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
  customElements.define('cart-note', /*#__PURE__*/function (_HTMLElement3) {
    "use strict";

    function CartNote() {
      var _this6;
      _classCallCheck(this, CartNote);
      _this6 = _callSuper(this, CartNote);
      _this6.addEventListener('input', debounce(function (event) {
        var body = JSON.stringify({
          note: event.target.value
        });
        fetch("".concat(routes.cart_update_url), _objectSpread(_objectSpread({}, fetchConfig()), {
          body: body
        })).then(function () {
          return CartPerformance.measureFromEvent('note-update:user-action', event);
        });
      }, ON_CHANGE_DEBOUNCE_TIMER));
      return _this6;
    }
    _inherits(CartNote, _HTMLElement3);
    return _createClass(CartNote);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}