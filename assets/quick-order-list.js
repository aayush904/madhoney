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
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
if (!customElements.get('quick-order-list-remove-button')) {
  customElements.define('quick-order-list-remove-button', /*#__PURE__*/function (_BulkAdd) {
    "use strict";

    function QuickOrderListRemoveButton() {
      var _this;
      _classCallCheck(this, QuickOrderListRemoveButton);
      _this = _callSuper(this, QuickOrderListRemoveButton);
      _this.addEventListener('click', function (event) {
        event.preventDefault();
        _this.startQueue(_this.dataset.index, 0);
      });
      return _this;
    }
    _inherits(QuickOrderListRemoveButton, _BulkAdd);
    return _createClass(QuickOrderListRemoveButton);
  }(BulkAdd));
}
if (!customElements.get('quick-order-list-remove-all-button')) {
  customElements.define('quick-order-list-remove-all-button', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function QuickOrderListRemoveAllButton() {
      var _this2;
      _classCallCheck(this, QuickOrderListRemoveAllButton);
      _this2 = _callSuper(this, QuickOrderListRemoveAllButton);
      _this2.quickOrderList = _this2.closest('quick-order-list');
      var allVariants = _this2.quickOrderList.querySelectorAll('[data-quantity-variant-id]');
      var items = {};
      var hasVariantsInCart = false;
      allVariants.forEach(function (variant) {
        var cartQty = parseInt(variant.dataset.cartQuantity);
        if (cartQty > 0) {
          hasVariantsInCart = true;
          items[parseInt(variant.dataset.quantityVariantId)] = 0;
        }
      });
      if (!hasVariantsInCart) {
        _this2.classList.add('hidden');
      }
      _this2.actions = {
        confirm: 'confirm',
        remove: 'remove',
        cancel: 'cancel'
      };
      _this2.addEventListener('click', function (event) {
        event.preventDefault();
        if (_this2.dataset.action === _this2.actions.confirm) {
          _this2.toggleConfirmation(false, true);
        } else if (_this2.dataset.action === _this2.actions.remove) {
          _this2.quickOrderList.updateMultipleQty(items);
          _this2.toggleConfirmation(true, false);
        } else if (_this2.dataset.action === _this2.actions.cancel) {
          _this2.toggleConfirmation(true, false);
        }
      });
      return _this2;
    }
    _inherits(QuickOrderListRemoveAllButton, _HTMLElement);
    return _createClass(QuickOrderListRemoveAllButton, [{
      key: "toggleConfirmation",
      value: function toggleConfirmation(showConfirmation, showInfo) {
        this.quickOrderList.querySelector('.quick-order-list-total__confirmation').classList.toggle('hidden', showConfirmation);
        this.quickOrderList.querySelector('.quick-order-list-total__info').classList.toggle('hidden', showInfo);
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}
if (!customElements.get('quick-order-list')) {
  customElements.define('quick-order-list', /*#__PURE__*/function (_BulkAdd2) {
    "use strict";

    function QuickOrderList() {
      var _this3;
      _classCallCheck(this, QuickOrderList);
      _this3 = _callSuper(this, QuickOrderList);
      _defineProperty(_this3, "cartUpdateUnsubscriber", undefined);
      _this3.cart = document.querySelector('cart-drawer');
      _this3.quickOrderListId = "".concat(_this3.dataset.section, "-").concat(_this3.dataset.productId);
      _this3.defineInputsAndQuickOrderTable();
      _this3.variantItemStatusElement = document.getElementById('shopping-cart-variant-item-status');
      var form = _this3.querySelector('form');
      _this3.inputFieldHeight = _this3.querySelector('.variant-item__quantity-wrapper').offsetHeight;
      _this3.isListInsideModal = document.querySelector('.quick-add-bulk');
      _this3.stickyHeaderElement = document.querySelector('sticky-header');
      _this3.getTableHead();
      _this3.getTotalBar();
      if (_this3.stickyHeaderElement) {
        _this3.stickyHeader = {
          height: _this3.stickyHeaderElement.offsetHeight,
          type: "".concat(_this3.stickyHeaderElement.getAttribute('data-sticky-type'))
        };
      }
      if (_this3.getTotalBar()) {
        _this3.totalBarPosition = window.innerHeight - _this3.getTotalBar().offsetHeight;
        window.addEventListener('resize', function () {
          _this3.totalBarPosition = window.innerHeight - _this3.getTotalBar().offsetHeight;
          _this3.stickyHeader.height = _this3.stickyHeaderElement ? _this3.stickyHeaderElement.offsetHeight : 0;
        });
      }
      var pageParams = new URLSearchParams(window.location.search);
      window.pageNumber = decodeURIComponent(pageParams.get('page') || '');
      form.addEventListener('submit', _this3.onSubmit.bind(_this3));
      _this3.addMultipleDebounce();
      return _this3;
    }
    _inherits(QuickOrderList, _BulkAdd2);
    return _createClass(QuickOrderList, [{
      key: "onSubmit",
      value: function onSubmit(event) {
        event.preventDefault();
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this4 = this;
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, function (event) {
          var _event$cartData$items;
          var variantIds = [];
          _this4.querySelectorAll('.variant-item').forEach(function (item) {
            variantIds.push(parseInt(item.dataset.variantId));
          });
          if (event.source === _this4.quickOrderListId || !((_event$cartData$items = event.cartData.items) !== null && _event$cartData$items !== void 0 && _event$cartData$items.some(function (element) {
            return variantIds.includes(element.variant_id);
          }))) {
            return;
          }
          // If its another section that made the update
          _this4.refresh().then(function () {
            _this4.defineInputsAndQuickOrderTable();
            _this4.addMultipleDebounce();
          });
        });
        this.sectionId = this.dataset.section;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this$cartUpdateUnsub;
        (_this$cartUpdateUnsub = this.cartUpdateUnsubscriber) === null || _this$cartUpdateUnsub === void 0 || _this$cartUpdateUnsub.call(this);
      }
    }, {
      key: "defineInputsAndQuickOrderTable",
      value: function defineInputsAndQuickOrderTable() {
        this.allInputsArray = Array.from(this.querySelectorAll('input[type="number"]'));
        this.quickOrderListTable = this.querySelector('.quick-order-list__table');
        this.quickOrderListTable.addEventListener('focusin', this.switchVariants.bind(this));
      }
    }, {
      key: "onChange",
      value: function onChange(event) {
        var inputValue = parseInt(event.target.value);
        this.cleanErrorMessageOnType(event);
        if (inputValue == 0) {
          this.startQueue(event.target.dataset.index, inputValue);
        } else {
          this.validateQuantity(event);
        }
      }
    }, {
      key: "cleanErrorMessageOnType",
      value: function cleanErrorMessageOnType(event) {
        event.target.addEventListener('keydown', function () {
          event.target.setCustomValidity(' ');
          event.target.reportValidity();
        });
      }
    }, {
      key: "validateInput",
      value: function validateInput(target) {
        if (target.max) {
          return parseInt(target.value) == 0 || parseInt(target.value) >= parseInt(target.dataset.min) && parseInt(target.value) <= parseInt(target.max) && parseInt(target.value) % parseInt(target.step) == 0;
        } else {
          return parseInt(target.value) == 0 || parseInt(target.value) >= parseInt(target.dataset.min) && parseInt(target.value) % parseInt(target.step) == 0;
        }
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var _this5 = this;
        return new Promise(function (resolve, reject) {
          fetch("".concat(_this5.getSectionsUrl(), "?section_id=").concat(_this5.sectionId)).then(function (response) {
            return response.text();
          }).then(function (responseText) {
            var html = new DOMParser().parseFromString(responseText, 'text/html');
            var sourceQty = html.querySelector("#".concat(_this5.quickOrderListId));
            if (sourceQty) {
              _this5.innerHTML = sourceQty.innerHTML;
            }
            resolve();
          }).catch(function (e) {
            console.error(e);
            reject(e);
          });
        });
      }
    }, {
      key: "getSectionsToRender",
      value: function getSectionsToRender() {
        return [{
          id: this.quickOrderListId,
          section: document.getElementById(this.quickOrderListId).dataset.section,
          selector: "#".concat(this.quickOrderListId, " .js-contents")
        }, {
          id: 'cart-icon-bubble',
          section: 'cart-icon-bubble',
          selector: '.shopify-section'
        }, {
          id: "quick-order-list-live-region-text-".concat(this.dataset.productId),
          section: 'cart-live-region-text',
          selector: '.shopify-section'
        }, {
          id: "quick-order-list-total-".concat(this.dataset.productId, "-").concat(this.dataset.section),
          section: document.getElementById(this.quickOrderListId).dataset.section,
          selector: "#".concat(this.quickOrderListId, " .quick-order-list__total")
        }, {
          id: 'CartDrawer',
          selector: '#CartDrawer',
          section: 'cart-drawer'
        }];
      }
    }, {
      key: "addMultipleDebounce",
      value: function addMultipleDebounce() {
        var _this6 = this;
        this.querySelectorAll('quantity-input').forEach(function (qty) {
          var debouncedOnChange = debounce(function (event) {
            _this6.onChange(event);
          }, 100);
          qty.addEventListener('change', debouncedOnChange.bind(_this6));
        });
      }
    }, {
      key: "renderSections",
      value: function renderSections(parsedState, ids) {
        var _this7 = this;
        this.ids.push(ids);
        var intersection = this.queue.filter(function (element) {
          return ids.includes(element.id);
        });
        if (intersection.length !== 0) return;
        this.getSectionsToRender().forEach(function (section) {
          var sectionElement = document.getElementById(section.id);
          if (sectionElement && sectionElement.parentElement && sectionElement.parentElement.classList.contains('drawer')) {
            parsedState.items.length > 0 ? sectionElement.parentElement.classList.remove('is-empty') : sectionElement.parentElement.classList.add('is-empty');
            setTimeout(function () {
              document.querySelector('#CartDrawer-Overlay').addEventListener('click', _this7.cart.close.bind(_this7.cart));
            });
          }
          var elementToReplace = sectionElement && sectionElement.querySelector(section.selector) ? sectionElement.querySelector(section.selector) : sectionElement;
          if (elementToReplace) {
            if (section.selector === "#".concat(_this7.quickOrderListId, " .js-contents") && _this7.ids.length > 0) {
              _this7.ids.flat().forEach(function (i) {
                elementToReplace.querySelector("#Variant-".concat(i)).innerHTML = _this7.getSectionInnerHTML(parsedState.sections[section.section], "#Variant-".concat(i));
              });
            } else {
              elementToReplace.innerHTML = _this7.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
            }
          }
        });
        this.defineInputsAndQuickOrderTable();
        this.addMultipleDebounce();
        this.ids = [];
      }
    }, {
      key: "getTableHead",
      value: function getTableHead() {
        return document.querySelector('.quick-order-list__table thead');
      }
    }, {
      key: "getTotalBar",
      value: function getTotalBar() {
        return this.querySelector('.quick-order-list__total');
      }
    }, {
      key: "scrollQuickOrderListTable",
      value: function scrollQuickOrderListTable() {
        var inputTopBorder = this.variantListInput.getBoundingClientRect().top;
        var inputBottomBorder = this.variantListInput.getBoundingClientRect().bottom;
        if (this.isListInsideModal) {
          var totalBarCrossesInput = inputBottomBorder > this.getTotalBar().getBoundingClientRect().top;
          var tableHeadCrossesInput = inputTopBorder < this.getTableHead().getBoundingClientRect().bottom;
          if (totalBarCrossesInput || tableHeadCrossesInput) {
            this.scrollToCenter();
          }
        } else {
          var stickyHeaderBottomBorder = this.stickyHeaderElement && this.stickyHeaderElement.getBoundingClientRect().bottom;
          var _totalBarCrossesInput = inputBottomBorder > this.totalBarPosition;
          var inputOutsideOfViewPort = inputBottomBorder < this.inputFieldHeight;
          var stickyHeaderCrossesInput = this.stickyHeaderElement && this.stickyHeader.type !== 'on-scroll-up' && this.stickyHeader.height > inputTopBorder;
          var stickyHeaderScrollupCrossesInput = this.stickyHeaderElement && this.stickyHeader.type === 'on-scroll-up' && this.stickyHeader.height > inputTopBorder && stickyHeaderBottomBorder > 0;
          if (_totalBarCrossesInput || inputOutsideOfViewPort || stickyHeaderCrossesInput || stickyHeaderScrollupCrossesInput) {
            this.scrollToCenter();
          }
        }
      }
    }, {
      key: "scrollToCenter",
      value: function scrollToCenter() {
        this.variantListInput.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
      }
    }, {
      key: "switchVariants",
      value: function switchVariants(event) {
        var _this8 = this;
        if (event.target.tagName !== 'INPUT') {
          return;
        }
        this.variantListInput = event.target;
        this.variantListInput.select();
        if (this.allInputsArray.length !== 1) {
          this.variantListInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.target.blur();
              if (_this8.validateInput(e.target)) {
                var currentIndex = _this8.allInputsArray.indexOf(e.target);
                _this8.lastKey = e.shiftKey;
                if (!e.shiftKey) {
                  var nextIndex = currentIndex + 1;
                  var nextVariant = _this8.allInputsArray[nextIndex] || _this8.allInputsArray[0];
                  nextVariant.select();
                } else {
                  var previousIndex = currentIndex - 1;
                  var previousVariant = _this8.allInputsArray[previousIndex] || _this8.allInputsArray[_this8.allInputsArray.length - 1];
                  _this8.lastElement = previousVariant.dataset.index;
                  previousVariant.select();
                }
              }
            }
          });
          this.scrollQuickOrderListTable();
        } else {
          this.variantListInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.target.blur();
            }
          });
        }
      }
    }, {
      key: "updateMultipleQty",
      value: function updateMultipleQty(items) {
        var _this$querySelector,
          _this9 = this;
        (_this$querySelector = this.querySelector('.variant-remove-total .loading__spinner')) === null || _this$querySelector === void 0 || _this$querySelector.classList.remove('hidden');
        var ids = Object.keys(items);
        var body = JSON.stringify({
          updates: items,
          sections: this.getSectionsToRender().map(function (section) {
            return section.section;
          }),
          sections_url: this.dataset.url
        });
        this.updateMessage();
        this.setErrorMessage();
        fetch("".concat(routes.cart_update_url), _objectSpread(_objectSpread({}, fetchConfig()), {
          body: body
        })).then(function (response) {
          return response.text();
        }).then(function (state) {
          var parsedState = JSON.parse(state);
          _this9.renderSections(parsedState, ids);
          publish(PUB_SUB_EVENTS.cartUpdate, {
            source: _this9.quickOrderListId,
            cartData: parsedState
          });
        }).catch(function () {
          _this9.setErrorMessage(window.cartStrings.error);
        }).finally(function () {
          var _this9$querySelector;
          (_this9$querySelector = _this9.querySelector('.variant-remove-total .loading__spinner')) === null || _this9$querySelector === void 0 || _this9$querySelector.classList.add('hidden');
          _this9.requestStarted = false;
        });
      }
    }, {
      key: "setErrorMessage",
      value: function setErrorMessage() {
        var _this$errorMessageTem,
          _this0 = this;
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.errorMessageTemplate = (_this$errorMessageTem = this.errorMessageTemplate) !== null && _this$errorMessageTem !== void 0 ? _this$errorMessageTem : document.getElementById("QuickOrderListErrorTemplate-".concat(this.dataset.productId)).cloneNode(true);
        var errorElements = document.querySelectorAll('.quick-order-list-error');
        errorElements.forEach(function (errorElement) {
          errorElement.innerHTML = '';
          if (!message) return;
          var updatedMessageElement = _this0.errorMessageTemplate.cloneNode(true);
          updatedMessageElement.content.querySelector('.quick-order-list-error-message').innerText = message;
          errorElement.appendChild(updatedMessageElement.content);
        });
      }
    }, {
      key: "updateMessage",
      value: function updateMessage() {
        var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var messages = this.querySelectorAll('.quick-order-list__message-text');
        var icons = this.querySelectorAll('.quick-order-list__message-icon');
        if (quantity === null || isNaN(quantity)) {
          messages.forEach(function (message) {
            return message.innerHTML = '';
          });
          icons.forEach(function (icon) {
            return icon.classList.add('hidden');
          });
          return;
        }
        var isQuantityNegative = quantity < 0;
        var absQuantity = Math.abs(quantity);
        var textTemplate = isQuantityNegative ? absQuantity === 1 ? window.quickOrderListStrings.itemRemoved : window.quickOrderListStrings.itemsRemoved : quantity === 1 ? window.quickOrderListStrings.itemAdded : window.quickOrderListStrings.itemsAdded;
        messages.forEach(function (msg) {
          return msg.innerHTML = textTemplate.replace('[quantity]', absQuantity);
        });
        if (!isQuantityNegative) {
          icons.forEach(function (i) {
            return i.classList.remove('hidden');
          });
        }
      }
    }, {
      key: "updateError",
      value: function updateError(updatedValue, id) {
        var message = '';
        if (typeof updatedValue === 'undefined') {
          message = window.cartStrings.error;
        } else {
          message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
        }
        this.updateLiveRegions(id, message);
      }
    }, {
      key: "cleanErrors",
      value: function cleanErrors(id) {
        // this.querySelectorAll('.desktop-row-error').forEach((error) => error.classList.add('hidden'));
        // this.querySelectorAll(`.variant-item__error-text`).forEach((error) => error.innerHTML = '');
      }
    }, {
      key: "updateLiveRegions",
      value: function updateLiveRegions(id, message) {
        var variantItemErrorDesktop = document.getElementById("Quick-order-list-item-error-desktop-".concat(id));
        var variantItemErrorMobile = document.getElementById("Quick-order-list-item-error-mobile-".concat(id));
        if (variantItemErrorDesktop) {
          variantItemErrorDesktop.querySelector('.variant-item__error-text').innerHTML = message;
          variantItemErrorDesktop.closest('tr').classList.remove('hidden');
        }
        if (variantItemErrorMobile) variantItemErrorMobile.querySelector('.variant-item__error-text').innerHTML = message;
        this.variantItemStatusElement.setAttribute('aria-hidden', true);
        var cartStatus = document.getElementById('quick-order-list-live-region-text');
        cartStatus.setAttribute('aria-hidden', false);
        setTimeout(function () {
          cartStatus.setAttribute('aria-hidden', true);
        }, 1000);
      }
    }, {
      key: "toggleLoading",
      value: function toggleLoading(id, enable) {
        var quickOrderListItems = this.querySelectorAll("#Variant-".concat(id, " .loading__spinner"));
        var quickOrderListItem = this.querySelector("#Variant-".concat(id));
        if (enable) {
          quickOrderListItem.classList.add('quick-order-list__container--disabled');
          _toConsumableArray(quickOrderListItems).forEach(function (overlay) {
            return overlay.classList.remove('hidden');
          });
          this.variantItemStatusElement.setAttribute('aria-hidden', false);
        } else {
          quickOrderListItem.classList.remove('quick-order-list__container--disabled');
          quickOrderListItems.forEach(function (overlay) {
            return overlay.classList.add('hidden');
          });
        }
      }
    }]);
  }(BulkAdd));
}