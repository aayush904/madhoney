function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
if (!customElements.get('quick-add-bulk')) {
  customElements.define('quick-add-bulk', /*#__PURE__*/function (_BulkAdd) {
    "use strict";

    function QuickAddBulk() {
      var _this;
      _classCallCheck(this, QuickAddBulk);
      _this = _callSuper(this, QuickAddBulk);
      _this.quantity = _this.querySelector('quantity-input');
      var debouncedOnChange = debounce(function (event) {
        if (parseInt(event.target.value) === 0) {
          _this.startQueue(event.target.dataset.index, parseInt(event.target.value));
        } else {
          _this.validateQuantity(event);
        }
      }, ON_CHANGE_DEBOUNCE_TIMER);
      _this.addEventListener('change', debouncedOnChange.bind(_this));
      _this.listenForActiveInput();
      _this.listenForKeydown();
      _this.lastActiveInputId = null;
      var pageParams = new URLSearchParams(window.location.search);
      window.pageNumber = decodeURIComponent(pageParams.get('page') || '');
      return _this;
    }
    _inherits(QuickAddBulk, _BulkAdd);
    return _createClass(QuickAddBulk, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, function (event) {
          if (event.source === 'quick-add' || event.cartData.items && !event.cartData.items.some(function (item) {
            return item.id === parseInt(_this2.dataset.index);
          }) || event.cartData.variant_id && !(event.cartData.variant_id === parseInt(_this2.dataset.index))) {
            return;
          }
          // If its another section that made the update
          _this2.onCartUpdate().then(function () {
            _this2.listenForActiveInput();
            _this2.listenForKeydown();
          });
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
      key: "getInput",
      value: function getInput() {
        return this.querySelector('quantity-input input');
      }
    }, {
      key: "selectProgressBar",
      value: function selectProgressBar() {
        return this.querySelector('.progress-bar-container');
      }
    }, {
      key: "listenForActiveInput",
      value: function listenForActiveInput() {
        if (!this.classList.contains('hidden')) {
          this.getInput().addEventListener('focusin', function (event) {
            return event.target.select();
          });
        }
        this.isEnterPressed = false;
      }
    }, {
      key: "listenForKeydown",
      value: function listenForKeydown() {
        var _this3 = this;
        this.getInput().addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
            _this3.getInput().blur();
            _this3.isEnterPressed = true;
          }
        });
      }
    }, {
      key: "cleanErrorMessageOnType",
      value: function cleanErrorMessageOnType(event) {
        event.target.addEventListener('keypress', function () {
          event.target.setCustomValidity('');
        }, {
          once: true
        });
      }
    }, {
      key: "onCartUpdate",
      value: function onCartUpdate() {
        var _this4 = this;
        return new Promise(function (resolve, reject) {
          fetch("".concat(_this4.getSectionsUrl(), "?section_id=").concat(_this4.closest('.collection').dataset.id)).then(function (response) {
            return response.text();
          }).then(function (responseText) {
            var html = new DOMParser().parseFromString(responseText, 'text/html');
            var sourceQty = html.querySelector("#quick-add-bulk-".concat(_this4.dataset.id, "-").concat(_this4.closest('.collection').dataset.id));
            if (sourceQty) {
              _this4.innerHTML = sourceQty.innerHTML;
            }
            resolve();
          }).catch(function (e) {
            console.error(e);
            reject(e);
          });
        });
      }
    }, {
      key: "updateMultipleQty",
      value: function updateMultipleQty(items) {
        var _this5 = this;
        this.selectProgressBar().classList.remove('hidden');
        var ids = Object.keys(items);
        var body = JSON.stringify({
          updates: items,
          sections: this.getSectionsToRender().map(function (section) {
            return section.section;
          }),
          sections_url: this.getSectionsUrl()
        });
        fetch("".concat(routes.cart_update_url), _objectSpread(_objectSpread({}, fetchConfig()), {
          body: body
        })).then(function (response) {
          return response.text();
        }).then(function (state) {
          var parsedState = JSON.parse(state);
          _this5.renderSections(parsedState, ids);
          publish(PUB_SUB_EVENTS.cartUpdate, {
            source: 'quick-add',
            cartData: parsedState
          });
        }).catch(function () {
          // Commented out for now and will be fixed when BE issue is done https://github.com/Shopify/shopify/issues/440605
          // e.target.setCustomValidity(error);
          // e.target.reportValidity();
          // this.resetQuantityInput(ids[index]);
          // this.selectProgressBar().classList.add('hidden');
          // e.target.select();
          // this.cleanErrorMessageOnType(e);
        }).finally(function () {
          _this5.selectProgressBar().classList.add('hidden');
          _this5.requestStarted = false;
        });
      }
    }, {
      key: "getSectionsToRender",
      value: function getSectionsToRender() {
        return [{
          id: "quick-add-bulk-".concat(this.dataset.id, "-").concat(this.closest('.collection-quick-add-bulk').dataset.id),
          section: this.closest('.collection-quick-add-bulk').dataset.id,
          selector: "#quick-add-bulk-".concat(this.dataset.id, "-").concat(this.closest('.collection-quick-add-bulk').dataset.id)
        }, {
          id: 'cart-icon-bubble',
          section: 'cart-icon-bubble',
          selector: '.shopify-section'
        }, {
          id: 'CartDrawer',
          selector: '#CartDrawer',
          section: 'cart-drawer'
        }];
      }
    }, {
      key: "renderSections",
      value: function renderSections(parsedState, ids) {
        var _this6 = this;
        var intersection = this.queue.filter(function (element) {
          return ids.includes(element.id);
        });
        if (intersection.length !== 0) return;
        this.getSectionsToRender().forEach(function (section) {
          var sectionElement = document.getElementById(section.id);
          if (sectionElement && sectionElement.parentElement && sectionElement.parentElement.classList.contains('drawer')) {
            parsedState.items.length > 0 ? sectionElement.parentElement.classList.remove('is-empty') : sectionElement.parentElement.classList.add('is-empty');
            setTimeout(function () {
              document.querySelector('#CartDrawer-Overlay').addEventListener('click', _this6.cart.close.bind(_this6.cart));
            });
          }
          var elementToReplace = sectionElement && sectionElement.querySelector(section.selector) ? sectionElement.querySelector(section.selector) : sectionElement;
          if (elementToReplace) {
            elementToReplace.innerHTML = _this6.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
          }
        });
        if (this.isEnterPressed) {
          this.querySelector("#Quantity-".concat(this.lastActiveInputId)).select();
        }
        this.listenForActiveInput();
        this.listenForKeydown();
      }
    }]);
  }(BulkAdd));
}