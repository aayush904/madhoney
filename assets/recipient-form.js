function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
if (!customElements.get('recipient-form')) {
  customElements.define('recipient-form', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function RecipientForm() {
      var _this$errorMessageWra, _this$errorMessageWra2, _this$errorMessage;
      var _this;
      _classCallCheck(this, RecipientForm);
      _this = _callSuper(this, RecipientForm);
      _defineProperty(_this, "cartUpdateUnsubscriber", undefined);
      _defineProperty(_this, "variantChangeUnsubscriber", undefined);
      _defineProperty(_this, "cartErrorUnsubscriber", undefined);
      _this.checkboxInput = _this.querySelector("#Recipient-Checkbox-".concat(_this.dataset.sectionId));
      _this.checkboxInput.disabled = false;
      _this.hiddenControlField = _this.querySelector("#Recipient-Control-".concat(_this.dataset.sectionId));
      _this.hiddenControlField.disabled = true;
      _this.emailInput = _this.querySelector("#Recipient-email-".concat(_this.dataset.sectionId));
      _this.nameInput = _this.querySelector("#Recipient-name-".concat(_this.dataset.sectionId));
      _this.messageInput = _this.querySelector("#Recipient-message-".concat(_this.dataset.sectionId));
      _this.errorMessageWrapper = _this.querySelector('.product-form__recipient-error-message-wrapper');
      _this.errorMessageList = (_this$errorMessageWra = _this.errorMessageWrapper) === null || _this$errorMessageWra === void 0 ? void 0 : _this$errorMessageWra.querySelector('ul');
      _this.errorMessage = (_this$errorMessageWra2 = _this.errorMessageWrapper) === null || _this$errorMessageWra2 === void 0 ? void 0 : _this$errorMessageWra2.querySelector('.error-message');
      _this.defaultErrorHeader = (_this$errorMessage = _this.errorMessage) === null || _this$errorMessage === void 0 ? void 0 : _this$errorMessage.innerText;
      _this.currentProductVariantId = _this.dataset.productVariantId;
      _this.addEventListener('change', _this.onChange.bind(_this));
      return _this;
    }
    _inherits(RecipientForm, _HTMLElement);
    return _createClass(RecipientForm, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, function (event) {
          if (event.source === 'product-form' && event.productVariantId.toString() === _this2.currentProductVariantId) {
            _this2.resetRecipientForm();
          }
        });
        this.variantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, function (event) {
          if (event.data.sectionId === _this2.dataset.sectionId) {
            _this2.currentProductVariantId = event.data.variant.id.toString();
          }
        });
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartError, function (event) {
          if (event.source === 'product-form' && event.productVariantId.toString() === _this2.currentProductVariantId) {
            _this2.displayErrorMessage(event.message, event.errors);
          }
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
        if (this.cartErrorUnsubscriber) {
          this.cartErrorUnsubscriber();
        }
      }
    }, {
      key: "onChange",
      value: function onChange() {
        if (!this.checkboxInput.checked) {
          this.clearInputFields();
          this.clearErrorMessage();
        }
      }
    }, {
      key: "clearInputFields",
      value: function clearInputFields() {
        this.emailInput.value = '';
        this.nameInput.value = '';
        this.messageInput.value = '';
      }
    }, {
      key: "displayErrorMessage",
      value: function displayErrorMessage(title, body) {
        var _this3 = this;
        this.clearErrorMessage();
        this.errorMessageWrapper.hidden = false;
        if (_typeof(body) === 'object') {
          this.errorMessage.innerText = this.defaultErrorHeader;
          return Object.entries(body).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            var errorMessageId = "RecipientForm-".concat(key, "-error-").concat(_this3.dataset.sectionId);
            var fieldSelector = "#Recipient-".concat(key, "-").concat(_this3.dataset.sectionId);
            var placeholderElement = _this3.querySelector("".concat(fieldSelector));
            var label = (placeholderElement === null || placeholderElement === void 0 ? void 0 : placeholderElement.getAttribute('placeholder')) || key;
            var message = "".concat(label, " ").concat(value);
            var errorMessageElement = _this3.querySelector("#".concat(errorMessageId));
            var errorTextElement = errorMessageElement === null || errorMessageElement === void 0 ? void 0 : errorMessageElement.querySelector('.error-message');
            if (!errorTextElement) return;
            if (_this3.errorMessageList) {
              _this3.errorMessageList.appendChild(_this3.createErrorListItem(fieldSelector, message));
            }
            errorTextElement.innerText = "".concat(message, ".");
            errorMessageElement.classList.remove('hidden');
            var inputElement = _this3["".concat(key, "Input")];
            if (!inputElement) return;
            inputElement.setAttribute('aria-invalid', true);
            inputElement.setAttribute('aria-describedby', errorMessageId);
          });
        }
        this.errorMessage.innerText = body;
      }
    }, {
      key: "createErrorListItem",
      value: function createErrorListItem(target, message) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', target);
        a.innerText = message;
        li.appendChild(a);
        li.className = "error-message";
        return li;
      }
    }, {
      key: "clearErrorMessage",
      value: function clearErrorMessage() {
        this.errorMessageWrapper.hidden = true;
        if (this.errorMessageList) this.errorMessageList.innerHTML = '';
        this.querySelectorAll('.recipient-fields .form__message').forEach(function (field) {
          field.classList.add('hidden');
          var textField = field.querySelector('.error-message');
          if (textField) textField.innerText = '';
        });
        [this.emailInput, this.messageInput, this.nameInput].forEach(function (inputElement) {
          inputElement.setAttribute('aria-invalid', false);
          inputElement.removeAttribute('aria-describedby');
        });
      }
    }, {
      key: "resetRecipientForm",
      value: function resetRecipientForm() {
        if (this.checkboxInput.checked) {
          this.checkboxInput.checked = false;
          this.clearInputFields();
          this.clearErrorMessage();
        }
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}