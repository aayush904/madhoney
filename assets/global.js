function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
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
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
}
document.querySelectorAll('[id^="Details-"] summary').forEach(function (summary) {
  summary.setAttribute('role', 'button');
  summary.setAttribute('aria-expanded', summary.parentNode.hasAttribute('open'));
  if (summary.nextElementSibling.getAttribute('id')) {
    summary.setAttribute('aria-controls', summary.nextElementSibling.id);
  }
  summary.addEventListener('click', function (event) {
    event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
  });
  if (summary.closest('header-drawer')) return;
  summary.parentElement.addEventListener('keyup', onKeyUpEscape);
});
var trapFocusHandlers = {};
function trapFocus(container) {
  var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : container;
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];
  removeTrapFocus();
  trapFocusHandlers.focusin = function (event) {
    if (event.target !== container && event.target !== last && event.target !== first) return;
    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };
  trapFocusHandlers.focusout = function () {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };
  trapFocusHandlers.keydown = function (event) {
    if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key
    // On the last focusable element and tab forward, focus the first element.
    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    //  On the first focusable element and tab backward, focus the last element.
    if ((event.target === container || event.target === first) && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  };
  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);
  elementToFocus.focus();
  if (elementToFocus.tagName === 'INPUT' && ['search', 'text', 'email', 'url'].includes(elementToFocus.type) && elementToFocus.value) {
    elementToFocus.setSelectionRange(0, elementToFocus.value.length);
  }
}

// Here run the querySelector to figure out if the browser supports :focus-visible or not and run code based on it.
try {
  document.querySelector(":focus-visible");
} catch (e) {
  focusVisiblePolyfill();
}
function focusVisiblePolyfill() {
  var navKeys = ['ARROWUP', 'ARROWDOWN', 'ARROWLEFT', 'ARROWRIGHT', 'TAB', 'ENTER', 'SPACE', 'ESCAPE', 'HOME', 'END', 'PAGEUP', 'PAGEDOWN'];
  var currentFocusedElement = null;
  var mouseClick = null;
  window.addEventListener('keydown', function (event) {
    if (navKeys.includes(event.code.toUpperCase())) {
      mouseClick = false;
    }
  });
  window.addEventListener('mousedown', function (event) {
    mouseClick = true;
  });
  window.addEventListener('focus', function () {
    if (currentFocusedElement) currentFocusedElement.classList.remove('focused');
    if (mouseClick) return;
    currentFocusedElement = document.activeElement;
    currentFocusedElement.classList.add('focused');
  }, true);
}
function pauseAllMedia() {
  document.querySelectorAll('.js-youtube').forEach(function (video) {
    video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });
  document.querySelectorAll('.js-vimeo').forEach(function (video) {
    video.contentWindow.postMessage('{"method":"pause"}', '*');
  });
  document.querySelectorAll('video').forEach(function (video) {
    return video.pause();
  });
  document.querySelectorAll('product-model').forEach(function (model) {
    if (model.modelViewerUI) model.modelViewerUI.pause();
  });
}
function removeTrapFocus() {
  var elementToFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);
  if (elementToFocus) elementToFocus.focus();
}
function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;
  var openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;
  var summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.setAttribute('aria-expanded', false);
  summaryElement.focus();
}
var QuantityInput = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  function QuantityInput() {
    var _this;
    _classCallCheck(this, QuantityInput);
    _this = _callSuper(this, QuantityInput);
    _defineProperty(_this, "quantityUpdateUnsubscriber", undefined);
    _this.input = _this.querySelector('input');
    _this.changeEvent = new Event('change', {
      bubbles: true
    });
    _this.input.addEventListener('change', _this.onInputChange.bind(_this));
    _this.querySelectorAll('button').forEach(function (button) {
      return button.addEventListener('click', _this.onButtonClick.bind(_this));
    });
    return _this;
  }
  _inherits(QuantityInput, _HTMLElement);
  return _createClass(QuantityInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.validateQtyRules();
      this.quantityUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.quantityUpdate, this.validateQtyRules.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.quantityUpdateUnsubscriber) {
        this.quantityUpdateUnsubscriber();
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      this.validateQtyRules();
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      event.preventDefault();
      var previousValue = this.input.value;
      event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
      if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
    }
  }, {
    key: "validateQtyRules",
    value: function validateQtyRules() {
      var value = parseInt(this.input.value);
      if (this.input.min) {
        var min = parseInt(this.input.min);
        var buttonMinus = this.querySelector(".quantity__button[name='minus']");
        buttonMinus.classList.toggle('disabled', value <= min);
      }
      if (this.input.max) {
        var max = parseInt(this.input.max);
        var buttonPlus = this.querySelector(".quantity__button[name='plus']");
        buttonPlus.classList.toggle('disabled', value >= max);
      }
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('quantity-input', QuantityInput);
function debounce(fn, wait) {
  var _this2 = this;
  var t;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this2, args);
    }, wait);
  };
}
function fetchConfig() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'json';
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/".concat(type)
    }
  };
}

/*
 * Shopify Common JS
 *
 */
if (typeof window.Shopify == 'undefined') {
  window.Shopify = {};
}
Shopify.bind = function (fn, scope) {
  return function () {
    return fn.apply(scope, arguments);
  };
};
Shopify.setSelectorByValue = function (selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];
    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};
Shopify.addListener = function (target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on' + eventName, callback);
};
Shopify.postLink = function (path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};
  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);
  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};
Shopify.CountryProvinceSelector = function (country_domid, province_domid, options) {
  this.countryEl = document.getElementById(country_domid);
  this.provinceEl = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);
  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler, this));
  this.initCountry();
  this.initProvince();
};
Shopify.CountryProvinceSelector.prototype = {
  initCountry: function initCountry() {
    var value = this.countryEl.getAttribute('data-default');
    Shopify.setSelectorByValue(this.countryEl, value);
    this.countryHandler();
  },
  initProvince: function initProvince() {
    var value = this.provinceEl.getAttribute('data-default');
    if (value && this.provinceEl.options.length > 0) {
      Shopify.setSelectorByValue(this.provinceEl, value);
    }
  },
  countryHandler: function countryHandler(e) {
    var opt = this.countryEl.options[this.countryEl.selectedIndex];
    var raw = opt.getAttribute('data-provinces');
    var provinces = JSON.parse(raw);
    this.clearOptions(this.provinceEl);
    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < provinces.length; i++) {
        var opt = document.createElement('option');
        opt.value = provinces[i][0];
        opt.innerHTML = provinces[i][1];
        this.provinceEl.appendChild(opt);
      }
      this.provinceContainer.style.display = "";
    }
  },
  clearOptions: function clearOptions(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  },
  setOptions: function setOptions(selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) {
      var opt = document.createElement('option');
      opt.value = values[i];
      opt.innerHTML = values[i];
      selector.appendChild(opt);
    }
  }
};
var MenuDrawer = /*#__PURE__*/function (_HTMLElement2) {
  "use strict";

  function MenuDrawer() {
    var _this3;
    _classCallCheck(this, MenuDrawer);
    _this3 = _callSuper(this, MenuDrawer);
    _this3.mainDetailsToggle = _this3.querySelector('details');
    _this3.addEventListener('keyup', _this3.onKeyUp.bind(_this3));
    _this3.addEventListener('focusout', _this3.onFocusOut.bind(_this3));
    _this3.bindEvents();
    return _this3;
  }
  _inherits(MenuDrawer, _HTMLElement2);
  return _createClass(MenuDrawer, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this4 = this;
      this.querySelectorAll('summary').forEach(function (summary) {
        return summary.addEventListener('click', _this4.onSummaryClick.bind(_this4));
      });
      this.querySelectorAll('button:not(.localization-selector)').forEach(function (button) {
        return button.addEventListener('click', _this4.onCloseButtonClick.bind(_this4));
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;
      var openDetailsElement = event.target.closest('details[open]');
      if (!openDetailsElement) return;
      openDetailsElement === this.mainDetailsToggle ? this.closeMenuDrawer(event, this.mainDetailsToggle.querySelector('summary')) : this.closeSubmenu(openDetailsElement);
    }
  }, {
    key: "onSummaryClick",
    value: function onSummaryClick(event) {
      var summaryElement = event.currentTarget;
      var detailsElement = summaryElement.parentNode;
      var parentMenuElement = detailsElement.closest('.has-submenu');
      var isOpen = detailsElement.hasAttribute('open');
      var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      function addTrapFocus() {
        trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector('button'));
        summaryElement.nextElementSibling.removeEventListener('transitionend', addTrapFocus);
      }
      if (detailsElement === this.mainDetailsToggle) {
        if (isOpen) event.preventDefault();
        isOpen ? this.closeMenuDrawer(event, summaryElement) : this.openMenuDrawer(summaryElement);
        if (window.matchMedia('(max-width: 990px)')) {
          document.documentElement.style.setProperty('--viewport-height', "".concat(window.innerHeight, "px"));
        }
      } else {
        setTimeout(function () {
          detailsElement.classList.add('menu-opening');
          summaryElement.setAttribute('aria-expanded', true);
          parentMenuElement && parentMenuElement.classList.add('submenu-open');
          !reducedMotion || reducedMotion.matches ? addTrapFocus() : summaryElement.nextElementSibling.addEventListener('transitionend', addTrapFocus);
        }, 100);
      }
    }
  }, {
    key: "openMenuDrawer",
    value: function openMenuDrawer(summaryElement) {
      var _this5 = this;
      setTimeout(function () {
        _this5.mainDetailsToggle.classList.add('menu-opening');
      });
      summaryElement.setAttribute('aria-expanded', true);
      trapFocus(this.mainDetailsToggle, summaryElement);
      document.body.classList.add("overflow-hidden-".concat(this.dataset.breakpoint));
    }
  }, {
    key: "closeMenuDrawer",
    value: function closeMenuDrawer(event) {
      var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (event === undefined) return;
      this.mainDetailsToggle.classList.remove('menu-opening');
      this.mainDetailsToggle.querySelectorAll('details').forEach(function (details) {
        details.removeAttribute('open');
        details.classList.remove('menu-opening');
      });
      this.mainDetailsToggle.querySelectorAll('.submenu-open').forEach(function (submenu) {
        submenu.classList.remove('submenu-open');
      });
      document.body.classList.remove("overflow-hidden-".concat(this.dataset.breakpoint));
      removeTrapFocus(elementToFocus);
      this.closeAnimation(this.mainDetailsToggle);
    }
  }, {
    key: "onFocusOut",
    value: function onFocusOut() {
      var _this6 = this;
      setTimeout(function () {
        if (_this6.mainDetailsToggle.hasAttribute('open') && !_this6.mainDetailsToggle.contains(document.activeElement)) _this6.closeMenuDrawer();
      });
    }
  }, {
    key: "onCloseButtonClick",
    value: function onCloseButtonClick(event) {
      var detailsElement = event.currentTarget.closest('details');
      this.closeSubmenu(detailsElement);
    }
  }, {
    key: "closeSubmenu",
    value: function closeSubmenu(detailsElement) {
      var parentMenuElement = detailsElement.closest('.submenu-open');
      parentMenuElement && parentMenuElement.classList.remove('submenu-open');
      detailsElement.classList.remove('menu-opening');
      detailsElement.querySelector('summary').setAttribute('aria-expanded', false);
      removeTrapFocus(detailsElement.querySelector('summary'));
      this.closeAnimation(detailsElement);
    }
  }, {
    key: "closeAnimation",
    value: function closeAnimation(detailsElement) {
      var animationStart;
      var _handleAnimation = function handleAnimation(time) {
        if (animationStart === undefined) {
          animationStart = time;
        }
        var elapsedTime = time - animationStart;
        if (elapsedTime < 400) {
          window.requestAnimationFrame(_handleAnimation);
        } else {
          detailsElement.removeAttribute('open');
          if (detailsElement.closest('details[open]')) {
            trapFocus(detailsElement.closest('details[open]'), detailsElement.querySelector('summary'));
          }
        }
      };
      window.requestAnimationFrame(_handleAnimation);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('menu-drawer', MenuDrawer);
var HeaderDrawer = /*#__PURE__*/function (_MenuDrawer) {
  "use strict";

  function HeaderDrawer() {
    var _this7;
    _classCallCheck(this, HeaderDrawer);
    _this7 = _callSuper(this, HeaderDrawer);
    _defineProperty(_this7, "onResize", function () {
      _this7.header && document.documentElement.style.setProperty('--header-bottom-position', "".concat(parseInt(_this7.header.getBoundingClientRect().bottom - _this7.borderOffset), "px"));
      document.documentElement.style.setProperty('--viewport-height', "".concat(window.innerHeight, "px"));
    });
    return _this7;
  }
  _inherits(HeaderDrawer, _MenuDrawer);
  return _createClass(HeaderDrawer, [{
    key: "openMenuDrawer",
    value: function openMenuDrawer(summaryElement) {
      var _this8 = this;
      this.header = this.header || document.querySelector('.section-header');
      this.borderOffset = this.borderOffset || this.closest('.header-wrapper').classList.contains('header-wrapper--border-bottom') ? 1 : 0;
      document.documentElement.style.setProperty('--header-bottom-position', "".concat(parseInt(this.header.getBoundingClientRect().bottom - this.borderOffset), "px"));
      this.header.classList.add('menu-open');
      setTimeout(function () {
        _this8.mainDetailsToggle.classList.add('menu-opening');
      });
      summaryElement.setAttribute('aria-expanded', true);
      window.addEventListener('resize', this.onResize);
      trapFocus(this.mainDetailsToggle, summaryElement);
      document.body.classList.add("overflow-hidden-".concat(this.dataset.breakpoint));
    }
  }, {
    key: "closeMenuDrawer",
    value: function closeMenuDrawer(event, elementToFocus) {
      if (!elementToFocus) return;
      _superPropGet(HeaderDrawer, "closeMenuDrawer", this, 3)([event, elementToFocus]);
      this.header.classList.remove('menu-open');
      window.removeEventListener('resize', this.onResize);
    }
  }]);
}(MenuDrawer);
customElements.define('header-drawer', HeaderDrawer);
var ModalDialog = /*#__PURE__*/function (_HTMLElement3) {
  "use strict";

  function ModalDialog() {
    var _this9;
    _classCallCheck(this, ModalDialog);
    _this9 = _callSuper(this, ModalDialog);
    _this9.querySelector('[id^="ModalClose-"]').addEventListener('click', _this9.hide.bind(_this9, false));
    _this9.addEventListener('keyup', function (event) {
      if (event.code.toUpperCase() === 'ESCAPE') _this9.hide();
    });
    if (_this9.classList.contains('media-modal')) {
      _this9.addEventListener('pointerup', function (event) {
        if (event.pointerType === 'mouse' && !event.target.closest('deferred-media, product-model')) _this9.hide();
      });
    } else {
      _this9.addEventListener('click', function (event) {
        if (event.target === _this9) _this9.hide();
      });
    }
    return _this9;
  }
  _inherits(ModalDialog, _HTMLElement3);
  return _createClass(ModalDialog, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.moved) return;
      this.moved = true;
      document.body.appendChild(this);
    }
  }, {
    key: "show",
    value: function show(opener) {
      this.openedBy = opener;
      var popup = this.querySelector('.template-popup');
      document.body.classList.add('overflow-hidden');
      this.setAttribute('open', '');
      if (popup) popup.loadContent();
      trapFocus(this, this.querySelector('[role="dialog"]'));
      window.pauseAllMedia();
    }
  }, {
    key: "hide",
    value: function hide() {
      document.body.classList.remove('overflow-hidden');
      document.body.dispatchEvent(new CustomEvent('modalClosed'));
      this.removeAttribute('open');
      removeTrapFocus(this.openedBy);
      window.pauseAllMedia();
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('modal-dialog', ModalDialog);
var ModalOpener = /*#__PURE__*/function (_HTMLElement4) {
  "use strict";

  function ModalOpener() {
    var _this0;
    _classCallCheck(this, ModalOpener);
    _this0 = _callSuper(this, ModalOpener);
    var button = _this0.querySelector('button');
    if (!button) return _possibleConstructorReturn(_this0);
    button.addEventListener('click', function () {
      var modal = document.querySelector(_this0.getAttribute('data-modal'));
      if (modal) modal.show(button);
    });
    return _this0;
  }
  _inherits(ModalOpener, _HTMLElement4);
  return _createClass(ModalOpener);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('modal-opener', ModalOpener);
var DeferredMedia = /*#__PURE__*/function (_HTMLElement5) {
  "use strict";

  function DeferredMedia() {
    var _this1;
    _classCallCheck(this, DeferredMedia);
    _this1 = _callSuper(this, DeferredMedia);
    var poster = _this1.querySelector('[id^="Deferred-Poster-"]');
    if (!poster) return _possibleConstructorReturn(_this1);
    poster.addEventListener('click', _this1.loadContent.bind(_this1));
    return _this1;
  }
  _inherits(DeferredMedia, _HTMLElement5);
  return _createClass(DeferredMedia, [{
    key: "loadContent",
    value: function loadContent() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      window.pauseAllMedia();
      if (!this.getAttribute('loaded')) {
        var content = document.createElement('div');
        content.appendChild(this.querySelector('template').content.firstElementChild.cloneNode(true));
        this.setAttribute('loaded', true);
        var deferredElement = this.appendChild(content.querySelector('video, model-viewer, iframe'));
        if (focus) deferredElement.focus();
        if (deferredElement.nodeName == 'VIDEO' && deferredElement.getAttribute('autoplay')) {
          // force autoplay for safari
          deferredElement.play();
        }
      }
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('deferred-media', DeferredMedia);
var SliderComponent = /*#__PURE__*/function (_HTMLElement6) {
  "use strict";

  function SliderComponent() {
    var _this10;
    _classCallCheck(this, SliderComponent);
    _this10 = _callSuper(this, SliderComponent);
    _this10.slider = _this10.querySelector('[id^="Slider-"]');
    _this10.sliderItems = _this10.querySelectorAll('[id^="Slide-"]');
    _this10.enableSliderLooping = false;
    _this10.currentPageElement = _this10.querySelector('.slider-counter--current');
    _this10.pageTotalElement = _this10.querySelector('.slider-counter--total');
    _this10.prevButton = _this10.querySelector('button[name="previous"]');
    _this10.nextButton = _this10.querySelector('button[name="next"]');
    if (!_this10.slider || !_this10.nextButton) return _possibleConstructorReturn(_this10);
    _this10.initPages();
    var resizeObserver = new ResizeObserver(function (entries) {
      return _this10.initPages();
    });
    resizeObserver.observe(_this10.slider);
    _this10.slider.addEventListener('scroll', _this10.update.bind(_this10));
    _this10.prevButton.addEventListener('click', _this10.onButtonClick.bind(_this10));
    _this10.nextButton.addEventListener('click', _this10.onButtonClick.bind(_this10));
    return _this10;
  }
  _inherits(SliderComponent, _HTMLElement6);
  return _createClass(SliderComponent, [{
    key: "initPages",
    value: function initPages() {
      this.sliderItemsToShow = Array.from(this.sliderItems).filter(function (element) {
        return element.clientWidth > 0;
      });
      if (this.sliderItemsToShow.length < 2) return;
      this.sliderItemOffset = this.sliderItemsToShow[1].offsetLeft - this.sliderItemsToShow[0].offsetLeft;
      this.slidesPerPage = Math.floor((this.slider.clientWidth - this.sliderItemsToShow[0].offsetLeft) / this.sliderItemOffset);
      this.totalPages = this.sliderItemsToShow.length - this.slidesPerPage + 1;
      this.update();
    }
  }, {
    key: "resetPages",
    value: function resetPages() {
      this.sliderItems = this.querySelectorAll('[id^="Slide-"]');
      this.initPages();
    }
  }, {
    key: "update",
    value: function update() {
      // Temporarily prevents unneeded updates resulting from variant changes
      // This should be refactored as part of https://github.com/Shopify/dawn/issues/2057
      if (!this.slider || !this.nextButton) return;
      var previousPage = this.currentPage;
      this.currentPage = Math.round(this.slider.scrollLeft / this.sliderItemOffset) + 1;
      if (this.currentPageElement && this.pageTotalElement) {
        this.currentPageElement.textContent = this.currentPage;
        this.pageTotalElement.textContent = this.totalPages;
      }
      if (this.currentPage != previousPage) {
        this.dispatchEvent(new CustomEvent('slideChanged', {
          detail: {
            currentPage: this.currentPage,
            currentElement: this.sliderItemsToShow[this.currentPage - 1]
          }
        }));
      }
      if (this.enableSliderLooping) return;
      if (this.isSlideVisible(this.sliderItemsToShow[0]) && this.slider.scrollLeft === 0) {
        this.prevButton.setAttribute('disabled', 'disabled');
      } else {
        this.prevButton.removeAttribute('disabled');
      }
      if (this.isSlideVisible(this.sliderItemsToShow[this.sliderItemsToShow.length - 1])) {
        this.nextButton.setAttribute('disabled', 'disabled');
      } else {
        this.nextButton.removeAttribute('disabled');
      }
    }
  }, {
    key: "isSlideVisible",
    value: function isSlideVisible(element) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var lastVisibleSlide = this.slider.clientWidth + this.slider.scrollLeft - offset;
      return element.offsetLeft + element.clientWidth <= lastVisibleSlide && element.offsetLeft >= this.slider.scrollLeft;
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      event.preventDefault();
      var step = event.currentTarget.dataset.step || 1;
      this.slideScrollPosition = event.currentTarget.name === 'next' ? this.slider.scrollLeft + step * this.sliderItemOffset : this.slider.scrollLeft - step * this.sliderItemOffset;
      this.slider.scrollTo({
        left: this.slideScrollPosition
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('slider-component', SliderComponent);
var SlideshowComponent = /*#__PURE__*/function (_SliderComponent) {
  "use strict";

  function SlideshowComponent() {
    var _this11;
    _classCallCheck(this, SlideshowComponent);
    _this11 = _callSuper(this, SlideshowComponent);
    _this11.sliderControlWrapper = _this11.querySelector('.slider-buttons');
    _this11.enableSliderLooping = true;
    if (!_this11.sliderControlWrapper) return _possibleConstructorReturn(_this11);
    _this11.sliderFirstItemNode = _this11.slider.querySelector('.slideshow__slide');
    if (_this11.sliderItemsToShow.length > 0) _this11.currentPage = 1;
    _this11.sliderControlLinksArray = Array.from(_this11.sliderControlWrapper.querySelectorAll('.slider-counter__link'));
    _this11.sliderControlLinksArray.forEach(function (link) {
      return link.addEventListener('click', _this11.linkToSlide.bind(_this11));
    });
    _this11.slider.addEventListener('scroll', _this11.setSlideVisibility.bind(_this11));
    _this11.setSlideVisibility();
    if (_this11.slider.getAttribute('data-autoplay') === 'true') _this11.setAutoPlay();
    return _this11;
  }
  _inherits(SlideshowComponent, _SliderComponent);
  return _createClass(SlideshowComponent, [{
    key: "setAutoPlay",
    value: function setAutoPlay() {
      this.sliderAutoplayButton = this.querySelector('.slideshow__autoplay');
      this.autoplaySpeed = this.slider.dataset.speed * 1000;
      this.sliderAutoplayButton.addEventListener('click', this.autoPlayToggle.bind(this));
      this.addEventListener('mouseover', this.focusInHandling.bind(this));
      this.addEventListener('mouseleave', this.focusOutHandling.bind(this));
      this.addEventListener('focusin', this.focusInHandling.bind(this));
      this.addEventListener('focusout', this.focusOutHandling.bind(this));
      this.play();
      this.autoplayButtonIsSetToPlay = true;
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      _superPropGet(SlideshowComponent, "onButtonClick", this, 3)([event]);
      var isFirstSlide = this.currentPage === 1;
      var isLastSlide = this.currentPage === this.sliderItemsToShow.length;
      if (!isFirstSlide && !isLastSlide) return;
      if (isFirstSlide && event.currentTarget.name === 'previous') {
        this.slideScrollPosition = this.slider.scrollLeft + this.sliderFirstItemNode.clientWidth * this.sliderItemsToShow.length;
      } else if (isLastSlide && event.currentTarget.name === 'next') {
        this.slideScrollPosition = 0;
      }
      this.slider.scrollTo({
        left: this.slideScrollPosition
      });
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(SlideshowComponent, "update", this, 3)([]);
      this.sliderControlButtons = this.querySelectorAll('.slider-counter__link');
      this.prevButton.removeAttribute('disabled');
      if (!this.sliderControlButtons.length) return;
      this.sliderControlButtons.forEach(function (link) {
        link.classList.remove('slider-counter__link--active');
        link.removeAttribute('aria-current');
      });
      this.sliderControlButtons[this.currentPage - 1].classList.add('slider-counter__link--active');
      this.sliderControlButtons[this.currentPage - 1].setAttribute('aria-current', true);
    }
  }, {
    key: "autoPlayToggle",
    value: function autoPlayToggle() {
      this.togglePlayButtonState(this.autoplayButtonIsSetToPlay);
      this.autoplayButtonIsSetToPlay ? this.pause() : this.play();
      this.autoplayButtonIsSetToPlay = !this.autoplayButtonIsSetToPlay;
    }
  }, {
    key: "focusOutHandling",
    value: function focusOutHandling(event) {
      var focusedOnAutoplayButton = event.target === this.sliderAutoplayButton || this.sliderAutoplayButton.contains(event.target);
      if (!this.autoplayButtonIsSetToPlay || focusedOnAutoplayButton) return;
      this.play();
    }
  }, {
    key: "focusInHandling",
    value: function focusInHandling(event) {
      var focusedOnAutoplayButton = event.target === this.sliderAutoplayButton || this.sliderAutoplayButton.contains(event.target);
      if (focusedOnAutoplayButton && this.autoplayButtonIsSetToPlay) {
        this.play();
      } else if (this.autoplayButtonIsSetToPlay) {
        this.pause();
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.slider.setAttribute('aria-live', 'off');
      clearInterval(this.autoplay);
      this.autoplay = setInterval(this.autoRotateSlides.bind(this), this.autoplaySpeed);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.slider.setAttribute('aria-live', 'polite');
      clearInterval(this.autoplay);
    }
  }, {
    key: "togglePlayButtonState",
    value: function togglePlayButtonState(pauseAutoplay) {
      if (pauseAutoplay) {
        this.sliderAutoplayButton.classList.add('slideshow__autoplay--paused');
        this.sliderAutoplayButton.setAttribute('aria-label', window.accessibilityStrings.playSlideshow);
      } else {
        this.sliderAutoplayButton.classList.remove('slideshow__autoplay--paused');
        this.sliderAutoplayButton.setAttribute('aria-label', window.accessibilityStrings.pauseSlideshow);
      }
    }
  }, {
    key: "autoRotateSlides",
    value: function autoRotateSlides() {
      var slideScrollPosition = this.currentPage === this.sliderItems.length ? 0 : this.slider.scrollLeft + this.slider.querySelector('.slideshow__slide').clientWidth;
      this.slider.scrollTo({
        left: slideScrollPosition
      });
    }
  }, {
    key: "setSlideVisibility",
    value: function setSlideVisibility() {
      var _this12 = this;
      this.sliderItemsToShow.forEach(function (item, index) {
        var linkElements = item.querySelectorAll('a');
        if (index === _this12.currentPage - 1) {
          if (linkElements.length) linkElements.forEach(function (button) {
            button.removeAttribute('tabindex');
          });
          item.setAttribute('aria-hidden', 'false');
          item.removeAttribute('tabindex');
        } else {
          if (linkElements.length) linkElements.forEach(function (button) {
            button.setAttribute('tabindex', '-1');
          });
          item.setAttribute('aria-hidden', 'true');
          item.setAttribute('tabindex', '-1');
        }
      });
    }
  }, {
    key: "linkToSlide",
    value: function linkToSlide(event) {
      event.preventDefault();
      var slideScrollPosition = this.slider.scrollLeft + this.sliderFirstItemNode.clientWidth * (this.sliderControlLinksArray.indexOf(event.currentTarget) + 1 - this.currentPage);
      this.slider.scrollTo({
        left: slideScrollPosition
      });
    }
  }]);
}(SliderComponent);
customElements.define('slideshow-component', SlideshowComponent);
var VariantSelects = /*#__PURE__*/function (_HTMLElement7) {
  "use strict";

  function VariantSelects() {
    var _this13;
    _classCallCheck(this, VariantSelects);
    _this13 = _callSuper(this, VariantSelects);
    _this13.addEventListener('change', _this13.onVariantChange);
    return _this13;
  }
  _inherits(VariantSelects, _HTMLElement7);
  return _createClass(VariantSelects, [{
    key: "onVariantChange",
    value: function onVariantChange() {
      this.updateOptions();
      this.updateMasterId();
      this.toggleAddButton(true, '', false);
      this.updatePickupAvailability();
      this.removeErrorMessage();
      this.updateVariantStatuses();
      if (!this.currentVariant) {
        this.toggleAddButton(true, '', true);
        this.setUnavailable();
      } else {
        this.updateMedia();
        this.updateURL();
        this.updateVariantInput();
        this.renderProductInfo();
        this.updateShareUrl();
      }
    }
  }, {
    key: "updateOptions",
    value: function updateOptions() {
      this.options = Array.from(this.querySelectorAll('select'), function (select) {
        return select.value;
      });
    }
  }, {
    key: "updateMasterId",
    value: function updateMasterId() {
      var _this14 = this;
      this.currentVariant = this.getVariantData().find(function (variant) {
        return !variant.options.map(function (option, index) {
          return _this14.options[index] === option;
        }).includes(false);
      });
    }
  }, {
    key: "updateMedia",
    value: function updateMedia() {
      var _this15 = this;
      if (!this.currentVariant) return;
      if (!this.currentVariant.featured_media) return;
      var mediaGalleries = document.querySelectorAll("[id^=\"MediaGallery-".concat(this.dataset.section, "\"]"));
      mediaGalleries.forEach(function (mediaGallery) {
        return mediaGallery.setActiveMedia("".concat(_this15.dataset.section, "-").concat(_this15.currentVariant.featured_media.id), true);
      });
      var modalContent = document.querySelector("#ProductModal-".concat(this.dataset.section, " .product-media-modal__content"));
      if (!modalContent) return;
      var newMediaModal = modalContent.querySelector("[data-media-id=\"".concat(this.currentVariant.featured_media.id, "\"]"));
      modalContent.prepend(newMediaModal);
    }
  }, {
    key: "updateURL",
    value: function updateURL() {
      if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
      window.history.replaceState({}, '', "".concat(this.dataset.url, "?variant=").concat(this.currentVariant.id));
    }
  }, {
    key: "updateShareUrl",
    value: function updateShareUrl() {
      var shareButton = document.getElementById("Share-".concat(this.dataset.section));
      if (!shareButton || !shareButton.updateUrl) return;
      shareButton.updateUrl("".concat(window.shopUrl).concat(this.dataset.url, "?variant=").concat(this.currentVariant.id));
    }
  }, {
    key: "updateVariantInput",
    value: function updateVariantInput() {
      var _this16 = this;
      var productForms = document.querySelectorAll("#product-form-".concat(this.dataset.section, ", #product-form-installment-").concat(this.dataset.section));
      productForms.forEach(function (productForm) {
        var input = productForm.querySelector('input[name="id"]');
        input.value = _this16.currentVariant.id;
        input.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      });
    }
  }, {
    key: "updateVariantStatuses",
    value: function updateVariantStatuses() {
      var _this17 = this;
      var selectedOptionOneVariants = this.variantData.filter(function (variant) {
        return _this17.querySelector(':checked').value === variant.option1;
      });
      var inputWrappers = _toConsumableArray(this.querySelectorAll('.product-form__input'));
      inputWrappers.forEach(function (option, index) {
        if (index === 0) return;
        var optionInputs = _toConsumableArray(option.querySelectorAll('input[type="radio"], option'));
        var previousOptionSelected = inputWrappers[index - 1].querySelector(':checked').value;
        var availableOptionInputsValue = selectedOptionOneVariants.filter(function (variant) {
          return variant.available && variant["option".concat(index)] === previousOptionSelected;
        }).map(function (variantOption) {
          return variantOption["option".concat(index + 1)];
        });
        _this17.setInputAvailability(optionInputs, availableOptionInputsValue);
      });
    }
  }, {
    key: "setInputAvailability",
    value: function setInputAvailability(listOfOptions, listOfAvailableOptions) {
      listOfOptions.forEach(function (input) {
        if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
          input.innerText = input.getAttribute('value');
        } else {
          input.innerText = window.variantStrings.unavailable_with_option.replace('[value]', input.getAttribute('value'));
        }
      });
    }
  }, {
    key: "updatePickupAvailability",
    value: function updatePickupAvailability() {
      var pickUpAvailability = document.querySelector('pickup-availability');
      if (!pickUpAvailability) return;
      if (this.currentVariant && this.currentVariant.available) {
        pickUpAvailability.fetchAvailability(this.currentVariant.id);
      } else {
        pickUpAvailability.removeAttribute('available');
        pickUpAvailability.innerHTML = '';
      }
    }
  }, {
    key: "removeErrorMessage",
    value: function removeErrorMessage() {
      var section = this.closest('section');
      if (!section) return;
      var productForm = section.querySelector('product-form');
      if (productForm) productForm.handleErrorMessage();
    }
  }, {
    key: "renderProductInfo",
    value: function renderProductInfo() {
      var _this18 = this;
      var requestedVariantId = this.currentVariant.id;
      var sectionId = this.dataset.originalSection ? this.dataset.originalSection : this.dataset.section;
      fetch("".concat(this.dataset.url, "?variant=").concat(requestedVariantId, "&section_id=").concat(this.dataset.originalSection ? this.dataset.originalSection : this.dataset.section)).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        // prevent unnecessary ui changes from abandoned selections
        if (_this18.currentVariant.id !== requestedVariantId) return;
        var html = new DOMParser().parseFromString(responseText, 'text/html');
        var destination = document.getElementById("price-".concat(_this18.dataset.section));
        var source = html.getElementById("price-".concat(_this18.dataset.originalSection ? _this18.dataset.originalSection : _this18.dataset.section));
        var skuSource = html.getElementById("Sku-".concat(_this18.dataset.originalSection ? _this18.dataset.originalSection : _this18.dataset.section));
        var skuDestination = document.getElementById("Sku-".concat(_this18.dataset.section));
        var inventorySource = html.getElementById("Inventory-".concat(_this18.dataset.originalSection ? _this18.dataset.originalSection : _this18.dataset.section));
        var inventoryDestination = document.getElementById("Inventory-".concat(_this18.dataset.section));
        var titlePostfixDestination = document.getElementById("post-title-".concat(_this18.dataset.section));
        var titlePostfixSource = html.getElementById("post-title-".concat(_this18.dataset.originalSection ? _this18.dataset.originalSection : _this18.dataset.section));
        if (titlePostfixSource && titlePostfixDestination) titlePostfixDestination.innerHTML = titlePostfixSource.innerHTML;
        var netWeightDestination = document.getElementById("netWeight-".concat(_this18.dataset.section));
        var netWeightSource = html.getElementById("netWeight-".concat(_this18.dataset.originalSection ? _this18.dataset.originalSection : _this18.dataset.section));
        if (netWeightSource && netWeightDestination) netWeightDestination.innerHTML = netWeightSource.innerHTML;
        if (source && destination) destination.innerHTML = source.innerHTML;
        if (inventorySource && inventoryDestination) inventoryDestination.innerHTML = inventorySource.innerHTML;
        if (skuSource && skuDestination) {
          skuDestination.innerHTML = skuSource.innerHTML;
          skuDestination.classList.toggle('visibility-hidden', skuSource.classList.contains('visibility-hidden'));
        }
        var price = document.getElementById("price-".concat(_this18.dataset.section));
        if (price) price.classList.remove('visibility-hidden');
        if (inventoryDestination) inventoryDestination.classList.toggle('visibility-hidden', inventorySource.innerText === '');
        var addButtonUpdated = html.getElementById("ProductSubmitButton-".concat(sectionId));
        _this18.toggleAddButton(addButtonUpdated ? addButtonUpdated.hasAttribute('disabled') : true, window.variantStrings.soldOut);
        publish(PUB_SUB_EVENTS.variantChange, {
          data: {
            sectionId: sectionId,
            html: html,
            variant: _this18.currentVariant
          }
        });
      });
    }
  }, {
    key: "toggleAddButton",
    value: function toggleAddButton() {
      var disable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var text = arguments.length > 1 ? arguments[1] : undefined;
      var modifyClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var productForm = document.getElementById("product-form-".concat(this.dataset.section));
      if (!productForm) return;
      var addButton = productForm.querySelector('[name="add"]');
      var addButtonText = productForm.querySelector('[name="add"] > span');
      if (!addButton) return;
      if (disable) {
        addButton.setAttribute('disabled', 'disabled');
        if (text) addButtonText.textContent = text;
      } else {
        addButton.removeAttribute('disabled');
        addButtonText.textContent = window.variantStrings.addToCart;
      }
      if (!modifyClass) return;
    }
  }, {
    key: "setUnavailable",
    value: function setUnavailable() {
      var button = document.getElementById("product-form-".concat(this.dataset.section));
      var addButton = button.querySelector('[name="add"]');
      var addButtonText = button.querySelector('[name="add"] > span');
      var price = document.getElementById("price-".concat(this.dataset.section));
      var inventory = document.getElementById("Inventory-".concat(this.dataset.section));
      var sku = document.getElementById("Sku-".concat(this.dataset.section));
      if (!addButton) return;
      addButtonText.textContent = window.variantStrings.unavailable;
      if (price) price.classList.add('visibility-hidden');
      if (inventory) inventory.classList.add('visibility-hidden');
      if (sku) sku.classList.add('visibility-hidden');
    }
  }, {
    key: "getVariantData",
    value: function getVariantData() {
      this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
      return this.variantData;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('variant-selects', VariantSelects);
var VariantRadios = /*#__PURE__*/function (_VariantSelects) {
  "use strict";

  function VariantRadios() {
    _classCallCheck(this, VariantRadios);
    return _callSuper(this, VariantRadios);
  }
  _inherits(VariantRadios, _VariantSelects);
  return _createClass(VariantRadios, [{
    key: "setInputAvailability",
    value: function setInputAvailability(listOfOptions, listOfAvailableOptions) {
      listOfOptions.forEach(function (input) {
        if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
          input.classList.remove('disabled');
        } else {
          input.classList.add('disabled');
        }
      });
    }
  }, {
    key: "updateOptions",
    value: function updateOptions() {
      var fieldsets = Array.from(this.querySelectorAll('fieldset'));
      this.options = fieldsets.map(function (fieldset) {
        return Array.from(fieldset.querySelectorAll('input')).find(function (radio) {
          return radio.checked;
        }).value;
      });
    }
  }]);
}(VariantSelects);
customElements.define('variant-radios', VariantRadios);
var ProductRecommendations = /*#__PURE__*/function (_HTMLElement8) {
  "use strict";

  function ProductRecommendations() {
    _classCallCheck(this, ProductRecommendations);
    return _callSuper(this, ProductRecommendations);
  }
  _inherits(ProductRecommendations, _HTMLElement8);
  return _createClass(ProductRecommendations, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this19 = this;
      var handleIntersection = function handleIntersection(entries, observer) {
        if (!entries[0].isIntersecting) return;
        observer.unobserve(_this19);
        fetch(_this19.dataset.url).then(function (response) {
          return response.text();
        }).then(function (text) {
          var html = document.createElement('div');
          html.innerHTML = text;
          var recommendations = html.querySelector('product-recommendations');
          if (recommendations && recommendations.innerHTML.trim().length) {
            _this19.innerHTML = recommendations.innerHTML;
          }
          if (!_this19.querySelector('slideshow-component') && _this19.classList.contains('complementary-products')) {
            _this19.remove();
          }
          if (html.querySelector('.grid__item')) {
            _this19.classList.add('product-recommendations--loaded');
          }
        }).catch(function (e) {
          console.error(e);
        });
      };
      new IntersectionObserver(handleIntersection.bind(this), {
        rootMargin: '0px 0px 400px 0px'
      }).observe(this);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('product-recommendations', ProductRecommendations);