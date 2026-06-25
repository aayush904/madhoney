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
if (!customElements.get('localization-form')) {
  customElements.define('localization-form', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function LocalizationForm() {
      var _this;
      _classCallCheck(this, LocalizationForm);
      _this = _callSuper(this, LocalizationForm);
      _this.mql = window.matchMedia('(min-width: 750px)');
      _this.header = document.querySelector('.header-wrapper');
      _this.elements = {
        input: _this.querySelector('input[name="locale_code"], input[name="country_code"]'),
        button: _this.querySelector('button.localization-form__select'),
        panel: _this.querySelector('.disclosure__list-wrapper'),
        search: _this.querySelector('input[name="country_filter"]'),
        closeButton: _this.querySelector('.country-selector__close-button'),
        resetButton: _this.querySelector('.country-filter__reset-button'),
        searchIcon: _this.querySelector('.country-filter__search-icon'),
        liveRegion: _this.querySelector('#sr-country-search-results')
      };
      _this.addEventListener('keyup', _this.onContainerKeyUp.bind(_this));
      _this.addEventListener('keydown', _this.onContainerKeyDown.bind(_this));
      _this.addEventListener('focusout', _this.closeSelector.bind(_this));
      _this.elements.button.addEventListener('click', _this.openSelector.bind(_this));
      if (_this.elements.search) {
        _this.elements.search.addEventListener('keyup', _this.filterCountries.bind(_this));
        _this.elements.search.addEventListener('focus', _this.onSearchFocus.bind(_this));
        _this.elements.search.addEventListener('blur', _this.onSearchBlur.bind(_this));
        _this.elements.search.addEventListener('keydown', _this.onSearchKeyDown.bind(_this));
      }
      if (_this.elements.closeButton) {
        _this.elements.closeButton.addEventListener('click', _this.hidePanel.bind(_this));
      }
      if (_this.elements.resetButton) {
        _this.elements.resetButton.addEventListener('click', _this.resetFilter.bind(_this));
        _this.elements.resetButton.addEventListener('mousedown', function (event) {
          return event.preventDefault();
        });
      }
      _this.querySelectorAll('a').forEach(function (item) {
        return item.addEventListener('click', _this.onItemClick.bind(_this));
      });
      return _this;
    }
    _inherits(LocalizationForm, _HTMLElement);
    return _createClass(LocalizationForm, [{
      key: "hidePanel",
      value: function hidePanel() {
        this.elements.button.setAttribute('aria-expanded', 'false');
        this.elements.panel.setAttribute('hidden', true);
        if (this.elements.search) {
          this.elements.search.value = '';
          this.filterCountries();
          this.elements.search.setAttribute('aria-activedescendant', '');
        }
        document.body.classList.remove('overflow-hidden-mobile');
        document.querySelector('.menu-drawer').classList.remove('country-selector-open');
        this.header.preventHide = false;
      }
    }, {
      key: "onContainerKeyDown",
      value: function onContainerKeyDown(event) {
        var _this2 = this;
        var focusableItems = Array.from(this.querySelectorAll('a')).filter(function (item) {
          return !item.parentElement.classList.contains('hidden');
        });
        var focusedItemIndex = focusableItems.findIndex(function (item) {
          return item === document.activeElement;
        });
        var itemToFocus;
        switch (event.code.toUpperCase()) {
          case 'ARROWUP':
            event.preventDefault();
            itemToFocus = focusedItemIndex > 0 ? focusableItems[focusedItemIndex - 1] : focusableItems[focusableItems.length - 1];
            itemToFocus.focus();
            break;
          case 'ARROWDOWN':
            event.preventDefault();
            itemToFocus = focusedItemIndex < focusableItems.length - 1 ? focusableItems[focusedItemIndex + 1] : focusableItems[0];
            itemToFocus.focus();
            break;
        }
        if (!this.elements.search) return;
        setTimeout(function () {
          focusedItemIndex = focusableItems.findIndex(function (item) {
            return item === document.activeElement;
          });
          if (focusedItemIndex > -1) {
            _this2.elements.search.setAttribute('aria-activedescendant', focusableItems[focusedItemIndex].id);
          } else {
            _this2.elements.search.setAttribute('aria-activedescendant', '');
          }
        });
      }
    }, {
      key: "onContainerKeyUp",
      value: function onContainerKeyUp(event) {
        event.preventDefault();
        switch (event.code.toUpperCase()) {
          case 'ESCAPE':
            if (this.elements.button.getAttribute('aria-expanded') == 'false') return;
            this.hidePanel();
            event.stopPropagation();
            this.elements.button.focus();
            break;
          case 'SPACE':
            if (this.elements.button.getAttribute('aria-expanded') == 'true') return;
            this.openSelector();
            break;
        }
      }
    }, {
      key: "onItemClick",
      value: function onItemClick(event) {
        event.preventDefault();
        var form = this.querySelector('form');
        this.elements.input.value = event.currentTarget.dataset.value;
        if (form) form.submit();
      }
    }, {
      key: "openSelector",
      value: function openSelector() {
        this.elements.button.focus();
        this.elements.panel.toggleAttribute('hidden');
        this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
        if (!document.body.classList.contains('overflow-hidden-tablet')) {
          document.body.classList.add('overflow-hidden-mobile');
        }
        if (this.elements.search && this.mql.matches) {
          this.elements.search.focus();
        }
        if (this.hasAttribute('data-prevent-hide')) {
          this.header.preventHide = true;
        }
        document.querySelector('.menu-drawer').classList.add('country-selector-open');
      }
    }, {
      key: "closeSelector",
      value: function closeSelector(event) {
        if (event.target.classList.contains('country-selector__overlay') || !this.contains(event.target) || !this.contains(event.relatedTarget)) {
          this.hidePanel();
        }
      }
    }, {
      key: "normalizeString",
      value: function normalizeString(str) {
        return str.normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1ACF-\u1ADD\u1AE0-\u1AEB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1D9B-\u1DBE\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F1\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFA\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDDD9\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '').toLowerCase();
      }
    }, {
      key: "filterCountries",
      value: function filterCountries() {
        var _this3 = this;
        var searchValue = this.normalizeString(this.elements.search.value);
        var popularCountries = this.querySelector('.popular-countries');
        var allCountries = this.querySelectorAll('a');
        var visibleCountries = allCountries.length;
        this.elements.resetButton.classList.toggle('hidden', !searchValue);
        if (popularCountries) {
          popularCountries.classList.toggle('hidden', searchValue);
        }
        allCountries.forEach(function (item) {
          var countryName = _this3.normalizeString(item.querySelector('.country').textContent);
          if (countryName.indexOf(searchValue) > -1) {
            item.parentElement.classList.remove('hidden');
            visibleCountries++;
          } else {
            item.parentElement.classList.add('hidden');
            visibleCountries--;
          }
        });
        if (this.elements.liveRegion) {
          this.elements.liveRegion.innerHTML = window.accessibilityStrings.countrySelectorSearchCount.replace('[count]', visibleCountries);
        }
        this.querySelector('.country-selector').scrollTop = 0;
        this.querySelector('.country-selector__list').scrollTop = 0;
      }
    }, {
      key: "resetFilter",
      value: function resetFilter(event) {
        event.stopPropagation();
        this.elements.search.value = '';
        this.filterCountries();
        this.elements.search.focus();
      }
    }, {
      key: "onSearchFocus",
      value: function onSearchFocus() {
        this.elements.searchIcon.classList.add('country-filter__search-icon--hidden');
      }
    }, {
      key: "onSearchBlur",
      value: function onSearchBlur() {
        if (!this.elements.search.value) {
          this.elements.searchIcon.classList.remove('country-filter__search-icon--hidden');
        }
      }
    }, {
      key: "onSearchKeyDown",
      value: function onSearchKeyDown(event) {
        if (event.code.toUpperCase() === 'ENTER') {
          event.preventDefault();
        }
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}