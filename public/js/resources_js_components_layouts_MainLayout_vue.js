"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layouts_MainLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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


var RAFFLE_KEY = 'fifa2026_last_raffle_id';
var RAFFLE_POLL_INTERVAL = 30000; // 30 seconds

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MainLayout',
  data: function data() {
    return {
      showNotifications: false,
      showUserMenu: false,
      rafflePopup: false,
      raffleWinner: null,
      raffleOptedIn: false,
      _rafflePollTimer: null,
      showProfileModal: false,
      profileFile: null,
      profilePreview: null,
      profileUploading: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentUser', 'unreadCount', 'notifications'])),
  mounted: function mounted() {
    this.$store.dispatch('fetchNotifications');
    this.pollRaffleStatus();
    this._rafflePollTimer = setInterval(this.pollRaffleStatus, RAFFLE_POLL_INTERVAL);
  },
  beforeDestroy: function beforeDestroy() {
    if (this._rafflePollTimer) clearInterval(this._rafflePollTimer);
  },
  directives: {
    'click-outside': {
      bind: function bind(el, binding) {
        el._clickOutside = function (e) {
          if (!el.contains(e.target)) binding.value();
        };
        document.addEventListener('click', el._clickOutside);
      },
      unbind: function unbind(el) {
        document.removeEventListener('click', el._clickOutside);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['logout', 'markNotificationRead', 'markAllRead', 'fetchNotifications'])), {}, {
    toggleNotifications: function toggleNotifications(e) {
      e.stopPropagation();
      this.showNotifications = !this.showNotifications;
      this.showUserMenu = false;
    },
    toggleUserMenu: function toggleUserMenu(e) {
      e.stopPropagation();
      this.showUserMenu = !this.showUserMenu;
      this.showNotifications = false;
    },
    closeNotifications: function closeNotifications() {
      this.showNotifications = false;
    },
    closeUserMenu: function closeUserMenu() {
      this.showUserMenu = false;
    },
    markRead: function markRead(id) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('markNotificationRead', id);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    handleLogout: function handleLogout() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch('logout');
            case 2:
              _this2.$router.push({
                name: 'Login'
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onProfileFileChange: function onProfileFileChange(e) {
      var file = e.target.files[0];
      if (!file) return;
      this.profileFile = file;
      this.profilePreview = URL.createObjectURL(file);
    },
    uploadProfilePicture: function uploadProfilePicture() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var fd;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this3.profileFile) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _this3.profileUploading = true;
              _context3.prev = 3;
              fd = new FormData();
              fd.append('profile_picture', _this3.profileFile);
              _context3.next = 8;
              return _this3.$http.post('/api/auth/update-profile', fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 8:
              _context3.next = 10;
              return _this3.$store.dispatch('fetchMe');
            case 10:
              _this3.showProfileModal = false;
              _this3.profileFile = null;
              _this3.profilePreview = null;
              _this3.$toaster && _this3.$toaster.success('Profile picture updated!');
              _context3.next = 19;
              break;
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);
              _this3.$toaster && _this3.$toaster.error('Upload failed. Please try again.');
            case 19:
              _context3.prev = 19;
              _this3.profileUploading = false;
              return _context3.finish(19);
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 16, 19, 22]]);
      }))();
    },
    pollRaffleStatus: function pollRaffleStatus() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this4$$http$g, data, winner, lastSeenId;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this4.$http.get('/api/raffle/status');
            case 3:
              _yield$_this4$$http$g = _context4.sent;
              data = _yield$_this4$$http$g.data;
              _this4.raffleOptedIn = data.opted_in;
              winner = data.latest_winner;
              if (winner) {
                _context4.next = 9;
                break;
              }
              return _context4.abrupt("return");
            case 9:
              lastSeenId = parseInt(localStorage.getItem(RAFFLE_KEY) || '0');
              if (winner.id !== lastSeenId) {
                _this4.raffleWinner = winner;
                _this4.rafflePopup = true;
              }
              _context4.next = 15;
              break;
            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 13]]);
      }))();
    },
    dismissRaffle: function dismissRaffle() {
      if (this.raffleWinner) {
        localStorage.setItem(RAFFLE_KEY, String(this.raffleWinner.id));
      }
      this.rafflePopup = false;
    },
    toggleJoin: function toggleJoin() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _yield$_this5$$http$p, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _this5.$http.post('/api/raffle/join');
            case 3:
              _yield$_this5$$http$p = _context5.sent;
              data = _yield$_this5$$http$p.data;
              _this5.raffleOptedIn = data.opted_in;
              _this5.$toaster.success(data.message);
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              _this5.$toaster.error('Failed to update raffle status.');
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.main-layout[data-v-7a9c7a98] {\n    min-height: 100vh;\n    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);\n    display: flex;\n    flex-direction: column;\n}\n.top-nav[data-v-7a9c7a98] {\n    position: sticky; top: 0; z-index: 100;\n    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);\n    display: flex; align-items: center;\n    padding: 0 40px;\n    height: 70px;\n    border-bottom: 3px solid #FFA500;\n    gap: 24px;\n}\n.nav-brand[data-v-7a9c7a98] { display: flex; align-items: center; gap: 10px; flex-shrink: 0;\n}\n.nav-ball[data-v-7a9c7a98] { height: 40px; width: 40px; -o-object-fit: contain; object-fit: contain;\n}\n.nav-logo[data-v-7a9c7a98] { height: 44px; -o-object-fit: contain; object-fit: contain;\n}\n.brand-divider[data-v-7a9c7a98] { display: inline-block; width: 1.5px; height: 36px; background: rgba(255,255,255,0.3); border-radius: 2px; flex-shrink: 0;\n}\n.nav-title-logo[data-v-7a9c7a98] { height: 36px; -o-object-fit: contain; object-fit: contain;\n}\n.nav-title[data-v-7a9c7a98] {\n    color: #ffffff;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 800;\n    font-style: normal;\n    font-size: 20px;\n    line-height: 1.2;\n    letter-spacing: 0;\n    text-align: center;\n    white-space: nowrap;\n}\n.nav-tabs[data-v-7a9c7a98] { display: flex; gap: 8px; flex: 1; overflow-x: auto; align-items: center; scrollbar-width: none;\n}\n.nav-tabs[data-v-7a9c7a98]::-webkit-scrollbar { display: none;\n}\n.nav-tab[data-v-7a9c7a98] {\n    display: inline-flex; align-items: center; justify-content: center;\n    padding: 0 18px; height: 40px; border-radius: 50px;\n    color: #1C1153;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-style: normal;\n    font-size: 14px;\n    line-height: 40px;\n    letter-spacing: 0;\n    text-align: center;\n    white-space: nowrap;\n    text-decoration: none;\n    border: none;\n    background: #ffffff;\n    transition: all 0.2s;\n    flex-shrink: 0;\n}\n.nav-tab[data-v-7a9c7a98]:hover { background: #f0f0f0; color: #1C1153;\n}\n.nav-tab.active[data-v-7a9c7a98] {\n    background: #FFA500;\n    color: #fff;\n}\n.nav-actions[data-v-7a9c7a98] { display: flex; align-items: center; gap: 14px; flex-shrink: 0;\n}\n.notif-btn[data-v-7a9c7a98] {\n    position: relative; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.3);\n    color: #fff; cursor: pointer; padding: 0;\n    width: 42px; height: 42px; border-radius: 50%;\n    display: flex; align-items: center; justify-content: center;\n}\n.notif-badge[data-v-7a9c7a98] {\n    position: absolute; top: 2px; right: 2px;\n    background: #FFA500; color: #fff;\n    border-radius: 50%; width: 14px; height: 14px;\n    font-size: 9px; display: flex; align-items: center; justify-content: center;\n    font-weight: 700;\n}\n.avatar-nav-btn[data-v-7a9c7a98] { background: none; border: none; cursor: pointer; padding: 0;\n}\n.nav-avatar[data-v-7a9c7a98] { width: 38px; height: 38px; border-radius: 50%; -o-object-fit: cover; object-fit: cover; border: 2px solid #FFA500; display: block;\n}\n.logout-nav-btn[data-v-7a9c7a98] {\n    background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.3);\n    color: #fff; cursor: pointer; padding: 0;\n    width: 42px; height: 42px; border-radius: 50%;\n    display: flex; align-items: center; justify-content: center;\n    transition: background 0.2s;\n}\n.logout-nav-btn[data-v-7a9c7a98]:hover { background: rgba(255,100,100,0.25); border-color: #ff6b6b; color: #ff6b6b;\n}\n\n/* Profile Modal */\n.profile-modal[data-v-7a9c7a98] {\n    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);\n    border-radius: 16px; padding: 32px 28px; width: 300px;\n    text-align: center; position: relative;\n    border: 1px solid rgba(255,255,255,0.12);\n}\n.pm-avatar-wrap[data-v-7a9c7a98] {\n    position: relative; width: 110px; height: 110px;\n    margin: 0 auto 14px; cursor: pointer;\n}\n.pm-avatar[data-v-7a9c7a98] {\n    width: 110px; height: 110px; border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover; border: 3px solid #FFA500;\n}\n.pm-camera-btn[data-v-7a9c7a98] {\n    position: absolute; bottom: 0; right: 0;\n    background: #FFA500; border-radius: 50%;\n    width: 32px; height: 32px;\n    display: flex; align-items: center; justify-content: center;\n    cursor: pointer; color: #fff; border: 2px solid #1C1153;\n}\n.pm-file-input[data-v-7a9c7a98] { display: none;\n}\n.pm-name[data-v-7a9c7a98] { color: #fff; font-weight: 700; font-size: 1rem; margin-bottom: 4px;\n}\n.pm-code[data-v-7a9c7a98] { color: rgba(255,255,255,0.5); font-size: 0.78rem; margin-bottom: 20px;\n}\n.pm-save-btn[data-v-7a9c7a98] {\n    background: #FFA500; color: #fff; border: none;\n    border-radius: 8px; padding: 10px 32px;\n    font-weight: 700; font-size: 0.9rem; cursor: pointer;\n    width: 100%;\n}\n.pm-save-btn[data-v-7a9c7a98]:disabled { opacity: 0.6; cursor: not-allowed;\n}\n.notif-dropdown[data-v-7a9c7a98], .user-dropdown[data-v-7a9c7a98] {\n    position: fixed; top: 62px; right: 20px; z-index: 200;\n    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 12px; width: 300px;\n    box-shadow: 0 8px 32px rgba(0,0,0,0.4);\n    overflow: hidden;\n}\n.notif-header[data-v-7a9c7a98] {\n    display: flex; justify-content: space-between; align-items: center;\n    padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08);\n    color: #fff; font-weight: 600; font-size: 0.9rem;\n}\n.mark-all-btn[data-v-7a9c7a98] { background: none; border: none; color: #FFA500; font-size: 0.75rem; cursor: pointer;\n}\n.notif-empty[data-v-7a9c7a98] { padding: 20px; text-align: center; color: rgba(255,255,255,0.4); font-size: 0.85rem;\n}\n.notif-item[data-v-7a9c7a98] {\n    padding: 12px 16px; cursor: pointer;\n    border-bottom: 1px solid rgba(255,255,255,0.05);\n    transition: background 0.15s;\n}\n.notif-item[data-v-7a9c7a98]:hover { background: rgba(255,255,255,0.05);\n}\n.notif-item.unread[data-v-7a9c7a98] { background: rgba(255,165,0,0.06);\n}\n.notif-item-title[data-v-7a9c7a98] { color: #fff; font-size: 0.85rem; font-weight: 600;\n}\n.notif-item-msg[data-v-7a9c7a98] { color: rgba(255,255,255,0.6); font-size: 0.78rem; margin-top: 2px;\n}\n.user-info[data-v-7a9c7a98] { padding: 16px;\n}\n.user-name[data-v-7a9c7a98] { color: #fff; font-weight: 600;\n}\n.user-code[data-v-7a9c7a98] { color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-top: 2px;\n}\n.dropdown-divider[data-v-7a9c7a98] { height: 1px; background: rgba(255,255,255,0.08);\n}\n.dropdown-item[data-v-7a9c7a98] { width: 100%; background: none; border: none; padding: 12px 16px; text-align: left; cursor: pointer; color: rgba(255,255,255,0.8); font-size: 0.9rem;\n}\n.logout-item[data-v-7a9c7a98] { color: #ff6b6b;\n}\n.page-content[data-v-7a9c7a98] { flex: 1; padding: 20px;\n}\n.bottom-nav[data-v-7a9c7a98] {\n    display: none;\n    position: fixed; bottom: 0; left: 0; right: 0;\n    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-top: 1px solid rgba(255,255,255,0.1);\n    padding: 8px 0; justify-content: space-around; z-index: 100;\n}\n.bottom-tab[data-v-7a9c7a98] {\n    display: flex; flex-direction: column; align-items: center; gap: 2px;\n    color: rgba(255,255,255,0.45); font-size: 0.65rem; text-decoration: none;\n    padding: 4px 8px;\n}\n.bottom-tab.active[data-v-7a9c7a98] { color: #FFA500;\n}\n.bottom-tab.active svg[data-v-7a9c7a98] { stroke: #FFA500; filter: drop-shadow(0 0 4px rgba(255,165,0,0.7));\n}\n@media (max-width: 768px) {\n.nav-tabs[data-v-7a9c7a98] { display: none;\n}\n.bottom-nav[data-v-7a9c7a98] { display: flex;\n}\n.page-content[data-v-7a9c7a98] { padding: 12px 12px 72px;\n}\n\n    /* Navbar mobile */\n.top-nav[data-v-7a9c7a98] { padding: 0 14px; gap: 0; height: 60px; justify-content: space-between;\n}\n.nav-brand[data-v-7a9c7a98] { gap: 6px; flex: 1;\n}\n.nav-title[data-v-7a9c7a98] { font-size: 0.72rem; white-space: nowrap;\n}\n.nav-logo[data-v-7a9c7a98] { height: 30px;\n}\n.nav-title-logo[data-v-7a9c7a98] { height: 26px;\n}\n.brand-divider[data-v-7a9c7a98] { height: 26px;\n}\n.nav-tabs[data-v-7a9c7a98] { display: none;\n}\n.nav-actions[data-v-7a9c7a98] { display: flex; align-items: center; gap: 8px; flex-shrink: 0;\n}\n.notif-btn[data-v-7a9c7a98] { width: 34px; height: 34px;\n}\n.nav-avatar[data-v-7a9c7a98] { width: 30px; height: 30px;\n}\n.logout-nav-btn[data-v-7a9c7a98] { width: 34px; height: 34px;\n}\n}\n\n/* ── Raffle Popup ─────────────────────────── */\n.raffle-overlay[data-v-7a9c7a98] {\n    position: fixed; inset: 0; background: rgba(0,0,0,0.75);\n    display: flex; align-items: center; justify-content: center;\n    z-index: 1000; padding: 20px;\n}\n.raffle-modal[data-v-7a9c7a98] {\n    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);\n    border: 1px solid rgba(255,165,0,0.4);\n    border-radius: 20px; padding: 32px 28px;\n    width: 100%; max-width: 380px; text-align: center;\n    position: relative;\n    box-shadow: 0 0 60px rgba(255,165,0,0.2);\n}\n.raffle-close[data-v-7a9c7a98] {\n    position: absolute; top: 14px; right: 16px;\n    background: none; border: none; color: rgba(255,255,255,0.5);\n    font-size: 1.1rem; cursor: pointer;\n}\n.raffle-confetti[data-v-7a9c7a98] { font-size: 3rem; margin-bottom: 6px;\n}\n.raffle-headline[data-v-7a9c7a98] {\n    color: #FFA500; font-family: 'Rajdhani', sans-serif;\n    font-size: 1.5rem; font-weight: 900; letter-spacing: 1px; margin-bottom: 2px;\n}\n.raffle-sub[data-v-7a9c7a98] { color: #fff; font-size: 0.75rem; margin-bottom: 16px;\n}\n.raffle-avatar[data-v-7a9c7a98] {\n    width: 100px; height: 100px; border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover; border: 3px solid #FFA500;\n    margin-bottom: 12px;\n}\n.raffle-winner-you[data-v-7a9c7a98] { color: #4ade80; font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;\n}\n.raffle-winner-name[data-v-7a9c7a98] { color: #fff; font-weight: 700; font-size: 1.1rem; margin-bottom: 2px;\n}\n.raffle-winner-code[data-v-7a9c7a98] { color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-bottom: 6px;\n}\n.raffle-prize[data-v-7a9c7a98] {\n    display: inline-block; background: rgba(255,165,0,0.15);\n    color: #FFA500; padding: 4px 14px; border-radius: 20px;\n    font-size: 0.9rem; font-weight: 700; margin-bottom: 6px;\n}\n.raffle-notes[data-v-7a9c7a98] { color: rgba(255,255,255,0.45); font-size: 0.78rem; margin-bottom: 10px;\n}\n.raffle-join-section[data-v-7a9c7a98] { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 16px; margin: 16px 0 12px;\n}\n.raffle-join-label[data-v-7a9c7a98] { color: rgba(255,255,255,0.6); font-size: 0.8rem; margin-bottom: 10px;\n}\n.raffle-join-btn[data-v-7a9c7a98] {\n    width: 100%; background: #3b82f6; color: #fff; border: none;\n    border-radius: 8px; padding: 10px 20px; font-weight: 700;\n    font-family: 'Rajdhani', sans-serif; font-size: 0.95rem; cursor: pointer;\n    transition: all 0.2s;\n}\n.raffle-join-btn.joined[data-v-7a9c7a98] { background: rgba(34,197,94,0.2); color: #4ade80; border: 1px solid rgba(34,197,94,0.4);\n}\n.raffle-dismiss-btn[data-v-7a9c7a98] {\n    background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6);\n    border: none; border-radius: 8px; padding: 8px 24px;\n    font-size: 0.85rem; cursor: pointer;\n}\n\n/* Transition */\n.raffle-fade-enter-active[data-v-7a9c7a98], .raffle-fade-leave-active[data-v-7a9c7a98] { transition: opacity 0.3s;\n}\n.raffle-fade-enter[data-v-7a9c7a98], .raffle-fade-leave-to[data-v-7a9c7a98] { opacity: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_7a9c7a98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_7a9c7a98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_7a9c7a98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/layouts/MainLayout.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/MainLayout.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainLayout_vue_vue_type_template_id_7a9c7a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true& */ "./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true&");
/* harmony import */ var _MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _MainLayout_vue_vue_type_style_index_0_id_7a9c7a98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css& */ "./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainLayout_vue_vue_type_template_id_7a9c7a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MainLayout_vue_vue_type_template_id_7a9c7a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a9c7a98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/MainLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_7a9c7a98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=style&index=0&id=7a9c7a98&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_template_id_7a9c7a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_template_id_7a9c7a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_template_id_7a9c7a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/MainLayout.vue?vue&type=template&id=7a9c7a98&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "main-layout" },
    [
      _c("nav", { staticClass: "top-nav" }, [
        _c("div", { staticClass: "nav-brand" }, [
          _c("img", {
            staticClass: "nav-logo",
            attrs: {
              src: _vm.$imgBase + "/images/fifa-logo.png",
              alt: "FIFA",
              onerror: "this.style.display='none'",
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "brand-divider" }),
          _vm._v(" "),
          _c("img", {
            staticClass: "nav-title-logo",
            attrs: {
              src: _vm.$imgBase + "/images/abecab-abetis-logo.png",
              alt: "Abecab Abetis",
              onerror: "this.style.display='none'",
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "nav-tabs" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-tab",
                attrs: { to: { name: "LiveScore" }, "active-class": "active" },
              },
              [_vm._v("Live Score")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-tab",
                attrs: { to: { name: "Fixtures" }, "active-class": "active" },
              },
              [_vm._v("Match Fixtures & Results")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-tab",
                attrs: { to: { name: "Prediction" }, "active-class": "active" },
              },
              [_vm._v("Prediction")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-tab",
                attrs: { to: { name: "Winners" }, "active-class": "active" },
              },
              [_vm._v("Winners History")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-tab",
                attrs: { to: { name: "FifaFacts" }, "active-class": "active" },
              },
              [_vm._v("FIFA Facts")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "nav-actions" }, [
          _c(
            "button",
            {
              staticClass: "notif-btn",
              on: { click: _vm.toggleNotifications },
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  },
                },
                [
                  _c("path", {
                    attrs: { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" },
                  }),
                  _c("path", { attrs: { d: "M13.73 21a2 2 0 0 1-3.46 0" } }),
                ]
              ),
              _vm._v(" "),
              _vm.unreadCount > 0
                ? _c("span", { staticClass: "notif-badge" }, [
                    _vm._v(_vm._s(_vm.unreadCount)),
                  ])
                : _vm._e(),
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "avatar-nav-btn",
              attrs: { title: "Update Profile Picture" },
              on: {
                click: function ($event) {
                  _vm.showProfileModal = true
                },
              },
            },
            [
              _c("img", {
                staticClass: "nav-avatar",
                attrs: {
                  src:
                    _vm.currentUser.profile_picture_url ||
                    _vm.$imgBase + "/images/default-avatar.png",
                  onerror:
                    "this.src=window.__IMG__ + '/images/default-avatar.png'",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "logout-nav-btn",
              attrs: { title: "Logout" },
              on: { click: _vm.handleLogout },
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  },
                },
                [
                  _c("path", {
                    attrs: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" },
                  }),
                  _c("polyline", { attrs: { points: "16 17 21 12 16 7" } }),
                  _c("line", {
                    attrs: { x1: "21", y1: "12", x2: "9", y2: "12" },
                  }),
                ]
              ),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.showNotifications
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: _vm.closeNotifications,
                  expression: "closeNotifications",
                },
              ],
              staticClass: "notif-dropdown",
            },
            [
              _c("div", { staticClass: "notif-header" }, [
                _c("span", [_vm._v("Notifications")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "mark-all-btn",
                    on: { click: _vm.markAllRead },
                  },
                  [_vm._v("Mark all read")]
                ),
              ]),
              _vm._v(" "),
              _vm.notifications.length === 0
                ? _c("div", { staticClass: "notif-empty" }, [
                    _vm._v("No notifications"),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.notifications, function (n) {
                return _c(
                  "div",
                  {
                    key: n.id,
                    staticClass: "notif-item",
                    class: { unread: !n.is_read },
                    on: {
                      click: function ($event) {
                        return _vm.markRead(n.id)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "notif-item-title" }, [
                      _vm._v(_vm._s(n.title)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "notif-item-msg" }, [
                      _vm._v(_vm._s(n.message)),
                    ]),
                  ]
                )
              }),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.showUserMenu
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: _vm.closeUserMenu,
                  expression: "closeUserMenu",
                },
              ],
              staticClass: "user-dropdown",
            },
            [
              _c("div", { staticClass: "user-info" }, [
                _c("div", { staticClass: "user-name" }, [
                  _vm._v(_vm._s(_vm.currentUser.name)),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "user-code" }, [
                  _vm._v(_vm._s(_vm.currentUser.unique_code)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "dropdown-item logout-item",
                  on: { click: _vm.handleLogout },
                },
                [_vm._v("Logout")]
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "page-content" }, [_c("router-view")], 1),
      _vm._v(" "),
      _c(
        "nav",
        { staticClass: "bottom-nav" },
        [
          _c(
            "router-link",
            {
              staticClass: "bottom-tab",
              attrs: { to: { name: "LiveScore" }, "active-class": "active" },
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  },
                },
                [_c("circle", { attrs: { cx: "12", cy: "12", r: "10" } })]
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Live")]),
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "bottom-tab",
              attrs: { to: { name: "Fixtures" }, "active-class": "active" },
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  },
                },
                [
                  _c("rect", {
                    attrs: {
                      x: "3",
                      y: "4",
                      width: "18",
                      height: "18",
                      rx: "2",
                    },
                  }),
                  _c("line", {
                    attrs: { x1: "16", y1: "2", x2: "16", y2: "6" },
                  }),
                  _c("line", { attrs: { x1: "8", y1: "2", x2: "8", y2: "6" } }),
                  _c("line", {
                    attrs: { x1: "3", y1: "10", x2: "21", y2: "10" },
                  }),
                ]
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Fixtures")]),
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "bottom-tab",
              attrs: { to: { name: "Prediction" }, "active-class": "active" },
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  },
                },
                [
                  _c("path", { attrs: { d: "M9 11l3 3L22 4" } }),
                  _c("path", {
                    attrs: {
                      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
                    },
                  }),
                ]
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Predict")]),
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "bottom-tab",
              attrs: { to: { name: "Winners" }, "active-class": "active" },
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  },
                },
                [
                  _c("path", { attrs: { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" } }),
                  _c("path", {
                    attrs: { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" },
                  }),
                  _c("path", { attrs: { d: "M4 22h16" } }),
                  _c("path", {
                    attrs: {
                      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
                    },
                  }),
                  _c("path", {
                    attrs: {
                      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
                    },
                  }),
                  _c("path", { attrs: { d: "M18 2H6v7a6 6 0 0 0 12 0V2z" } }),
                ]
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Winners")]),
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "bottom-tab",
              attrs: { to: { name: "FifaFacts" }, "active-class": "active" },
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  },
                },
                [
                  _c("circle", { attrs: { cx: "12", cy: "12", r: "10" } }),
                  _c("line", {
                    attrs: { x1: "12", y1: "8", x2: "12", y2: "12" },
                  }),
                  _c("line", {
                    attrs: { x1: "12", y1: "16", x2: "12.01", y2: "16" },
                  }),
                ]
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Facts")]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "raffle-fade" } }, [
        _vm.rafflePopup
          ? _c(
              "div",
              {
                staticClass: "raffle-overlay",
                on: {
                  click: function ($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.dismissRaffle.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "raffle-modal" }, [
                  _c(
                    "button",
                    {
                      staticClass: "raffle-close",
                      on: { click: _vm.dismissRaffle },
                    },
                    [_vm._v("✕")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "raffle-confetti" }, [_vm._v("🎉")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "raffle-headline" }, [
                    _vm._v("Raffle Draw Winner!"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "raffle-sub" }, [
                    _vm._v("FIFA World Cup 2026™"),
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "raffle-avatar",
                    attrs: {
                      src: _vm.raffleWinner.profile_picture_url,
                      onerror:
                        "this.src=window.__IMG__ + '/images/default-avatar.png'",
                    },
                  }),
                  _vm._v(" "),
                  _vm.raffleWinner.is_me
                    ? _c("div", { staticClass: "raffle-winner-you" }, [
                        _vm._v("🎊 Congratulations! It's YOU!"),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "raffle-winner-name" }, [
                    _vm._v(_vm._s(_vm.raffleWinner.name)),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "raffle-winner-code" }, [
                    _vm._v(
                      "Doctor Code: " + _vm._s(_vm.raffleWinner.unique_code)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "raffle-prize" }, [
                    _vm._v(
                      "+" +
                        _vm._s(_vm.raffleWinner.prize_points) +
                        " Bonus Points"
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.raffleWinner.notes
                    ? _c("div", { staticClass: "raffle-notes" }, [
                        _vm._v(_vm._s(_vm.raffleWinner.notes)),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "raffle-join-section" }, [
                    _c("div", { staticClass: "raffle-join-label" }, [
                      _vm._v("Want to be in the next draw?"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "raffle-join-btn",
                        class: { joined: _vm.raffleOptedIn },
                        on: { click: _vm.toggleJoin },
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.raffleOptedIn
                                ? "✓ You're In the Raffle!"
                                : "Join Next Raffle"
                            ) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "raffle-dismiss-btn",
                      on: { click: _vm.dismissRaffle },
                    },
                    [_vm._v("Close")]
                  ),
                ]),
              ]
            )
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "raffle-fade" } }, [
        _vm.showProfileModal
          ? _c(
              "div",
              {
                staticClass: "raffle-overlay",
                on: {
                  click: function ($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    _vm.showProfileModal = false
                  },
                },
              },
              [
                _c("div", { staticClass: "profile-modal" }, [
                  _c(
                    "button",
                    {
                      staticClass: "raffle-close",
                      on: {
                        click: function ($event) {
                          _vm.showProfileModal = false
                        },
                      },
                    },
                    [_vm._v("✕")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "pm-avatar-wrap" }, [
                    _c("img", {
                      staticClass: "pm-avatar",
                      attrs: {
                        src:
                          _vm.profilePreview ||
                          _vm.currentUser.profile_picture_url ||
                          _vm.$imgBase + "/images/default-avatar.png",
                        onerror:
                          "this.src=window.__IMG__ + '/images/default-avatar.png'",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "pm-camera-btn",
                        attrs: { for: "profile-pic-input" },
                      },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
                              },
                            }),
                            _c("circle", {
                              attrs: { cx: "12", cy: "13", r: "4" },
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "pm-file-input",
                      attrs: {
                        id: "profile-pic-input",
                        type: "file",
                        accept: "image/*",
                      },
                      on: { change: _vm.onProfileFileChange },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pm-name" }, [
                    _vm._v(_vm._s(_vm.currentUser.name)),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pm-code" }, [
                    _vm._v(_vm._s(_vm.currentUser.unique_code)),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "pm-save-btn",
                      attrs: {
                        disabled: !_vm.profileFile || _vm.profileUploading,
                      },
                      on: { click: _vm.uploadProfilePicture },
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.profileUploading ? "Saving..." : "Save Photo"
                          ) +
                          "\n                "
                      ),
                    ]
                  ),
                ]),
              ]
            )
          : _vm._e(),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);