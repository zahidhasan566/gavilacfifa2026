"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_live-score_LiveScore_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LiveScore',
  data: function data() {
    return {
      liveMatches: [],
      upcomingMatches: [],
      recentMatches: [],
      selectedMatchId: null,
      myPoints: 0,
      loading: true,
      carouselPage: 0,
      slideDir: 'mc-slide-left',
      _autoTimer: null,
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
      adIndex: 0,
      _adTimer: null,
      adImages: ['FIFA website Work-09.jpg', 'FIFA website Work-10.jpg', 'FIFA website Work-11.jpg', 'FIFA website Work-12.jpg', 'FIFA website Work-13.jpg', 'FIFA website Work-14.jpg', 'FIFA website Work-15.jpg', 'FIFA website Work-16.jpg', 'FIFA website Work-17.jpg', 'FIFA website Work-18.jpg', 'FIFA website Work-19.jpg']
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentUser'])), {}, {
    selectedMatchWinners: function selectedMatchWinners() {
      var m = this.recentMatches.find(function (m) {
        return m.id === this.selectedMatchId;
      }, this);
      return m ? m.winners : [];
    },
    perPage: function perPage() {
      return this.windowWidth <= 640 ? 1 : 2;
    },
    displayMatches: function displayMatches() {
      var nextDate = this.upcomingMatches.length ? this.upcomingMatches[0].match_date : null;
      var upcoming = nextDate ? this.upcomingMatches.filter(function (m) {
        return m.match_date === nextDate;
      }) : [];
      return [].concat(_toConsumableArray(this.liveMatches), _toConsumableArray(upcoming));
    },
    totalPages: function totalPages() {
      return Math.ceil(this.displayMatches.length / this.perPage);
    },
    pagedMatches: function pagedMatches() {
      return this.displayMatches.slice(this.carouselPage * this.perPage, this.carouselPage * this.perPage + this.perPage);
    }
  }),
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([_this.fetchMatches(), _this.fetchWinners(), _this.fetchMyPoints()]);
          case 2:
            _this.loading = false;
            _this.startAutoSlide();
            _this.startAdCarousel();
            window.addEventListener('resize', _this.onResize);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this._autoTimer);
    clearInterval(this._adTimer);
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize: function onResize() {
      this.windowWidth = window.innerWidth;
      if (this.carouselPage >= this.totalPages) this.carouselPage = 0;
    },
    startAutoSlide: function startAutoSlide() {
      clearInterval(this._autoTimer);
      this._autoTimer = setInterval(this.nextPage, 4000);
    },
    nextPage: function nextPage() {
      if (this.totalPages < 2) return;
      this.slideDir = 'mc-slide-left';
      this.carouselPage = (this.carouselPage + 1) % this.totalPages;
    },
    prevPage: function prevPage() {
      if (this.totalPages < 2) return;
      this.slideDir = 'mc-slide-right';
      this.carouselPage = (this.carouselPage - 1 + this.totalPages) % this.totalPages;
      this.startAutoSlide();
    },
    goPage: function goPage(p) {
      this.slideDir = p > this.carouselPage ? 'mc-slide-left' : 'mc-slide-right';
      this.carouselPage = p;
      this.startAutoSlide();
    },
    fetchMatches: function fetchMatches() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$Promise$all, _yield$Promise$all2, live, upcoming;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Promise.all([_this2.$http.get('/api/matches/live'), _this2.$http.get('/api/matches?status=upcoming')]);
            case 2:
              _yield$Promise$all = _context2.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              live = _yield$Promise$all2[0];
              upcoming = _yield$Promise$all2[1];
              _this2.liveMatches = live.data.data;
              _this2.upcomingMatches = upcoming.data.data;
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    fetchWinners: function fetchWinners() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this3$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.$http.get('/api/winners/recent-matches');
            case 2:
              _yield$_this3$$http$g = _context3.sent;
              data = _yield$_this3$$http$g.data;
              _this3.recentMatches = data.data || [];
              if (_this3.recentMatches.length && !_this3.selectedMatchId) {
                _this3.selectedMatchId = _this3.recentMatches[0].id;
              }
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    fetchMyPoints: function fetchMyPoints() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this4$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.$http.get('/api/winners/my-points');
            case 2:
              _yield$_this4$$http$g = _context4.sent;
              data = _yield$_this4$$http$g.data;
              _this4.myPoints = data.data.total_points;
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    startAdCarousel: function startAdCarousel() {
      var _this5 = this;
      clearInterval(this._adTimer);
      this._adTimer = setInterval(function () {
        _this5.adIndex = (_this5.adIndex + 1) % _this5.adImages.length;
      }, 3000);
    },
    goAdSlide: function goAdSlide(i) {
      this.adIndex = i;
      this.startAdCarousel();
    },
    formatMatchDate: function formatMatchDate(dateStr) {
      if (!dateStr) return '';
      var d = new Date(dateStr);
      if (isNaN(d)) return dateStr;
      var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      return "".concat(days[d.getDay()], ", ").concat(months[d.getMonth()], " ").concat(d.getDate());
    },
    teamFlagUrl: function teamFlagUrl(team) {
      if (!team || !team.flag_emoji) return window.__IMG__ + '/images/default-avatar.png';
      return "https://flagcdn.com/w40/".concat(team.flag_emoji.toLowerCase(), ".png");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ── Ad Banner Carousel ─── */\n.ad-carousel[data-v-9c8f2f72] {\n    width: 100%;\n    overflow: hidden;\n    flex-shrink: 0;\n    border-top: 1px solid rgba(255,255,255,0.07);\n    position: relative;\n}\n.ad-carousel-img[data-v-9c8f2f72] {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n.ad-carousel-dots[data-v-9c8f2f72] {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    gap: 6px;\n    z-index: 10;\n}\n.ad-dot[data-v-9c8f2f72] {\n    width: 7px; height: 7px; border-radius: 50%;\n    background: rgba(255,255,255,0.45);\n    cursor: pointer;\n    transition: background 0.2s;\n}\n.ad-dot.active[data-v-9c8f2f72] { background: #FFA500;\n}\n.ad-fade-enter-active[data-v-9c8f2f72], .ad-fade-leave-active[data-v-9c8f2f72] { transition: opacity 0.5s ease;\n}\n.ad-fade-enter[data-v-9c8f2f72], .ad-fade-leave-to[data-v-9c8f2f72] { opacity: 0;\n}\n\n/* ── Outer Card ─────────────────────────────── */\n.ls-card[data-v-9c8f2f72] {\n    display: flex;\n    gap: 0;\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.10);\n    border-radius: 16px;\n    overflow: hidden;\n    min-height: 600px;\n}\n\n/* ── Left: Matches ──────────────────────────── */\n.ls-matches-section[data-v-9c8f2f72] { flex: 1; min-width: 0; display: flex; flex-direction: column;\n}\n.section-header[data-v-9c8f2f72] {\n    display: flex; align-items: center; gap: 14px;\n    padding: 0 20px;\n    background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);\n    border-bottom: 1px solid rgba(255,255,255,0.08);\n    height: 70px;\n    flex-shrink: 0;\n}\n\n/* Left football icon — same as nav-ball */\n.sh-ball-wrap[data-v-9c8f2f72] { flex-shrink: 0; display: flex; align-items: center;\n}\n.sh-ball-img[data-v-9c8f2f72] {\n    height: 44px; width: 44px; -o-object-fit: contain; object-fit: contain;\n}\n.sh-text[data-v-9c8f2f72] { display: flex; flex-direction: column; justify-content: center; gap: 1px; flex: 1;\n}\n.sh-title[data-v-9c8f2f72] {\n    color: #fff; font-family: 'Roboto', sans-serif;\n    font-weight: 800; font-size: 1.1rem; line-height: 1.2;\n}\n.sh-sub[data-v-9c8f2f72] { color: #fff; font-size: 0.72rem;\n}\n\n/* Right trophy image — same as nav-logo */\n.sh-trophy-area[data-v-9c8f2f72] {\n    margin-left: auto; flex-shrink: 0;\n    display: flex; align-items: center;\n}\n.sh-trophy-img[data-v-9c8f2f72] {\n    height: 50px; width: auto; -o-object-fit: contain; object-fit: contain;\n}\n.state-msg[data-v-9c8f2f72] { color: rgba(255,255,255,0.4); text-align: center; padding: 48px 20px;\n}\n\n/* Carousel wrapper */\n.mc-carousel-wrap[data-v-9c8f2f72] { flex: 1; display: flex; flex-direction: column; overflow: hidden;\n}\n.mc-controls[data-v-9c8f2f72] {\n    display: flex; align-items: center; justify-content: center; gap: 12px;\n    padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.06); flex-shrink: 0;\n}\n.mc-arrow[data-v-9c8f2f72] {\n    background: rgba(255,255,255,0.08); border: none; color: #fff;\n    font-size: 1.4rem; width: 32px; height: 32px; border-radius: 50%;\n    cursor: pointer; display: flex; align-items: center; justify-content: center;\n    transition: background .2s;\n}\n.mc-arrow[data-v-9c8f2f72]:hover { background: rgba(255,165,0,.3); color: #FFA500;\n}\n.mc-dots[data-v-9c8f2f72] { display: flex; gap: 6px;\n}\n.mc-dot[data-v-9c8f2f72] { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.25); cursor: pointer; transition: background .2s;\n}\n.mc-dot.active[data-v-9c8f2f72] { background: #FFA500;\n}\n\n/* Slide transitions */\n.mc-slide-left-enter-active[data-v-9c8f2f72], .mc-slide-left-leave-active[data-v-9c8f2f72],\n.mc-slide-right-enter-active[data-v-9c8f2f72], .mc-slide-right-leave-active[data-v-9c8f2f72] { transition: all .4s ease;\n}\n.mc-slide-left-enter[data-v-9c8f2f72] { transform: translateX(100%); opacity: 0;\n}\n.mc-slide-left-leave-to[data-v-9c8f2f72] { transform: translateX(-100%); opacity: 0;\n}\n.mc-slide-right-enter[data-v-9c8f2f72] { transform: translateX(-100%); opacity: 0;\n}\n.mc-slide-right-leave-to[data-v-9c8f2f72] { transform: translateX(100%); opacity: 0;\n}\n\n/* Match Grid */\n.match-cards-grid[data-v-9c8f2f72] { display: grid; grid-template-columns: 1fr 1fr; flex: 1;\n}\n.match-card[data-v-9c8f2f72] {\n    padding: 18px 20px;\n    border: 1px solid rgba(255,255,255,0.22);\n    border-radius: 10px;\n    margin: 10px;\n    background: rgba(255,255,255,0.03);\n}\n\n/* Bold date header */\n.mc-date-bold[data-v-9c8f2f72] {\n    font-family: 'Rajdhani', sans-serif;\n    font-weight: 800;\n    font-size: 1.05rem;\n    color: #fff;\n    letter-spacing: 0.5px;\n    margin-bottom: 10px;\n}\n\n/* Card Header */\n.mc-header[data-v-9c8f2f72] { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;\n}\n.group-badge[data-v-9c8f2f72] {\n    background: rgba(0,0,0,0.35); color: #fff;\n    font-size: 0.62rem; font-weight: 700; padding: 4px 10px;\n    border-radius: 6px; letter-spacing: 0.3px; white-space: nowrap;\n}\n.mc-date[data-v-9c8f2f72] { color: rgba(255,255,255,0.6); font-size: 0.7rem; font-weight: 500;\n}\n.mc-venue[data-v-9c8f2f72] {\n    display: flex; align-items: center; gap: 3px;\n    color: #fff; font-size: 0.65rem; margin-left: auto; white-space: nowrap;\n    background: #1e1067; padding: 3px 8px; border-radius: 4px;\n}\n\n/* Teams & Score */\n.mc-body[data-v-9c8f2f72] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; gap: 8px;\n}\n.team-col[data-v-9c8f2f72] { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 72px; flex-shrink: 0;\n}\n.team-flag-img[data-v-9c8f2f72] { width: 52px; height: 36px; -o-object-fit: cover; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 6px rgba(0,0,0,0.35);\n}\n.team-name[data-v-9c8f2f72] { color: #fff; font-size: 0.62rem; font-weight: 700; text-align: center; text-transform: uppercase; letter-spacing: 0.3px;\n}\n.score-col[data-v-9c8f2f72] { display: flex; flex-direction: column; align-items: center; gap: 5px; flex: 1;\n}\n.score-row[data-v-9c8f2f72] { display: flex; align-items: center; gap: 8px;\n}\n.score-circle[data-v-9c8f2f72] {\n    width: 44px; height: 44px; border-radius: 50%;\n    background: rgba(0,0,0,0.4);\n    color: #fff; font-size: 1.3rem; font-weight: 700;\n    font-family: 'Rajdhani', sans-serif;\n    display: flex; align-items: center; justify-content: center;\n    border: 1px solid rgba(255,255,255,0.12);\n}\n.score-dash[data-v-9c8f2f72] { color: rgba(255,255,255,0.5); font-size: 1rem; font-weight: 700;\n}\n.mc-time[data-v-9c8f2f72] { color: #fff; font-size: 0.68rem; font-weight: 600;\n}\n.live-badge[data-v-9c8f2f72] {\n    background: #dc2626; color: #fff;\n    font-size: 0.6rem; font-weight: 700; padding: 3px 10px;\n    border-radius: 4px; letter-spacing: 1px;\n    animation: pulse-live-data-v-9c8f2f72 1.5s infinite;\n}\n@keyframes pulse-live-data-v-9c8f2f72 {\n0%,100%{opacity:1}\n50%{opacity:0.7}\n}\n.ft-badge[data-v-9c8f2f72] {\n    background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.6);\n    font-size: 0.6rem; font-weight: 700; padding: 3px 10px; border-radius: 4px;\n}\n\n/* Halves */\n.mc-halves[data-v-9c8f2f72] { border-top: 1px solid rgba(255,255,255,0.07); padding-top: 10px;\n}\n.half-row[data-v-9c8f2f72] {\n    display: flex; justify-content: space-between;\n    color: rgba(255,255,255,0.55); font-size: 0.68rem; font-weight: 600;\n    padding: 5px 6px; border-radius: 4px;\n}\n.half-row.alt[data-v-9c8f2f72] { background: rgba(255,255,255,0.04);\n}\n\n/* ── Right: Sidebar ─────────────────────────── */\n.ls-sidebar[data-v-9c8f2f72] {\n    width: 320px; flex-shrink: 0;\n    display: flex; flex-direction: column;\n    border-left: 1px solid rgba(255,255,255,0.08);\n}\n\n/* My Points */\n.my-points-card[data-v-9c8f2f72] {\n    display: flex; align-items: center; gap: 12px;\n    padding: 20px 20px;\n    border-bottom: 1px solid rgba(255,255,255,0.08);\n    background: rgba(0,0,0,0.15);\n}\n.mp-avatar[data-v-9c8f2f72] {\n    width: 52px; height: 52px; border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover; border: 2px solid rgba(255,255,255,0.2);\n    flex-shrink: 0;\n}\n.mp-label[data-v-9c8f2f72] { color: #fff; font-family: 'Roboto', sans-serif; font-weight: 800; font-size: 1rem;\n}\n.mp-name[data-v-9c8f2f72] { color: rgba(255,255,255,0.5); font-size: 0.72rem; margin-top: 2px;\n}\n.mp-badge[data-v-9c8f2f72] {\n    margin-left: auto; background: #FFA500;\n    color: #fff; font-weight: 700; font-size: 1rem;\n    padding: 6px 16px; border-radius: 20px;\n    font-family: 'Rajdhani', sans-serif; flex-shrink: 0;\n}\n\n/* Match tabs */\n.match-tabs[data-v-9c8f2f72] {\n    display: flex; flex-wrap: wrap; gap: 6px;\n    padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,0.06);\n    background: rgba(0,0,0,0.1);\n}\n.match-tab[data-v-9c8f2f72] {\n    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 20px; color: rgba(255,255,255,0.6);\n    font-size: 0.68rem; font-weight: 600; padding: 4px 10px;\n    cursor: pointer; transition: all 0.15s; white-space: nowrap;\n}\n.match-tab[data-v-9c8f2f72]:hover { border-color: rgba(255,165,0,0.4); color: #FFA500;\n}\n.match-tab.active[data-v-9c8f2f72] { background: rgba(255,165,0,0.15); border-color: #FFA500; color: #FFA500;\n}\n\n/* Top 10 */\n.top10-card[data-v-9c8f2f72] { flex: 1; display: flex; flex-direction: column; overflow: hidden;\n}\n.top10-header[data-v-9c8f2f72] {\n    display: flex; align-items: center; gap: 10px;\n    padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.08);\n    background: rgba(0,0,0,0.15);\n    flex-shrink: 0;\n}\n.top10-title[data-v-9c8f2f72] { color: #fff; font-family: 'Roboto', sans-serif; font-weight: 800; font-size: 0.95rem;\n}\n.top10-sub[data-v-9c8f2f72] { color: rgba(255,255,255,0.4); font-size: 0.65rem; margin-top: 2px;\n}\n.top10-list[data-v-9c8f2f72] { flex: 1; overflow-y: auto; scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.4) transparent;\n}\n.top10-list[data-v-9c8f2f72]::-webkit-scrollbar { width: 4px;\n}\n.top10-list[data-v-9c8f2f72]::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.4); border-radius: 4px;\n}\n.top10-item[data-v-9c8f2f72] {\n    display: flex; align-items: center; gap: 10px;\n    padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.05);\n    transition: background 0.15s;\n}\n.top10-item[data-v-9c8f2f72]:hover { background: rgba(255,255,255,0.03);\n}\n.rank-num[data-v-9c8f2f72] { color: rgba(255,255,255,0.45); font-size: 0.8rem; font-weight: 700; width: 18px; text-align: center; flex-shrink: 0;\n}\n.w-avatar[data-v-9c8f2f72] { width: 38px; height: 38px; border-radius: 50%; -o-object-fit: cover; object-fit: cover; flex-shrink: 0;\n}\n.w-info[data-v-9c8f2f72] { flex: 1; min-width: 0;\n}\n.w-name[data-v-9c8f2f72] { color: #fff; font-size: 0.78rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.w-code[data-v-9c8f2f72] { color: rgba(255,255,255,0.4); font-size: 0.62rem; margin-top: 2px;\n}\n.w-pts-wrap[data-v-9c8f2f72] { display: flex; flex-direction: column; align-items: center; flex-shrink: 0;\n}\n.w-points[data-v-9c8f2f72] {\n    background: #FFA500; color: #fff;\n    font-weight: 700; font-size: 0.85rem;\n    padding: 3px 12px; border-radius: 12px;\n    font-family: 'Rajdhani', sans-serif;\n}\n.w-pts-label[data-v-9c8f2f72] { color: rgba(255,255,255,0.4); font-size: 0.58rem; margin-top: 2px;\n}\n\n/* ── Responsive / PWA ───────────────────────── */\n@media (max-width: 1024px) {\n.ls-card[data-v-9c8f2f72] { flex-direction: column;\n}\n.ls-sidebar[data-v-9c8f2f72] { width: 100%; border-left: none; border-top: 1px solid rgba(255,255,255,0.08);\n}\n.top10-list[data-v-9c8f2f72] { max-height: 360px;\n}\n}\n@media (max-width: 640px) {\n.match-cards-grid[data-v-9c8f2f72] { grid-template-columns: 1fr;\n}\n.score-circle[data-v-9c8f2f72] { width: 36px; height: 36px; font-size: 1.1rem;\n}\n.team-flag-img[data-v-9c8f2f72] { width: 42px; height: 28px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_style_index_0_id_9c8f2f72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_style_index_0_id_9c8f2f72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_style_index_0_id_9c8f2f72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/live-score/LiveScore.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/live-score/LiveScore.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LiveScore_vue_vue_type_template_id_9c8f2f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true& */ "./resources/js/views/live-score/LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true&");
/* harmony import */ var _LiveScore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveScore.vue?vue&type=script&lang=js& */ "./resources/js/views/live-score/LiveScore.vue?vue&type=script&lang=js&");
/* harmony import */ var _LiveScore_vue_vue_type_style_index_0_id_9c8f2f72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css& */ "./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LiveScore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiveScore_vue_vue_type_template_id_9c8f2f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LiveScore_vue_vue_type_template_id_9c8f2f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9c8f2f72",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/live-score/LiveScore.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/live-score/LiveScore.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/live-score/LiveScore.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveScore.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_style_index_0_id_9c8f2f72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=style&index=0&id=9c8f2f72&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/live-score/LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/live-score/LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_template_id_9c8f2f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_template_id_9c8f2f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveScore_vue_vue_type_template_id_9c8f2f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/live-score/LiveScore.vue?vue&type=template&id=9c8f2f72&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "live-score-page" }, [
    _c("div", { staticClass: "ls-card" }, [
      _c("div", { staticClass: "ls-matches-section" }, [
        _c("div", { staticClass: "section-header" }, [
          _c("div", { staticClass: "sh-ball-wrap" }, [
            _c("img", {
              staticClass: "sh-ball-img",
              attrs: {
                src: _vm.$imgBase + "/images/ball-icon.png",
                onerror: "this.style.display='none'",
              },
            }),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "sh-trophy-area" }, [
            _c("img", {
              staticClass: "sh-trophy-img",
              attrs: {
                src: _vm.$imgBase + "/images/livescoretropy.png",
                onerror: "this.style.display='none'",
              },
            }),
          ]),
        ]),
        _vm._v(" "),
        _vm.loading
          ? _c("div", { staticClass: "state-msg" }, [
              _vm._v("Loading matches..."),
            ])
          : _vm.displayMatches.length === 0
          ? _c("div", { staticClass: "state-msg" }, [
              _vm._v("No matches right now."),
            ])
          : _c(
              "div",
              { staticClass: "mc-carousel-wrap" },
              [
                _c(
                  "transition",
                  { attrs: { name: _vm.slideDir, mode: "out-in" } },
                  [
                    _c(
                      "div",
                      {
                        key: _vm.carouselPage,
                        staticClass: "match-cards-grid",
                      },
                      _vm._l(_vm.pagedMatches, function (match) {
                        return _c(
                          "div",
                          { key: match.id, staticClass: "match-card" },
                          [
                            _c("div", { staticClass: "mc-date-bold" }, [
                              _vm._v(
                                _vm._s(_vm.formatMatchDate(match.match_date))
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mc-header" }, [
                              _c("span", { staticClass: "group-badge" }, [
                                _vm._v(
                                  _vm._s(match.group_name) +
                                    ", ROUND " +
                                    _vm._s(match.round_number)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "mc-venue" }, [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "10",
                                      height: "10",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                    },
                                  },
                                  [
                                    _c("circle", {
                                      attrs: { cx: "12", cy: "10", r: "3" },
                                    }),
                                    _c("path", {
                                      attrs: {
                                        d: "M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z",
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(match.venue || "TBD") +
                                    "\n                                "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mc-body" }, [
                              _c("div", { staticClass: "team-col" }, [
                                _c("img", {
                                  staticClass: "team-flag-img",
                                  attrs: {
                                    src: _vm.teamFlagUrl(match.team1),
                                    onerror:
                                      "this.src=window.__IMG__ + '/images/default-avatar.png'",
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "team-name" }, [
                                  _vm._v(
                                    _vm._s(
                                      (match.team1 && match.team1.name) || "TBD"
                                    )
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "score-col" }, [
                                _c("div", { staticClass: "score-row" }, [
                                  _c("div", { staticClass: "score-circle" }, [
                                    _vm._v(
                                      _vm._s(
                                        match.team1_score != null
                                          ? match.team1_score
                                          : "—"
                                      )
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "score-dash" }, [
                                    _vm._v("—"),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "score-circle" }, [
                                    _vm._v(
                                      _vm._s(
                                        match.team2_score != null
                                          ? match.team2_score
                                          : "—"
                                      )
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mc-time" }, [
                                  _vm._v(_vm._s(match.match_time || "")),
                                ]),
                                _vm._v(" "),
                                match.status === "live"
                                  ? _c("span", { staticClass: "live-badge" }, [
                                      _vm._v("LIVE"),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                match.status === "completed"
                                  ? _c("span", { staticClass: "ft-badge" }, [
                                      _vm._v("FT"),
                                    ])
                                  : _vm._e(),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "team-col right" }, [
                                _c("img", {
                                  staticClass: "team-flag-img",
                                  attrs: {
                                    src: _vm.teamFlagUrl(match.team2),
                                    onerror:
                                      "this.src=window.__IMG__ + '/images/default-avatar.png'",
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "team-name" }, [
                                  _vm._v(
                                    _vm._s(
                                      (match.team2 && match.team2.name) || "TBD"
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            match.status !== "upcoming"
                              ? _c("div", { staticClass: "mc-halves" }, [
                                  _c("div", { staticClass: "half-row" }, [
                                    _c("span", [_vm._v("1ST HALF")]),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          match.team1_half1 != null
                                            ? match.team1_half1
                                            : 0
                                        ) +
                                          " - " +
                                          _vm._s(
                                            match.team2_half1 != null
                                              ? match.team2_half1
                                              : 0
                                          )
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "half-row alt" }, [
                                    _c("span", [_vm._v("2ND HALF")]),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          match.team1_half2 != null
                                            ? match.team1_half2
                                            : 0
                                        ) +
                                          " - " +
                                          _vm._s(
                                            match.team2_half2 != null
                                              ? match.team2_half2
                                              : 0
                                          )
                                      ),
                                    ]),
                                  ]),
                                ])
                              : _vm._e(),
                          ]
                        )
                      }),
                      0
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm.totalPages > 1
                  ? _c("div", { staticClass: "mc-controls" }, [
                      _c(
                        "button",
                        {
                          staticClass: "mc-arrow",
                          on: { click: _vm.prevPage },
                        },
                        [_vm._v("‹")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mc-dots" },
                        _vm._l(_vm.totalPages, function (p) {
                          return _c("span", {
                            key: p,
                            staticClass: "mc-dot",
                            class: { active: p - 1 === _vm.carouselPage },
                            on: {
                              click: function ($event) {
                                return _vm.goPage(p - 1)
                              },
                            },
                          })
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "mc-arrow",
                          on: { click: _vm.nextPage },
                        },
                        [_vm._v("›")]
                      ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ad-carousel" },
          [
            _c("transition", { attrs: { name: "ad-fade", mode: "out-in" } }, [
              _c("img", {
                key: _vm.adIndex,
                staticClass: "ad-carousel-img",
                attrs: {
                  src:
                    _vm.$imgBase +
                    "/images/branding_images/" +
                    encodeURIComponent(_vm.adImages[_vm.adIndex]),
                  alt: "Advertisement",
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ad-carousel-dots" },
              _vm._l(_vm.adImages, function (img, i) {
                return _c("span", {
                  key: i,
                  staticClass: "ad-dot",
                  class: { active: i === _vm.adIndex },
                  on: {
                    click: function ($event) {
                      return _vm.goAdSlide(i)
                    },
                  },
                })
              }),
              0
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ls-sidebar" }, [
        _c("div", { staticClass: "my-points-card" }, [
          _c("img", {
            staticClass: "mp-avatar",
            attrs: {
              src:
                _vm.currentUser.profile_picture_url ||
                _vm.$imgBase + "/images/default-avatar.png",
              onerror: "this.src=window.__IMG__ + '/images/default-avatar.png'",
            },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "mp-info" }, [
            _c("div", { staticClass: "mp-label" }, [_vm._v("My Points")]),
            _vm._v(" "),
            _c("div", { staticClass: "mp-name" }, [
              _vm._v(_vm._s(_vm.currentUser.name)),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mp-badge" }, [
            _vm._v(_vm._s(_vm.myPoints)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "top10-card" }, [
          _c("div", { staticClass: "top10-header" }, [
            _c(
              "svg",
              {
                attrs: {
                  width: "22",
                  height: "22",
                  viewBox: "0 0 24 24",
                  fill: "#FFA500",
                },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 0h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22m4-7.34V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _vm._m(1),
          ]),
          _vm._v(" "),
          _vm.recentMatches.length > 0
            ? _c(
                "div",
                { staticClass: "match-tabs" },
                _vm._l(_vm.recentMatches, function (m) {
                  return _c(
                    "button",
                    {
                      key: m.id,
                      staticClass: "match-tab",
                      class: { active: _vm.selectedMatchId === m.id },
                      on: {
                        click: function ($event) {
                          _vm.selectedMatchId = m.id
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(m.team1) +
                          " vs " +
                          _vm._s(m.team2) +
                          "\n                    "
                      ),
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "top10-list" },
            [
              _vm.recentMatches.length > 0 &&
              _vm.selectedMatchWinners.length > 0
                ? _vm._l(_vm.selectedMatchWinners, function (w) {
                    return _c("div", { key: w.id, staticClass: "top10-item" }, [
                      _c("span", { staticClass: "rank-num" }, [
                        _vm._v(_vm._s(w.rank)),
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "w-avatar",
                        attrs: {
                          src: w.profile_picture_url,
                          onerror:
                            "this.src=window.__IMG__ + '/images/default-avatar.png'",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-info" }, [
                        _c("div", { staticClass: "w-name" }, [
                          _vm._v(_vm._s(w.name)),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-code" }, [
                          _vm._v(_vm._s(w.unique_code)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-pts-wrap" }, [
                        _c("span", { staticClass: "w-points" }, [
                          _vm._v(_vm._s(w.match_points)),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "w-pts-label" }, [
                          _vm._v("Points"),
                        ]),
                      ]),
                    ])
                  })
                : _vm.recentMatches.length > 0
                ? _c("div", { staticClass: "state-msg" }, [
                    _vm._v("No predictions for this match."),
                  ])
                : _c("div", { staticClass: "state-msg" }, [
                    _vm._v("Winners appear here after a match completes."),
                  ]),
            ],
            2
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sh-text" }, [
      _c("div", { staticClass: "sh-title" }, [_vm._v("Live Score")]),
      _vm._v(" "),
      _c("div", { staticClass: "sh-sub" }, [_vm._v("FIFA World Cup 2026™")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "top10-title" }, [
        _vm._v("Daily Top 10 Winners"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "top10-sub" }, [
        _vm._v("Last 24 hours · by match"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);