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
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
if (!customElements.get('share-button')) {
  customElements.define('share-button', /*#__PURE__*/function (_DetailsDisclosure) {
    "use strict";

    function ShareButton() {
      var _this;
      _classCallCheck(this, ShareButton);
      _this = _callSuper(this, ShareButton);
      _this.elements = {
        shareButton: _this.querySelector('button'),
        shareSummary: _this.querySelector('summary'),
        closeButton: _this.querySelector('.share-button__close'),
        successMessage: _this.querySelector('[id^="ShareMessage"]'),
        urlInput: _this.querySelector('input')
      };
      _this.urlToShare = _this.elements.urlInput ? _this.elements.urlInput.value : document.location.href;
      if (navigator.share) {
        _this.mainDetailsToggle.setAttribute('hidden', '');
        _this.elements.shareButton.classList.remove('hidden');
        _this.elements.shareButton.addEventListener('click', function () {
          navigator.share({
            url: _this.urlToShare,
            title: document.title
          });
        });
      } else {
        _this.mainDetailsToggle.addEventListener('toggle', _this.toggleDetails.bind(_this));
        _this.mainDetailsToggle.querySelector('.share-button__copy').addEventListener('click', _this.copyToClipboard.bind(_this));
        _this.mainDetailsToggle.querySelector('.share-button__close').addEventListener('click', _this.close.bind(_this));
      }
      return _this;
    }
    _inherits(ShareButton, _DetailsDisclosure);
    return _createClass(ShareButton, [{
      key: "toggleDetails",
      value: function toggleDetails() {
        if (!this.mainDetailsToggle.open) {
          this.elements.successMessage.classList.add('hidden');
          this.elements.successMessage.textContent = '';
          this.elements.closeButton.classList.add('hidden');
          this.elements.shareSummary.focus();
        }
      }
    }, {
      key: "copyToClipboard",
      value: function copyToClipboard() {
        var _this2 = this;
        navigator.clipboard.writeText(this.elements.urlInput.value).then(function () {
          _this2.elements.successMessage.classList.remove('hidden');
          _this2.elements.successMessage.textContent = window.accessibilityStrings.shareSuccess;
          _this2.elements.closeButton.classList.remove('hidden');
          _this2.elements.closeButton.focus();
        });
      }
    }, {
      key: "updateUrl",
      value: function updateUrl(url) {
        this.urlToShare = url;
        this.elements.urlInput.value = url;
      }
    }]);
  }(DetailsDisclosure));
}