"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_winners_Winners_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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

var POLL_INTERVAL = 60000;
var AUTO_SLIDE_MS = 3500;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Winners',
  data: function data() {
    return {
      carousel: [],
      byMatch: [],
      search: '',
      loading: true,
      refreshing: false,
      activeIdx: 0,
      slideDir: 'slide-left',
      panelTab: 'rank',
      selectedMatchIdx: 0,
      _pollTimer: null,
      _slideTimer: null
    };
  },
  computed: {
    filteredCarousel: function filteredCarousel() {
      var s = this.search.toLowerCase().trim();
      if (!s) return this.carousel;
      return this.carousel.filter(function (w) {
        return (w.name || '').toLowerCase().includes(s) || (w.unique_code || '').toLowerCase().includes(s);
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.loadData();
          case 2:
            _this.loading = false;
            _this.startAutoSlide();
            _this._pollTimer = setInterval(_this.loadData, POLL_INTERVAL);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this._pollTimer);
    clearInterval(this._slideTimer);
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this2$$http$g, data, sorted;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.$http.get('/api/winners/raffle');
            case 3:
              _yield$_this2$$http$g = _context2.sent;
              data = _yield$_this2$$http$g.data;
              sorted = (data.data.carousel || []).sort(function (a, b) {
                return (b.prize_points || 0) - (a.prize_points || 0);
              });
              sorted.forEach(function (item, i) {
                item._rank = i + 1;
              });
              _this2.carousel = sorted;
              _this2.byMatch = data.data.by_match || [];
              _this2.selectedMatchIdx = 0;
              if (_this2.activeIdx >= _this2.carousel.length) _this2.activeIdx = 0;
              _context2.next = 15;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 13]]);
      }))();
    },
    manualRefresh: function manualRefresh() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.refreshing = true;
              _context3.prev = 1;
              _context3.next = 4;
              return _this3.loadData();
            case 4:
              _context3.prev = 4;
              _this3.refreshing = false;
              return _context3.finish(4);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1,, 4, 7]]);
      }))();
    },
    startAutoSlide: function startAutoSlide() {
      if (this._slideTimer) clearInterval(this._slideTimer);
      this._slideTimer = setInterval(this.nextSlide, AUTO_SLIDE_MS);
    },
    nextSlide: function nextSlide() {
      if (this.carousel.length < 2) return;
      this.slideDir = 'slide-left';
      this.activeIdx = (this.activeIdx + 1) % this.carousel.length;
    },
    prevSlide: function prevSlide() {
      if (this.carousel.length < 2) return;
      this.slideDir = 'slide-right';
      this.activeIdx = (this.activeIdx - 1 + this.carousel.length) % this.carousel.length;
      this.startAutoSlide();
    },
    goToSlide: function goToSlide(i) {
      this.slideDir = i > this.activeIdx ? 'slide-left' : 'slide-right';
      this.activeIdx = i;
      this.startAutoSlide();
    },
    jumpToWinner: function jumpToWinner(w) {
      var idx = this.carousel.findIndex(function (c) {
        return c.id === w.id;
      });
      if (idx !== -1) this.goToSlide(idx);
    },
    jumpToWinnerById: function jumpToWinnerById(id) {
      var idx = this.carousel.findIndex(function (c) {
        return c.id === id;
      });
      if (idx !== -1) {
        this.goToSlide(idx);
        this.panelTab = 'rank';
      }
    },
    rankClass: function rankClass(idx) {
      if (idx === 0) return 'rank-gold';
      if (idx === 1) return 'rank-silver';
      if (idx === 2) return 'rank-bronze';
      return 'rank-normal';
    },
    rankIcon: function rankIcon(idx) {
      return idx === 0 ? '👑' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : '#';
    },
    rankSuffix: function rankSuffix(idx) {
      var n = idx + 1;
      if (n === 1) return 'st';
      if (n === 2) return 'nd';
      if (n === 3) return 'rd';
      return 'th';
    },
    hideImg: function hideImg(e) {
      e.target.style.display = 'none';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.winners-page[data-v-73408fca] { display: flex; flex-direction: column; gap: 16px;\n}\n\n/* ── Header ── */\n.section-header[data-v-73408fca] {\n    display: flex; align-items: center; gap: 14px;\n    padding: 0 16px;\n    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);\n    border-radius: 12px; height: 70px; overflow: hidden;\n}\n.sh-ball-circle[data-v-73408fca] {\n    width: 46px; height: 46px; border-radius: 50%;\n    background: #1A0040; border: 2px solid rgba(255,255,255,0.15);\n    display: flex; align-items: center; justify-content: center; flex-shrink: 0;\n}\n.sh-ball-img[data-v-73408fca] { width: 28px; height: 28px; -o-object-fit: contain; object-fit: contain;\n}\n.sh-text[data-v-73408fca] { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px;\n}\n.section-title[data-v-73408fca] { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 800; font-size: 1.2rem; white-space: nowrap;\n}\n.section-sub[data-v-73408fca] { color: #fff; font-size: 0.72rem; white-space: nowrap;\n}\n.sh-trophy-area[data-v-73408fca] { display: flex; align-items: center;\n}\n.sh-trophy-img[data-v-73408fca] { height: 50px; -o-object-fit: contain; object-fit: contain;\n}\n.auto-refresh-badge[data-v-73408fca] {\n    display: flex; align-items: center; gap: 5px;\n    background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25);\n    border-radius: 20px; padding: 3px 10px;\n    font-size: 0.7rem; color: #4ade80; font-weight: 600;\n}\n.refresh-dot[data-v-73408fca] { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse-dot-data-v-73408fca 1.5s infinite;\n}\n@keyframes pulse-dot-data-v-73408fca {\n0%,100%{opacity:1}\n50%{opacity:.3}\n}\n\n/* ── Body ── */\n.winners-body[data-v-73408fca] { display: flex; gap: 20px; align-items: flex-start;\n}\n.carousel-empty[data-v-73408fca] {\n    display: flex; flex-direction: column; align-items: center; justify-content: center;\n    height: 480px; background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);\n    border-radius: 12px;\n}\n.ce-icon[data-v-73408fca] { font-size: 3.5rem; margin-bottom: 12px; opacity: .5;\n}\n.ce-title[data-v-73408fca] { color: rgba(255,255,255,.5); font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700;\n}\n.ce-sub[data-v-73408fca] { color: rgba(255,255,255,.3); font-size: .78rem; margin-top: 6px;\n}\n\n/* ── Carousel ── */\n.carousel-wrap[data-v-73408fca] { flex: 3; display: flex; flex-direction: column; gap: 10px;\n}\n.carousel-loading[data-v-73408fca] { color: rgba(255,255,255,0.4); text-align: center; padding: 40px;\n}\n.carousel-stage[data-v-73408fca] { position: relative; border-radius: 12px; overflow: hidden; height: 480px;\n}\n.carousel-slide[data-v-73408fca] {\n    width: 100%; height: 100%;\n    background-color: #1A0040;\n    display: flex; flex-direction: column; align-items: center; justify-content: flex-end;\n    padding-bottom: 18px; position: relative; overflow: hidden;\n}\n.cs-bg-img[data-v-73408fca] {\n    position: absolute; inset: 0; width: 100%; height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; -o-object-position: center center; object-position: center center;\n    z-index: 0;\n}\n.cs-overlay[data-v-73408fca] {\n    position: absolute; inset: 0;\n    background: linear-gradient(to bottom, rgba(28,17,83,.15) 0%, rgba(28,17,83,.55) 55%, rgba(28,17,83,.92) 100%);\n    z-index: 1;\n}\n/* Rank badge – top left of carousel */\n.cs-rank-badge[data-v-73408fca] {\n    position: absolute; top: 14px; left: 14px; z-index: 4;\n    width: 64px; height: 64px; border-radius: 50%;\n    display: flex; flex-direction: column; align-items: center; justify-content: center;\n    box-shadow: 0 4px 18px rgba(0,0,0,.55);\n    border: 3px solid rgba(255,255,255,.25);\n    line-height: 1;\n}\n.cs-rank-badge.rank-gold[data-v-73408fca]   { background: radial-gradient(circle at 35% 35%, #FFE566, #D4A000); border-color: #FFD700;\n}\n.cs-rank-badge.rank-silver[data-v-73408fca] { background: radial-gradient(circle at 35% 35%, #E8E8E8, #8A8A8A); border-color: #C0C0C0;\n}\n.cs-rank-badge.rank-bronze[data-v-73408fca] { background: radial-gradient(circle at 35% 35%, #E8A060, #8B4513); border-color: #CD7F32;\n}\n.cs-rank-badge.rank-normal[data-v-73408fca] { background: radial-gradient(circle at 35% 35%, #6B4FA0, #2A0066); border-color: rgba(255,255,255,.2);\n}\n.cs-rank-icon[data-v-73408fca] { font-size: .9rem; line-height: 1;\n}\n.cs-rank-num[data-v-73408fca]  { color: #fff; font-weight: 900; font-size: 1.45rem; font-family: 'Rajdhani', sans-serif; line-height: 1; text-shadow: 0 2px 4px rgba(0,0,0,.4);\n}\n.cs-rank-lbl[data-v-73408fca]  { color: rgba(255,255,255,.85); font-size: .55rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em;\n}\n.cs-prize-badge[data-v-73408fca] {\n    position: absolute; top: 14px; right: 14px; z-index: 3;\n    background: #06B6D4; border-radius: 20px; padding: 6px 16px;\n    text-align: center; line-height: 1.2; display: flex; flex-direction: column; align-items: center;\n}\n.cs-prize-num[data-v-73408fca] { color: #fff; font-weight: 800; font-size: 1.15rem; font-family: 'Rajdhani', sans-serif;\n}\n.cs-prize-lbl[data-v-73408fca] { color: #FFA500; font-size: 0.6rem; font-weight: 600;\n}\n.cs-bottom[data-v-73408fca] {\n    position: relative; z-index: 3; width: 100%;\n    display: flex; align-items: center; justify-content: center; gap: 6px; padding: 0 6px;\n}\n.cs-deco[data-v-73408fca] { width: 72px; height: auto; -o-object-fit: contain; object-fit: contain; flex-shrink: 0;\n}\n.cs-info[data-v-73408fca] { flex: 1; text-align: center; min-width: 0;\n}\n.cs-winner-label[data-v-73408fca] { color: #FFA500; font-weight: 700; font-size: 1rem; margin-bottom: 3px;\n}\n.cs-name[data-v-73408fca] { color: #fff; font-weight: 700; font-size: .95rem; margin-bottom: 2px;\n}\n.cs-code[data-v-73408fca] { color: rgba(255,255,255,.7); font-size: .72rem; margin-bottom: 2px;\n}\n.cs-date[data-v-73408fca] { color: rgba(255,255,255,.45); font-size: .65rem;\n}\n.cs-arrow[data-v-73408fca] {\n    position: absolute; top: 50%; transform: translateY(-50%); z-index: 5;\n    background: rgba(0,0,0,.4); border: none; color: #fff; font-size: 2rem; cursor: pointer;\n    width: 40px; height: 60px; display: flex; align-items: center; justify-content: center;\n    transition: background .2s;\n}\n.cs-arrow[data-v-73408fca]:hover { background: rgba(255,165,0,.4);\n}\n.cs-prev[data-v-73408fca] { left: 0; border-radius: 0 8px 8px 0;\n}\n.cs-next[data-v-73408fca] { right: 0; border-radius: 8px 0 0 8px;\n}\n.cs-dots[data-v-73408fca] { display: flex; justify-content: center; gap: 7px;\n}\n.cs-dot[data-v-73408fca] { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.25); cursor: pointer; transition: background .2s;\n}\n.cs-dot.active[data-v-73408fca] { background: #FFA500;\n}\n.slide-left-enter-active[data-v-73408fca],.slide-left-leave-active[data-v-73408fca],\n.slide-right-enter-active[data-v-73408fca],.slide-right-leave-active[data-v-73408fca] { transition: all .45s ease;\n}\n.slide-left-enter[data-v-73408fca] { transform: translateX(100%); opacity: 0;\n}\n.slide-left-leave-to[data-v-73408fca] { transform: translateX(-100%); opacity: 0;\n}\n.slide-right-enter[data-v-73408fca] { transform: translateX(-100%); opacity: 0;\n}\n.slide-right-leave-to[data-v-73408fca] { transform: translateX(100%); opacity: 0;\n}\n\n/* ── Right panel ── */\n.cards-panel[data-v-73408fca] {\n    flex: 2; background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);\n    border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 12px;\n}\n\n/* Search bar */\n.search-bar[data-v-73408fca] {\n    display: flex; align-items: center; gap: 8px;\n    background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);\n    border-radius: 8px; padding: 10px 12px;\n}\n.search-icon[data-v-73408fca] { flex-shrink: 0; display: block;\n}\n.search-input[data-v-73408fca] { flex: 1; background: none; border: none; color: #fff; font-size: .85rem; outline: none; min-width: 0;\n}\n.search-input[data-v-73408fca]::-moz-placeholder { color: rgba(255,255,255,.4);\n}\n.search-input[data-v-73408fca]::placeholder { color: rgba(255,255,255,.4);\n}\n.refresh-btn[data-v-73408fca] {\n    flex-shrink: 0; background: none; border: none; color: rgba(255,255,255,.5);\n    cursor: pointer; padding: 2px; display: flex; align-items: center;\n}\n.refresh-btn:hover svg[data-v-73408fca] { stroke: #FFA500;\n}\n.refresh-btn.spinning svg[data-v-73408fca] { animation: spin-data-v-73408fca .8s linear infinite;\n}\n@keyframes spin-data-v-73408fca {\nto { transform: rotate(360deg);\n}\n}\n\n/* Winners list */\n.winners-list[data-v-73408fca] { display: flex; flex-direction: column; overflow-y: auto; max-height: 420px;\n}\n.wl-item[data-v-73408fca] {\n    display: flex; align-items: center; gap: 10px;\n    padding: 10px 12px; border-bottom: 1px solid rgba(255,255,255,.04);\n    cursor: pointer; transition: background .15s;\n    border-left: 3px solid transparent;\n}\n.wl-item[data-v-73408fca]:hover { background: rgba(255,255,255,.04);\n}\n.wl-item.highlighted[data-v-73408fca] { background: rgba(255,165,0,.07); border-left-color: #FFA500;\n}\n.wl-rank[data-v-73408fca] {\n    font-size: .72rem; font-weight: 800; width: 22px; height: 22px;\n    border-radius: 50%; display: flex; align-items: center; justify-content: center;\n    flex-shrink: 0; color: rgba(255,255,255,.4); background: rgba(255,255,255,.07);\n}\n.wl-rank.rank-gold[data-v-73408fca]   { background: #D4A000; color: #fff;\n}\n.wl-rank.rank-silver[data-v-73408fca] { background: #8A8A8A; color: #fff;\n}\n.wl-rank.rank-bronze[data-v-73408fca] { background: #8B4513; color: #fff;\n}\n.wl-info[data-v-73408fca] { flex: 1; min-width: 0;\n}\n.wl-name[data-v-73408fca] { color: #fff; font-size: .85rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.wl-code[data-v-73408fca] { color: rgba(255,255,255,.4); font-size: .68rem; margin-bottom: 2px;\n}\n.wl-match[data-v-73408fca] { display: flex; align-items: center; gap: 4px; color: #FFA500; font-size: .68rem; font-weight: 600;\n}\n.wl-right[data-v-73408fca] { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; flex-shrink: 0;\n}\n.wl-pts[data-v-73408fca] { background: rgba(34,197,94,.15); color: #4ade80; border-radius: 8px; padding: 2px 8px; font-size: .7rem; font-weight: 700; white-space: nowrap;\n}\n.wl-date[data-v-73408fca] { color: rgba(255,255,255,.3); font-size: .62rem; white-space: nowrap;\n}\n\n/* Carousel match pill */\n.cs-match-pill[data-v-73408fca] {\n    display: inline-flex; align-items: center; gap: 4px;\n    background: rgba(255,165,0,.15); color: #FFA500;\n    border: 1px solid rgba(255,165,0,.3); border-radius: 20px;\n    padding: 3px 10px; font-size: .7rem; font-weight: 600; margin: 4px 0;\n}\n\n/* ── Panel tabs (block toggle) ── */\n.panel-tabs[data-v-73408fca] {\n    display: flex; gap: 6px;\n    background: rgba(0,0,0,.2); border-radius: 8px; padding: 4px;\n}\n.ptab[data-v-73408fca] {\n    flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px;\n    background: none; border: none; color: rgba(255,255,255,.45);\n    font-size: .75rem; font-weight: 600; padding: 7px 0; border-radius: 6px;\n    cursor: pointer; transition: background .18s, color .18s;\n}\n.ptab[data-v-73408fca]:hover { color: rgba(255,255,255,.75); background: rgba(255,255,255,.05);\n}\n.ptab.active[data-v-73408fca] { background: rgba(255,165,0,.18); color: #FFA500;\n}\n.ptab svg[data-v-73408fca] { flex-shrink: 0; stroke: currentColor;\n}\n\n/* ── By-match: pill tabs (same style as LiveScore match-tabs) ── */\n.match-tabs[data-v-73408fca] {\n    display: flex; flex-wrap: wrap; gap: 6px;\n    padding: 2px 0 4px; border-bottom: 1px solid rgba(255,255,255,.06);\n    padding-bottom: 10px;\n}\n.match-tab[data-v-73408fca] {\n    background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);\n    border-radius: 20px; color: rgba(255,255,255,.6);\n    font-size: .68rem; font-weight: 600; padding: 4px 12px;\n    cursor: pointer; transition: all .15s; white-space: nowrap;\n}\n.match-tab[data-v-73408fca]:hover { border-color: rgba(255,165,0,.4); color: #FFA500;\n}\n.match-tab.active[data-v-73408fca] { background: rgba(255,165,0,.15); border-color: #FFA500; color: #FFA500;\n}\n\n/* Selected match info bar */\n.ml-info-bar[data-v-73408fca] {\n    display: flex; align-items: center; gap: 7px;\n    padding: 7px 10px; border-radius: 7px;\n    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.07);\n}\n.ml-ball[data-v-73408fca] { font-size: .82rem; flex-shrink: 0;\n}\n.ml-bar-label[data-v-73408fca] { color: #fff; font-size: .8rem; font-weight: 700; flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.ml-bar-date[data-v-73408fca] { color: rgba(255,255,255,.35); font-size: .65rem; white-space: nowrap;\n}\n.ml-count[data-v-73408fca] { background: rgba(255,165,0,.15); color: #FFA500; border-radius: 20px; padding: 2px 8px; font-size: .65rem; font-weight: 700; white-space: nowrap; flex-shrink: 0;\n}\n\n/* Winner rows inside By Match */\n.mlw-item[data-v-73408fca] {\n    display: flex; align-items: center; gap: 8px;\n    padding: 9px 12px; border-bottom: 1px solid rgba(255,255,255,.04);\n    cursor: pointer; transition: background .15s;\n}\n.mlw-item[data-v-73408fca]:hover { background: rgba(255,255,255,.04);\n}\n.mlw-num[data-v-73408fca] { color: rgba(255,255,255,.3); font-size: .68rem; font-weight: 700; width: 16px; text-align: center; flex-shrink: 0;\n}\n.mlw-avatar[data-v-73408fca] { width: 30px; height: 30px; border-radius: 50%; -o-object-fit: cover; object-fit: cover; flex-shrink: 0; border: 1px solid rgba(255,255,255,.15);\n}\n.mlw-info[data-v-73408fca] { flex: 1; min-width: 0;\n}\n.mlw-name[data-v-73408fca] { color: #fff; font-size: .8rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.mlw-code[data-v-73408fca] { color: rgba(255,255,255,.35); font-size: .65rem;\n}\n.mlw-right[data-v-73408fca] { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; flex-shrink: 0;\n}\n.mlw-pts[data-v-73408fca] { background: rgba(34,197,94,.15); color: #4ade80; border-radius: 8px; padding: 2px 7px; font-size: .68rem; font-weight: 700; white-space: nowrap;\n}\n.mlw-date[data-v-73408fca] { color: rgba(255,255,255,.3); font-size: .6rem; white-space: nowrap;\n}\n.empty-state[data-v-73408fca] { color: rgba(255,255,255,.35); text-align: center; padding: 30px; font-size: .85rem;\n}\n@media (max-width: 900px) {\n.winners-body[data-v-73408fca] { flex-direction: column;\n}\n.carousel-wrap[data-v-73408fca], .cards-panel[data-v-73408fca] { width: 100%;\n}\n.cards-grid[data-v-73408fca] { max-height: 360px;\n}\n}\n@media (max-width: 600px) {\n.sh-trophy-area[data-v-73408fca] { display: none;\n}\n.section-header[data-v-73408fca] { gap: 10px; padding: 0 12px;\n}\n.cs-deco[data-v-73408fca] { width: 48px;\n}\n.cards-grid[data-v-73408fca] { grid-template-columns: 1fr 1fr;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_style_index_0_id_73408fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_style_index_0_id_73408fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_style_index_0_id_73408fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/winners/Winners.vue":
/*!************************************************!*\
  !*** ./resources/js/views/winners/Winners.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Winners_vue_vue_type_template_id_73408fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Winners.vue?vue&type=template&id=73408fca&scoped=true& */ "./resources/js/views/winners/Winners.vue?vue&type=template&id=73408fca&scoped=true&");
/* harmony import */ var _Winners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Winners.vue?vue&type=script&lang=js& */ "./resources/js/views/winners/Winners.vue?vue&type=script&lang=js&");
/* harmony import */ var _Winners_vue_vue_type_style_index_0_id_73408fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css& */ "./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Winners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Winners_vue_vue_type_template_id_73408fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Winners_vue_vue_type_template_id_73408fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "73408fca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/winners/Winners.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/winners/Winners.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/winners/Winners.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Winners.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_style_index_0_id_73408fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=style&index=0&id=73408fca&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/winners/Winners.vue?vue&type=template&id=73408fca&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/winners/Winners.vue?vue&type=template&id=73408fca&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_template_id_73408fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_template_id_73408fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Winners_vue_vue_type_template_id_73408fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Winners.vue?vue&type=template&id=73408fca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=template&id=73408fca&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=template&id=73408fca&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/winners/Winners.vue?vue&type=template&id=73408fca&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "winners-page" }, [
    _c("div", { staticClass: "section-header" }, [
      _c("div", { staticClass: "sh-ball-circle" }, [
        _c("img", {
          staticClass: "sh-ball-img",
          attrs: { src: _vm.$imgBase + "/images/ball-icon.png" },
          on: { error: _vm.hideImg },
        }),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "sh-trophy-area" }, [
        _c("img", {
          staticClass: "sh-trophy-img",
          attrs: { src: _vm.$imgBase + "/images/livescoretropy.png" },
          on: { error: _vm.hideImg },
        }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "winners-body" }, [
      _c(
        "div",
        { staticClass: "carousel-wrap" },
        [
          _vm.loading
            ? _c("div", { staticClass: "carousel-loading" }, [
                _vm._v("Loading..."),
              ])
            : _vm.carousel.length > 0
            ? [
                _c(
                  "div",
                  { staticClass: "carousel-stage" },
                  [
                    _c(
                      "transition",
                      { attrs: { name: _vm.slideDir, mode: "out-in" } },
                      [
                        _c(
                          "div",
                          { key: _vm.activeIdx, staticClass: "carousel-slide" },
                          [
                            _c("img", {
                              staticClass: "cs-bg-img",
                              attrs: {
                                src: _vm.carousel[_vm.activeIdx]
                                  .profile_picture_url,
                              },
                              on: {
                                error: function (e) {
                                  return (e.target.src =
                                    _vm.$imgBase + "/images/default-avatar.png")
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "cs-overlay" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "cs-rank-badge",
                                class: _vm.rankClass(_vm.activeIdx),
                              },
                              [
                                _c("span", { staticClass: "cs-rank-icon" }, [
                                  _vm._v(_vm._s(_vm.rankIcon(_vm.activeIdx))),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "cs-rank-num" }, [
                                  _vm._v(_vm._s(_vm.activeIdx + 1)),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "cs-rank-lbl" }, [
                                  _vm._v(_vm._s(_vm.rankSuffix(_vm.activeIdx))),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.carousel[_vm.activeIdx].prize_points
                              ? _c("div", { staticClass: "cs-prize-badge" }, [
                                  _c("span", { staticClass: "cs-prize-num" }, [
                                    _vm._v(
                                      "+" +
                                        _vm._s(
                                          _vm.carousel[_vm.activeIdx]
                                            .prize_points
                                        )
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "cs-prize-lbl" }, [
                                    _vm._v("pts"),
                                  ]),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "cs-bottom" }, [
                              _c("img", {
                                staticClass: "cs-deco",
                                attrs: {
                                  src:
                                    _vm.$imgBase + "/images/winnerhistory.png",
                                },
                                on: { error: _vm.hideImg },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "cs-info" }, [
                                _c("div", { staticClass: "cs-winner-label" }, [
                                  _vm._v("🏆 Raffle Winner"),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "cs-name" }, [
                                  _vm._v(
                                    _vm._s(_vm.carousel[_vm.activeIdx].name)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "cs-code" }, [
                                  _vm._v(
                                    "Doctor Code: " +
                                      _vm._s(
                                        _vm.carousel[_vm.activeIdx].unique_code
                                      )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "cs-match-pill" }, [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "10",
                                        height: "10",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2.5",
                                      },
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "10" },
                                      }),
                                    ]
                                  ),
                                  _vm._v(
                                    "\n                                        Won in: " +
                                      _vm._s(
                                        _vm.carousel[_vm.activeIdx].match_label
                                      ) +
                                      "\n                                    "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "cs-date" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.carousel[_vm.activeIdx].draw_date
                                    )
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "cs-deco",
                                attrs: {
                                  src:
                                    _vm.$imgBase + "/images/winnerhistory.png",
                                },
                                on: { error: _vm.hideImg },
                              }),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.carousel.length > 1
                      ? _c(
                          "button",
                          {
                            staticClass: "cs-arrow cs-prev",
                            on: { click: _vm.prevSlide },
                          },
                          [_vm._v("‹")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.carousel.length > 1
                      ? _c(
                          "button",
                          {
                            staticClass: "cs-arrow cs-next",
                            on: { click: _vm.nextSlide },
                          },
                          [_vm._v("›")]
                        )
                      : _vm._e(),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.carousel.length > 1
                  ? _c(
                      "div",
                      { staticClass: "cs-dots" },
                      _vm._l(_vm.carousel, function (_, i) {
                        return _c("span", {
                          key: i,
                          staticClass: "cs-dot",
                          class: { active: i === _vm.activeIdx },
                          on: {
                            click: function ($event) {
                              return _vm.goToSlide(i)
                            },
                          },
                        })
                      }),
                      0
                    )
                  : _vm._e(),
              ]
            : _c("div", { staticClass: "carousel-stage carousel-empty" }, [
                _c("div", { staticClass: "ce-icon" }, [_vm._v("🏆")]),
                _vm._v(" "),
                _c("div", { staticClass: "ce-title" }, [
                  _vm._v("No Winners Yet"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ce-sub" }, [
                  _vm._v("Raffle draw winners will appear here"),
                ]),
              ]),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "cards-panel" },
        [
          _c("div", { staticClass: "panel-tabs" }, [
            _c(
              "button",
              {
                staticClass: "ptab",
                class: { active: _vm.panelTab === "rank" },
                on: {
                  click: function ($event) {
                    _vm.panelTab = "rank"
                  },
                },
              },
              [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "11",
                      height: "11",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5",
                    },
                  },
                  [
                    _c("polyline", {
                      attrs: { points: "22 12 18 12 15 21 9 3 6 12 2 12" },
                    }),
                  ]
                ),
                _vm._v("\n                    Rank List\n                "),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "ptab",
                class: { active: _vm.panelTab === "match" },
                on: {
                  click: function ($event) {
                    _vm.panelTab = "match"
                  },
                },
              },
              [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "11",
                      height: "11",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5",
                    },
                  },
                  [
                    _c("circle", { attrs: { cx: "12", cy: "12", r: "10" } }),
                    _c("polyline", { attrs: { points: "12 6 12 12 16 14" } }),
                  ]
                ),
                _vm._v("\n                    By Match\n                "),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm.panelTab === "rank"
            ? [
                _c("div", { staticClass: "search-bar" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "search-icon",
                      attrs: {
                        width: "15",
                        height: "15",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "rgba(255,255,255,0.45)",
                        "stroke-width": "2",
                      },
                    },
                    [
                      _c("circle", { attrs: { cx: "11", cy: "11", r: "8" } }),
                      _c("path", { attrs: { d: "m21 21-4.35-4.35" } }),
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search,
                        expression: "search",
                      },
                    ],
                    staticClass: "search-input",
                    attrs: { placeholder: "Search name or doctor code…" },
                    domProps: { value: _vm.search },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.search = $event.target.value
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "refresh-btn",
                      class: { spinning: _vm.refreshing },
                      attrs: { title: "Refresh" },
                      on: { click: _vm.manualRefresh },
                    },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "rgba(255,255,255,0.45)",
                            "stroke-width": "2",
                          },
                        },
                        [
                          _c("polyline", {
                            attrs: { points: "23 4 23 10 17 10" },
                          }),
                          _c("path", {
                            attrs: { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _vm.loading
                  ? _c("div", { staticClass: "empty-state" }, [
                      _vm._v("Loading…"),
                    ])
                  : _vm.filteredCarousel.length === 0
                  ? _c("div", { staticClass: "empty-state" }, [
                      _vm._v("No winners found."),
                    ])
                  : _c(
                      "div",
                      { staticClass: "winners-list" },
                      _vm._l(_vm.filteredCarousel, function (w) {
                        return _c(
                          "div",
                          {
                            key: w.id,
                            staticClass: "wl-item",
                            class: {
                              highlighted:
                                _vm.carousel[_vm.activeIdx] &&
                                _vm.carousel[_vm.activeIdx].id === w.id,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.jumpToWinner(w)
                              },
                            },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "wl-rank",
                                class: _vm.rankClass(w._rank - 1),
                              },
                              [_vm._v(_vm._s(w._rank))]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "wl-info" }, [
                              _c("div", { staticClass: "wl-name" }, [
                                _vm._v(_vm._s(w.name)),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "wl-code" }, [
                                _vm._v(_vm._s(w.unique_code)),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "wl-match" }, [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "9",
                                      height: "9",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "#FFA500",
                                      "stroke-width": "2.5",
                                    },
                                  },
                                  [
                                    _c("circle", {
                                      attrs: { cx: "12", cy: "12", r: "10" },
                                    }),
                                  ]
                                ),
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(w.match_label) +
                                    "\n                            "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "wl-right" }, [
                              w.prize_points
                                ? _c("span", { staticClass: "wl-pts" }, [
                                    _vm._v(
                                      "+" + _vm._s(w.prize_points) + " pts"
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { staticClass: "wl-date" }, [
                                _vm._v(_vm._s(w.draw_date)),
                              ]),
                            ]),
                          ]
                        )
                      }),
                      0
                    ),
              ]
            : [
                _vm.loading
                  ? _c("div", { staticClass: "empty-state" }, [
                      _vm._v("Loading…"),
                    ])
                  : _vm.byMatch.length === 0
                  ? _c("div", { staticClass: "empty-state" }, [
                      _vm._v("No match draw data yet."),
                    ])
                  : [
                      _c(
                        "div",
                        { staticClass: "match-tabs" },
                        _vm._l(_vm.byMatch, function (group, gi) {
                          return _c(
                            "button",
                            {
                              key: gi,
                              staticClass: "match-tab",
                              class: { active: _vm.selectedMatchIdx === gi },
                              on: {
                                click: function ($event) {
                                  _vm.selectedMatchIdx = gi
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(group.match_label) +
                                  "\n                        "
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _vm.byMatch[_vm.selectedMatchIdx]
                        ? _c("div", { staticClass: "ml-info-bar" }, [
                            _c("span", { staticClass: "ml-ball" }, [
                              _vm._v("⚽"),
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-bar-label" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.byMatch[_vm.selectedMatchIdx].match_label
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _vm.byMatch[_vm.selectedMatchIdx].match_date
                              ? _c("span", { staticClass: "ml-bar-date" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.byMatch[_vm.selectedMatchIdx]
                                        .match_date
                                    )
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-count" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.byMatch[_vm.selectedMatchIdx].winners
                                    .length
                                ) +
                                  " winner" +
                                  _vm._s(
                                    _vm.byMatch[_vm.selectedMatchIdx].winners
                                      .length !== 1
                                      ? "s"
                                      : ""
                                  )
                              ),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.byMatch[_vm.selectedMatchIdx] &&
                      _vm.byMatch[_vm.selectedMatchIdx].winners.length
                        ? _c(
                            "div",
                            { staticClass: "winners-list" },
                            _vm._l(
                              _vm.byMatch[_vm.selectedMatchIdx].winners,
                              function (w, wi) {
                                return _c(
                                  "div",
                                  {
                                    key: w.id,
                                    staticClass: "mlw-item",
                                    on: {
                                      click: function ($event) {
                                        return _vm.jumpToWinnerById(w.id)
                                      },
                                    },
                                  },
                                  [
                                    _c("span", { staticClass: "mlw-num" }, [
                                      _vm._v(_vm._s(wi + 1)),
                                    ]),
                                    _vm._v(" "),
                                    _c("img", {
                                      staticClass: "mlw-avatar",
                                      attrs: { src: w.profile_picture_url },
                                      on: {
                                        error: function (e) {
                                          return (e.target.src =
                                            _vm.$imgBase +
                                            "/images/default-avatar.png")
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mlw-info" }, [
                                      _c("div", { staticClass: "mlw-name" }, [
                                        _vm._v(_vm._s(w.name)),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "mlw-code" }, [
                                        _vm._v(_vm._s(w.unique_code)),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mlw-right" }, [
                                      w.prize_points
                                        ? _c(
                                            "span",
                                            { staticClass: "mlw-pts" },
                                            [
                                              _vm._v(
                                                "+" +
                                                  _vm._s(w.prize_points) +
                                                  " pts"
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "mlw-date" }, [
                                        _vm._v(_vm._s(w.draw_date)),
                                      ]),
                                    ]),
                                  ]
                                )
                              }
                            ),
                            0
                          )
                        : _c("div", { staticClass: "empty-state" }, [
                            _vm._v("No raffle winners for this match."),
                          ]),
                    ],
              ],
          _vm._v(" "),
          _c("div", { staticClass: "winner-ad-banner" }, [
            _c("img", {
              staticClass: "winner-ad-img",
              attrs: {
                src: _vm.$imgBase + "/images/winneradd.png",
                alt: "Advertisement",
              },
              on: {
                error: function (e) {
                  return (e.target.closest(".winner-ad-banner").style.display =
                    "none")
                },
              },
            }),
          ]),
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sh-text" }, [
      _c("div", { staticClass: "section-title" }, [
        _vm._v("Raffle Draw Winners"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "section-sub" }, [
        _vm._v("FIFA World Cup 2026™"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "auto-refresh-badge" }, [
      _c("span", { staticClass: "refresh-dot" }),
      _vm._v("\n            Live\n        "),
    ])
  },
]
render._withStripped = true



/***/ })

}]);