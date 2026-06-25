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
if (!customElements.get("quick-add-modal")) {
  customElements.define("quick-add-modal", /*#__PURE__*/function (_ModalDialog) {
    "use strict";

    function QuickAddModal() {
      var _this;
      _classCallCheck(this, QuickAddModal);
      _this = _callSuper(this, QuickAddModal);
      _this.modalContent = _this.querySelector('[id^="QuickAddInfo-"]');
      _this.addEventListener("product-info:loaded", function (_ref) {
        var target = _ref.target;
        target.addPreProcessCallback(_this.preprocessHTML.bind(_this));
      });
      return _this;
    }
    _inherits(QuickAddModal, _ModalDialog);
    return _createClass(QuickAddModal, [{
      key: "hide",
      value: function hide() {
        var preventFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var cartNotification = document.querySelector("cart-notification") || document.querySelector("cart-drawer");
        if (cartNotification) cartNotification.setActiveElement(this.openedBy);
        this.modalContent.innerHTML = "";
        if (preventFocus) this.openedBy = null;
        _superPropGet(QuickAddModal, "hide", this, 3)([]);
      }
    }, {
      key: "show",
      value: function show(opener) {
        var _this2 = this;
        opener.setAttribute("aria-disabled", true);
        opener.classList.add("loading");
        opener.querySelector(".loading__spinner").classList.remove("hidden");
        fetch(opener.getAttribute("data-product-url")).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          var responseHTML = new DOMParser().parseFromString(responseText, "text/html");
          var productElement = responseHTML.querySelector("product-info");
          _this2.preprocessHTML(productElement);
          HTMLUpdateUtility.setInnerHTML(_this2.modalContent, productElement.outerHTML);
          var injectedProductInfo = _this2.modalContent.querySelector("product-info .csp-plan");
          if (injectedProductInfo) {
            injectedProductInfo.dispatchEvent(new CustomEvent('product-info:loaded', {
              bubbles: true
            }));
          }
          if (window.Shopify && Shopify.PaymentButton) {
            Shopify.PaymentButton.init();
          }
          if (window.ProductModel) window.ProductModel.loadShopifyXR();
          _superPropGet(QuickAddModal, "show", _this2, 3)([opener]);
        }).finally(function () {
          opener.removeAttribute("aria-disabled");
          opener.classList.remove("loading");
          opener.querySelector(".loading__spinner").classList.add("hidden");
        });
      }
    }, {
      key: "preprocessHTML",
      value: function preprocessHTML(productElement) {
        var _this3 = this;
        productElement.classList.forEach(function (classApplied) {
          if (classApplied.startsWith("color-") || classApplied === "gradient") _this3.modalContent.classList.add(classApplied);
        });
        this.preventDuplicatedIDs(productElement);
        this.removeDOMElements(productElement);
        this.removeGalleryListSemantic(productElement);
        this.updateImageSizes(productElement);
        this.preventVariantURLSwitching(productElement);
      }
    }, {
      key: "preventVariantURLSwitching",
      value: function preventVariantURLSwitching(productElement) {
        productElement.setAttribute("data-update-url", "false");
      }
    }, {
      key: "removeDOMElements",
      value: function removeDOMElements(productElement) {
        var pickupAvailability = productElement.querySelector("pickup-availability");
        if (pickupAvailability) pickupAvailability.remove();
        var productModal = productElement.querySelector("product-modal");
        if (productModal) productModal.remove();
        var modalDialog = productElement.querySelectorAll("modal-dialog");
        if (modalDialog) modalDialog.forEach(function (modal) {
          return modal.remove();
        });
      }
    }, {
      key: "preventDuplicatedIDs",
      value: function preventDuplicatedIDs(productElement) {
        var sectionId = productElement.dataset.section;
        var oldId = sectionId;
        var newId = "quickadd-".concat(sectionId);
        productElement.innerHTML = productElement.innerHTML.replaceAll(oldId, newId);
        Array.from(productElement.attributes).forEach(function (attribute) {
          if (attribute.value.includes(oldId)) {
            productElement.setAttribute(attribute.name, attribute.value.replace(oldId, newId));
          }
        });
        productElement.dataset.originalSection = sectionId;
      }
    }, {
      key: "removeGalleryListSemantic",
      value: function removeGalleryListSemantic(productElement) {
        var galleryList = productElement.querySelector('[id^="Slider-Gallery"]');
        if (!galleryList) return;
        galleryList.setAttribute("role", "presentation");
        galleryList.querySelectorAll('[id^="Slide-"]').forEach(function (li) {
          return li.setAttribute("role", "presentation");
        });
      }
    }, {
      key: "updateImageSizes",
      value: function updateImageSizes(productElement) {
        var product = productElement.querySelector(".product");
        var desktopColumns = product === null || product === void 0 ? void 0 : product.classList.contains("product--columns");
        if (!desktopColumns) return;
        var mediaImages = product.querySelectorAll(".product__media img");
        if (!mediaImages.length) return;
        var mediaImageSizes = "(min-width: 1000px) 715px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)";
        if (product.classList.contains("product--medium")) {
          mediaImageSizes = mediaImageSizes.replace("715px", "605px");
        } else if (product.classList.contains("product--small")) {
          mediaImageSizes = mediaImageSizes.replace("715px", "495px");
        }
        mediaImages.forEach(function (img) {
          return img.setAttribute("sizes", mediaImageSizes);
        });
      }
    }]);
  }(ModalDialog));
}