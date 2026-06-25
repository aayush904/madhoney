function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
if (!customElements.get('pickup-availability')) {
  customElements.define('pickup-availability', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function PickupAvailability() {
      var _this;
      _classCallCheck(this, PickupAvailability);
      _this = _callSuper(this, PickupAvailability);
      if (!_this.hasAttribute('available')) return _possibleConstructorReturn(_this);
      _this.errorHtml = _this.querySelector('template').content.firstElementChild.cloneNode(true);
      _this.onClickRefreshList = _this.onClickRefreshList.bind(_this);
      _this.fetchAvailability(_this.dataset.variantId);
      return _this;
    }
    _inherits(PickupAvailability, _HTMLElement);
    return _createClass(PickupAvailability, [{
      key: "fetchAvailability",
      value: function fetchAvailability(variantId) {
        var _this2 = this;
        var rootUrl = this.dataset.rootUrl;
        if (!rootUrl.endsWith("/")) {
          rootUrl = rootUrl + "/";
        }
        var variantSectionUrl = "".concat(rootUrl, "variants/").concat(variantId, "/?section_id=pickup-availability");
        fetch(variantSectionUrl).then(function (response) {
          return response.text();
        }).then(function (text) {
          var sectionInnerHTML = new DOMParser().parseFromString(text, 'text/html').querySelector('.shopify-section');
          _this2.renderPreview(sectionInnerHTML);
        }).catch(function (e) {
          var button = _this2.querySelector('button');
          if (button) button.removeEventListener('click', _this2.onClickRefreshList);
          _this2.renderError();
        });
      }
    }, {
      key: "onClickRefreshList",
      value: function onClickRefreshList(evt) {
        this.fetchAvailability(this.dataset.variantId);
      }
    }, {
      key: "renderError",
      value: function renderError() {
        this.innerHTML = '';
        this.appendChild(this.errorHtml);
        this.querySelector('button').addEventListener('click', this.onClickRefreshList);
      }
    }, {
      key: "renderPreview",
      value: function renderPreview(sectionInnerHTML) {
        var drawer = document.querySelector('pickup-availability-drawer');
        if (drawer) drawer.remove();
        if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {
          this.innerHTML = "";
          this.removeAttribute('available');
          return;
        }
        this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;
        this.setAttribute('available', '');
        document.body.appendChild(sectionInnerHTML.querySelector('pickup-availability-drawer'));
        var button = this.querySelector('button');
        if (button) button.addEventListener('click', function (evt) {
          document.querySelector('pickup-availability-drawer').show(evt.target);
        });
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}
if (!customElements.get('pickup-availability-drawer')) {
  customElements.define('pickup-availability-drawer', /*#__PURE__*/function (_HTMLElement2) {
    "use strict";

    function PickupAvailabilityDrawer() {
      var _this3;
      _classCallCheck(this, PickupAvailabilityDrawer);
      _this3 = _callSuper(this, PickupAvailabilityDrawer);
      _this3.onBodyClick = _this3.handleBodyClick.bind(_this3);
      _this3.querySelector('button').addEventListener('click', function () {
        _this3.hide();
      });
      _this3.addEventListener('keyup', function (event) {
        if (event.code.toUpperCase() === 'ESCAPE') _this3.hide();
      });
      return _this3;
    }
    _inherits(PickupAvailabilityDrawer, _HTMLElement2);
    return _createClass(PickupAvailabilityDrawer, [{
      key: "handleBodyClick",
      value: function handleBodyClick(evt) {
        var target = evt.target;
        if (target != this && !target.closest('pickup-availability-drawer') && target.id != 'ShowPickupAvailabilityDrawer') {
          this.hide();
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        this.removeAttribute('open');
        document.body.removeEventListener('click', this.onBodyClick);
        document.body.classList.remove('overflow-hidden');
        removeTrapFocus(this.focusElement);
      }
    }, {
      key: "show",
      value: function show(focusElement) {
        this.focusElement = focusElement;
        this.setAttribute('open', '');
        document.body.addEventListener('click', this.onBodyClick);
        document.body.classList.add('overflow-hidden');
        trapFocus(this);
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}