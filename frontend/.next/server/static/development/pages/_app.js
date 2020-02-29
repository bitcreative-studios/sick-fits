module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../../ssr-module-cache.js") // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ var threw = true
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      )
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId]
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      })
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    })
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"]
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, "a", getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "" // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./components/Header.js":
      /*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Nav */ "./components/Nav.js"
        )
        var _jsxFileName =
          "/home/bitwhys/Projects/sick-fits/frontend/components/Header.js"

        var Header = function Header() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "header",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "bar",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                {
                  href: "",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8,
                  },
                  __self: this,
                },
                "Sick Fits"
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                },
                __self: this,
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "sub-bar",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                  },
                  __self: this,
                },
                "Search"
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                },
                __self: this,
              },
              "Cart"
            )
          )
        }

        /* harmony default export */ __webpack_exports__["default"] = Header

        /***/
      },

    /***/ "./components/Meta.js":
      /*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/head */ "next/head"
        )
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_1__
        )
        var _jsxFileName =
          "/home/bitwhys/Projects/sick-fits/frontend/components/Meta.js"

        var Meta = function Meta() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
              charSet: "utf-8",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
              rel: "shortcut icon",
              href: "/static/favicon.png",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
              rel: "stylesheet",
              href: "/static/nprogress.css",
              type: "text/css",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "title",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                },
                __self: this,
              },
              "Sick Fits!"
            )
          )
        }

        /* harmony default export */ __webpack_exports__["default"] = Meta

        /***/
      },

    /***/ "./components/Nav.js":
      /*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/link */ "next/link"
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        )
        var _jsxFileName =
          "/home/bitwhys/Projects/sick-fits/frontend/components/Nav.js"

        var Nav = function Nav() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "nav",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "ul",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: "/",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 9,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10,
                      },
                      __self: this,
                    },
                    "Home"
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: "/sell",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                      },
                      __self: this,
                    },
                    "Sell"
                  )
                )
              )
            )
          )
        }

        /* harmony default export */ __webpack_exports__["default"] = Nav

        /***/
      },

    /***/ "./components/Page.js":
      /*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Header */ "./components/Header.js"
        )
        /* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Meta */ "./components/Meta.js"
        )
        var _jsxFileName =
          "/home/bitwhys/Projects/sick-fits/frontend/components/Page.js"

        var Page = function Page(_ref) {
          var children = _ref.children
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Meta__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                },
                __self: this,
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Header__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                },
                __self: this,
              }
            ),
            children
          )
        }

        /* harmony default export */ __webpack_exports__["default"] = Page

        /***/
      },

    /***/ "./pages/_app.js":
      /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/app */ "next/app"
        )
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_app__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/Page */ "./components/Page.js"
        )
        var _jsxFileName =
          "/home/bitwhys/Projects/sick-fits/frontend/pages/_app.js"

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }
          return _extends.apply(this, arguments)
        }

        var MyApp = function MyApp(_ref) {
          var Component = _ref.Component,
            pageProps = _ref.pageProps
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            next_app__WEBPACK_IMPORTED_MODULE_1__["Container"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Page__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Component,
                _extends({}, pageProps, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                  },
                  __self: this,
                })
              )
            )
          )
        }

        /* harmony default export */ __webpack_exports__["default"] = MyApp

        /***/
      },

    /***/ 0:
      /*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./pages/_app.js */ "./pages/_app.js"
        )

        /***/
      },

    /***/ "next/app":
      /*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/app")

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/head")

        /***/
      },

    /***/ "next/link":
      /*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/link")

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react")

        /***/
      },

    /******/
  }
)
//# sourceMappingURL=_app.js.map
