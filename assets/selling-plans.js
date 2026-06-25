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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SellingPlansWidget = /*#__PURE__*/function () {
  "use strict";

  function SellingPlansWidget(sellingPlansWidgetContainer) {
    _classCallCheck(this, SellingPlansWidget);
    this.enablePerformanceObserver();
    this.sellingPlansWidgetContainer = sellingPlansWidgetContainer;
    this.hiddenClass = 'selling_plan_theme_integration--hidden';
    this.appendSellingPlanInputs();
    this.updateSellingPlanInputsValues();
    this.listenToVariantChange();
    this.listenToSellingPlanFormRadioButtonChange();
    this.updatePrice();
  }
  return _createClass(SellingPlansWidget, [{
    key: "sectionId",
    get: function get() {
      return this.sellingPlansWidgetContainer.getAttribute('data-section-id');
    }
  }, {
    key: "shopifySection",
    get: function get() {
      return document.querySelector("#shopify-section-".concat(this.sectionId));
    }

    /*
      We are careful to target the correct form, as there are instances when we encounter an installment form that we specifically aim to avoid interacting with.
    */
  }, {
    key: "variantIdInput",
    get: function get() {
      var _this$addToCartForms$, _this$addToCartForms$2;
      return ((_this$addToCartForms$ = this.addToCartForms[1]) === null || _this$addToCartForms$ === void 0 ? void 0 : _this$addToCartForms$.querySelector("input[name=\"id\"]")) || ((_this$addToCartForms$2 = this.addToCartForms[1]) === null || _this$addToCartForms$2 === void 0 ? void 0 : _this$addToCartForms$2.querySelector("select[name=\"id\"]")) || this.addToCartForms[0].querySelector("input[name=\"id\"]") || this.addToCartForms[0].querySelector("select[name=\"id\"]");
    }
  }, {
    key: "priceElement",
    get: function get() {
      return this.shopifySection.querySelector('.price');
    }
  }, {
    key: "comparedAtPrice",
    get: function get() {
      return this.shopifySection.querySelector('.price__sale');
    }
  }, {
    key: "visibleSellingPlanForm",
    get: function get() {
      return this.shopifySection.querySelector("section[data-variant-id^=\"".concat(this.variantIdInput.value, "\"]"));
    }
  }, {
    key: "isVariantAvailable",
    get: function get() {
      return this.selectedPurchaseOption.getAttributeNames().includes('disabled');
    }
  }, {
    key: "sellingPlanInput",
    get: function get() {
      return this.shopifySection.querySelector('.selected-selling-plan-id');
    }
  }, {
    key: "addToCartForms",
    get: function get() {
      return this.shopifySection.querySelectorAll('[action*="/cart/add"]');
    }

    /*
      To enable the addition of a selling plan to a cart, it's necessary to include an input with the name "selling_plan", which will carry the selling ID as its value. When a buyer clicks on 'add to cart', the appropriate selling plan ID is added to their cart.
    */
  }, {
    key: "appendSellingPlanInputs",
    value: function appendSellingPlanInputs() {
      var _this = this;
      this.addToCartForms.forEach(function (addToCartForm) {
        addToCartForm.appendChild(_this.sellingPlanInput.cloneNode());
      });
    }
  }, {
    key: "showSellingPlanForm",
    value: function showSellingPlanForm(sellingPlanFormForSelectedVariant) {
      var _sellingPlanFormForSe;
      sellingPlanFormForSelectedVariant === null || sellingPlanFormForSelectedVariant === void 0 || (_sellingPlanFormForSe = sellingPlanFormForSelectedVariant.classList) === null || _sellingPlanFormForSe === void 0 || _sellingPlanFormForSe.remove(this.hiddenClass);
    }
  }, {
    key: "hideSellingPlanForms",
    value: function hideSellingPlanForms(sellingPlanFormsForUnselectedVariants) {
      var _this2 = this;
      sellingPlanFormsForUnselectedVariants.forEach(function (element) {
        element.classList.add(_this2.hiddenClass);
      });
    }

    /*
      Each product variant comes with a selling plan selection box that the buyer can interact with.
      When a buyer chooses a different variant, we ensure that only the relevant selling plan selection box is displayed.
      This guarantees that only the selling plan associated with the selected variant is shown.
    */
  }, {
    key: "handleSellingPlanFormVisibility",
    value: function handleSellingPlanFormVisibility() {
      var sellingPlanFormForSelectedVariant = this.shopifySection.querySelector("section[data-variant-id=\"".concat(this.variantIdInput.value, "\"]"));
      var sellingPlanFormsForUnselectedVariants = this.shopifySection.querySelectorAll(".selling_plan_theme_integration:not([data-variant-id=\"".concat(this.variantIdInput.value, "\"])"));
      this.showSellingPlanForm(sellingPlanFormForSelectedVariant);
      this.hideSellingPlanForms(sellingPlanFormsForUnselectedVariants);
    }
  }, {
    key: "handleVariantChange",
    value: function handleVariantChange() {
      this.handleSellingPlanFormVisibility();
      this.updateSellingPlanInputsValues();
      this.listenToSellingPlanFormRadioButtonChange();
    }

    /*
      The functions listenToVariantChange() and listenToAddToCartForms() are implemented to track when a product variant is altered or when the product form is updated.
      The identification of the variant is crucial as it dictates which selling plan box should be displayed.
    */
  }, {
    key: "listenToVariantChange",
    value: function listenToVariantChange() {
      var _this3 = this;
      this.listenToAddToCartForms();
      if (this.variantIdInput.tagName === 'INPUT') {
        var variantIdObserver = new MutationObserver(function (mutationList) {
          mutationList.forEach(function (mutationRecord) {
            _this3.handleVariantChange(mutationRecord.target.value);
          });
        });
        variantIdObserver.observe(this.variantIdInput, {
          attributes: true
        });
      }
    }
  }, {
    key: "listenToAddToCartForms",
    value: function listenToAddToCartForms() {
      var _this4 = this;
      this.addToCartForms.forEach(function (addToCartForm) {
        addToCartForm.addEventListener('change', function () {
          _this4.handleVariantChange();
        });
      });
    }
  }, {
    key: "regularPriceElement",
    get: function get() {
      return this.shopifySection.querySelector('.price__regular');
    }
  }, {
    key: "salePriceElement",
    get: function get() {
      return this.shopifySection.querySelector('.price__sale');
    }
  }, {
    key: "salePriceValue",
    get: function get() {
      return this.salePriceElement.querySelector('.price-item--sale');
    }
  }, {
    key: "regularPriceValue",
    get: function get() {
      return this.salePriceElement.querySelector('.price-item--regular');
    }
  }, {
    key: "sellingPlanAllocationPrice",
    get: function get() {
      return document.getElementById("".concat(this.selectedPurchaseOption.dataset.sellingPlanGroupId, "_allocation_price"));
    }
  }, {
    key: "selectedPurchaseOptionPrice",
    get: function get() {
      return this.selectedPurchaseOption.dataset.variantPrice;
    }
  }, {
    key: "selectedPurchaseOptionComparedAtPrice",
    get: function get() {
      return this.selectedPurchaseOption.dataset.variantCompareAtPrice;
    }
  }, {
    key: "price",
    get: function get() {
      var _this$sellingPlanAllo;
      return (_this$sellingPlanAllo = this.sellingPlanAllocationPrices.price) !== null && _this$sellingPlanAllo !== void 0 ? _this$sellingPlanAllo : null;
    }

    /*
      We aim to ascertain whether a compared price exists, which would indicate that the currently selected input has a discount applied to it.
      If a discount is detected, the discounted price is displayed; otherwise, the regular price is shown.
    */
  }, {
    key: "updatePrice",
    value: function updatePrice() {
      if (!this.selectedPurchaseOptionComparedAtPrice || this.selectedPurchaseOptionComparedAtPrice === this.selectedPurchaseOptionPrice) {
        this.showRegularPrice();
        this.hideSalePrice();
        this.priceElement.classList.remove('price--on-sale');
      } else {
        this.showSalePrice();
        this.hideRegularPrice();
        this.priceElement.classList.add('price--on-sale');
      }
    }
  }, {
    key: "hideSalePrice",
    value: function hideSalePrice() {
      this.salePriceElement.style.display = 'none';
    }
  }, {
    key: "hideRegularPrice",
    value: function hideRegularPrice() {
      this.regularPriceElement.style.display = 'none';
    }
  }, {
    key: "showRegularPrice",
    value: function showRegularPrice() {
      this.regularPriceElement.style.display = 'block';
      this.shopifySection.querySelector('.price__sale').style.display = 'none';
    }
  }, {
    key: "showSalePrice",
    value: function showSalePrice() {
      this.salePriceElement.style.display = 'block';
      this.regularPriceValue.innerHTML = this.selectedPurchaseOptionComparedAtPrice;
      this.salePriceValue.innerHTML = this.selectedPurchaseOptionPrice;
    }
  }, {
    key: "sellingPlanInputs",
    get: function get() {
      return this.shopifySection.querySelectorAll('.selected-selling-plan-id');
    }
  }, {
    key: "updateSellingPlanInputsValues",
    value: function updateSellingPlanInputsValues() {
      var _this5 = this;
      this.sellingPlanInputs.forEach(function (sellingPlanInput) {
        sellingPlanInput.value = _this5.sellingPlanInputValue;
      });
    }
  }, {
    key: "sellingPlanInputValue",
    get: function get() {
      var _this$selectedPurchas, _this$selectedPurchas2;
      return (_this$selectedPurchas = (_this$selectedPurchas2 = this.selectedPurchaseOption) === null || _this$selectedPurchas2 === void 0 ? void 0 : _this$selectedPurchas2.dataset.sellingPlanId) !== null && _this$selectedPurchas !== void 0 ? _this$selectedPurchas : null;
    }
  }, {
    key: "selectedPurchaseOption",
    get: function get() {
      var _this$visibleSellingP;
      return (_this$visibleSellingP = this.visibleSellingPlanForm) === null || _this$visibleSellingP === void 0 ? void 0 : _this$visibleSellingP.querySelector('input[type="radio"]:checked');
    },
    set: function set(selectedPurchaseOption) {
      this._selectedPurchaseOption = selectedPurchaseOption;
    }
  }, {
    key: "handleRadioButtonChange",
    value: function handleRadioButtonChange(selectedPurchaseOption) {
      this.selectedPurchaseOption = selectedPurchaseOption;
      this.updateSellingPlanInputsValues();
      this.updatePrice();
    }
  }, {
    key: "listenToSellingPlanFormRadioButtonChange",
    value: function listenToSellingPlanFormRadioButtonChange() {
      var _this$visibleSellingP2,
        _this6 = this;
      (_this$visibleSellingP2 = this.visibleSellingPlanForm) === null || _this$visibleSellingP2 === void 0 || _this$visibleSellingP2.querySelectorAll('input[type="radio"]').forEach(function (radio) {
        radio.addEventListener('change', function (event) {
          _this6.handleRadioButtonChange(event.target);
        });
      });
    }
  }, {
    key: "enablePerformanceObserver",
    value: function enablePerformanceObserver() {
      var _this7 = this;
      var performanceObserver = new PerformanceObserver(function (list) {
        list.getEntries().forEach(function (entry) {
          if (entry.initiatorType !== 'fetch') return;
          var url = new URL(entry.name);
          /*
            When a buyer selects a product variant, a fetch request is initiated.
            Upon completion of this fetch request, we update the price to reflect the correct value.
          */
          if (url.search.includes('variant') || url.search.includes('variants')) {
            _this7.updatePrice();
          }
        });
      });
      performanceObserver.observe({
        entryTypes: ['resource']
      });
    }
  }]);
}();
document.querySelectorAll('.selling_plan_app_container').forEach(function (sellingPlansWidgetContainer) {
  new SellingPlansWidget(sellingPlansWidgetContainer);
});
var ProductSubscriptions = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  function ProductSubscriptions() {
    var _this8;
    _classCallCheck(this, ProductSubscriptions);
    _this8 = _callSuper(this, ProductSubscriptions);
    _this8.input = _this8.querySelector('input[name="selling_plan"]');
    _this8.options = _this8.querySelectorAll('input[name="purchase_option"]');
    _this8.select = _this8.querySelector('select[name="purchase_option_values"]');
    _this8.initialise();
    return _this8;
  }
  _inherits(ProductSubscriptions, _HTMLElement);
  return _createClass(ProductSubscriptions, [{
    key: "initialise",
    value: function initialise() {
      var _this9 = this;
      this.options.forEach(function (option) {
        return option.addEventListener('click', _this9.onRadioChange.bind(_this9));
      });
      this.select.addEventListener('change', this.onSelectChange.bind(this));
    }
  }, {
    key: "onRadioChange",
    value: function onRadioChange(e) {
      this.input.value = e.target.value;
    }
  }, {
    key: "getCurrentSellingPlanId",
    value: function getCurrentSellingPlanId() {
      return this.input.value;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
if (!customElements.get('product-subscriptions')) {
  customElements.define('product-subscriptions', ProductSubscriptions);
}
window.ProductSubscriptions = ProductSubscriptions;
window.getCurrentSellingPlanId = function () {
  var productSubscriptions = document.querySelector('product-subscriptions');
  console.log(productSubscriptions);
  return productSubscriptions ? productSubscriptions.getCurrentSellingPlanId() : '';
};