"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uncrypto";
exports.ids = ["vendor-chunks/uncrypto"];
exports.modules = {

/***/ "(ssr)/./node_modules/uncrypto/dist/crypto.node.mjs":
/*!****************************************************!*\
  !*** ./node_modules/uncrypto/dist/crypto.node.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _crypto),\n/* harmony export */   getRandomValues: () => (/* binding */ getRandomValues),\n/* harmony export */   randomUUID: () => (/* binding */ randomUUID),\n/* harmony export */   subtle: () => (/* binding */ subtle)\n/* harmony export */ });\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n\nconst subtle = node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto?.subtle || {};\nconst randomUUID = ()=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.randomUUID();\n};\nconst getRandomValues = (array)=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n    randomUUID,\n    getRandomValues,\n    subtle\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsU0FBU0Qsa0RBQW9CLEVBQUVDLFVBQVUsQ0FBQztBQUNoRCxNQUFNRSxhQUFhO0lBQ2pCLE9BQU9ILG1EQUFxQjtBQUM5QjtBQUNBLE1BQU1JLGtCQUFrQixDQUFDQztJQUN2QixPQUFPTCxrREFBb0IsQ0FBQ0ksZUFBZSxDQUFDQztBQUM5QztBQUNBLE1BQU1DLFVBQVU7SUFDZEg7SUFDQUM7SUFDQUg7QUFDRjtBQUVtRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3Rvci1hcHBvaW50bWVudC1ib29raW5nLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5tanM/NDc3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZUNyeXB0byBmcm9tICdub2RlOmNyeXB0byc7XG5cbmNvbnN0IHN1YnRsZSA9IG5vZGVDcnlwdG8ud2ViY3J5cHRvPy5zdWJ0bGUgfHwge307XG5jb25zdCByYW5kb21VVUlEID0gKCkgPT4ge1xuICByZXR1cm4gbm9kZUNyeXB0by5yYW5kb21VVUlEKCk7XG59O1xuY29uc3QgZ2V0UmFuZG9tVmFsdWVzID0gKGFycmF5KSA9PiB7XG4gIHJldHVybiBub2RlQ3J5cHRvLndlYmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xufTtcbmNvbnN0IF9jcnlwdG8gPSB7XG4gIHJhbmRvbVVVSUQsXG4gIGdldFJhbmRvbVZhbHVlcyxcbiAgc3VidGxlXG59O1xuXG5leHBvcnQgeyBfY3J5cHRvIGFzIGRlZmF1bHQsIGdldFJhbmRvbVZhbHVlcywgcmFuZG9tVVVJRCwgc3VidGxlIH07XG4iXSwibmFtZXMiOlsibm9kZUNyeXB0byIsInN1YnRsZSIsIndlYmNyeXB0byIsInJhbmRvbVVVSUQiLCJnZXRSYW5kb21WYWx1ZXMiLCJhcnJheSIsIl9jcnlwdG8iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uncrypto/dist/crypto.node.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/uncrypto/dist/crypto.node.mjs":
/*!****************************************************!*\
  !*** ./node_modules/uncrypto/dist/crypto.node.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _crypto),\n/* harmony export */   getRandomValues: () => (/* binding */ getRandomValues),\n/* harmony export */   randomUUID: () => (/* binding */ randomUUID),\n/* harmony export */   subtle: () => (/* binding */ subtle)\n/* harmony export */ });\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n\nconst subtle = node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto?.subtle || {};\nconst randomUUID = ()=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.randomUUID();\n};\nconst getRandomValues = (array)=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n    randomUUID,\n    getRandomValues,\n    subtle\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsU0FBU0Qsa0RBQW9CLEVBQUVDLFVBQVUsQ0FBQztBQUNoRCxNQUFNRSxhQUFhO0lBQ2pCLE9BQU9ILG1EQUFxQjtBQUM5QjtBQUNBLE1BQU1JLGtCQUFrQixDQUFDQztJQUN2QixPQUFPTCxrREFBb0IsQ0FBQ0ksZUFBZSxDQUFDQztBQUM5QztBQUNBLE1BQU1DLFVBQVU7SUFDZEg7SUFDQUM7SUFDQUg7QUFDRjtBQUVtRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3Rvci1hcHBvaW50bWVudC1ib29raW5nLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5tanM/NDc3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZUNyeXB0byBmcm9tICdub2RlOmNyeXB0byc7XG5cbmNvbnN0IHN1YnRsZSA9IG5vZGVDcnlwdG8ud2ViY3J5cHRvPy5zdWJ0bGUgfHwge307XG5jb25zdCByYW5kb21VVUlEID0gKCkgPT4ge1xuICByZXR1cm4gbm9kZUNyeXB0by5yYW5kb21VVUlEKCk7XG59O1xuY29uc3QgZ2V0UmFuZG9tVmFsdWVzID0gKGFycmF5KSA9PiB7XG4gIHJldHVybiBub2RlQ3J5cHRvLndlYmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xufTtcbmNvbnN0IF9jcnlwdG8gPSB7XG4gIHJhbmRvbVVVSUQsXG4gIGdldFJhbmRvbVZhbHVlcyxcbiAgc3VidGxlXG59O1xuXG5leHBvcnQgeyBfY3J5cHRvIGFzIGRlZmF1bHQsIGdldFJhbmRvbVZhbHVlcywgcmFuZG9tVVVJRCwgc3VidGxlIH07XG4iXSwibmFtZXMiOlsibm9kZUNyeXB0byIsInN1YnRsZSIsIndlYmNyeXB0byIsInJhbmRvbVVVSUQiLCJnZXRSYW5kb21WYWx1ZXMiLCJhcnJheSIsIl9jcnlwdG8iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/uncrypto/dist/crypto.node.mjs\n");

/***/ })

};
;