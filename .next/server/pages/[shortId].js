"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[shortId]";
exports.ids = ["pages/[shortId]"];
exports.modules = {

/***/ "./pages/[shortId].js":
/*!****************************!*\
  !*** ./pages/[shortId].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShortId),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/jpaddeo/Sites/github.com/jpaddeo/nextjs-urlshortener/pages/[shortId].js\";\n\n\n\nfunction ShortId() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"ShortId Redirect\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\nasync function getServerSideProps({\n  params\n}) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  const {\n    shortId\n  } = params;\n  const data = await prisma.link.findUnique({\n    where: {\n      shortUrl: shortId\n    }\n  });\n\n  if (!data) {\n    return {\n      redirect: {\n        destination: '/'\n      }\n    };\n  }\n\n  const updatedData = await prisma.link.update({\n    where: {\n      shortUrl: shortId\n    },\n    data: {\n      accessCount: {\n        increment: 1\n      }\n    }\n  });\n  return {\n    redirect: {\n      destination: updatedData.url\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2hvcnRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFFZSxTQUFTQyxPQUFULEdBQW1CO0FBQ2hDLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtEO0FBRU0sZUFBZUMsa0JBQWYsQ0FBa0M7QUFBRUMsRUFBQUE7QUFBRixDQUFsQyxFQUE4QztBQUNuRCxRQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQUosRUFBZjtBQUNBLFFBQU07QUFBRUssSUFBQUE7QUFBRixNQUFjRixNQUFwQjtBQUVBLFFBQU1HLElBQUksR0FBRyxNQUFNRixNQUFNLENBQUNHLElBQVAsQ0FBWUMsVUFBWixDQUF1QjtBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFTDtBQUFaO0FBQVQsR0FBdkIsQ0FBbkI7O0FBQ0EsTUFBSSxDQUFDQyxJQUFMLEVBQVc7QUFDVCxXQUFPO0FBQUVLLE1BQUFBLFFBQVEsRUFBRTtBQUFFQyxRQUFBQSxXQUFXLEVBQUU7QUFBZjtBQUFaLEtBQVA7QUFDRDs7QUFDRCxRQUFNQyxXQUFXLEdBQUcsTUFBTVQsTUFBTSxDQUFDRyxJQUFQLENBQVlPLE1BQVosQ0FBbUI7QUFDM0NMLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVMO0FBQVosS0FEb0M7QUFFM0NDLElBQUFBLElBQUksRUFBRTtBQUFFUyxNQUFBQSxXQUFXLEVBQUU7QUFBRUMsUUFBQUEsU0FBUyxFQUFFO0FBQWI7QUFBZjtBQUZxQyxHQUFuQixDQUExQjtBQUlBLFNBQU87QUFBRUwsSUFBQUEsUUFBUSxFQUFFO0FBQUVDLE1BQUFBLFdBQVcsRUFBRUMsV0FBVyxDQUFDSTtBQUEzQjtBQUFaLEdBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL1tzaG9ydElkXS5qcz85MDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvcnRJZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHA+U2hvcnRJZCBSZWRpcmVjdDwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgY29uc3QgeyBzaG9ydElkIH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5saW5rLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBzaG9ydFVybDogc2hvcnRJZCB9IH0pO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogJy8nIH0gfTtcbiAgfVxuICBjb25zdCB1cGRhdGVkRGF0YSA9IGF3YWl0IHByaXNtYS5saW5rLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHsgc2hvcnRVcmw6IHNob3J0SWQgfSxcbiAgICBkYXRhOiB7IGFjY2Vzc0NvdW50OiB7IGluY3JlbWVudDogMSB9IH0sXG4gIH0pO1xuICByZXR1cm4geyByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogdXBkYXRlZERhdGEudXJsIH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJTaG9ydElkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwicHJpc21hIiwic2hvcnRJZCIsImRhdGEiLCJsaW5rIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2hvcnRVcmwiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwidXBkYXRlZERhdGEiLCJ1cGRhdGUiLCJhY2Nlc3NDb3VudCIsImluY3JlbWVudCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[shortId].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[shortId].js"));
module.exports = __webpack_exports__;

})();