"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_fixtures_Fixtures_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

var FIFA_GROUPS = [{
  name: 'A',
  teams: [{
    name: 'MEXICO',
    code: 'mx'
  }, {
    name: 'SOUTH AFRICA',
    code: 'za'
  }, {
    name: 'KOREA REP.',
    code: 'kr'
  }, {
    name: 'CZECHIA',
    code: 'cz'
  }]
}, {
  name: 'B',
  teams: [{
    name: 'CANADA',
    code: 'ca'
  }, {
    name: 'BOSNIA & HRZ',
    code: 'ba'
  }, {
    name: 'QATAR',
    code: 'qa'
  }, {
    name: 'SWITZERLAND',
    code: 'ch'
  }]
}, {
  name: 'C',
  teams: [{
    name: 'BRAZIL',
    code: 'br'
  }, {
    name: 'MOROCCO',
    code: 'ma'
  }, {
    name: 'HAITI',
    code: 'ht'
  }, {
    name: 'SCOTLAND',
    code: 'gb-sct'
  }]
}, {
  name: 'D',
  teams: [{
    name: 'USA',
    code: 'us'
  }, {
    name: 'PARAGUAY',
    code: 'py'
  }, {
    name: 'AUSTRALIA',
    code: 'au'
  }, {
    name: 'TÜRKIYE',
    code: 'tr'
  }]
}, {
  name: 'E',
  teams: [{
    name: 'GERMANY',
    code: 'de'
  }, {
    name: 'CURAÇAO',
    code: 'cw'
  }, {
    name: 'IVORY COAST',
    code: 'ci'
  }, {
    name: 'ECUADOR',
    code: 'ec'
  }]
}, {
  name: 'F',
  teams: [{
    name: 'NETHERLANDS',
    code: 'nl'
  }, {
    name: 'JAPAN',
    code: 'jp'
  }, {
    name: 'SWEDEN',
    code: 'se'
  }, {
    name: 'TUNISIA',
    code: 'tn'
  }]
}, {
  name: 'G',
  teams: [{
    name: 'BELGIUM',
    code: 'be'
  }, {
    name: 'EGYPT',
    code: 'eg'
  }, {
    name: 'IRAN',
    code: 'ir'
  }, {
    name: 'NEW ZEALAND',
    code: 'nz'
  }]
}, {
  name: 'H',
  teams: [{
    name: 'SPAIN',
    code: 'es'
  }, {
    name: 'CAPE VERDE',
    code: 'cv'
  }, {
    name: 'SAUDI ARABIA',
    code: 'sa'
  }, {
    name: 'URUGUAY',
    code: 'uy'
  }]
}, {
  name: 'I',
  teams: [{
    name: 'FRANCE',
    code: 'fr'
  }, {
    name: 'SENEGAL',
    code: 'sn'
  }, {
    name: 'IRAQ',
    code: 'iq'
  }, {
    name: 'NORWAY',
    code: 'no'
  }]
}, {
  name: 'J',
  teams: [{
    name: 'ARGENTINA',
    code: 'ar'
  }, {
    name: 'ALGERIA',
    code: 'dz'
  }, {
    name: 'AUSTRIA',
    code: 'at'
  }, {
    name: 'JORDAN',
    code: 'jo'
  }]
}, {
  name: 'K',
  teams: [{
    name: 'PORTUGAL',
    code: 'pt'
  }, {
    name: 'DR CONGO',
    code: 'cd'
  }, {
    name: 'UZBEKISTAN',
    code: 'uz'
  }, {
    name: 'COLOMBIA',
    code: 'co'
  }]
}, {
  name: 'L',
  teams: [{
    name: 'ENGLAND',
    code: 'gb-eng'
  }, {
    name: 'CROATIA',
    code: 'hr'
  }, {
    name: 'GHANA',
    code: 'gh'
  }, {
    name: 'PANAMA',
    code: 'pa'
  }]
}];

// map common team names → ISO flag codes
var NAME_TO_CODE = {
  mexico: 'mx',
  'south africa': 'za',
  'korea republic': 'kr',
  'south korea': 'kr',
  'korea rep.': 'kr',
  czechia: 'cz',
  canada: 'ca',
  'bosnia': 'ba',
  'bosnia and herzegovina': 'ba',
  'bosnia & hrz': 'ba',
  qatar: 'qa',
  switzerland: 'ch',
  brazil: 'br',
  morocco: 'ma',
  haiti: 'ht',
  scotland: 'gb-sct',
  'usa': 'us',
  'united states': 'us',
  paraguay: 'py',
  australia: 'au',
  'türkiye': 'tr',
  turkey: 'tr',
  germany: 'de',
  'curaçao': 'cw',
  curacao: 'cw',
  'ivory coast': 'ci',
  "cote d'ivoire": 'ci',
  ecuador: 'ec',
  netherlands: 'nl',
  japan: 'jp',
  sweden: 'se',
  tunisia: 'tn',
  belgium: 'be',
  egypt: 'eg',
  iran: 'ir',
  'new zealand': 'nz',
  spain: 'es',
  'cape verde': 'cv',
  'saudi arabia': 'sa',
  uruguay: 'uy',
  france: 'fr',
  senegal: 'sn',
  iraq: 'iq',
  norway: 'no',
  argentina: 'ar',
  algeria: 'dz',
  austria: 'at',
  jordan: 'jo',
  portugal: 'pt',
  'dr congo': 'cd',
  'democratic republic of congo': 'cd',
  uzbekistan: 'uz',
  colombia: 'co',
  england: 'gb-eng',
  croatia: 'hr',
  ghana: 'gh',
  panama: 'pa',
  italy: 'it',
  nigeria: 'ng',
  cameroon: 'cm',
  chile: 'cl',
  peru: 'pe',
  denmark: 'dk',
  poland: 'pl',
  serbia: 'rs',
  ukraine: 'ua'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Fixtures',
  data: function data() {
    return {
      fifaGroups: FIFA_GROUPS,
      matches: [],
      selectedGroup: null,
      selectedTeamCode: null,
      teamSearch: '',
      loading: true
    };
  },
  computed: {
    allSidebarTeams: function allSidebarTeams() {
      var seen = new Set();
      var teams = [];
      FIFA_GROUPS.forEach(function (g) {
        g.teams.forEach(function (t) {
          if (!seen.has(t.code)) {
            seen.add(t.code);
            teams.push(t);
          }
        });
      });
      return teams.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    },
    filteredSidebarTeams: function filteredSidebarTeams() {
      var s = this.teamSearch.toLowerCase();
      if (!s) return this.allSidebarTeams;
      return this.allSidebarTeams.filter(function (t) {
        return t.name.toLowerCase().includes(s);
      });
    },
    upcomingMatches: function upcomingMatches() {
      var _this = this;
      return this.matches.filter(function (m) {
        if (m.status === 'completed') return false;
        if (_this.selectedGroup && m.group_name !== _this.selectedGroup) return false;
        if (_this.selectedTeamCode) {
          var t1 = (m.team1 && m.team1.name || '').toLowerCase();
          var t2 = (m.team2 && m.team2.name || '').toLowerCase();
          var sel = _this.selectedTeamCode;
          if (NAME_TO_CODE[t1] !== sel && NAME_TO_CODE[t2] !== sel) return false;
        }
        return true;
      });
    },
    completedMatches: function completedMatches() {
      var _this2 = this;
      return this.matches.filter(function (m) {
        if (m.status !== 'completed') return false;
        if (_this2.selectedGroup && m.group_name !== _this2.selectedGroup) return false;
        if (_this2.selectedTeamCode) {
          var t1 = (m.team1 && m.team1.name || '').toLowerCase();
          var t2 = (m.team2 && m.team2.name || '').toLowerCase();
          var sel = _this2.selectedTeamCode;
          if (NAME_TO_CODE[t1] !== sel && NAME_TO_CODE[t2] !== sel) return false;
        }
        return true;
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$_this3$$http$g, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this3.$http.get('/api/matches');
          case 2:
            _yield$_this3$$http$g = _context.sent;
            data = _yield$_this3$$http$g.data;
            _this3.matches = data.data;
            _this3.loading = false;
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    flagUrl: function flagUrl(code) {
      return "https://flagcdn.com/w40/".concat(code.toLowerCase(), ".png");
    },
    teamFlagUrl: function teamFlagUrl(name) {
      if (!name) return window.__IMG__ + '/images/default-avatar.png';
      var code = NAME_TO_CODE[name.toLowerCase()];
      return code ? this.flagUrl(code) : window.__IMG__ + '/images/default-avatar.png';
    },
    teamObjFlagUrl: function teamObjFlagUrl(team) {
      if (!team) return window.__IMG__ + '/images/default-avatar.png';
      if (team.flag_emoji) return this.flagUrl(team.flag_emoji);
      return this.teamFlagUrl(team.name);
    },
    shortName: function shortName(name) {
      if (!name) return '???';
      var words = name.trim().split(' ');
      return words.length === 1 ? name.substring(0, 3).toUpperCase() : words.map(function (w) {
        return w[0];
      }).join('').substring(0, 3).toUpperCase();
    },
    toggleGroup: function toggleGroup(g) {
      this.selectedGroup = this.selectedGroup === g ? null : g;
    },
    toggleTeam: function toggleTeam(code) {
      this.selectedTeamCode = this.selectedTeamCode === code ? null : code;
    },
    scrollGroups: function scrollGroups(dir) {
      var t = this.$refs.groupsTrack;
      if (t) t.scrollBy({
        left: dir * 150,
        behavior: 'smooth'
      });
    },
    parseDate: function parseDate(d) {
      if (!d) return null;
      // supports dd/mm/yyyy and yyyy-mm-dd
      var p = d.includes('/') ? d.split('/') : d.split('-').reverse();
      return new Date(parseInt(p[2]), parseInt(p[1]) - 1, parseInt(p[0]));
    },
    formatDay: function formatDay(d) {
      var dt = this.parseDate(d);
      return dt ? dt.getDate() : '';
    },
    formatMonth: function formatMonth(d) {
      var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      var dt = this.parseDate(d);
      return dt ? months[dt.getMonth()] : '';
    },
    formatWeekday: function formatWeekday(d) {
      var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      var dt = this.parseDate(d);
      return dt ? days[dt.getDay()] : '';
    },
    formatTime: function formatTime(t) {
      if (!t) return '';
      var parts = t.split(':');
      var h = parseInt(parts[0]);
      var ampm = h >= 12 ? 'PM' : 'AM';
      var h12 = h % 12 || 12;
      return h12 + ' ' + ampm;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ── Page ──────────────────────────────────── */\n.fixtures-page[data-v-187acbc0] { display: flex; flex-direction: column; gap: 14px;\n}\n\n/* ── Groups Carousel ───────────────────────── */\n.groups-bar[data-v-187acbc0] {\n    display: flex; align-items: stretch;\n    background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);\n    border-radius: 12px; overflow: hidden;\n    border: 1px solid rgba(255,255,255,0.08);\n}\n.slider-btn[data-v-187acbc0] {\n    background: rgba(255,255,255,0.07); border: none; color: #fff;\n    font-size: 1.4rem; padding: 0 14px; cursor: pointer; flex-shrink: 0;\n    transition: background 0.2s;\n}\n.slider-btn[data-v-187acbc0]:hover { background: rgba(255,165,0,0.2);\n}\n.groups-track[data-v-187acbc0] {\n    display: flex; overflow-x: auto; flex: 1; scrollbar-width: none;\n    gap: 8px; padding: 10px 10px;\n}\n.groups-track[data-v-187acbc0]::-webkit-scrollbar { display: none;\n}\n.group-card[data-v-187acbc0] {\n    min-width: 138px; padding: 10px 12px 12px; cursor: pointer;\n    background: rgba(255,255,255,0.05);\n    border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 10px; flex-shrink: 0;\n    transition: all 0.2s;\n}\n.group-card[data-v-187acbc0]:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.2);\n}\n.group-card.active[data-v-187acbc0] { background: rgba(255,165,0,0.12); border-color: rgba(255,165,0,0.5);\n}\n.group-label[data-v-187acbc0] {\n    display: inline-flex; align-items: center; gap: 4px;\n    background: #ffffff; border-radius: 4px;\n    padding: 3px 8px; margin-bottom: 10px;\n}\n.gl-word[data-v-187acbc0] { color: #1A0040; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;\n}\n.gl-letter[data-v-187acbc0] { color: #000; font-size: 0.85rem; font-weight: 900; font-family: 'Rajdhani', sans-serif; line-height: 1;\n}\n.group-teams-list[data-v-187acbc0] { display: flex; flex-direction: column; gap: 7px;\n}\n.group-team[data-v-187acbc0] { display: flex; align-items: center; gap: 8px;\n}\n.gf-img[data-v-187acbc0] { width: 26px; height: 18px; -o-object-fit: cover; object-fit: cover; border-radius: 2px; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n}\n.gf-name[data-v-187acbc0] { color: #fff; font-size: 0.65rem; font-weight: 600; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.3px;\n}\n\n/* ── Body ──────────────────────────────────── */\n.fixtures-body[data-v-187acbc0] { display: flex; gap: 14px; align-items: flex-start;\n}\n\n/* ── Teams Sidebar ─────────────────────────── */\n.teams-sidebar[data-v-187acbc0] {\n    width: 155px; flex-shrink: 0;\n    background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);\n    border-radius: 12px; padding: 14px;\n    border: 1px solid rgba(255,255,255,0.08);\n}\n.search-box[data-v-187acbc0] {\n    display: flex; align-items: center; gap: 8px;\n    background: rgba(255,255,255,0.08); border-radius: 8px;\n    padding: 8px 12px; margin-bottom: 12px;\n    border: 1px solid rgba(255,255,255,0.1);\n}\n.search-input[data-v-187acbc0] { background: none; border: none; color: #fff; font-size: 0.8rem; outline: none; width: 100%;\n}\n.search-input[data-v-187acbc0]::-moz-placeholder { color: rgba(255,255,255,0.4);\n}\n.search-input[data-v-187acbc0]::placeholder { color: rgba(255,255,255,0.4);\n}\n.sidebar-label[data-v-187acbc0] { color: rgba(255,255,255,0.4); font-size: 0.62rem; margin-bottom: 8px; font-weight: 600; letter-spacing: 0.3px;\n}\n.team-filter-item[data-v-187acbc0] {\n    display: flex; align-items: center; gap: 8px;\n    padding: 7px 10px; border-radius: 8px; cursor: pointer;\n    margin-bottom: 6px; transition: all 0.15s;\n    background: rgba(255,255,255,0.05);\n    border: 1px solid rgba(255,255,255,0.12);\n}\n.team-filter-item[data-v-187acbc0]:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25);\n}\n.team-filter-item.active[data-v-187acbc0] { background: rgba(255,165,0,0.15); border-color: rgba(255,165,0,0.45);\n}\n.tf-img[data-v-187acbc0] { width: 24px; height: 16px; -o-object-fit: cover; object-fit: cover; border-radius: 2px; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n}\n.tf-name[data-v-187acbc0] { color: #fff; font-size: 0.72rem; font-weight: 600;\n}\n.team-list[data-v-187acbc0] {\n    overflow-y: auto; max-height: calc(100vh - 260px);\n    scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.3) transparent;\n}\n.team-list[data-v-187acbc0]::-webkit-scrollbar { width: 3px;\n}\n.team-list[data-v-187acbc0]::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.3); border-radius: 3px;\n}\n\n/* ── Columns ───────────────────────────────── */\n.fixtures-col[data-v-187acbc0], .results-col[data-v-187acbc0] {\n    flex: 1; min-width: 0;\n    background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);\n    border-radius: 12px; overflow: hidden;\n    border: 1px solid rgba(255,255,255,0.08);\n}\n.col-header[data-v-187acbc0] {\n    display: flex; align-items: center; gap: 12px;\n    padding: 14px 16px;\n    border-bottom: 2px solid rgba(255,165,0,0.35);\n    background: rgba(255,165,0,0.07);\n}\n.col-icon-circle[data-v-187acbc0] {\n    width: 48px; height: 48px; border-radius: 50%;\n    background: rgba(255,165,0,0.12);\n    border: 2px solid rgba(255,165,0,0.4);\n    display: flex; align-items: center; justify-content: center;\n    flex-shrink: 0;\n}\n.trophy-circle[data-v-187acbc0] { background: rgba(255,165,0,0.12); border-color: rgba(255,165,0,0.4);\n}\n.col-ball[data-v-187acbc0] { width: 30px; height: 30px; -o-object-fit: contain; object-fit: contain;\n}\n.col-title[data-v-187acbc0] { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 800; font-size: 1.1rem; letter-spacing: 0.5px;\n}\n.col-sub[data-v-187acbc0] { color: rgba(255,255,255,0.7); font-size: 0.7rem; margin-top: 1px;\n}\n.col-logo[data-v-187acbc0] { height: 32px; -o-object-fit: contain; object-fit: contain; margin-left: auto;\n}\n\n/* ── Cards Grid ────────────────────────────── */\n.cards-grid[data-v-187acbc0] {\n    display: grid; grid-template-columns: 1fr 1fr;\n    gap: 10px; padding: 12px;\n    max-height: 520px; overflow-y: auto;\n    scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.3) transparent;\n}\n.cards-grid[data-v-187acbc0]::-webkit-scrollbar { width: 4px;\n}\n.cards-grid[data-v-187acbc0]::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.3); border-radius: 4px;\n}\n\n/* ── Fixture Card ──────────────────────────── */\n.fixture-card[data-v-187acbc0], .result-card[data-v-187acbc0] {\n    background: rgba(255,255,255,0.06); border-radius: 8px; padding: 10px;\n    border: 1px solid rgba(255,255,255,0.14);\n    transition: border-color 0.2s;\n}\n.fixture-card[data-v-187acbc0]:hover, .result-card[data-v-187acbc0]:hover { border-color: rgba(255,165,0,0.3);\n}\n.fc-meta[data-v-187acbc0] {\n    display: flex; align-items: center; gap: 5px;\n    margin-bottom: 10px; flex-wrap: wrap;\n}\n.fc-group-badge[data-v-187acbc0] {\n    background: rgba(255,255,255,0.12); color: #fff;\n    font-size: 0.55rem; font-weight: 800; padding: 3px 7px;\n    border-radius: 4px; white-space: nowrap; letter-spacing: 0.3px;\n}\n.fc-round-badge[data-v-187acbc0] {\n    background: rgba(255,165,0,0.15); color: #FFA500;\n    font-size: 0.55rem; font-weight: 800; padding: 3px 7px;\n    border-radius: 4px; white-space: nowrap; letter-spacing: 0.3px;\n}\n.fc-venue[data-v-187acbc0] {\n    display: flex; align-items: center; gap: 3px;\n    color: #fff; font-size: 0.55rem; font-weight: 600;\n    white-space: nowrap; margin-left: auto;\n    background: #1e1067; padding: 3px 7px; border-radius: 4px;\n}\n.fc-match-row[data-v-187acbc0] {\n    display: flex; align-items: center; gap: 6px; margin-top: 4px;\n}\n.fc-team[data-v-187acbc0] {\n    display: flex; flex-direction: column; align-items: center; gap: 5px;\n    flex: 1;\n}\n.fc-flag-img[data-v-187acbc0] { width: 46px; height: 32px; -o-object-fit: cover; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 6px rgba(0,0,0,0.35);\n}\n.fc-code[data-v-187acbc0] { color: #fff; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; text-align: center;\n}\n.vs-text[data-v-187acbc0] { color: rgba(255,255,255,0.55); font-size: 0.68rem; font-weight: 800; flex-shrink: 0; letter-spacing: 0.5px;\n}\n.date-box[data-v-187acbc0] {\n    background: none;\n    display: flex; flex-direction: column; align-items: center; gap: 1px;\n    flex-shrink: 0; min-width: 52px;\n}\n.db-weekday[data-v-187acbc0] { color: #FFA500; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;\n}\n.db-day[data-v-187acbc0] { color: #FFA500; font-size: 0.85rem; font-weight: 900; font-family: 'Roboto', sans-serif; line-height: 1.2;\n}\n.db-time[data-v-187acbc0] { color: #FFA500; font-size: 0.5rem; font-weight: 600; text-transform: uppercase;\n}\n\n/* ── Result Card ───────────────────────────── */\n.rc-match-row[data-v-187acbc0] {\n    display: flex; align-items: center; justify-content: space-between; gap: 6px;\n    margin: 6px 0;\n}\n.rc-side[data-v-187acbc0] { display: flex; align-items: center; gap: 6px;\n}\n.rc-side.right[data-v-187acbc0] { flex-direction: row-reverse;\n}\n.rc-flag-img[data-v-187acbc0] { width: 28px; height: 19px; -o-object-fit: cover; object-fit: cover; border-radius: 3px;\n}\n.rc-score-circle[data-v-187acbc0] {\n    width: 32px; height: 32px; border-radius: 50%;\n    background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.12);\n    color: #fff; font-size: 0.9rem; font-weight: 700;\n    display: flex; align-items: center; justify-content: center;\n    font-family: 'Rajdhani', sans-serif;\n}\n.rc-center[data-v-187acbc0] { display: flex; flex-direction: column; align-items: center;\n}\n.ft-label[data-v-187acbc0] { color: rgba(255,255,255,0.4); font-size: 0.58rem; font-weight: 600; white-space: nowrap;\n}\n.rc-names[data-v-187acbc0] { color: rgba(255,255,255,0.4); font-size: 0.58rem; text-align: center; margin-top: 4px;\n}\n.empty-state[data-v-187acbc0] {\n    grid-column: 1 / -1; color: rgba(255,255,255,0.3);\n    text-align: center; padding: 30px; font-size: 0.82rem;\n}\n\n/* ── Responsive / PWA ──────────────────────── */\n@media (max-width: 1024px) {\n.fixtures-body[data-v-187acbc0] {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: auto auto;\n        gap: 8px;\n}\n.teams-sidebar[data-v-187acbc0] {\n        grid-column: 1 / -1;\n        width: auto;\n        padding: 10px 12px;\n}\n.sidebar-label[data-v-187acbc0] { margin-bottom: 6px;\n}\n.team-list[data-v-187acbc0] {\n        display: flex; flex-direction: row; flex-wrap: nowrap;\n        overflow-x: auto; overflow-y: hidden;\n        gap: 6px; max-height: none;\n        padding-bottom: 4px;\n        scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.3) transparent;\n}\n.team-list[data-v-187acbc0]::-webkit-scrollbar { height: 3px; width: auto;\n}\n.team-list[data-v-187acbc0]::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.3); border-radius: 3px;\n}\n.team-filter-item[data-v-187acbc0] {\n        flex-shrink: 0; margin-bottom: 0;\n        padding: 5px 10px; border-radius: 20px;\n        background: rgba(255,255,255,0.06);\n        border: 1px solid rgba(255,255,255,0.14);\n}\n.tf-name[data-v-187acbc0] { font-size: 0.65rem;\n}\n.cards-grid[data-v-187acbc0] { grid-template-columns: 1fr;\n}\n    /* Compact fixture card on tablet/mobile */\n.fc-flag-img[data-v-187acbc0] { width: 36px; height: 25px;\n}\n.fc-code[data-v-187acbc0] { font-size: 0.58rem;\n}\n.date-box[data-v-187acbc0] { min-width: 42px;\n}\n.db-day[data-v-187acbc0] { font-size: 0.72rem;\n}\n}\n@media (max-width: 640px) {\n.fixtures-body[data-v-187acbc0] {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 6px;\n}\n.teams-sidebar[data-v-187acbc0] { grid-column: 1 / -1;\n}\n.fixtures-col[data-v-187acbc0] { grid-column: 1;\n}\n.results-col[data-v-187acbc0] { grid-column: 2;\n}\n.col-header[data-v-187acbc0] { padding: 8px 10px; gap: 6px;\n}\n.col-icon-circle[data-v-187acbc0] { width: 34px; height: 34px;\n}\n.col-ball[data-v-187acbc0] { width: 20px; height: 20px;\n}\n.col-title[data-v-187acbc0] { font-size: 0.82rem;\n}\n.col-sub[data-v-187acbc0] { font-size: 0.6rem;\n}\n.col-logo[data-v-187acbc0] { height: 22px;\n}\n.cards-grid[data-v-187acbc0] { padding: 6px; gap: 6px; max-height: 420px;\n}\n.groups-bar[data-v-187acbc0] { border-radius: 8px;\n}\n.fc-meta[data-v-187acbc0] { flex-wrap: wrap; gap: 3px;\n}\n.fc-venue[data-v-187acbc0] { display: none;\n}\n.fc-flag-img[data-v-187acbc0] { width: 30px; height: 20px;\n}\n.fc-code[data-v-187acbc0] { font-size: 0.55rem;\n}\n.vs-text[data-v-187acbc0] { font-size: 0.58rem;\n}\n.date-box[data-v-187acbc0] { min-width: 36px;\n}\n.db-weekday[data-v-187acbc0] { font-size: 0.42rem;\n}\n.db-day[data-v-187acbc0] { font-size: 0.62rem;\n}\n.db-time[data-v-187acbc0] { font-size: 0.42rem;\n}\n.fixture-card[data-v-187acbc0], .result-card[data-v-187acbc0] { padding: 7px;\n}\n.rc-flag-img[data-v-187acbc0] { width: 22px; height: 15px;\n}\n.rc-score-circle[data-v-187acbc0] { width: 26px; height: 26px; font-size: 0.75rem;\n}\n.ft-label[data-v-187acbc0] { font-size: 0.5rem;\n}\n.rc-names[data-v-187acbc0] { font-size: 0.5rem;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_style_index_0_id_187acbc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_style_index_0_id_187acbc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_style_index_0_id_187acbc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/fixtures/Fixtures.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/fixtures/Fixtures.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fixtures_vue_vue_type_template_id_187acbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fixtures.vue?vue&type=template&id=187acbc0&scoped=true& */ "./resources/js/views/fixtures/Fixtures.vue?vue&type=template&id=187acbc0&scoped=true&");
/* harmony import */ var _Fixtures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fixtures.vue?vue&type=script&lang=js& */ "./resources/js/views/fixtures/Fixtures.vue?vue&type=script&lang=js&");
/* harmony import */ var _Fixtures_vue_vue_type_style_index_0_id_187acbc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css& */ "./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Fixtures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fixtures_vue_vue_type_template_id_187acbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Fixtures_vue_vue_type_template_id_187acbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "187acbc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/fixtures/Fixtures.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/fixtures/Fixtures.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/fixtures/Fixtures.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fixtures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_style_index_0_id_187acbc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=style&index=0&id=187acbc0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/fixtures/Fixtures.vue?vue&type=template&id=187acbc0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/fixtures/Fixtures.vue?vue&type=template&id=187acbc0&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_template_id_187acbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_template_id_187acbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fixtures_vue_vue_type_template_id_187acbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fixtures.vue?vue&type=template&id=187acbc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=template&id=187acbc0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=template&id=187acbc0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fixtures/Fixtures.vue?vue&type=template&id=187acbc0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "fixtures-page" }, [
    _c("div", { staticClass: "groups-bar" }, [
      _c(
        "button",
        {
          staticClass: "slider-btn",
          on: {
            click: function ($event) {
              return _vm.scrollGroups(-1)
            },
          },
        },
        [_vm._v("‹")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { ref: "groupsTrack", staticClass: "groups-track" },
        _vm._l(_vm.fifaGroups, function (g) {
          return _c(
            "div",
            {
              key: g.name,
              staticClass: "group-card",
              class: { active: _vm.selectedGroup === g.name },
              on: {
                click: function ($event) {
                  return _vm.toggleGroup(g.name)
                },
              },
            },
            [
              _c("div", { staticClass: "group-label" }, [
                _c("span", { staticClass: "gl-word" }, [_vm._v("GROUP")]),
                _vm._v(" "),
                _c("span", { staticClass: "gl-letter" }, [
                  _vm._v(_vm._s(g.name)),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "group-teams-list" },
                _vm._l(g.teams, function (t) {
                  return _c("div", { key: t.code, staticClass: "group-team" }, [
                    _c("img", {
                      staticClass: "gf-img",
                      attrs: {
                        src: _vm.flagUrl(t.code),
                        onerror: "this.style.display='none'",
                      },
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "gf-name" }, [
                      _vm._v(_vm._s(t.name)),
                    ]),
                  ])
                }),
                0
              ),
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "slider-btn",
          on: {
            click: function ($event) {
              return _vm.scrollGroups(1)
            },
          },
        },
        [_vm._v("›")]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fixtures-body" }, [
      _c("div", { staticClass: "teams-sidebar" }, [
        _c("div", { staticClass: "search-box" }, [
          _c(
            "svg",
            {
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
                value: _vm.teamSearch,
                expression: "teamSearch",
              },
            ],
            staticClass: "search-input",
            attrs: { placeholder: "Search" },
            domProps: { value: _vm.teamSearch },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.teamSearch = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-label" }, [
          _vm._v("Team Match Fixtures"),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "team-list" },
          _vm._l(_vm.filteredSidebarTeams, function (t) {
            return _c(
              "div",
              {
                key: t.code,
                staticClass: "team-filter-item",
                class: { active: _vm.selectedTeamCode === t.code },
                on: {
                  click: function ($event) {
                    return _vm.toggleTeam(t.code)
                  },
                },
              },
              [
                _c("img", {
                  staticClass: "tf-img",
                  attrs: {
                    src: _vm.flagUrl(t.code),
                    onerror: "this.style.display='none'",
                  },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "tf-name" }, [
                  _vm._v(_vm._s(t.name)),
                ]),
              ]
            )
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "fixtures-col" }, [
        _c("div", { staticClass: "col-header" }, [
          _c("div", { staticClass: "col-icon-circle" }, [
            _c("img", {
              staticClass: "col-ball",
              attrs: {
                src: _vm.$imgBase + "/images/ball-icon.png",
                onerror: "this.style.display='none'",
              },
            }),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("img", {
            staticClass: "col-logo",
            attrs: {
              src: _vm.$imgBase + "/images/fifa-logo.png",
              onerror: "this.style.display='none'",
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "cards-grid" },
          [
            _vm._l(_vm.upcomingMatches, function (m) {
              return _c("div", { key: m.id, staticClass: "fixture-card" }, [
                _c("div", { staticClass: "fc-meta" }, [
                  _c("span", { staticClass: "fc-group-badge" }, [
                    _vm._v("GROUP " + _vm._s(m.group_name)),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fc-round-badge" }, [
                    _vm._v("ROUND " + _vm._s(m.round_number)),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fc-venue" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          width: "9",
                          height: "9",
                          viewBox: "0 0 24 24",
                          fill: "#FFA500",
                        },
                      },
                      [
                        _c("circle", { attrs: { cx: "12", cy: "10", r: "3" } }),
                        _c("path", {
                          attrs: {
                            d: "M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(
                      "\n                            " +
                        _vm._s((m.venue || "TBD").split(",")[0]) +
                        "\n                        "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "fc-match-row" }, [
                  _c("div", { staticClass: "fc-team" }, [
                    _c("span", { staticClass: "fc-code" }, [
                      _vm._v(_vm._s(_vm.shortName(m.team1 && m.team1.name))),
                    ]),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "fc-flag-img",
                      attrs: {
                        src: _vm.teamObjFlagUrl(m.team1),
                        onerror:
                          "this.src=window.__IMG__ + '/images/default-avatar.png'",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "vs-text" }, [_vm._v("VS")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "fc-team" }, [
                    _c("span", { staticClass: "fc-code" }, [
                      _vm._v(_vm._s(_vm.shortName(m.team2 && m.team2.name))),
                    ]),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "fc-flag-img",
                      attrs: {
                        src: _vm.teamObjFlagUrl(m.team2),
                        onerror:
                          "this.src=window.__IMG__ + '/images/default-avatar.png'",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "date-box" }, [
                    _c("span", { staticClass: "db-weekday" }, [
                      _vm._v(_vm._s(_vm.formatWeekday(m.match_date))),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "db-day" }, [
                      _vm._v(
                        _vm._s(_vm.formatDay(m.match_date)) +
                          " " +
                          _vm._s(_vm.formatMonth(m.match_date))
                      ),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "db-time" }, [
                      _vm._v(_vm._s(_vm.formatTime(m.match_time))),
                    ]),
                  ]),
                ]),
              ])
            }),
            _vm._v(" "),
            _vm.upcomingMatches.length === 0
              ? _c("div", { staticClass: "empty-state" }, [
                  _vm._v("No fixtures found."),
                ])
              : _vm._e(),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "results-col" }, [
        _c("div", { staticClass: "col-header" }, [
          _c("div", { staticClass: "col-icon-circle trophy-circle" }, [
            _c(
              "svg",
              {
                attrs: {
                  width: "22",
                  height: "22",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#FFA500",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              },
              [
                _c("path", { attrs: { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" } }),
                _c("path", { attrs: { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" } }),
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
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("img", {
            staticClass: "col-logo",
            attrs: {
              src: _vm.$imgBase + "/images/fifa-logo.png",
              onerror: "this.style.display='none'",
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "cards-grid" },
          [
            _vm._l(_vm.completedMatches, function (m) {
              return _c("div", { key: m.id, staticClass: "result-card" }, [
                _c("div", { staticClass: "fc-meta" }, [
                  _c("span", { staticClass: "fc-group-badge" }, [
                    _vm._v("GROUP " + _vm._s(m.group_name)),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fc-round-badge" }, [
                    _vm._v("ROUND " + _vm._s(m.round_number)),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fc-venue" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          width: "9",
                          height: "9",
                          viewBox: "0 0 24 24",
                          fill: "#FFA500",
                        },
                      },
                      [
                        _c("circle", { attrs: { cx: "12", cy: "10", r: "3" } }),
                        _c("path", {
                          attrs: {
                            d: "M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(
                      "\n                            " +
                        _vm._s((m.venue || "TBD").split(",")[0]) +
                        "\n                        "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "rc-match-row" }, [
                  _c("div", { staticClass: "rc-side" }, [
                    _c("img", {
                      staticClass: "rc-flag-img",
                      attrs: {
                        src: _vm.teamObjFlagUrl(m.team1),
                        onerror:
                          "this.src=window.__IMG__ + '/images/default-avatar.png'",
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "rc-score-circle" }, [
                      _vm._v(_vm._s(m.team1_score != null ? m.team1_score : 0)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(2, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "rc-side right" }, [
                    _c("div", { staticClass: "rc-score-circle" }, [
                      _vm._v(_vm._s(m.team2_score != null ? m.team2_score : 0)),
                    ]),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "rc-flag-img",
                      attrs: {
                        src: _vm.teamObjFlagUrl(m.team2),
                        onerror:
                          "this.src=window.__IMG__ + '/images/default-avatar.png'",
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "rc-names" }, [
                  _vm._v(
                    _vm._s(_vm.shortName(m.team1 && m.team1.name)) +
                      " — " +
                      _vm._s(_vm.shortName(m.team2 && m.team2.name))
                  ),
                ]),
              ])
            }),
            _vm._v(" "),
            _vm.completedMatches.length === 0
              ? _c("div", { staticClass: "empty-state" }, [
                  _vm._v("No results yet."),
                ])
              : _vm._e(),
          ],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "col-title" }, [_vm._v("Match Fixtures")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sub" }, [_vm._v("FIFA World Cup 2026™")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "col-title" }, [_vm._v("Results")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sub" }, [_vm._v("FIFA World Cup 2026™")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rc-center" }, [
      _c("span", { staticClass: "ft-label" }, [_vm._v("Full Time")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);