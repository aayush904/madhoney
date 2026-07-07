function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
if (!customElements.get('quick-add-modal')) {
  customElements.define('quick-add-modal', /*#__PURE__*/function (_ModalDialog) {
    "use strict";

    function QuickAddModal() {
      var _this;
      _classCallCheck(this, QuickAddModal);
      _this = _callSuper(this, QuickAddModal);
      _this.modalContent = _this.querySelector('[id^="QuickAddInfo-"]');
      return _this;
    }
    _inherits(QuickAddModal, _ModalDialog);
    return _createClass(QuickAddModal, [{
      key: "hide",
      value: function hide() {
        var preventFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var cartNotification = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        if (cartNotification) cartNotification.setActiveElement(this.openedBy);
        this.modalContent.innerHTML = '';
        if (preventFocus) this.openedBy = null;
        _superPropGet(QuickAddModal, "hide", this, 3)([]);
      }
    }, {
      key: "show",
      value: function show(opener) {
        var _this2 = this;
        opener.setAttribute('aria-disabled', true);
        opener.classList.add('loading');
        opener.querySelector('.loading-overlay__spinner').classList.remove('hidden');
        fetch(opener.getAttribute('data-product-url')).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          var responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
          _this2.productElement = responseHTML.querySelector('section[id^="MainProduct-"]');
          _this2.preventDuplicatedIDs();
          _this2.removeDOMElements();
          _this2.setInnerHTML(_this2.modalContent, _this2.productElement.innerHTML);
          if (window.Shopify && Shopify.PaymentButton) {
            Shopify.PaymentButton.init();
          }
          if (window.ProductModel) window.ProductModel.loadShopifyXR();
          _this2.removeGalleryListSemantic();
          _this2.updateImageSizes();
          _this2.preventVariantURLSwitching();
          _superPropGet(QuickAddModal, "show", _this2, 3)([opener]);
        }).finally(function () {
          opener.removeAttribute('aria-disabled');
          opener.classList.remove('loading');
          opener.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
      }
    }, {
      key: "setInnerHTML",
      value: function setInnerHTML(element, html) {
        element.innerHTML = html;

        // Reinjects the script tags to allow execution. By default, scripts are disabled when using element.innerHTML.
        element.querySelectorAll('script').forEach(function (oldScriptTag) {
          var newScriptTag = document.createElement('script');
          Array.from(oldScriptTag.attributes).forEach(function (attribute) {
            newScriptTag.setAttribute(attribute.name, attribute.value);
          });
          newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML));
          oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);
        });
      }
    }, {
      key: "preventVariantURLSwitching",
      value: function preventVariantURLSwitching() {
        var variantPicker = this.modalContent.querySelector('variant-radios,variant-selects');
        if (!variantPicker) return;
        variantPicker.setAttribute('data-update-url', 'false');
      }
    }, {
      key: "removeDOMElements",
      value: function removeDOMElements() {
        var pickupAvailability = this.productElement.querySelector('pickup-availability');
        if (pickupAvailability) pickupAvailability.remove();
        var productModal = this.productElement.querySelector('product-modal');
        if (productModal) productModal.remove();
        var modalDialog = this.productElement.querySelectorAll('modal-dialog');
        if (modalDialog) modalDialog.forEach(function (modal) {
          return modal.remove();
        });
      }
    }, {
      key: "preventDuplicatedIDs",
      value: function preventDuplicatedIDs() {
        var sectionId = this.productElement.dataset.section;
        this.productElement.innerHTML = this.productElement.innerHTML.replaceAll(sectionId, "quickadd-".concat(sectionId));
        this.productElement.querySelectorAll('variant-selects, variant-radios, product-info').forEach(function (element) {
          element.dataset.originalSection = sectionId;
        });
      }
    }, {
      key: "removeGalleryListSemantic",
      value: function removeGalleryListSemantic() {
        var galleryList = this.modalContent.querySelector('[id^="Slider-Gallery"]');
        if (!galleryList) return;
        galleryList.setAttribute('role', 'presentation');
        galleryList.querySelectorAll('[id^="Slide-"]').forEach(function (li) {
          return li.setAttribute('role', 'presentation');
        });
      }
    }, {
      key: "updateImageSizes",
      value: function updateImageSizes() {
        var product = this.modalContent.querySelector('.product');
        var desktopColumns = product.classList.contains('product--columns');
        if (!desktopColumns) return;
        var mediaImages = product.querySelectorAll('.product__media img');
        if (!mediaImages.length) return;
        var mediaImageSizes = '(min-width: 1000px) 715px, (min-width: 769px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)';
        if (product.classList.contains('product--medium')) {
          mediaImageSizes = mediaImageSizes.replace('715px', '605px');
        } else if (product.classList.contains('product--small')) {
          mediaImageSizes = mediaImageSizes.replace('715px', '495px');
        }
        mediaImages.forEach(function (img) {
          return img.setAttribute('sizes', mediaImageSizes);
        });
      }
    }]);
  }(ModalDialog));
}