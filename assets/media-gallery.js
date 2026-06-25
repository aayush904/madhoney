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
if (!customElements.get('media-gallery')) {
  customElements.define('media-gallery', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function MediaGallery() {
      var _this;
      _classCallCheck(this, MediaGallery);
      _this = _callSuper(this, MediaGallery);
      _this.elements = {
        liveRegion: _this.querySelector('[id^="GalleryStatus"]'),
        viewer: _this.querySelector('[id^="GalleryViewer"]'),
        thumbnails: _this.querySelector('[id^="GalleryThumbnails"]')
      };
      _this.mql = window.matchMedia('(min-width: 769px)');
      if (!_this.elements.thumbnails) return _possibleConstructorReturn(_this);
      _this.elements.viewer.addEventListener('slideChanged', debounce(_this.onSlideChanged.bind(_this), 500));
      _this.elements.thumbnails.querySelectorAll('[data-target]').forEach(function (mediaToSwitch) {
        mediaToSwitch.querySelector('button').addEventListener('click', _this.setActiveMedia.bind(_this, mediaToSwitch.dataset.target, false));
      });
      if (_this.dataset.desktopLayout.includes('thumbnail') && _this.mql.matches) _this.removeListSemantic();
      return _this;
    }
    _inherits(MediaGallery, _HTMLElement);
    return _createClass(MediaGallery, [{
      key: "onSlideChanged",
      value: function onSlideChanged(event) {
        var thumbnail = this.elements.thumbnails.querySelector("[data-target=\"".concat(event.detail.currentElement.dataset.mediaId, "\"]"));
        this.setActiveThumbnail(thumbnail);
      }
    }, {
      key: "setActiveMedia",
      value: function setActiveMedia(mediaId, prepend) {
        var _this2 = this;
        var activeMedia = this.elements.viewer.querySelector("[data-media-id=\"".concat(mediaId, "\"]"));
        this.elements.viewer.querySelectorAll('[data-media-id]').forEach(function (element) {
          element.classList.remove('is-active');
        });
        activeMedia.classList.add('is-active');
        if (prepend) {
          activeMedia.parentElement.prepend(activeMedia);
          if (this.elements.thumbnails) {
            var _activeThumbnail = this.elements.thumbnails.querySelector("[data-target=\"".concat(mediaId, "\"]"));
            _activeThumbnail.parentElement.prepend(_activeThumbnail);
          }
          if (this.elements.viewer.slider) this.elements.viewer.resetPages();
        }
        this.preventStickyHeader();
        window.setTimeout(function () {
          if (_this2.elements.thumbnails) {
            activeMedia.parentElement.scrollTo({
              left: activeMedia.offsetLeft
            });
          }
          if (!_this2.elements.thumbnails || _this2.dataset.desktopLayout === 'stacked') {
            activeMedia.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
        this.playActiveMedia(activeMedia);
        if (!this.elements.thumbnails) return;
        var activeThumbnail = this.elements.thumbnails.querySelector("[data-target=\"".concat(mediaId, "\"]"));
        this.setActiveThumbnail(activeThumbnail);
        this.announceLiveRegion(activeMedia, activeThumbnail.dataset.mediaPosition);
      }
    }, {
      key: "setActiveThumbnail",
      value: function setActiveThumbnail(thumbnail) {
        if (!this.elements.thumbnails || !thumbnail) return;
        this.elements.thumbnails.querySelectorAll('button').forEach(function (element) {
          return element.removeAttribute('aria-current');
        });
        thumbnail.querySelector('button').setAttribute('aria-current', true);
        if (this.elements.thumbnails.isSlideVisible(thumbnail, 10)) return;
        this.elements.thumbnails.slider.scrollTo({
          left: thumbnail.offsetLeft
        });
      }
    }, {
      key: "announceLiveRegion",
      value: function announceLiveRegion(activeItem, position) {
        var _this3 = this;
        var image = activeItem.querySelector('.product__modal-opener--image img');
        if (!image) return;
        image.onload = function () {
          _this3.elements.liveRegion.setAttribute('aria-hidden', false);
          _this3.elements.liveRegion.innerHTML = window.accessibilityStrings.imageAvailable.replace('[index]', position);
          setTimeout(function () {
            _this3.elements.liveRegion.setAttribute('aria-hidden', true);
          }, 2000);
        };
        image.src = image.src;
      }
    }, {
      key: "playActiveMedia",
      value: function playActiveMedia(activeItem) {
        window.pauseAllMedia();
        var deferredMedia = activeItem.querySelector('.deferred-media');
        if (deferredMedia) deferredMedia.loadContent(false);
      }
    }, {
      key: "preventStickyHeader",
      value: function preventStickyHeader() {
        this.stickyHeader = this.stickyHeader || document.querySelector('sticky-header');
        if (!this.stickyHeader) return;
        this.stickyHeader.dispatchEvent(new Event('preventHeaderReveal'));
      }
    }, {
      key: "removeListSemantic",
      value: function removeListSemantic() {
        if (!this.elements.viewer.slider) return;
        this.elements.viewer.slider.setAttribute('role', 'presentation');
        this.elements.viewer.sliderItems.forEach(function (slide) {
          return slide.setAttribute('role', 'presentation');
        });
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}