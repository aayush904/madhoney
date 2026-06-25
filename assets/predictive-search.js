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
var PredictiveSearch = /*#__PURE__*/function (_SearchForm) {
  "use strict";

  function PredictiveSearch() {
    var _this;
    _classCallCheck(this, PredictiveSearch);
    _this = _callSuper(this, PredictiveSearch);
    _this.cachedResults = {};
    _this.predictiveSearchResults = _this.querySelector('[data-predictive-search]');
    _this.allPredictiveSearchInstances = document.querySelectorAll('predictive-search');
    _this.isOpen = false;
    _this.abortController = new AbortController();
    _this.searchTerm = '';
    _this.setupEventListeners();
    return _this;
  }
  _inherits(PredictiveSearch, _SearchForm);
  return _createClass(PredictiveSearch, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      this.input.form.addEventListener('submit', this.onFormSubmit.bind(this));
      this.input.addEventListener('focus', this.onFocus.bind(this));
      this.addEventListener('focusout', this.onFocusOut.bind(this));
      this.addEventListener('keyup', this.onKeyup.bind(this));
      this.addEventListener('keydown', this.onKeydown.bind(this));
    }
  }, {
    key: "getQuery",
    value: function getQuery() {
      return this.input.value.trim();
    }
  }, {
    key: "onChange",
    value: function onChange() {
      _superPropGet(PredictiveSearch, "onChange", this, 3)([]);
      var newSearchTerm = this.getQuery();
      if (!this.searchTerm || !newSearchTerm.startsWith(this.searchTerm)) {
        var _this$querySelector;
        // Remove the results when they are no longer relevant for the new search term
        // so they don't show up when the dropdown opens again
        (_this$querySelector = this.querySelector("#predictive-search-results-groups-wrapper")) === null || _this$querySelector === void 0 || _this$querySelector.remove();
      }

      // Update the term asap, don't wait for the predictive search query to finish loading
      this.updateSearchForTerm(this.searchTerm, newSearchTerm);
      this.searchTerm = newSearchTerm;
      if (!this.searchTerm.length) {
        this.close(true);
        return;
      }
      this.getSearchResults(this.searchTerm);
    }
  }, {
    key: "onFormSubmit",
    value: function onFormSubmit(event) {
      if (!this.getQuery().length || this.querySelector('[aria-selected="true"] a')) event.preventDefault();
    }
  }, {
    key: "onFormReset",
    value: function onFormReset(event) {
      _superPropGet(PredictiveSearch, "onFormReset", this, 3)([event]);
      if (_superPropGet(PredictiveSearch, "shouldResetForm", this, 3)([])) {
        this.searchTerm = '';
        this.abortController.abort();
        this.abortController = new AbortController();
        this.closeResults(true);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      var currentSearchTerm = this.getQuery();
      if (!currentSearchTerm.length) return;
      if (this.searchTerm !== currentSearchTerm) {
        // Search term was changed from other search input, treat it as a user change
        this.onChange();
      } else if (this.getAttribute('results') === 'true') {
        this.open();
      } else {
        this.getSearchResults(this.searchTerm);
      }
    }
  }, {
    key: "onFocusOut",
    value: function onFocusOut() {
      var _this2 = this;
      setTimeout(function () {
        if (!_this2.contains(document.activeElement)) _this2.close();
      });
    }
  }, {
    key: "onKeyup",
    value: function onKeyup(event) {
      if (!this.getQuery().length) this.close(true);
      event.preventDefault();
      switch (event.code) {
        case 'ArrowUp':
          this.switchOption('up');
          break;
        case 'ArrowDown':
          this.switchOption('down');
          break;
        case 'Enter':
          this.selectOption();
          break;
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      // Prevent the cursor from moving in the input when using the up and down arrow keys
      if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
        event.preventDefault();
      }
    }
  }, {
    key: "updateSearchForTerm",
    value: function updateSearchForTerm(previousTerm, newTerm) {
      var searchForTextElement = this.querySelector("[data-predictive-search-search-for-text]");
      var currentButtonText = searchForTextElement === null || searchForTextElement === void 0 ? void 0 : searchForTextElement.innerText;
      if (currentButtonText) {
        if (currentButtonText.match(new RegExp(previousTerm, "g")).length > 1) {
          // The new term matches part of the button text and not just the search term, do not replace to avoid mistakes
          return;
        }
        var newButtonText = currentButtonText.replace(previousTerm, newTerm);
        searchForTextElement.innerText = newButtonText;
      }
    }
  }, {
    key: "switchOption",
    value: function switchOption(direction) {
      if (!this.getAttribute('open')) return;
      var moveUp = direction === 'up';
      var selectedElement = this.querySelector('[aria-selected="true"]');

      // Filter out hidden elements (duplicated page and article resources) thanks
      // to this https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
      var allVisibleElements = Array.from(this.querySelectorAll("li, button.predictive-search__item")).filter(function (element) {
        return element.offsetParent !== null;
      });
      var activeElementIndex = 0;
      if (moveUp && !selectedElement) return;
      var selectedElementIndex = -1;
      var i = 0;
      while (selectedElementIndex === -1 && i <= allVisibleElements.length) {
        if (allVisibleElements[i] === selectedElement) {
          selectedElementIndex = i;
        }
        i++;
      }
      this.statusElement.textContent = "";
      if (!moveUp && selectedElement) {
        activeElementIndex = selectedElementIndex === allVisibleElements.length - 1 ? 0 : selectedElementIndex + 1;
      } else if (moveUp) {
        activeElementIndex = selectedElementIndex === 0 ? allVisibleElements.length - 1 : selectedElementIndex - 1;
      }
      if (activeElementIndex === selectedElementIndex) return;
      var activeElement = allVisibleElements[activeElementIndex];
      activeElement.setAttribute('aria-selected', true);
      if (selectedElement) selectedElement.setAttribute('aria-selected', false);
      this.input.setAttribute('aria-activedescendant', activeElement.id);
    }
  }, {
    key: "selectOption",
    value: function selectOption() {
      var selectedOption = this.querySelector('[aria-selected="true"] a, button[aria-selected="true"]');
      if (selectedOption) selectedOption.click();
    }
  }, {
    key: "getSearchResults",
    value: function getSearchResults(searchTerm) {
      var _this3 = this;
      var queryKey = searchTerm.replace(" ", "-").toLowerCase();
      this.setLiveRegionLoadingState();
      if (this.cachedResults[queryKey]) {
        this.renderSearchResults(this.cachedResults[queryKey]);
        return;
      }
      fetch("".concat(routes.predictive_search_url, "?q=").concat(encodeURIComponent(searchTerm), "&section_id=predictive-search"), {
        signal: this.abortController.signal
      }).then(function (response) {
        if (!response.ok) {
          var error = new Error(response.status);
          _this3.close();
          throw error;
        }
        return response.text();
      }).then(function (text) {
        var resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
        // Save bandwidth keeping the cache in all instances synced
        _this3.allPredictiveSearchInstances.forEach(function (predictiveSearchInstance) {
          predictiveSearchInstance.cachedResults[queryKey] = resultsMarkup;
        });
        _this3.renderSearchResults(resultsMarkup);
      }).catch(function (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === 20) {
          // Code 20 means the call was aborted
          return;
        }
        _this3.close();
        throw error;
      });
    }
  }, {
    key: "setLiveRegionLoadingState",
    value: function setLiveRegionLoadingState() {
      this.statusElement = this.statusElement || this.querySelector('.predictive-search-status');
      this.loadingText = this.loadingText || this.getAttribute('data-loading-text');
      this.setLiveRegionText(this.loadingText);
      this.setAttribute('loading', true);
    }
  }, {
    key: "setLiveRegionText",
    value: function setLiveRegionText(statusText) {
      var _this4 = this;
      this.statusElement.setAttribute('aria-hidden', 'false');
      this.statusElement.textContent = statusText;
      setTimeout(function () {
        _this4.statusElement.setAttribute('aria-hidden', 'true');
      }, 1000);
    }
  }, {
    key: "renderSearchResults",
    value: function renderSearchResults(resultsMarkup) {
      this.predictiveSearchResults.innerHTML = resultsMarkup;
      this.setAttribute('results', true);
      this.setLiveRegionResults();
      this.open();
    }
  }, {
    key: "setLiveRegionResults",
    value: function setLiveRegionResults() {
      this.removeAttribute('loading');
      this.setLiveRegionText(this.querySelector('[data-predictive-search-live-region-count-value]').textContent);
    }
  }, {
    key: "getResultsMaxHeight",
    value: function getResultsMaxHeight() {
      this.resultsMaxHeight = window.innerHeight - document.querySelector('.section-header').getBoundingClientRect().bottom;
      return this.resultsMaxHeight;
    }
  }, {
    key: "open",
    value: function open() {
      this.predictiveSearchResults.style.maxHeight = this.resultsMaxHeight || "".concat(this.getResultsMaxHeight(), "px");
      this.setAttribute('open', true);
      this.input.setAttribute('aria-expanded', true);
      this.isOpen = true;
    }
  }, {
    key: "close",
    value: function close() {
      var clearSearchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.closeResults(clearSearchTerm);
      this.isOpen = false;
    }
  }, {
    key: "closeResults",
    value: function closeResults() {
      var clearSearchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (clearSearchTerm) {
        this.input.value = '';
        this.removeAttribute('results');
      }
      var selected = this.querySelector('[aria-selected="true"]');
      if (selected) selected.setAttribute('aria-selected', false);
      this.input.setAttribute('aria-activedescendant', '');
      this.removeAttribute('loading');
      this.removeAttribute('open');
      this.input.setAttribute('aria-expanded', false);
      this.resultsMaxHeight = false;
      this.predictiveSearchResults.removeAttribute('style');
    }
  }]);
}(SearchForm);
customElements.define('predictive-search', PredictiveSearch);