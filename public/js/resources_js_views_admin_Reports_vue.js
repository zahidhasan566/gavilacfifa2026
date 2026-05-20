"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_Reports_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AdminReports',
  data: function data() {
    return {
      activeTab: 'points',
      tabs: [{
        key: 'points',
        label: 'Points Report'
      }, {
        key: 'participation',
        label: 'Participation'
      }, {
        key: 'predictions',
        label: 'All Predictions'
      }],
      // Points
      pointsSearch: '',
      pointsReport: [],
      // Participation
      partSearch: '',
      partFilter: 'all',
      partReport: [],
      partSummary: null,
      // Predictions
      predSearch: '',
      predMatchId: '',
      predList: [],
      predPage: 1,
      predLastPage: 1,
      matches: []
    };
  },
  mounted: function mounted() {
    this.fetchPoints();
    this.fetchMatches();
  },
  methods: {
    switchTab: function switchTab(key) {
      this.activeTab = key;
      if (key === 'points' && this.pointsReport.length === 0) this.fetchPoints();
      if (key === 'participation' && this.partReport.length === 0) this.fetchParticipation();
      if (key === 'predictions' && this.predList.length === 0) this.fetchPredictions();
    },
    fetchPoints: function fetchPoints() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this$$http$ge, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$http.get('/api/admin/reports/points', {
                params: {
                  search: _this.pointsSearch
                }
              });
            case 2:
              _yield$_this$$http$ge = _context.sent;
              data = _yield$_this$$http$ge.data;
              _this.pointsReport = data.data;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    fetchParticipation: function fetchParticipation() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this2$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$http.get('/api/admin/reports/participation', {
                params: {
                  search: _this2.partSearch,
                  filter: _this2.partFilter
                }
              });
            case 2:
              _yield$_this2$$http$g = _context2.sent;
              data = _yield$_this2$$http$g.data;
              _this2.partReport = data.data;
              _this2.partSummary = data.summary;
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    fetchPredictions: function fetchPredictions() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var params, _yield$_this3$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              params = {
                search: _this3.predSearch,
                page: _this3.predPage,
                per_page: 50
              };
              if (_this3.predMatchId === 'null') params.match_id = 'null';else if (_this3.predMatchId) params.match_id = _this3.predMatchId;
              _context3.next = 4;
              return _this3.$http.get('/api/admin/reports/predictions', {
                params: params
              });
            case 4:
              _yield$_this3$$http$g = _context3.sent;
              data = _yield$_this3$$http$g.data;
              _this3.predList = data.data;
              _this3.predLastPage = data.last_page || 1;
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    fetchMatches: function fetchMatches() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this4$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.$http.get('/api/admin/matches');
            case 2:
              _yield$_this4$$http$g = _context4.sent;
              data = _yield$_this4$$http$g.data;
              _this4.matches = data.data;
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    rankClass: function rankClass(rank) {
      return {
        gold: rank === 1,
        silver: rank === 2,
        bronze: rank === 3
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-header[data-v-49f2e0f0] { margin-bottom: 16px;\n}\n.page-heading[data-v-49f2e0f0] { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700;\n}\n.tabs-row[data-v-49f2e0f0] { display: flex; gap: 6px; margin-bottom: 18px; flex-wrap: wrap;\n}\n.tab-btn[data-v-49f2e0f0] { padding: 8px 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.65); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s;\n}\n.tab-btn.active[data-v-49f2e0f0] { background: #FFA500; border-color: #FFA500; color: #fff;\n}\n.toolbar[data-v-49f2e0f0] { display: flex; gap: 10px; margin-bottom: 14px; flex-wrap: wrap;\n}\n.search-input[data-v-49f2e0f0] { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 14px; color: #fff; font-size: 0.85rem; outline: none; width: 280px;\n}\n.filter-select[data-v-49f2e0f0] { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 14px; color: #fff; font-size: 0.85rem; outline: none;\n}\n.filter-select option[data-v-49f2e0f0] { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);\n}\n.summary-row[data-v-49f2e0f0] { display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;\n}\n.summary-card[data-v-49f2e0f0] { flex: 1; min-width: 120px; background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 10px; padding: 16px; text-align: center;\n}\n.summary-card.good[data-v-49f2e0f0] { border-top: 3px solid #4ade80;\n}\n.summary-card.bad[data-v-49f2e0f0] { border-top: 3px solid #f87171;\n}\n.summary-card.total[data-v-49f2e0f0] { border-top: 3px solid #FFA500;\n}\n.s-num[data-v-49f2e0f0] { font-size: 1.8rem; font-weight: 700; font-family: 'Rajdhani', sans-serif; color: #fff;\n}\n.s-lbl[data-v-49f2e0f0] { font-size: 0.72rem; color: rgba(255,255,255,0.5); margin-top: 2px;\n}\n.table-card[data-v-49f2e0f0] { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; overflow: hidden;\n}\n.table-wrapper[data-v-49f2e0f0] { overflow-x: auto;\n}\n.data-table[data-v-49f2e0f0] { width: 100%; border-collapse: collapse; white-space: nowrap;\n}\n.data-table th[data-v-49f2e0f0] { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5); font-size: 0.72rem; font-weight: 600; padding: 12px 14px; text-align: left; text-transform: uppercase;\n}\n.data-table td[data-v-49f2e0f0] { color: rgba(255,255,255,0.8); font-size: 0.82rem; padding: 11px 14px; border-bottom: 1px solid rgba(255,255,255,0.04);\n}\n.toprow td[data-v-49f2e0f0] { background: rgba(255,165,0,0.04);\n}\n.small-td[data-v-49f2e0f0] { max-width: 130px; overflow: hidden; text-overflow: ellipsis;\n}\n.q-td[data-v-49f2e0f0] { max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.rank-badge[data-v-49f2e0f0] { width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6);\n}\n.rank-badge.gold[data-v-49f2e0f0] { background: rgba(255,215,0,0.25); color: #FFD700;\n}\n.rank-badge.silver[data-v-49f2e0f0] { background: rgba(192,192,192,0.25); color: #C0C0C0;\n}\n.rank-badge.bronze[data-v-49f2e0f0] { background: rgba(205,127,50,0.25); color: #CD7F32;\n}\n.points-pill[data-v-49f2e0f0] { background: rgba(255,165,0,0.15); color: #FFA500; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600;\n}\n.correct-pill[data-v-49f2e0f0] { background: rgba(34,197,94,0.15); color: #4ade80; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600;\n}\n.wrong-pill[data-v-49f2e0f0] { background: rgba(239,68,68,0.15); color: #f87171; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600;\n}\n.pending-pill[data-v-49f2e0f0] { color: rgba(255,255,255,0.3); font-size: 0.8rem;\n}\n.status-badge[data-v-49f2e0f0] { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 600;\n}\n.status-badge.active[data-v-49f2e0f0] { background: rgba(34,197,94,0.15); color: #4ade80;\n}\n.status-badge.inactive[data-v-49f2e0f0] { background: rgba(239,68,68,0.15); color: #f87171;\n}\n.part-badge[data-v-49f2e0f0] { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 700;\n}\n.part-badge.yes[data-v-49f2e0f0] { background: rgba(34,197,94,0.15); color: #4ade80;\n}\n.part-badge.no[data-v-49f2e0f0] { background: rgba(239,68,68,0.1); color: #f87171;\n}\n.empty-td[data-v-49f2e0f0] { text-align: center; color: rgba(255,255,255,0.3); padding: 30px;\n}\n.pagination-row[data-v-49f2e0f0] { display: flex; align-items: center; gap: 12px; padding: 14px; justify-content: center;\n}\n.page-btn[data-v-49f2e0f0] { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; color: rgba(255,255,255,0.7); padding: 6px 14px; cursor: pointer;\n}\n.page-btn[data-v-49f2e0f0]:disabled { opacity: 0.4; cursor: default;\n}\n.page-info[data-v-49f2e0f0] { color: rgba(255,255,255,0.5); font-size: 0.82rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_style_index_0_id_49f2e0f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_style_index_0_id_49f2e0f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_style_index_0_id_49f2e0f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/Reports.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/Reports.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Reports_vue_vue_type_template_id_49f2e0f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reports.vue?vue&type=template&id=49f2e0f0&scoped=true& */ "./resources/js/views/admin/Reports.vue?vue&type=template&id=49f2e0f0&scoped=true&");
/* harmony import */ var _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reports.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Reports.vue?vue&type=script&lang=js&");
/* harmony import */ var _Reports_vue_vue_type_style_index_0_id_49f2e0f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css& */ "./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reports_vue_vue_type_template_id_49f2e0f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Reports_vue_vue_type_template_id_49f2e0f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "49f2e0f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Reports.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Reports.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/admin/Reports.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_style_index_0_id_49f2e0f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=style&index=0&id=49f2e0f0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/Reports.vue?vue&type=template&id=49f2e0f0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/Reports.vue?vue&type=template&id=49f2e0f0&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_49f2e0f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_49f2e0f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_49f2e0f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reports.vue?vue&type=template&id=49f2e0f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=template&id=49f2e0f0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=template&id=49f2e0f0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Reports.vue?vue&type=template&id=49f2e0f0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "admin-reports" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tabs-row" },
      _vm._l(_vm.tabs, function (t) {
        return _c(
          "button",
          {
            key: t.key,
            staticClass: "tab-btn",
            class: { active: _vm.activeTab === t.key },
            on: {
              click: function ($event) {
                return _vm.switchTab(t.key)
              },
            },
          },
          [_vm._v(_vm._s(t.label))]
        )
      }),
      0
    ),
    _vm._v(" "),
    _vm.activeTab === "points"
      ? _c("div", [
          _c("div", { staticClass: "toolbar" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pointsSearch,
                  expression: "pointsSearch",
                },
              ],
              staticClass: "search-input",
              attrs: { placeholder: "Search name / code..." },
              domProps: { value: _vm.pointsSearch },
              on: {
                input: [
                  function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.pointsSearch = $event.target.value
                  },
                  _vm.fetchPoints,
                ],
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "table-card" }, [
            _c("div", { staticClass: "table-wrapper" }, [
              _c("table", { staticClass: "data-table" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.pointsReport, function (u) {
                      return _c(
                        "tr",
                        { key: u.unique_code, class: { toprow: u.rank <= 3 } },
                        [
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass: "rank-badge",
                                class: _vm.rankClass(u.rank),
                              },
                              [_vm._v(_vm._s(u.rank))]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(u.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(u.unique_code))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(u.mobile))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "points-pill" }, [
                              _vm._v(_vm._s(u.total_points)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(u.matches_participated))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(u.total_predictions))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "correct-pill" }, [
                              _vm._v(_vm._s(u.correct_predictions)),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm.pointsReport.length === 0
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "empty-td",
                              attrs: { colspan: "8" },
                            },
                            [_vm._v("No data.")]
                          ),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.activeTab === "participation"
      ? _c("div", [
          _c("div", { staticClass: "toolbar" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.partSearch,
                  expression: "partSearch",
                },
              ],
              staticClass: "search-input",
              attrs: { placeholder: "Search name / code / mobile..." },
              domProps: { value: _vm.partSearch },
              on: {
                input: [
                  function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.partSearch = $event.target.value
                  },
                  _vm.fetchParticipation,
                ],
              },
            }),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.partFilter,
                    expression: "partFilter",
                  },
                ],
                staticClass: "filter-select",
                on: {
                  change: [
                    function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.partFilter = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.fetchParticipation,
                  ],
                },
              },
              [
                _c("option", { attrs: { value: "all" } }, [
                  _vm._v("All Users"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "participated" } }, [
                  _vm._v("Participated"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "not_participated" } }, [
                  _vm._v("Not Participated"),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm.partSummary
            ? _c("div", { staticClass: "summary-row" }, [
                _c("div", { staticClass: "summary-card total" }, [
                  _c("div", { staticClass: "s-num" }, [
                    _vm._v(_vm._s(_vm.partSummary.total)),
                  ]),
                  _c("div", { staticClass: "s-lbl" }, [_vm._v("Total Users")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "summary-card good" }, [
                  _c("div", { staticClass: "s-num" }, [
                    _vm._v(_vm._s(_vm.partSummary.participated)),
                  ]),
                  _c("div", { staticClass: "s-lbl" }, [_vm._v("Participated")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "summary-card bad" }, [
                  _c("div", { staticClass: "s-num" }, [
                    _vm._v(_vm._s(_vm.partSummary.not_participated)),
                  ]),
                  _c("div", { staticClass: "s-lbl" }, [
                    _vm._v("Not Participated"),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "table-card" }, [
            _c("div", { staticClass: "table-wrapper" }, [
              _c("table", { staticClass: "data-table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.partReport, function (u) {
                      return _c("tr", { key: u.unique_code }, [
                        _c("td", [_vm._v(_vm._s(u.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(u.unique_code))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(u.mobile))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "points-pill" }, [
                            _vm._v(_vm._s(u.total_points)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(u.total_predictions))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(u.matches_participated))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              class: [
                                "status-badge",
                                u.status === "Active" ? "active" : "inactive",
                              ],
                            },
                            [_vm._v(_vm._s(u.status))]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              class: [
                                "part-badge",
                                u.has_participated ? "yes" : "no",
                              ],
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    u.has_participated ? "✓ Yes" : "✗ No"
                                  ) +
                                  "\n                                "
                              ),
                            ]
                          ),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    _vm.partReport.length === 0
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "empty-td",
                              attrs: { colspan: "8" },
                            },
                            [_vm._v("No data.")]
                          ),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.activeTab === "predictions"
      ? _c("div", [
          _c("div", { staticClass: "toolbar" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.predSearch,
                  expression: "predSearch",
                },
              ],
              staticClass: "search-input",
              attrs: { placeholder: "Search user name / code..." },
              domProps: { value: _vm.predSearch },
              on: {
                input: [
                  function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.predSearch = $event.target.value
                  },
                  _vm.fetchPredictions,
                ],
              },
            }),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.predMatchId,
                    expression: "predMatchId",
                  },
                ],
                staticClass: "filter-select",
                on: {
                  change: [
                    function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.predMatchId = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.fetchPredictions,
                  ],
                },
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("All Matches")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "null" } }, [
                  _vm._v("Championship Only"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.matches, function (m) {
                  return _c(
                    "option",
                    { key: m.id, domProps: { value: m.id } },
                    [
                      _vm._v(
                        _vm._s(m.team1 && m.team1.name) +
                          " vs " +
                          _vm._s(m.team2 && m.team2.name)
                      ),
                    ]
                  )
                }),
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "table-card" }, [
            _c("div", { staticClass: "table-wrapper" }, [
              _c("table", { staticClass: "data-table" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.predList, function (p) {
                      return _c("tr", { key: p.id }, [
                        _c("td", [_vm._v(_vm._s(p.user_name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(p.user_code))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "small-td" }, [
                          _vm._v(_vm._s(p.match)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "q-td" }, [
                          _vm._v(_vm._s(p.question)),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(p.selected_answer))]),
                        _vm._v(" "),
                        _c("td", [
                          p.is_correct === true
                            ? _c("span", { staticClass: "correct-pill" }, [
                                _vm._v("✓"),
                              ])
                            : p.is_correct === false
                            ? _c("span", { staticClass: "wrong-pill" }, [
                                _vm._v("✗"),
                              ])
                            : _c("span", { staticClass: "pending-pill" }, [
                                _vm._v("—"),
                              ]),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "points-pill" }, [
                            _vm._v(_vm._s(p.points_earned)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "white-space": "nowrap" } }, [
                          _vm._v(_vm._s(p.created_at)),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    _vm.predList.length === 0
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "empty-td",
                              attrs: { colspan: "8" },
                            },
                            [_vm._v("No predictions found.")]
                          ),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm.predLastPage > 1
            ? _c("div", { staticClass: "pagination-row" }, [
                _c(
                  "button",
                  {
                    staticClass: "page-btn",
                    attrs: { disabled: _vm.predPage <= 1 },
                    on: {
                      click: function ($event) {
                        _vm.predPage--
                        _vm.fetchPredictions()
                      },
                    },
                  },
                  [_vm._v("‹ Prev")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "page-info" }, [
                  _vm._v(
                    "Page " +
                      _vm._s(_vm.predPage) +
                      " / " +
                      _vm._s(_vm.predLastPage)
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "page-btn",
                    attrs: { disabled: _vm.predPage >= _vm.predLastPage },
                    on: {
                      click: function ($event) {
                        _vm.predPage++
                        _vm.fetchPredictions()
                      },
                    },
                  },
                  [_vm._v("Next ›")]
                ),
              ])
            : _vm._e(),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", { staticClass: "page-heading" }, [_vm._v("Reports")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Rank")]),
        _c("th", [_vm._v("Name")]),
        _c("th", [_vm._v("Code")]),
        _c("th", [_vm._v("Mobile")]),
        _c("th", [_vm._v("Points")]),
        _c("th", [_vm._v("Matches")]),
        _c("th", [_vm._v("Predictions")]),
        _c("th", [_vm._v("Correct")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _c("th", [_vm._v("Code")]),
        _c("th", [_vm._v("Mobile")]),
        _c("th", [_vm._v("Points")]),
        _c("th", [_vm._v("Predictions")]),
        _c("th", [_vm._v("Matches")]),
        _c("th", [_vm._v("Status")]),
        _c("th", [_vm._v("Participated")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("User")]),
        _c("th", [_vm._v("Code")]),
        _c("th", [_vm._v("Match")]),
        _c("th", [_vm._v("Question")]),
        _c("th", [_vm._v("Answer")]),
        _c("th", [_vm._v("Correct")]),
        _c("th", [_vm._v("Points")]),
        _c("th", [_vm._v("Date")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);