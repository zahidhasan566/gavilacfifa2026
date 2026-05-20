"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_RaffleDraw_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AdminRaffle',
  data: function data() {
    return {
      eligible: [],
      history: [],
      selectedUserId: null,
      minPoints: 0,
      prizePoints: 0,
      notes: '',
      randomWinner: null
    };
  },
  computed: {
    selectedUser: function selectedUser() {
      var _this = this;
      return this.eligible.find(function (u) {
        return u.id === _this.selectedUserId;
      });
    }
  },
  mounted: function mounted() {
    this.fetchEligible();
    this.fetchHistory();
  },
  methods: {
    fetchEligible: function fetchEligible() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this2$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.$http.get('/api/admin/raffle/eligible', {
                params: {
                  min_points: _this2.minPoints
                }
              });
            case 2:
              _yield$_this2$$http$g = _context.sent;
              data = _yield$_this2$$http$g.data;
              _this2.eligible = data.data;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    fetchHistory: function fetchHistory() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this3$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.$http.get('/api/admin/raffle/history');
            case 2:
              _yield$_this3$$http$g = _context2.sent;
              data = _yield$_this3$$http$g.data;
              _this3.history = data.data;
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    randomDraw: function randomDraw() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this4$$http$p, data, _e$response, _e$response$data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this4.$http.post('/api/admin/raffle/random', {
                min_points: _this4.minPoints
              });
            case 3:
              _yield$_this4$$http$p = _context3.sent;
              data = _yield$_this4$$http$p.data;
              _this4.randomWinner = data.data;
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              _this4.$toaster.error(((_e$response = _context3.t0.response) === null || _e$response === void 0 ? void 0 : (_e$response$data = _e$response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) || 'No eligible users.');
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    selectRandomWinner: function selectRandomWinner() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this5.selectedUserId = _this5.randomWinner.id;
              _this5.randomWinner = null;
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    confirmDraw: function confirmDraw() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _this6.$http.post('/api/admin/raffle/draw', {
                user_id: _this6.selectedUserId,
                prize_points: _this6.prizePoints,
                notes: _this6.notes
              });
            case 3:
              _this6.$toaster.success('Winner confirmed!');
              _this6.selectedUserId = null;
              _this6.prizePoints = 0;
              _this6.notes = '';
              _this6.fetchHistory();
              _context5.next = 13;
              break;
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              _this6.$toaster.error('Failed.');
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.admin-raffle[data-v-ad6827aa] {\n}\n.page-heading[data-v-ad6827aa] { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 20px;\n}\n.raffle-layout[data-v-ad6827aa] { display: flex; gap: 20px;\n}\n.raffle-left[data-v-ad6827aa] { flex: 1; background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; overflow: hidden;\n}\n.raffle-right[data-v-ad6827aa] { width: 300px; background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; overflow: hidden;\n}\n.card-header[data-v-ad6827aa] { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); color: #fff; font-weight: 700; font-size: 0.9rem;\n}\n.filter-label[data-v-ad6827aa] { color: rgba(255,255,255,0.5); font-size: 0.78rem;\n}\n.mini-input[data-v-ad6827aa] { width: 70px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 5px 8px; color: #fff; font-size: 0.85rem; outline: none;\n}\n.btn-random[data-v-ad6827aa] { background: rgba(168,85,247,0.15); color: #c084fc; border: 1px solid rgba(168,85,247,0.3); border-radius: 8px; padding: 6px 12px; font-size: 0.8rem; cursor: pointer; margin-left: auto;\n}\n.eligible-list[data-v-ad6827aa] { max-height: 400px; overflow-y: auto;\n}\n.eligible-item[data-v-ad6827aa] { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; transition: background 0.15s;\n}\n.eligible-item[data-v-ad6827aa]:hover { background: rgba(255,255,255,0.04);\n}\n.eligible-item.selected[data-v-ad6827aa] { background: rgba(255,165,0,0.1); border-left: 3px solid #FFA500;\n}\n.rank[data-v-ad6827aa] { color: rgba(255,255,255,0.3); font-size: 0.78rem; width: 20px;\n}\n.e-avatar[data-v-ad6827aa] { width: 36px; height: 36px; border-radius: 50%; -o-object-fit: cover; object-fit: cover;\n}\n.e-info[data-v-ad6827aa] { flex: 1;\n}\n.e-name[data-v-ad6827aa] { color: #fff; font-size: 0.85rem; font-weight: 600;\n}\n.e-code[data-v-ad6827aa] { color: rgba(255,255,255,0.4); font-size: 0.7rem;\n}\n.e-notes[data-v-ad6827aa] { color: rgba(255,255,255,0.3); font-size: 0.68rem; font-style: italic;\n}\n.e-points[data-v-ad6827aa] { background: #FFA500; color: #fff; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 700;\n}\n.confirm-draw[data-v-ad6827aa] { padding: 16px; border-top: 1px solid rgba(255,255,255,0.06);\n}\n.confirm-label[data-v-ad6827aa] { color: #FFA500; font-weight: 600; font-size: 0.9rem; margin-bottom: 12px;\n}\n.form-group[data-v-ad6827aa] { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px;\n}\n.form-group label[data-v-ad6827aa] { color: rgba(255,255,255,0.5); font-size: 0.75rem;\n}\n.form-input[data-v-ad6827aa] { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; width: 100%; box-sizing: border-box;\n}\n.btn-orange[data-v-ad6827aa] { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; width: 100%; font-family: 'Rajdhani', sans-serif;\n}\n.history-item[data-v-ad6827aa] { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.04);\n}\n.prize-badge[data-v-ad6827aa] { background: rgba(34,197,94,0.15); color: #4ade80; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; white-space: nowrap;\n}\n.empty-state[data-v-ad6827aa] { color: rgba(255,255,255,0.3); text-align: center; padding: 30px; font-size: 0.85rem;\n}\n.modal-overlay[data-v-ad6827aa] { position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 500;\n}\n.modal-box[data-v-ad6827aa] { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 16px; padding: 32px; width: 360px;\n}\n.winner-modal[data-v-ad6827aa] { text-align: center;\n}\n.winner-emoji[data-v-ad6827aa] { font-size: 3rem; margin-bottom: 8px;\n}\n.winner-label[data-v-ad6827aa] { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 1.1rem; margin-bottom: 16px;\n}\n.winner-avatar[data-v-ad6827aa] { width: 100px; height: 100px; border-radius: 50%; -o-object-fit: cover; object-fit: cover; border: 3px solid #FFA500; margin-bottom: 12px;\n}\n.winner-name[data-v-ad6827aa] { color: #fff; font-weight: 700; font-size: 1.1rem;\n}\n.winner-code[data-v-ad6827aa] { color: rgba(255,255,255,0.5); font-size: 0.85rem; margin-bottom: 4px;\n}\n.winner-pts[data-v-ad6827aa] { color: #FFA500; font-size: 1.4rem; font-weight: 700; font-family: 'Rajdhani', sans-serif; margin-bottom: 20px;\n}\n.modal-actions[data-v-ad6827aa] { display: flex; justify-content: center; gap: 10px;\n}\n.btn-cancel[data-v-ad6827aa] { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer;\n}\n@media (max-width: 768px) {\n.raffle-layout[data-v-ad6827aa] { flex-direction: column;\n}\n.raffle-right[data-v-ad6827aa] { width: 100%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_style_index_0_id_ad6827aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_style_index_0_id_ad6827aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_style_index_0_id_ad6827aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/RaffleDraw.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/RaffleDraw.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RaffleDraw_vue_vue_type_template_id_ad6827aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true& */ "./resources/js/views/admin/RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true&");
/* harmony import */ var _RaffleDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RaffleDraw.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/RaffleDraw.vue?vue&type=script&lang=js&");
/* harmony import */ var _RaffleDraw_vue_vue_type_style_index_0_id_ad6827aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css& */ "./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RaffleDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RaffleDraw_vue_vue_type_template_id_ad6827aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RaffleDraw_vue_vue_type_template_id_ad6827aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ad6827aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/RaffleDraw.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/RaffleDraw.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/RaffleDraw.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RaffleDraw.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_style_index_0_id_ad6827aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=style&index=0&id=ad6827aa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin/RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_template_id_ad6827aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_template_id_ad6827aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaffleDraw_vue_vue_type_template_id_ad6827aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/RaffleDraw.vue?vue&type=template&id=ad6827aa&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "admin-raffle" }, [
    _c("h1", { staticClass: "page-heading" }, [_vm._v("Raffle Draw")]),
    _vm._v(" "),
    _c("div", { staticClass: "raffle-layout" }, [
      _c("div", { staticClass: "raffle-left" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("span", [_vm._v("Eligible Participants")]),
          _vm._v(" "),
          _c("div", { staticClass: "filter-row-inline" }, [
            _c("label", { staticClass: "filter-label" }, [
              _vm._v("Min Points:"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.minPoints,
                  expression: "minPoints",
                  modifiers: { number: true },
                },
              ],
              staticClass: "mini-input",
              attrs: { type: "number", min: "0" },
              domProps: { value: _vm.minPoints },
              on: {
                change: _vm.fetchEligible,
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.minPoints = _vm._n($event.target.value)
                },
                blur: function ($event) {
                  return _vm.$forceUpdate()
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn-random", on: { click: _vm.randomDraw } },
            [_vm._v("🎲 Random Draw")]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "eligible-list" },
          [
            _vm._l(_vm.eligible, function (u, i) {
              return _c(
                "div",
                {
                  key: u.id,
                  staticClass: "eligible-item",
                  class: { selected: _vm.selectedUserId === u.id },
                  on: {
                    click: function ($event) {
                      _vm.selectedUserId = u.id
                    },
                  },
                },
                [
                  _c("span", { staticClass: "rank" }, [_vm._v(_vm._s(i + 1))]),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "e-avatar",
                    attrs: {
                      src: u.profile_picture_url,
                      onerror:
                        "this.src='/fifa2026/public/images/default-avatar.png'",
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "e-info" }, [
                    _c("div", { staticClass: "e-name" }, [
                      _vm._v(_vm._s(u.name)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "e-code" }, [
                      _vm._v(_vm._s(u.unique_code)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "e-points" }, [
                    _vm._v(_vm._s(u.total_points)),
                  ]),
                ]
              )
            }),
            _vm._v(" "),
            _vm.eligible.length === 0
              ? _c("div", { staticClass: "empty-state" }, [
                  _vm._v("No eligible users."),
                ])
              : _vm._e(),
          ],
          2
        ),
        _vm._v(" "),
        _vm.selectedUserId
          ? _c("div", { staticClass: "confirm-draw" }, [
              _c("div", { staticClass: "confirm-label" }, [
                _vm._v(
                  "Selected: " +
                    _vm._s(_vm.selectedUser && _vm.selectedUser.name)
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Prize Points")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.prizePoints,
                      expression: "prizePoints",
                      modifiers: { number: true },
                    },
                  ],
                  staticClass: "form-input",
                  attrs: { type: "number", min: "0" },
                  domProps: { value: _vm.prizePoints },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.prizePoints = _vm._n($event.target.value)
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Notes")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.notes,
                      expression: "notes",
                    },
                  ],
                  staticClass: "form-input",
                  attrs: { placeholder: "Optional note..." },
                  domProps: { value: _vm.notes },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.notes = $event.target.value
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn-orange", on: { click: _vm.confirmDraw } },
                [_vm._v("Confirm Winner")]
              ),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "raffle-right" },
        [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Raffle Draw History"),
          ]),
          _vm._v(" "),
          _vm._l(_vm.history, function (d) {
            return _c("div", { key: d.id, staticClass: "history-item" }, [
              _c("img", {
                staticClass: "e-avatar",
                attrs: {
                  src:
                    (d.user && d.user.profile_picture_url) ||
                    "/fifa2026/public/images/default-avatar.png",
                  onerror:
                    "this.src='/fifa2026/public/images/default-avatar.png'",
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "e-info" }, [
                _c("div", { staticClass: "e-name" }, [
                  _vm._v(_vm._s(d.user && d.user.name)),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "e-code" }, [
                  _vm._v(
                    _vm._s(d.draw_date) +
                      " · " +
                      _vm._s(d.user && d.user.unique_code)
                  ),
                ]),
                _vm._v(" "),
                d.notes
                  ? _c("div", { staticClass: "e-notes" }, [
                      _vm._v(_vm._s(d.notes)),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "prize-badge" }, [
                _vm._v("+" + _vm._s(d.prize_points) + " pts"),
              ]),
            ])
          }),
          _vm._v(" "),
          _vm.history.length === 0
            ? _c("div", { staticClass: "empty-state" }, [
                _vm._v("No draws yet."),
              ])
            : _vm._e(),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _vm.randomWinner
      ? _c(
          "div",
          {
            staticClass: "modal-overlay",
            on: {
              click: function ($event) {
                if ($event.target !== $event.currentTarget) {
                  return null
                }
                _vm.randomWinner = null
              },
            },
          },
          [
            _c("div", { staticClass: "modal-box winner-modal" }, [
              _c("div", { staticClass: "winner-emoji" }, [_vm._v("🎉")]),
              _vm._v(" "),
              _c("div", { staticClass: "winner-label" }, [
                _vm._v("Random Draw Winner"),
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "winner-avatar",
                attrs: {
                  src: _vm.randomWinner.profile_picture_url,
                  onerror:
                    "this.src='/fifa2026/public/images/default-avatar.png'",
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "winner-name" }, [
                _vm._v(_vm._s(_vm.randomWinner.name)),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "winner-code" }, [
                _vm._v(_vm._s(_vm.randomWinner.unique_code)),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "winner-pts" }, [
                _vm._v(_vm._s(_vm.randomWinner.total_points) + " Points"),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-actions" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn-cancel",
                    on: {
                      click: function ($event) {
                        _vm.randomWinner = null
                      },
                    },
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn-orange",
                    on: { click: _vm.selectRandomWinner },
                  },
                  [_vm._v("Confirm as Winner")]
                ),
              ]),
            ]),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);