"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_Questions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AdminQuestions',
  data: function data() {
    return {
      questions: [],
      matches: [],
      filterMatch: '',
      modal: false,
      editId: null,
      saving: false,
      optionsText: '',
      form: {
        match_id: null,
        question_text: '',
        type: 'team_choice',
        points: 10,
        options: [],
        correct_answer: '',
        is_active: true,
        sort_order: 0
      }
    };
  },
  mounted: function mounted() {
    this.fetchQuestions();
    this.fetchMatches();
  },
  methods: {
    fetchQuestions: function fetchQuestions() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this$$http$ge, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$http.get('/api/admin/questions', {
                params: {
                  match_id: _this.filterMatch || undefined
                }
              });
            case 2:
              _yield$_this$$http$ge = _context.sent;
              data = _yield$_this$$http$ge.data;
              _this.questions = data.data;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    fetchMatches: function fetchMatches() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this2$$http$g, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$http.get('/api/admin/matches');
            case 2:
              _yield$_this2$$http$g = _context2.sent;
              data = _yield$_this2$$http$g.data;
              _this2.matches = data.data;
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    openAdd: function openAdd() {
      this.editId = null;
      this.form = {
        match_id: null,
        question_text: '',
        type: 'team_choice',
        points: 10,
        options: [],
        correct_answer: '',
        is_active: true,
        sort_order: 0
      };
      this.optionsText = '';
      this.modal = true;
    },
    openEdit: function openEdit(q) {
      this.editId = q.id;
      this.form = {
        match_id: q.match_id,
        question_text: q.question_text,
        type: q.type,
        points: q.points,
        options: q.options || [],
        correct_answer: q.correct_answer || '',
        is_active: q.is_active,
        sort_order: q.sort_order
      };
      this.optionsText = (q.options || []).join('\n');
      this.modal = true;
    },
    closeModal: function closeModal() {
      this.modal = false;
    },
    saveQuestion: function saveQuestion() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var payload;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.saving = true;
              payload = _objectSpread({}, _this3.form);
              if (_this3.form.type !== 'team_choice') {
                payload.options = _this3.optionsText.split('\n').map(function (s) {
                  return s.trim();
                }).filter(Boolean);
              }
              _context3.prev = 3;
              if (!_this3.editId) {
                _context3.next = 9;
                break;
              }
              _context3.next = 7;
              return _this3.$http.put("/api/admin/questions/".concat(_this3.editId), payload);
            case 7:
              _context3.next = 11;
              break;
            case 9:
              _context3.next = 11;
              return _this3.$http.post('/api/admin/questions', payload);
            case 11:
              _this3.closeModal();
              _this3.fetchQuestions();
              _this3.$toaster.success('Question saved.');
              _context3.next = 19;
              break;
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);
              _this3.$toaster.error('Failed.');
            case 19:
              _context3.prev = 19;
              _this3.saving = false;
              return _context3.finish(19);
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 16, 19, 22]]);
      }))();
    },
    deleteQuestion: function deleteQuestion(id) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (confirm('Delete question?')) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              _context4.next = 4;
              return _this4.$http["delete"]("/api/admin/questions/".concat(id));
            case 4:
              _this4.fetchQuestions();
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.admin-questions[data-v-48529184] {\n}\n.page-header[data-v-48529184] { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;\n}\n.page-heading[data-v-48529184] { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700;\n}\n.btn-orange[data-v-48529184] { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; font-family: 'Rajdhani', sans-serif;\n}\n.filter-row[data-v-48529184] { margin-bottom: 16px;\n}\n.form-input[data-v-48529184] { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; width: 100%; box-sizing: border-box;\n}\n.select-sm[data-v-48529184] { width: 320px;\n}\n.table-card[data-v-48529184] { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; overflow: hidden;\n}\n.table-wrapper[data-v-48529184] { overflow-x: auto;\n}\n.data-table[data-v-48529184] { width: 100%; border-collapse: collapse;\n}\n.data-table th[data-v-48529184] { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5); font-size: 0.72rem; font-weight: 600; padding: 12px 14px; text-align: left; text-transform: uppercase;\n}\n.data-table td[data-v-48529184] { color: rgba(255,255,255,0.8); font-size: 0.82rem; padding: 11px 14px; border-bottom: 1px solid rgba(255,255,255,0.04);\n}\n.small-td[data-v-48529184] { max-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.answer-td[data-v-48529184] { max-width: 120px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.type-badge[data-v-48529184] { background: rgba(168,85,247,0.15); color: #c084fc; padding: 3px 8px; border-radius: 8px; font-size: 0.7rem; font-weight: 600;\n}\n.points-pill[data-v-48529184] { background: rgba(255,165,0,0.15); color: #FFA500; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600;\n}\n.status-badge[data-v-48529184] { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 600;\n}\n.status-badge.active[data-v-48529184] { background: rgba(34,197,94,0.15); color: #4ade80;\n}\n.status-badge.inactive[data-v-48529184] { background: rgba(239,68,68,0.15); color: #f87171;\n}\n.btn-sm[data-v-48529184] { padding: 4px 10px; border: none; border-radius: 5px; font-size: 0.72rem; font-weight: 600; cursor: pointer; margin-right: 3px;\n}\n.btn-edit[data-v-48529184] { background: rgba(59,130,246,0.15); color: #60a5fa;\n}\n.btn-danger[data-v-48529184] { background: rgba(239,68,68,0.15); color: #f87171;\n}\n.empty-td[data-v-48529184] { text-align: center; color: rgba(255,255,255,0.3); padding: 30px;\n}\n.modal-overlay[data-v-48529184] { position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 500;\n}\n.modal-box[data-v-48529184] { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 28px; width: 560px; max-height: 85vh; overflow-y: auto;\n}\n.modal-title[data-v-48529184] { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 20px;\n}\n.form-group[data-v-48529184] { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px;\n}\n.form-group label[data-v-48529184] { color: rgba(255,255,255,0.6); font-size: 0.78rem;\n}\n.form-input option[data-v-48529184] { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);\n}\n.form-grid2[data-v-48529184] { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;\n}\n.modal-actions[data-v-48529184] { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;\n}\n.btn-cancel[data-v-48529184] { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_id_48529184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_id_48529184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_id_48529184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/Questions.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Questions.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Questions_vue_vue_type_template_id_48529184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Questions.vue?vue&type=template&id=48529184&scoped=true& */ "./resources/js/views/admin/Questions.vue?vue&type=template&id=48529184&scoped=true&");
/* harmony import */ var _Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questions.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Questions.vue?vue&type=script&lang=js&");
/* harmony import */ var _Questions_vue_vue_type_style_index_0_id_48529184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css& */ "./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Questions_vue_vue_type_template_id_48529184_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Questions_vue_vue_type_template_id_48529184_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "48529184",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Questions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Questions.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Questions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_id_48529184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=style&index=0&id=48529184&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/Questions.vue?vue&type=template&id=48529184&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/Questions.vue?vue&type=template&id=48529184&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_48529184_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_48529184_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_48529184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=template&id=48529184&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=template&id=48529184&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=template&id=48529184&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Questions.vue?vue&type=template&id=48529184&scoped=true& ***!
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
  return _c("div", { staticClass: "admin-questions" }, [
    _c("div", { staticClass: "page-header" }, [
      _c("h1", { staticClass: "page-heading" }, [
        _vm._v("Question Configuration"),
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn-orange", on: { click: _vm.openAdd } }, [
        _vm._v("+ Add Question"),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "filter-row" }, [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.filterMatch,
              expression: "filterMatch",
            },
          ],
          staticClass: "form-input select-sm",
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
                _vm.filterMatch = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
              _vm.fetchQuestions,
            ],
          },
        },
        [
          _c("option", { attrs: { value: "" } }, [_vm._v("All Matches")]),
          _vm._v(" "),
          _vm._l(_vm.matches, function (m) {
            return _c("option", { key: m.id, domProps: { value: m.id } }, [
              _vm._v(
                _vm._s(m.team1 && m.team1.name) +
                  " vs " +
                  _vm._s(m.team2 && m.team2.name) +
                  " (" +
                  _vm._s(m.match_date) +
                  ")"
              ),
            ])
          }),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-card" }, [
      _c("div", { staticClass: "table-wrapper" }, [
        _c("table", { staticClass: "data-table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.questions, function (q, i) {
                return _c("tr", { key: q.id }, [
                  _c("td", [_vm._v(_vm._s(i + 1))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small-td" }, [
                    _vm._v(
                      _vm._s(
                        q.match
                          ? (q.match.team1 && q.match.team1.name) +
                              " vs " +
                              (q.match.team2 && q.match.team2.name)
                          : "General"
                      )
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(q.question_text))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "type-badge" }, [
                      _vm._v(_vm._s(q.type)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "points-pill" }, [
                      _vm._v(_vm._s(q.points)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "answer-td" }, [
                    _vm._v(_vm._s(q.correct_answer || "—")),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        class: [
                          "status-badge",
                          q.is_active ? "active" : "inactive",
                        ],
                      },
                      [_vm._v(_vm._s(q.is_active ? "Yes" : "No"))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn-sm btn-edit",
                        on: {
                          click: function ($event) {
                            return _vm.openEdit(q)
                          },
                        },
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn-sm btn-danger",
                        on: {
                          click: function ($event) {
                            return _vm.deleteQuestion(q.id)
                          },
                        },
                      },
                      [_vm._v("Del")]
                    ),
                  ]),
                ])
              }),
              _vm._v(" "),
              _vm.questions.length === 0
                ? _c("tr", [
                    _c(
                      "td",
                      { staticClass: "empty-td", attrs: { colspan: "8" } },
                      [_vm._v("No questions found.")]
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
    _vm.modal
      ? _c(
          "div",
          {
            staticClass: "modal-overlay",
            on: {
              click: function ($event) {
                if ($event.target !== $event.currentTarget) {
                  return null
                }
                return _vm.closeModal.apply(null, arguments)
              },
            },
          },
          [
            _c("div", { staticClass: "modal-box" }, [
              _c("h3", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.editId ? "Edit Question" : "Add Question")),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Match (optional)")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.match_id,
                        expression: "form.match_id",
                        modifiers: { number: true },
                      },
                    ],
                    staticClass: "form-input",
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return _vm._n(val)
                          })
                        _vm.$set(
                          _vm.form,
                          "match_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { domProps: { value: null } }, [
                      _vm._v("General (no match)"),
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
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Question Text")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.question_text,
                      expression: "form.question_text",
                    },
                  ],
                  staticClass: "form-input",
                  attrs: { rows: "3", placeholder: "Enter question..." },
                  domProps: { value: _vm.form.question_text },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "question_text", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-grid2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Type")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.type,
                          expression: "form.type",
                        },
                      ],
                      staticClass: "form-input",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "type",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "team_choice" } }, [
                        _vm._v("Team Choice"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "dropdown" } }, [
                        _vm._v("Dropdown"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "mcq" } }, [
                        _vm._v("MCQ"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Points")]),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.points,
                        expression: "form.points",
                        modifiers: { number: true },
                      },
                    ],
                    staticClass: "form-input",
                    attrs: { type: "number", min: "1" },
                    domProps: { value: _vm.form.points },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "points",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function ($event) {
                        return _vm.$forceUpdate()
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Sort Order")]),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.form.sort_order,
                        expression: "form.sort_order",
                        modifiers: { number: true },
                      },
                    ],
                    staticClass: "form-input",
                    attrs: { type: "number", min: "0" },
                    domProps: { value: _vm.form.sort_order },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "sort_order",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function ($event) {
                        return _vm.$forceUpdate()
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Active")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.is_active,
                          expression: "form.is_active",
                        },
                      ],
                      staticClass: "form-input",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "is_active",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { domProps: { value: true } }, [
                        _vm._v("Yes"),
                      ]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: false } }, [
                        _vm._v("No"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm.form.type === "dropdown" || _vm.form.type === "mcq"
                ? _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Options (one per line)")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.optionsText,
                          expression: "optionsText",
                        },
                      ],
                      staticClass: "form-input",
                      attrs: {
                        rows: "4",
                        placeholder: "Option 1&#10;Option 2&#10;Option 3",
                      },
                      domProps: { value: _vm.optionsText },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.optionsText = $event.target.value
                        },
                      },
                    }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Correct Answer")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.correct_answer,
                      expression: "form.correct_answer",
                    },
                  ],
                  staticClass: "form-input",
                  attrs: { placeholder: "Set after match completes" },
                  domProps: { value: _vm.form.correct_answer },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "correct_answer", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-actions" }, [
                _c(
                  "button",
                  { staticClass: "btn-cancel", on: { click: _vm.closeModal } },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn-orange",
                    attrs: { disabled: _vm.saving },
                    on: { click: _vm.saveQuestion },
                  },
                  [_vm._v(_vm._s(_vm.saving ? "Saving..." : "Save"))]
                ),
              ]),
            ]),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _c("th", [_vm._v("Match")]),
        _c("th", [_vm._v("Question")]),
        _c("th", [_vm._v("Type")]),
        _c("th", [_vm._v("Points")]),
        _c("th", [_vm._v("Correct Answer")]),
        _c("th", [_vm._v("Active")]),
        _c("th", [_vm._v("Actions")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);