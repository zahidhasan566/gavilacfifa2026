"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Prediction_Prediction_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Prediction',
  data: function data() {
    return {
      match: null,
      questions: [],
      answers: {},
      alreadySubmitted: false,
      loading: true,
      submitting: false,
      champQuestions: [],
      champAnswers: {},
      champAlreadySubmitted: false,
      champSubmitting: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.fetchQuestions();
          case 2:
            _this.loading = false;
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    fetchQuestions: function fetchQuestions() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this2$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$http.get('/api/predictions/questions');
            case 2:
              _yield$_this2$$http$g = _context2.sent;
              data = _yield$_this2$$http$g.data;
              _this2.match = data.match;
              _this2.questions = data.questions;
              _this2.alreadySubmitted = data.already_submitted;
              _this2.questions.forEach(function (q) {
                if (q.selected_answer) _this2.$set(_this2.answers, q.id, q.selected_answer);
              });
              _this2.champQuestions = data.champ_questions || [];
              _this2.champAlreadySubmitted = data.champ_already_submitted || false;
              _this2.champQuestions.forEach(function (q) {
                if (q.selected_answer) _this2.$set(_this2.champAnswers, q.id, q.selected_answer);
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    setAnswer: function setAnswer(qId, val) {
      this.$set(this.answers, qId, val);
    },
    setChampAnswer: function setChampAnswer(qId, val) {
      this.$set(this.champAnswers, qId, val);
    },
    submitPredictions: function submitPredictions() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var preds, _e$response, _e$response$data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              preds = Object.entries(_this3.answers).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  qId = _ref2[0],
                  ans = _ref2[1];
                return {
                  question_id: parseInt(qId),
                  selected_answer: ans
                };
              });
              if (!(preds.length === 0)) {
                _context3.next = 4;
                break;
              }
              _this3.$toaster.error('Please answer at least one question.');
              return _context3.abrupt("return");
            case 4:
              _this3.submitting = true;
              _context3.prev = 5;
              _context3.next = 8;
              return _this3.$http.post('/api/predictions/submit', {
                match_id: _this3.match.id,
                predictions: preds
              });
            case 8:
              _this3.$toaster.success('Predictions submitted!');
              _this3.alreadySubmitted = true;
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](5);
              _this3.$toaster.error(((_e$response = _context3.t0.response) === null || _e$response === void 0 ? void 0 : (_e$response$data = _e$response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) || 'Submission failed.');
            case 15:
              _context3.prev = 15;
              _this3.submitting = false;
              return _context3.finish(15);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[5, 12, 15, 18]]);
      }))();
    },
    submitChampionship: function submitChampionship() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var preds, _e$response2, _e$response2$data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              preds = Object.entries(_this4.champAnswers).filter(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  ans = _ref4[1];
                return ans && ans.trim() !== '';
              }).map(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                  qId = _ref6[0],
                  ans = _ref6[1];
                return {
                  question_id: parseInt(qId),
                  selected_answer: ans
                };
              });
              if (!(preds.length === 0)) {
                _context4.next = 4;
                break;
              }
              _this4.$toaster.error('Please answer at least one question.');
              return _context4.abrupt("return");
            case 4:
              _this4.champSubmitting = true;
              _context4.prev = 5;
              _context4.next = 8;
              return _this4.$http.post('/api/predictions/submit', {
                is_championship: true,
                predictions: preds
              });
            case 8:
              _this4.$toaster.success('Championship predictions submitted! Good luck 🏆');
              _this4.champAlreadySubmitted = true;
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](5);
              _this4.$toaster.error(((_e$response2 = _context4.t0.response) === null || _e$response2 === void 0 ? void 0 : (_e$response2$data = _e$response2.data) === null || _e$response2$data === void 0 ? void 0 : _e$response2$data.message) || 'Submission failed.');
            case 15:
              _context4.prev = 15;
              _this4.champSubmitting = false;
              return _context4.finish(15);
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[5, 12, 15, 18]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.prediction-page[data-v-0b82b320] { padding: 4px 0;\n}\n\n/* Two column grid */\n.pred-columns[data-v-0b82b320] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    align-items: start;\n}\n\n/* Each column card */\n.pred-card[data-v-0b82b320] {\n    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);\n    border-radius: 12px;\n    overflow: hidden;\n    border: 1px solid rgba(255,255,255,0.10);\n    display: flex;\n    flex-direction: column;\n}\n.champ-card[data-v-0b82b320] { border-color: rgba(255,165,0,0.35);\n}\n\n/* Header */\n.pred-header[data-v-0b82b320] {\n    display: flex; align-items: center; gap: 10px;\n    padding: 0 12px 0 12px;\n    height: 66px; position: relative; overflow: hidden;\n    background: linear-gradient(135deg, #3E0082 0%, #1A0040 100%);\n    border-bottom: 1px solid rgba(255,255,255,0.08);\n}\n.champ-header[data-v-0b82b320] { background: linear-gradient(135deg, #3E0082 0%, #1A0040 100%);\n}\n.pred-icon-circle[data-v-0b82b320] {\n    width: 42px; height: 42px; border-radius: 50%;\n    background: rgba(255,255,255,0.08);\n    border: 2px solid rgba(255,255,255,0.15);\n    display: flex; align-items: center; justify-content: center; flex-shrink: 0;\n}\n.champ-icon-circle[data-v-0b82b320] { border-color: rgba(255,165,0,0.3);\n}\n.pred-icon-img[data-v-0b82b320] { width: 26px; height: 26px; -o-object-fit: contain; object-fit: contain;\n}\n.champ-trophy-icon[data-v-0b82b320] { font-size: 1.3rem;\n}\n.pred-header-text[data-v-0b82b320] { flex: 1; min-width: 0;\n}\n.pred-title[data-v-0b82b320] { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-size: 1.05rem; font-weight: 800; line-height: 1.2;\n}\n.pred-sub[data-v-0b82b320] { color: rgba(255,255,255,0.6); font-size: 0.68rem;\n}\n.pred-header-logo[data-v-0b82b320] { flex-shrink: 0;\n}\n.pred-trophy-img[data-v-0b82b320] { height: 44px; width: auto; -o-object-fit: contain; object-fit: contain;\n}\n\n/* Body */\n.pred-body[data-v-0b82b320] { padding: 14px; flex: 1;\n}\n.empty-state[data-v-0b82b320] { color: rgba(255,255,255,0.4); text-align: center; padding: 30px 10px; font-size: 0.85rem;\n}\n.submitted-banner[data-v-0b82b320] {\n    background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3);\n    border-radius: 8px; color: #4ade80; padding: 10px 14px;\n    margin-bottom: 14px; font-size: 0.82rem;\n}\n\n/* Question block */\n.question-block[data-v-0b82b320] {\n    background: rgba(255,255,255,0.04); border-radius: 8px;\n    padding: 12px 14px; margin-bottom: 10px;\n}\n.q-header[data-v-0b82b320] { display: flex; align-items: center; gap: 8px; margin-bottom: 12px;\n}\n.q-num[data-v-0b82b320] {\n    background: #FFA500; color: #fff;\n    width: 24px; height: 24px; border-radius: 50%;\n    display: flex; align-items: center; justify-content: center;\n    font-weight: 700; font-size: 0.75rem; flex-shrink: 0;\n}\n.champ-num[data-v-0b82b320] { background: linear-gradient(135deg, #FFA500, #FF6B00);\n}\n.q-text[data-v-0b82b320] { color: #fff; font-size: 0.85rem; flex: 1; line-height: 1.3;\n}\n.q-points[data-v-0b82b320] { color: rgba(255,255,255,0.5); font-size: 0.75rem; white-space: nowrap;\n}\n.q-points strong[data-v-0b82b320] { color: #FFA500; font-size: 1rem;\n}\n\n/* Inputs */\n.text-input[data-v-0b82b320] {\n    width: 100%; padding: 10px 12px; box-sizing: border-box;\n    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2);\n    border-radius: 8px; color: #fff; font-size: 0.85rem; outline: none;\n}\n.text-input[data-v-0b82b320]::-moz-placeholder { color: rgba(255,255,255,0.35);\n}\n.text-input[data-v-0b82b320]::placeholder { color: rgba(255,255,255,0.35);\n}\n.text-input[data-v-0b82b320]:focus { border-color: #FFA500;\n}\n.text-input[data-v-0b82b320]:disabled { opacity: 0.6;\n}\n.team-choice-row[data-v-0b82b320] { display: flex; gap: 8px;\n}\n.team-btn[data-v-0b82b320] {\n    flex: 1; padding: 10px 8px; border-radius: 8px;\n    border: 1px solid rgba(255,255,255,0.15);\n    background: rgba(255,255,255,0.08); color: #fff;\n    font-size: 0.8rem; font-weight: 700; text-transform: uppercase;\n    cursor: pointer; transition: all 0.2s;\n}\n.team-btn[data-v-0b82b320]:hover { border-color: #FFA500; background: rgba(255,165,0,0.1);\n}\n.team-btn.selected[data-v-0b82b320] { background: #FFA500; border-color: #FFA500;\n}\n.team-btn[data-v-0b82b320]:disabled { opacity: 0.7; cursor: default;\n}\n.dropdown-row[data-v-0b82b320] { position: relative;\n}\n.select-input[data-v-0b82b320] {\n    width: 100%; padding: 10px 36px 10px 12px; -webkit-appearance: none; -moz-appearance: none; appearance: none;\n    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2);\n    border-radius: 8px; color: #fff; font-size: 0.85rem; outline: none; cursor: pointer;\n}\n.select-input option[data-v-0b82b320] { background: #1A0040;\n}\n.select-input[data-v-0b82b320]:disabled { opacity: 0.7;\n}\n.select-arrow[data-v-0b82b320] { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.5); pointer-events: none;\n}\n.mcq-row[data-v-0b82b320] { display: flex; flex-wrap: wrap; gap: 6px;\n}\n.mcq-btn[data-v-0b82b320] {\n    padding: 7px 12px; border-radius: 6px;\n    border: 1px solid rgba(255,255,255,0.15);\n    background: rgba(255,255,255,0.05); color: #fff;\n    font-size: 0.8rem; cursor: pointer; transition: all 0.2s;\n}\n.mcq-btn.selected[data-v-0b82b320] { background: #FFA500; border-color: #FFA500;\n}\n.mcq-btn[data-v-0b82b320]:disabled { opacity: 0.7; cursor: default;\n}\n\n/* Result */\n.q-result[data-v-0b82b320] { margin-top: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;\n}\n.your-answer[data-v-0b82b320] { color: rgba(255,255,255,0.5); font-size: 0.75rem;\n}\n.correct-badge[data-v-0b82b320] { background: rgba(34,197,94,0.15); color: #4ade80; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 600;\n}\n.wrong-badge[data-v-0b82b320] { background: rgba(239,68,68,0.15); color: #f87171; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 600;\n}\n\n/* Submit */\n.submit-row[data-v-0b82b320] { display: flex; justify-content: flex-end; margin-top: 16px;\n}\n.submit-btn[data-v-0b82b320] {\n    background: #06B6D4; color: #fff; border: none;\n    border-radius: 8px; padding: 11px 28px;\n    font-size: 0.88rem; font-weight: 700; font-family: 'Rajdhani', sans-serif;\n    letter-spacing: 1.5px; cursor: pointer;\n}\n.submit-btn[data-v-0b82b320]:hover { background: #0891b2;\n}\n.submit-btn[data-v-0b82b320]:disabled { opacity: 0.7; cursor: not-allowed;\n}\n.champ-submit-btn[data-v-0b82b320] { background: linear-gradient(135deg, #FFA500, #FF6B00);\n}\n.champ-submit-btn[data-v-0b82b320]:hover { background: linear-gradient(135deg, #FF6B00, #e05a00);\n}\n\n/* Ad Banner */\n.ad-banner[data-v-0b82b320] {\n    margin: 16px 0 6px;\n    border-radius: 10px;\n    overflow: hidden;\n}\n.ad-img[data-v-0b82b320] { width: 100%; height: auto; display: block; border-radius: 10px;\n}\n\n/* Mobile: stack columns */\n@media (max-width: 700px) {\n.pred-columns[data-v-0b82b320] { grid-template-columns: 1fr;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_style_index_0_id_0b82b320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_style_index_0_id_0b82b320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_style_index_0_id_0b82b320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Prediction/Prediction.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Prediction/Prediction.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prediction_vue_vue_type_template_id_0b82b320_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prediction.vue?vue&type=template&id=0b82b320&scoped=true& */ "./resources/js/views/Prediction/Prediction.vue?vue&type=template&id=0b82b320&scoped=true&");
/* harmony import */ var _Prediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prediction.vue?vue&type=script&lang=js& */ "./resources/js/views/Prediction/Prediction.vue?vue&type=script&lang=js&");
/* harmony import */ var _Prediction_vue_vue_type_style_index_0_id_0b82b320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css& */ "./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Prediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Prediction_vue_vue_type_template_id_0b82b320_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Prediction_vue_vue_type_template_id_0b82b320_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0b82b320",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Prediction/Prediction.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Prediction/Prediction.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Prediction/Prediction.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prediction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_style_index_0_id_0b82b320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=style&index=0&id=0b82b320&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/Prediction/Prediction.vue?vue&type=template&id=0b82b320&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Prediction/Prediction.vue?vue&type=template&id=0b82b320&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_template_id_0b82b320_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_template_id_0b82b320_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prediction_vue_vue_type_template_id_0b82b320_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prediction.vue?vue&type=template&id=0b82b320&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=template&id=0b82b320&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=template&id=0b82b320&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prediction/Prediction.vue?vue&type=template&id=0b82b320&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "prediction-page" }, [
    _c("div", { staticClass: "pred-columns" }, [
      _c("div", { staticClass: "pred-col" }, [
        _c("div", { staticClass: "pred-card" }, [
          _c("div", { staticClass: "pred-header" }, [
            _c("div", { staticClass: "pred-icon-circle" }, [
              _c("img", {
                staticClass: "pred-icon-img",
                attrs: {
                  src: _vm.$imgBase + "/images/ball-icon.png",
                  onerror: "this.style.display='none'",
                },
              }),
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "pred-header-logo" }, [
              _c("img", {
                staticClass: "pred-trophy-img",
                attrs: {
                  src: _vm.$imgBase + "/images/livescoretropy.png",
                  onerror: "this.style.display='none'",
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pred-body" }, [
            _vm.loading
              ? _c("div", { staticClass: "empty-state" }, [
                  _vm._v("Loading..."),
                ])
              : _vm.questions.length === 0
              ? _c("div", { staticClass: "empty-state" }, [
                  _vm._v("No active match right now."),
                ])
              : _c(
                  "div",
                  [
                    _vm.alreadySubmitted
                      ? _c("div", { staticClass: "submitted-banner" }, [
                          _vm._v(
                            "\n                            ✓ Already submitted for this match.\n                        "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.questions, function (q, idx) {
                      return _c(
                        "div",
                        { key: q.id, staticClass: "question-block" },
                        [
                          _c("div", { staticClass: "q-header" }, [
                            _c("span", { staticClass: "q-num" }, [
                              _vm._v(_vm._s(idx + 1)),
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "q-text" }, [
                              _vm._v(_vm._s(q.question_text)),
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "q-points" }, [
                              _vm._v("Point "),
                              _c("strong", [_vm._v(_vm._s(q.points))]),
                            ]),
                          ]),
                          _vm._v(" "),
                          q.type === "team_choice"
                            ? _c("div", { staticClass: "team-choice-row" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "team-btn",
                                    class: {
                                      selected:
                                        _vm.answers[q.id] ===
                                        (q.team1 && q.team1.name),
                                    },
                                    attrs: {
                                      type: "button",
                                      disabled: _vm.alreadySubmitted,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.setAnswer(
                                          q.id,
                                          q.team1 && q.team1.name
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(q.team1 && q.team1.name) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "team-btn",
                                    class: {
                                      selected:
                                        _vm.answers[q.id] ===
                                        (q.team2 && q.team2.name),
                                    },
                                    attrs: {
                                      type: "button",
                                      disabled: _vm.alreadySubmitted,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.setAnswer(
                                          q.id,
                                          q.team2 && q.team2.name
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(q.team2 && q.team2.name) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                              ])
                            : q.type === "dropdown"
                            ? _c("div", { staticClass: "dropdown-row" }, [
                                _c(
                                  "select",
                                  {
                                    staticClass: "select-input",
                                    attrs: { disabled: _vm.alreadySubmitted },
                                    domProps: {
                                      value: _vm.answers[q.id] || "",
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.setAnswer(
                                          q.id,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Select"),
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(q.options, function (opt) {
                                      return _c(
                                        "option",
                                        { key: opt, domProps: { value: opt } },
                                        [_vm._v(_vm._s(opt))]
                                      )
                                    }),
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "svg",
                                  {
                                    staticClass: "select-arrow",
                                    attrs: {
                                      width: "14",
                                      height: "14",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                    },
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "6 9 12 15 18 9" },
                                    }),
                                  ]
                                ),
                              ])
                            : q.type === "mcq"
                            ? _c(
                                "div",
                                { staticClass: "mcq-row" },
                                _vm._l(q.options, function (opt) {
                                  return _c(
                                    "button",
                                    {
                                      key: opt,
                                      staticClass: "mcq-btn",
                                      class: {
                                        selected: _vm.answers[q.id] === opt,
                                      },
                                      attrs: {
                                        type: "button",
                                        disabled: _vm.alreadySubmitted,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.setAnswer(q.id, opt)
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(opt))]
                                  )
                                }),
                                0
                              )
                            : q.type === "text"
                            ? _c("div", { staticClass: "text-input-row" }, [
                                _c("input", {
                                  staticClass: "text-input",
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.alreadySubmitted,
                                    placeholder: "Type your answer...",
                                  },
                                  domProps: { value: _vm.answers[q.id] || "" },
                                  on: {
                                    input: function ($event) {
                                      return _vm.setAnswer(
                                        q.id,
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          q.selected_answer
                            ? _c("div", { staticClass: "q-result" }, [
                                _c("span", { staticClass: "your-answer" }, [
                                  _vm._v(
                                    "Your answer: " + _vm._s(q.selected_answer)
                                  ),
                                ]),
                                _vm._v(" "),
                                q.is_correct === true
                                  ? _c(
                                      "span",
                                      { staticClass: "correct-badge" },
                                      [_vm._v("✓ +" + _vm._s(q.points_earned))]
                                    )
                                  : q.is_correct === false
                                  ? _c("span", { staticClass: "wrong-badge" }, [
                                      _vm._v("✗ Wrong"),
                                    ])
                                  : _vm._e(),
                              ])
                            : _vm._e(),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "ad-banner" }, [
                      _c("img", {
                        staticClass: "ad-img",
                        attrs: {
                          src: _vm.$imgBase + "/images/prediction-add.png",
                          alt: "Advertisement",
                          onerror:
                            "this.closest('.ad-banner').style.display='none'",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    !_vm.alreadySubmitted && _vm.questions.length > 0
                      ? _c("div", { staticClass: "submit-row" }, [
                          _c(
                            "button",
                            {
                              staticClass: "submit-btn",
                              attrs: { disabled: _vm.submitting },
                              on: { click: _vm.submitPredictions },
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.submitting ? "Submitting..." : "SUBMIT"
                                  ) +
                                  "\n                            "
                              ),
                            ]
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
      _c("div", { staticClass: "pred-col" }, [
        _c("div", { staticClass: "pred-card champ-card" }, [
          _c("div", { staticClass: "pred-header champ-header" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "pred-header-logo" }, [
              _c("img", {
                staticClass: "pred-trophy-img",
                attrs: {
                  src: _vm.$imgBase + "/images/livescoretropy.png",
                  onerror: "this.style.display='none'",
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pred-body" }, [
            _vm.champQuestions.length === 0
              ? _c("div", { staticClass: "empty-state" }, [
                  _vm._v("No championship questions yet."),
                ])
              : _c(
                  "div",
                  [
                    _vm.champAlreadySubmitted
                      ? _c("div", { staticClass: "submitted-banner" }, [
                          _vm._v(
                            "\n                            ✓ Championship predictions submitted. Good luck!\n                        "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.champQuestions, function (q, idx) {
                      return _c(
                        "div",
                        { key: "champ-" + q.id, staticClass: "question-block" },
                        [
                          _c("div", { staticClass: "q-header" }, [
                            _c("span", { staticClass: "q-num champ-num" }, [
                              _vm._v(_vm._s(idx + 1)),
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "q-text" }, [
                              _vm._v(_vm._s(q.question_text)),
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "q-points" }, [
                              _vm._v("Point "),
                              _c("strong", [_vm._v(_vm._s(q.points))]),
                            ]),
                          ]),
                          _vm._v(" "),
                          q.type === "text"
                            ? _c("div", { staticClass: "text-input-row" }, [
                                _c("input", {
                                  staticClass: "text-input",
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.champAlreadySubmitted,
                                    placeholder:
                                      q.selected_answer ||
                                      "Type your answer...",
                                  },
                                  domProps: {
                                    value: _vm.champAnswers[q.id] || "",
                                  },
                                  on: {
                                    input: function ($event) {
                                      return _vm.setChampAnswer(
                                        q.id,
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                              ])
                            : q.type === "dropdown"
                            ? _c("div", { staticClass: "dropdown-row" }, [
                                _c(
                                  "select",
                                  {
                                    staticClass: "select-input",
                                    attrs: {
                                      disabled: _vm.champAlreadySubmitted,
                                    },
                                    domProps: {
                                      value: _vm.champAnswers[q.id] || "",
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.setChampAnswer(
                                          q.id,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Select"),
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(q.options, function (opt) {
                                      return _c(
                                        "option",
                                        { key: opt, domProps: { value: opt } },
                                        [_vm._v(_vm._s(opt))]
                                      )
                                    }),
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "svg",
                                  {
                                    staticClass: "select-arrow",
                                    attrs: {
                                      width: "14",
                                      height: "14",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                    },
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "6 9 12 15 18 9" },
                                    }),
                                  ]
                                ),
                              ])
                            : q.type === "mcq"
                            ? _c(
                                "div",
                                { staticClass: "mcq-row" },
                                _vm._l(q.options, function (opt) {
                                  return _c(
                                    "button",
                                    {
                                      key: opt,
                                      staticClass: "mcq-btn",
                                      class: {
                                        selected:
                                          _vm.champAnswers[q.id] === opt,
                                      },
                                      attrs: {
                                        type: "button",
                                        disabled: _vm.champAlreadySubmitted,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.setChampAnswer(q.id, opt)
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(opt))]
                                  )
                                }),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          q.selected_answer
                            ? _c("div", { staticClass: "q-result" }, [
                                _c("span", { staticClass: "your-answer" }, [
                                  _vm._v(
                                    "Your answer: " + _vm._s(q.selected_answer)
                                  ),
                                ]),
                                _vm._v(" "),
                                q.is_correct === true
                                  ? _c(
                                      "span",
                                      { staticClass: "correct-badge" },
                                      [_vm._v("✓ +" + _vm._s(q.points_earned))]
                                    )
                                  : q.is_correct === false
                                  ? _c("span", { staticClass: "wrong-badge" }, [
                                      _vm._v("✗ Wrong"),
                                    ])
                                  : _vm._e(),
                              ])
                            : _vm._e(),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "ad-banner" }, [
                      _c("img", {
                        staticClass: "ad-img",
                        attrs: {
                          src: _vm.$imgBase + "/images/prediction-add-two.png",
                          alt: "Advertisement",
                          onerror:
                            "this.closest('.ad-banner').style.display='none'",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    !_vm.champAlreadySubmitted
                      ? _c("div", { staticClass: "submit-row" }, [
                          _c(
                            "button",
                            {
                              staticClass: "submit-btn champ-submit-btn",
                              attrs: { disabled: _vm.champSubmitting },
                              on: { click: _vm.submitChampionship },
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.champSubmitting
                                      ? "Submitting..."
                                      : "SUBMIT PREDICTIONS"
                                  ) +
                                  "\n                            "
                              ),
                            ]
                          ),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
          ]),
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
    return _c("div", { staticClass: "pred-header-text" }, [
      _c("div", { staticClass: "pred-title" }, [_vm._v("Today Prediction")]),
      _vm._v(" "),
      _c("div", { staticClass: "pred-sub" }, [_vm._v("FIFA World Cup 2026™")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pred-icon-circle champ-icon-circle" }, [
      _c("span", { staticClass: "champ-trophy-icon" }, [_vm._v("🏆")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pred-header-text" }, [
      _c("div", { staticClass: "pred-title" }, [
        _vm._v("World Cup Predictions"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pred-sub" }, [
        _vm._v("FIFA World Cup 2026™ — One-time"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);