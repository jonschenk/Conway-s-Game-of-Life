/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cgol.ts":
/*!*****************!*\
  !*** ./cgol.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-objects/grid */ \"./game-objects/grid.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n\n\nvar isDragging = false;\nvar Game = /*#__PURE__*/function () {\n  // game speed\n\n  function Game() {\n    var _this = this;\n    _classCallCheck(this, Game);\n    _defineProperty(this, \"DEFAULT_SPEED\", 100);\n    // default game speed\n    _defineProperty(this, \"gameSpeed\", this.DEFAULT_SPEED);\n    // Create a new grid\n    var grid = new _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    // Generate the grid\n    grid.generate();\n    this.updateGrid(grid);\n    var clearButton = document.getElementById('clear');\n    if (clearButton) {\n      clearButton.addEventListener('click', function () {\n        _this.clear(grid);\n        _this.updateGrid(grid);\n      });\n    }\n\n    // Use button toggle-start-pause to start and pause the game\n    var toggleStartPause = document.getElementById('toggle-start-pause');\n    var buttonIcon = document.getElementById(\"play\");\n    if (toggleStartPause) {\n      toggleStartPause.addEventListener('click', function () {\n        buttonIcon === null || buttonIcon === void 0 || buttonIcon.setAttribute(\"src\", \"assets/pause.png\");\n        _this.toggleGameState(grid);\n      });\n    }\n  }\n  _createClass(Game, [{\n    key: \"updateGrid\",\n    value: function () {\n      var _updateGrid = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(grid) {\n        var rows, cols, gridDiv, table, squareSize, _loop, i;\n        return _regeneratorRuntime().wrap(function _callee$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              rows = grid.getRows();\n              cols = grid.getCols();\n              gridDiv = document.getElementById(\"grid\");\n              if (gridDiv) {\n                _context3.next = 5;\n                break;\n              }\n              return _context3.abrupt(\"return\");\n            case 5:\n              gridDiv.innerHTML = '';\n\n              // create new table\n              table = document.createElement('table');\n              table.style.borderCollapse = 'collapse';\n              squareSize = Math.floor(gridDiv.clientWidth / cols) / 2;\n              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {\n                var row, _loop2, j;\n                return _regeneratorRuntime().wrap(function _loop$(_context2) {\n                  while (1) switch (_context2.prev = _context2.next) {\n                    case 0:\n                      row = document.createElement('tr');\n                      _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2(j) {\n                        var _grid$getCell;\n                        var cell;\n                        return _regeneratorRuntime().wrap(function _loop2$(_context) {\n                          while (1) switch (_context.prev = _context.next) {\n                            case 0:\n                              cell = document.createElement('td'); // Style the cell as a square\n                              cell.style.width = \"\".concat(squareSize, \"px\");\n                              cell.style.height = \"\".concat(squareSize, \"px\");\n                              cell.style.border = '1px solid black';\n\n                              // Set the cell's background color based on its status\n                              cell.style.backgroundColor = (_grid$getCell = grid.getCell(i, j)) !== null && _grid$getCell !== void 0 && _grid$getCell.getStatus() ? 'black' : 'white';\n                              cell.addEventListener('mousedown', function (event) {\n                                isDragging = true;\n                              });\n                              cell.addEventListener('mousemove', function (event) {\n                                if (isDragging) {\n                                  var _grid$getCell2, _grid$getCell5;\n                                  // Existing code to handle a cell click\n                                  if (((_grid$getCell2 = grid.getCell(i, j)) === null || _grid$getCell2 === void 0 ? void 0 : _grid$getCell2.getStatus()) === false) {\n                                    var _grid$getCell3;\n                                    (_grid$getCell3 = grid.getCell(i, j)) === null || _grid$getCell3 === void 0 || _grid$getCell3.setStatus(true);\n                                  } else {\n                                    var _grid$getCell4;\n                                    (_grid$getCell4 = grid.getCell(i, j)) === null || _grid$getCell4 === void 0 || _grid$getCell4.setStatus(false);\n                                  }\n                                  cell.style.backgroundColor = (_grid$getCell5 = grid.getCell(i, j)) !== null && _grid$getCell5 !== void 0 && _grid$getCell5.getStatus() ? 'black' : 'white';\n                                }\n                              });\n                              cell.addEventListener('mouseup', function () {\n                                isDragging = false;\n                              });\n                              cell.addEventListener('click', function () {\n                                var _grid$getCell6, _grid$getCell7;\n                                (_grid$getCell6 = grid.getCell(i, j)) === null || _grid$getCell6 === void 0 || _grid$getCell6.toggleState();\n                                cell.style.backgroundColor = (_grid$getCell7 = grid.getCell(i, j)) !== null && _grid$getCell7 !== void 0 && _grid$getCell7.getStatus() ? 'black' : 'white';\n                              });\n                              row.appendChild(cell);\n                            case 10:\n                            case \"end\":\n                              return _context.stop();\n                          }\n                        }, _loop2);\n                      });\n                      j = 0;\n                    case 3:\n                      if (!(j < cols)) {\n                        _context2.next = 8;\n                        break;\n                      }\n                      return _context2.delegateYield(_loop2(j), \"t0\", 5);\n                    case 5:\n                      j++;\n                      _context2.next = 3;\n                      break;\n                    case 8:\n                      table.appendChild(row);\n                    case 9:\n                    case \"end\":\n                      return _context2.stop();\n                  }\n                }, _loop);\n              });\n              i = 0;\n            case 11:\n              if (!(i < rows)) {\n                _context3.next = 16;\n                break;\n              }\n              return _context3.delegateYield(_loop(i), \"t0\", 13);\n            case 13:\n              i++;\n              _context3.next = 11;\n              break;\n            case 16:\n              this.updateCells(grid);\n              gridDiv.appendChild(table);\n            case 18:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee, this);\n      }));\n      function updateGrid(_x) {\n        return _updateGrid.apply(this, arguments);\n      }\n      return updateGrid;\n    }()\n  }, {\n    key: \"updateCells\",\n    value: function updateCells(grid) {\n      var rows = grid.getRows();\n      var cols = grid.getCols();\n      for (var i = 0; i < rows; i++) {\n        for (var j = 0; j < cols; j++) {\n          var cell = grid.getCell(i, j);\n          cell === null || cell === void 0 || cell.willBeAlive(grid);\n        }\n      }\n      for (var _i = 0; _i < rows; _i++) {\n        for (var _j = 0; _j < cols; _j++) {\n          var _cell = grid.getCell(_i, _j);\n          _cell === null || _cell === void 0 || _cell.updateStatus(grid);\n        }\n      }\n    }\n  }, {\n    key: \"toggleGameState\",\n    value: function toggleGameState(grid) {\n      var _this2 = this;\n      if (this.intervalId) {\n        // If the game is running, pause it\n        clearInterval(this.intervalId);\n        this.intervalId = undefined;\n        this.gameSpeed = this.DEFAULT_SPEED; // Reset the game speed\n      } else {\n        // If the game is not running, start it\n        this.gameSpeed = 0; // Set the game speed to 0\n        this.intervalId = setInterval(function () {\n          return _this2.updateGrid(grid);\n        }, this.gameSpeed);\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear(grid) {\n      var rows = grid.getRows();\n      var cols = grid.getCols();\n      for (var i = 0; i < rows; i++) {\n        for (var j = 0; j < cols; j++) {\n          var cell = grid.getCell(i, j);\n          cell === null || cell === void 0 || cell.setStatus(false);\n        }\n      }\n    }\n  }]);\n  return Game;\n}();\nnew Game();\n\n//# sourceURL=webpack://c-gol/./cgol.ts?");

/***/ }),

/***/ "./game-objects/cell.ts":
/*!******************************!*\
  !*** ./game-objects/cell.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\nvar Cell = /*#__PURE__*/function () {\n  function Cell() {\n    _classCallCheck(this, Cell);\n    // Assign the row and column and status of the cell\n    this.isAlive = false;\n  }\n\n  /**\r\n   * The aliveness of the cell.\r\n   * \r\n   * @returns Whether or not the cell is alive\r\n   */\n  _createClass(Cell, [{\n    key: \"getStatus\",\n    value: function getStatus() {\n      return this.isAlive;\n    }\n\n    /**\r\n    * The aliveness of the cell.\r\n    * \r\n    * @returns Whether or not the cell is alive\r\n    */\n  }, {\n    key: \"setStatus\",\n    value: function setStatus(status) {\n      this.isAlive = status;\n    }\n\n    /**\r\n     * Toggles the state of the cell.\r\n     */\n  }, {\n    key: \"toggleState\",\n    value: function toggleState() {\n      this.isAlive = !this.isAlive;\n    }\n  }, {\n    key: \"willBeAlive\",\n    value: function willBeAlive(grid) {\n      var result = false;\n      var aliveNeighbors = grid.numNeighborsAlive(grid.getRow(this), grid.getCol(this));\n      if (this.isAlive) {\n        result = aliveNeighbors === 2 || aliveNeighbors === 3;\n      } else {\n        result = aliveNeighbors === 3;\n      }\n      this.willLive = result;\n    }\n\n    /**\r\n     * Defines whether or not the cell can live.\r\n     */\n  }, {\n    key: \"updateStatus\",\n    value: function updateStatus(grid) {\n      this.isAlive = this.willLive;\n    }\n  }]);\n  return Cell;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell); // Export the Cell class\n\n//# sourceURL=webpack://c-gol/./game-objects/cell.ts?");

/***/ }),

/***/ "./game-objects/grid.ts":
/*!******************************!*\
  !*** ./game-objects/grid.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./game-objects/cell.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n\n\nvar Grid = /*#__PURE__*/function () {\n  function Grid() {\n    _classCallCheck(this, Grid);\n    _defineProperty(this, \"rows\", 50);\n    _defineProperty(this, \"cols\", 100);\n  }\n  _createClass(Grid, [{\n    key: \"generate\",\n    value:\n    /**\r\n     * Generates the grid of cells\r\n     */\n    function generate() {\n      this.grid = []; //initialize grid\n\n      // loop through the rows\n      for (var i = 0; i < this.rows; i++) {\n        this.grid[i] = []; // initialize the row\n        for (var j = 0; j < this.cols; j++) {\n          this.grid[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // create a new cell and add it to the grid\n        }\n      }\n    }\n\n    /**\r\n     * Gets the cell's neighbors\r\n     * \r\n     * @param cell The given cell\r\n     * @returns an array of neighboring cells\r\n     */\n  }, {\n    key: \"getNeighbors\",\n    value: function getNeighbors(cell) {\n      var neighbors = [];\n      var row = this.getRow(cell);\n      var col = this.getCol(cell);\n\n      // loop through the rows\n      for (var i = -1; i <= 1; i++) {\n        // loop through the columns\n        for (var j = -1; j <= 1; j++) {\n          // if the cell is the current cell, skip it\n          if (i === 0 && j === 0) {\n            continue;\n          }\n\n          // get the neighbor\n          var neighbor = this.getCell(row + i, col + j);\n\n          // if the neighbor is valid, add it to the list of neighbors\n          if (neighbor) {\n            neighbors.push(neighbor);\n          }\n        }\n      }\n      return neighbors;\n    }\n  }, {\n    key: \"getCol\",\n    value: function getCol(cell) {\n      var col = -1;\n      for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.cols; j++) {\n          if (this.grid[i][j] === cell) {\n            col = j;\n          }\n        }\n      }\n      return col;\n    }\n  }, {\n    key: \"getRow\",\n    value: function getRow(cell) {\n      var row = -1;\n      for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.cols; j++) {\n          if (this.grid[i][j] === cell) {\n            row = i;\n          }\n        }\n      }\n      return row;\n    }\n\n    /**\r\n     * Counts currently alive neighbors surrounding the cell.\r\n     * \r\n     * @param {*} row The row of the cell\r\n     * @param {*} col The column of the cell\r\n     * @returns {number} The number of living neighbors\r\n     */\n  }, {\n    key: \"numNeighborsAlive\",\n    value: function numNeighborsAlive(row, col) {\n      var count = 0;\n      var cell = this.getCell(row, col);\n      if (!cell) {\n        return 0;\n      }\n      var neighbors = this.getNeighbors(cell);\n      var _iterator = _createForOfIteratorHelper(neighbors),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var neighbor = _step.value;\n          if (neighbor.getStatus()) {\n            count++;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      return count;\n    }\n  }, {\n    key: \"isInBounds\",\n    value: function isInBounds(row, col) {\n      return row >= 0 && row < this.rows && col >= 0 && col < this.cols;\n    }\n\n    /**\r\n     * Gets the cell at the specified row and column\r\n     * \r\n     * @param row // the row\r\n     * @param col // the column\r\n     * @param grid // the grid of cells\r\n     * @returns The cell at the specified row and column\r\n     */\n  }, {\n    key: \"getCell\",\n    value: function getCell(row, col) {\n      if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {\n        return null;\n      } else {\n        return this.grid[row][col];\n      }\n    }\n\n    /**\r\n     * Gets rows\r\n     * \r\n     * @returns The number of rows in the grid\r\n     */\n  }, {\n    key: \"getRows\",\n    value: function getRows() {\n      return this.rows;\n    }\n\n    /**\r\n     * Gets cols\r\n     * \r\n     * @returns The number of columns in the grid\r\n     */\n  }, {\n    key: \"getCols\",\n    value: function getCols() {\n      return this.cols;\n    }\n\n    /**\r\n     * Sets rows\r\n     * \r\n     * @param rows // the number of rows\r\n     */\n  }, {\n    key: \"setRows\",\n    value: function setRows(rows) {\n      this.rows = rows;\n    }\n\n    /**\r\n     * Sets cols\r\n     * \r\n     * @param cols // the number of columns\r\n     */\n  }, {\n    key: \"setCols\",\n    value: function setCols(cols) {\n      this.cols = cols;\n    }\n\n    /**\r\n     * Loops through each cell in the grid and calls the callback function\r\n     * \r\n     * @param callback // the callback function\r\n     */\n  }, {\n    key: \"forEachCell\",\n    value: function forEachCell(callback) {\n      for (var _row = 0; _row < this.grid.length; _row++) {\n        for (var _col = 0; _col < this.grid[_row].length; _col++) {\n          callback(this.grid[_row][_col], _row, _col);\n        }\n      }\n    }\n\n    /**\r\n     * Loops through each cell in the grid and calls the callback function\r\n     * \r\n     * @returns The string representation of the grid\r\n     */\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var gridRepresentation = \"\";\n      for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.cols; j++) {\n          var _cell = this.getCell(i, j); // Change this line\n          gridRepresentation += _cell && _cell.getStatus() ? \"X\" : \"O\";\n        }\n        gridRepresentation += \"\\n\";\n      }\n      return gridRepresentation;\n    }\n  }]);\n  return Grid;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid); // export the grid class\n\n//# sourceURL=webpack://c-gol/./game-objects/grid.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./cgol.ts");
/******/ 	
/******/ })()
;