"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_facts_FifaFacts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FifaFacts',
  data: function data() {
    return {
      players: [],
      news: [],
      quickFacts: [{
        icon: '🗓️',
        label: 'Tournament Dates',
        value: 'Jun 11 – Jul 19, 2026'
      }, {
        icon: '🏟️',
        label: 'Host Countries',
        value: 'USA, Canada, Mexico'
      }, {
        icon: '⚽',
        label: 'Participating Teams',
        value: '48 (expanded from 32)'
      }, {
        icon: '🎯',
        label: 'Total Matches',
        value: '104 matches'
      }, {
        icon: '🥇',
        label: 'Defending Champion',
        value: 'Argentina (2022)'
      }, {
        icon: '📍',
        label: 'Final Venue',
        value: 'MetLife Stadium, NJ'
      }, {
        icon: '🌍',
        label: 'Total Groups',
        value: '12 groups of 4'
      }, {
        icon: '💰',
        label: 'Prize Fund',
        value: '$1 Billion (projected)'
      }],
      records: [{
        emoji: '⚽',
        title: 'Most Goals (Player)',
        value: 'Miroslav Klose',
        note: '16 goals across 4 World Cups'
      }, {
        emoji: '🏅',
        title: 'Most Titles',
        value: 'Brazil',
        note: '5-time World Cup champions'
      }, {
        emoji: '🏆',
        title: 'Last Champion',
        value: 'Argentina',
        note: 'Qatar 2022'
      }, {
        emoji: '🌟',
        title: 'Most Appearances',
        value: 'Lothar Matthäus',
        note: '25 matches in World Cups'
      }, {
        emoji: '🧤',
        title: 'Most Clean Sheets',
        value: 'Peter Shilton',
        note: 'England goalkeeper legend'
      }, {
        emoji: '📅',
        title: 'First World Cup',
        value: 'Uruguay 1930',
        note: '13 teams, Uruguay won'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, p, n;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Promise.all([_this.$http.get('/api/facts?type=player'), _this.$http.get('/api/facts?type=news')]);
          case 3:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            p = _yield$Promise$all2[0];
            n = _yield$Promise$all2[1];
            _this.players = p.data.data;
            _this.news = n.data.data;
            _context.next = 13;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }))();
  },
  methods: {
    scrollCarousel: function scrollCarousel(ref, dir) {
      var el = this.$refs[ref + 'Carousel'];
      if (el) el.scrollBy({
        left: dir * 300,
        behavior: 'smooth'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.facts-page[data-v-56429392] { display: flex; flex-direction: column; gap: 20px;\n}\n\n/* Hero */\n.fifa-hero[data-v-56429392] {\n    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);\n    border-radius: 14px; padding: 24px; display: flex;\n    align-items: center; justify-content: space-between;\n    border: 1px solid rgba(255,165,0,0.3);\n    overflow: hidden;\n}\n.hero-badge[data-v-56429392] { display: inline-block; background: #FFA500; color: #06042a; padding: 2px 10px; border-radius: 20px; font-size: 0.65rem; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;\n}\n.hero-title[data-v-56429392] { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.6rem; font-weight: 900; letter-spacing: 2px; margin-bottom: 8px;\n}\n.hero-hosts[data-v-56429392] { color: rgba(255,255,255,0.7); font-size: 0.85rem; margin-bottom: 18px;\n}\n.host-flag[data-v-56429392] { font-size: 1.1rem;\n}\n.hero-stats-row[data-v-56429392] { display: flex; gap: 20px;\n}\n.hero-stat[data-v-56429392] { text-align: center;\n}\n.hs-val[data-v-56429392] { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-size: 1.3rem; font-weight: 900;\n}\n.hs-lbl[data-v-56429392] { color: rgba(255,255,255,0.5); font-size: 0.65rem; text-transform: uppercase;\n}\n.hero-logo[data-v-56429392] { height: 80px; opacity: 0.9;\n}\n\n/* Facts sections */\n.facts-section[data-v-56429392] { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 20px;\n}\n.facts-heading[data-v-56429392] { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;\n}\n\n/* FIFA Check grid */\n.check-grid[data-v-56429392] { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px;\n}\n.check-card[data-v-56429392] { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 14px 12px; text-align: center; border: 1px solid rgba(255,255,255,0.07); transition: border-color 0.2s;\n}\n.check-card[data-v-56429392]:hover { border-color: rgba(255,165,0,0.3);\n}\n.check-icon[data-v-56429392] { font-size: 1.5rem; margin-bottom: 6px;\n}\n.check-label[data-v-56429392] { color: rgba(255,255,255,0.45); font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;\n}\n.check-value[data-v-56429392] { color: #fff; font-size: 0.82rem; font-weight: 600;\n}\n\n/* Carousels */\n.carousel-wrapper[data-v-56429392] { display: flex; align-items: center; gap: 8px;\n}\n.carousel-btn[data-v-56429392] { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: #fff; font-size: 1.5rem; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; flex-shrink: 0; display: flex; align-items: center; justify-content: center;\n}\n.carousel-track[data-v-56429392] { display: flex; gap: 16px; overflow-x: auto; flex: 1; scrollbar-width: none; padding: 4px 0 8px;\n}\n.carousel-track[data-v-56429392]::-webkit-scrollbar { display: none;\n}\n.fact-card[data-v-56429392] { min-width: 220px; max-width: 220px; background: rgba(255,255,255,0.04); border-radius: 10px; overflow: hidden;\n}\n.fact-img[data-v-56429392] { width: 100%; height: 180px; -o-object-fit: cover; object-fit: cover;\n}\n.fact-name[data-v-56429392] { color: #fff; font-weight: 700; font-size: 0.9rem; padding: 10px 12px 4px;\n}\n.fact-desc[data-v-56429392] { color: rgba(255,255,255,0.5); font-size: 0.75rem; padding: 0 12px 12px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;\n}\n\n/* Records */\n.records-grid[data-v-56429392] { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;\n}\n.record-card[data-v-56429392] { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 16px;\n}\n.record-emoji[data-v-56429392] { font-size: 1.6rem; margin-bottom: 8px;\n}\n.record-title[data-v-56429392] { color: rgba(255,255,255,0.5); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;\n}\n.record-value[data-v-56429392] { color: #FFA500; font-weight: 700; font-size: 0.95rem; margin-bottom: 3px;\n}\n.record-note[data-v-56429392] { color: rgba(255,255,255,0.45); font-size: 0.75rem;\n}\n@media (max-width: 600px) {\n.fifa-hero[data-v-56429392] { flex-direction: column; gap: 16px;\n}\n.hero-right[data-v-56429392] { display: none;\n}\n.hero-stats-row[data-v-56429392] { gap: 12px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_style_index_0_id_56429392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_style_index_0_id_56429392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_style_index_0_id_56429392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/facts/FifaFacts.vue":
/*!************************************************!*\
  !*** ./resources/js/views/facts/FifaFacts.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FifaFacts_vue_vue_type_template_id_56429392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FifaFacts.vue?vue&type=template&id=56429392&scoped=true& */ "./resources/js/views/facts/FifaFacts.vue?vue&type=template&id=56429392&scoped=true&");
/* harmony import */ var _FifaFacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FifaFacts.vue?vue&type=script&lang=js& */ "./resources/js/views/facts/FifaFacts.vue?vue&type=script&lang=js&");
/* harmony import */ var _FifaFacts_vue_vue_type_style_index_0_id_56429392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css& */ "./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FifaFacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FifaFacts_vue_vue_type_template_id_56429392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FifaFacts_vue_vue_type_template_id_56429392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56429392",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/facts/FifaFacts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/facts/FifaFacts.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/facts/FifaFacts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FifaFacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_style_index_0_id_56429392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=style&index=0&id=56429392&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/facts/FifaFacts.vue?vue&type=template&id=56429392&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/facts/FifaFacts.vue?vue&type=template&id=56429392&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_template_id_56429392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_template_id_56429392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FifaFacts_vue_vue_type_template_id_56429392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FifaFacts.vue?vue&type=template&id=56429392&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=template&id=56429392&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=template&id=56429392&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/facts/FifaFacts.vue?vue&type=template&id=56429392&scoped=true& ***!
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
  return _c("div", { staticClass: "facts-page" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "facts-section" }, [
      _c("h2", { staticClass: "facts-heading" }, [_vm._v("⚽ FIFA Check")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "check-grid" },
        _vm._l(_vm.quickFacts, function (f) {
          return _c("div", { key: f.label, staticClass: "check-card" }, [
            _c("div", { staticClass: "check-icon" }, [_vm._v(_vm._s(f.icon))]),
            _vm._v(" "),
            _c("div", { staticClass: "check-label" }, [
              _vm._v(_vm._s(f.label)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "check-value" }, [
              _vm._v(_vm._s(f.value)),
            ]),
          ])
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _vm.players.length > 0
      ? _c("div", { staticClass: "facts-section" }, [
          _c("h2", { staticClass: "facts-heading" }, [
            _vm._v("🌟 The Best FIFA Men's Player"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-wrapper" }, [
            _c(
              "button",
              {
                staticClass: "carousel-btn",
                on: {
                  click: function ($event) {
                    return _vm.scrollCarousel("players", -1)
                  },
                },
              },
              [_vm._v("‹")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { ref: "playersCarousel", staticClass: "carousel-track" },
              _vm._l(_vm.players, function (p) {
                return _c(
                  "div",
                  { key: p.id, staticClass: "fact-card player-card" },
                  [
                    _c("img", {
                      staticClass: "fact-img",
                      attrs: {
                        src:
                          p.image_url ||
                          "/fifa2026/public/images/default-player.png",
                        onerror:
                          "this.src='/fifa2026/public/images/default-player.png'",
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "fact-name" }, [
                      _vm._v(_vm._s(p.title)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "fact-desc" }, [
                      _vm._v(_vm._s(p.description)),
                    ]),
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "carousel-btn",
                on: {
                  click: function ($event) {
                    return _vm.scrollCarousel("players", 1)
                  },
                },
              },
              [_vm._v("›")]
            ),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.news.length > 0
      ? _c("div", { staticClass: "facts-section" }, [
          _c("h2", { staticClass: "facts-heading" }, [
            _vm._v("📰 Latest News"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-wrapper" }, [
            _c(
              "button",
              {
                staticClass: "carousel-btn",
                on: {
                  click: function ($event) {
                    return _vm.scrollCarousel("news", -1)
                  },
                },
              },
              [_vm._v("‹")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { ref: "newsCarousel", staticClass: "carousel-track" },
              _vm._l(_vm.news, function (n) {
                return _c(
                  "div",
                  { key: n.id, staticClass: "fact-card news-card" },
                  [
                    _c("img", {
                      staticClass: "fact-img",
                      attrs: {
                        src:
                          n.image_url ||
                          "/fifa2026/public/images/default-news.png",
                        onerror:
                          "this.src='/fifa2026/public/images/default-news.png'",
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "fact-name" }, [
                      _vm._v(_vm._s(n.title)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "fact-desc" }, [
                      _vm._v(_vm._s(n.description)),
                    ]),
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "carousel-btn",
                on: {
                  click: function ($event) {
                    return _vm.scrollCarousel("news", 1)
                  },
                },
              },
              [_vm._v("›")]
            ),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "facts-section" }, [
      _c("h2", { staticClass: "facts-heading" }, [
        _vm._v("🏆 Historical Records"),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "records-grid" },
        _vm._l(_vm.records, function (r) {
          return _c("div", { key: r.title, staticClass: "record-card" }, [
            _c("div", { staticClass: "record-emoji" }, [
              _vm._v(_vm._s(r.emoji)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "record-title" }, [
              _vm._v(_vm._s(r.title)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "record-value" }, [
              _vm._v(_vm._s(r.value)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "record-note" }, [_vm._v(_vm._s(r.note))]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fifa-hero" }, [
      _c("div", { staticClass: "hero-left" }, [
        _c("div", { staticClass: "hero-badge" }, [_vm._v("Official")]),
        _vm._v(" "),
        _c("div", { staticClass: "hero-title" }, [
          _vm._v("FIFA WORLD CUP 2026™"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hero-hosts" }, [
          _c("span", { staticClass: "host-flag" }, [_vm._v("🇺🇸")]),
          _vm._v(" USA  · \n                "),
          _c("span", { staticClass: "host-flag" }, [_vm._v("🇨🇦")]),
          _vm._v(" Canada  · \n                "),
          _c("span", { staticClass: "host-flag" }, [_vm._v("🇲🇽")]),
          _vm._v(" Mexico\n            "),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hero-stats-row" }, [
          _c("div", { staticClass: "hero-stat" }, [
            _c("div", { staticClass: "hs-val" }, [_vm._v("48")]),
            _c("div", { staticClass: "hs-lbl" }, [_vm._v("Teams")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "hero-stat" }, [
            _c("div", { staticClass: "hs-val" }, [_vm._v("104")]),
            _c("div", { staticClass: "hs-lbl" }, [_vm._v("Matches")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "hero-stat" }, [
            _c("div", { staticClass: "hs-val" }, [_vm._v("16")]),
            _c("div", { staticClass: "hs-lbl" }, [_vm._v("Venues")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "hero-stat" }, [
            _c("div", { staticClass: "hs-val" }, [_vm._v("Jun–Jul")]),
            _c("div", { staticClass: "hs-lbl" }, [_vm._v("2026")]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "hero-right" }, [
        _c("img", {
          staticClass: "hero-logo",
          attrs: {
            src: "/fifa2026/public/images/fifa-logo.png",
            alt: "FIFA 2026",
            onerror: "this.style.display='none'",
          },
        }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);