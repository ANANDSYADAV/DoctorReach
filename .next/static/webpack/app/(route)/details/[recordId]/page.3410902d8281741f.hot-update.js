"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(route)/details/[recordId]/page",{

/***/ "(app-pages-browser)/./app/_utils/GlobalApi.jsx":
/*!**********************************!*\
  !*** ./app/_utils/GlobalApi.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst { default: axios } = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/dist/browser/axios.cjs\");\nconst API_KEY = \"4c39b749c023840cb44e220ce0672385a99ce4876e43ac1a3da32e5e21d5c688aab2af3e5e1e024408c9675c88b937b2d254c954d27cc05e12474dd22335553cb319d6428256b7972d8d91c5c9983ed3b3e39273676af82fe88beab6bebb294af31bbf3221db94de9e23563508dc1cf5479d57695d36b6d685d40baa77ac8b27\";\nconst axiosClient = axios.create({\n    baseURL: \"https://doctor-appointment-admin-strapi-016c.onrender.com/api\",\n    headers: {\n        \"Authorization\": \"Bearer \".concat(API_KEY)\n    }\n});\nconst getCategory = ()=>axiosClient.get(\"/categories?populate=*\");\nconst getDoctorList = ()=>axiosClient.get(\"/doctors?populate=*\");\nconst getDoctorByCategory = (category)=>axiosClient.get(\"/doctors?filters[categories][Name][$in]=\" + category + \"&populate=*\");\nconst getDoctorById = (id)=>axiosClient.get(\"/doctors/\" + id + \"?populate=*\");\nconst bookAppointment = (data)=>axiosClient.post(\"/appointments\", data);\nconst getUserBookingList = (userEmail)=>axiosClient.get(\"/appointments?[filters][Email][$eq]=\" + userEmail + \"&populate[doctor][populate][image][populate][0]=url&populate=*\");\nconst deleteBooking = (id)=>axiosClient.delete(\"/appointments/\" + id);\nconst sendEmail = (data)=>axios.post(\"/api/sendEmail\", data);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    getCategory,\n    getDoctorList,\n    getDoctorByCategory,\n    getDoctorById,\n    bookAppointment,\n    getUserBookingList,\n    deleteBooking,\n    sendEmail\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fdXRpbHMvR2xvYmFsQXBpLmpzeCIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxTQUFTQyxLQUFLLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsOEVBQU87QUFHMUMsTUFBTUMsVUFBVUMsa1FBQXNDO0FBRXRELE1BQU1HLGNBQWNOLE1BQU1PLE1BQU0sQ0FBQztJQUM3QkMsU0FBUztJQUNUQyxTQUFTO1FBQ0wsaUJBQWlCLFVBQWtCLE9BQVJQO0lBQy9CO0FBQ0o7QUFFQSxNQUFNUSxjQUFjLElBQU1KLFlBQVlLLEdBQUcsQ0FBQztBQUUxQyxNQUFNQyxnQkFBZ0IsSUFBTU4sWUFBWUssR0FBRyxDQUFDO0FBRTVDLE1BQU1FLHNCQUFzQixDQUFDQyxXQUFhUixZQUFZSyxHQUFHLENBQUMsNkNBQTZDRyxXQUFXO0FBRWxILE1BQU1DLGdCQUFnQixDQUFDQyxLQUFPVixZQUFZSyxHQUFHLENBQUMsY0FBY0ssS0FBSztBQUVqRSxNQUFNQyxrQkFBa0IsQ0FBQ0MsT0FBU1osWUFBWWEsSUFBSSxDQUFDLGlCQUFpQkQ7QUFFcEUsTUFBTUUscUJBQXFCLENBQUNDLFlBQWNmLFlBQVlLLEdBQUcsQ0FBQyx5Q0FBeUNVLFlBQVk7QUFFL0csTUFBTUMsZ0JBQWdCLENBQUNOLEtBQU9WLFlBQVlpQixNQUFNLENBQUMsbUJBQW1CUDtBQUVwRSxNQUFNUSxZQUFZLENBQUNOLE9BQVNsQixNQUFNbUIsSUFBSSxDQUFDLGtCQUFrQkQ7QUFDekQsK0RBQWU7SUFDWFI7SUFDQUU7SUFDQUM7SUFDQUU7SUFDQUU7SUFDQUc7SUFDQUU7SUFDQUU7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fdXRpbHMvR2xvYmFsQXBpLmpzeD9hOGZmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVmYXVsdDogYXhpb3MgfSA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcblxyXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9LRVk7XHJcblxyXG5jb25zdCBheGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cHM6Ly9kb2N0b3ItYXBwb2ludG1lbnQtYWRtaW4tc3RyYXBpLTAxNmMub25yZW5kZXIuY29tL2FwaScsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7QVBJX0tFWX1gXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IGF4aW9zQ2xpZW50LmdldCgnL2NhdGVnb3JpZXM/cG9wdWxhdGU9KicpO1xyXG5cclxuY29uc3QgZ2V0RG9jdG9yTGlzdCA9ICgpID0+IGF4aW9zQ2xpZW50LmdldCgnL2RvY3RvcnM/cG9wdWxhdGU9KicpXHJcblxyXG5jb25zdCBnZXREb2N0b3JCeUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiBheGlvc0NsaWVudC5nZXQoJy9kb2N0b3JzP2ZpbHRlcnNbY2F0ZWdvcmllc11bTmFtZV1bJGluXT0nICsgY2F0ZWdvcnkgKyBcIiZwb3B1bGF0ZT0qXCIpXHJcblxyXG5jb25zdCBnZXREb2N0b3JCeUlkID0gKGlkKSA9PiBheGlvc0NsaWVudC5nZXQoJy9kb2N0b3JzLycgKyBpZCArIFwiP3BvcHVsYXRlPSpcIilcclxuXHJcbmNvbnN0IGJvb2tBcHBvaW50bWVudCA9IChkYXRhKSA9PiBheGlvc0NsaWVudC5wb3N0KCcvYXBwb2ludG1lbnRzJywgZGF0YSk7XHJcblxyXG5jb25zdCBnZXRVc2VyQm9va2luZ0xpc3QgPSAodXNlckVtYWlsKSA9PiBheGlvc0NsaWVudC5nZXQoXCIvYXBwb2ludG1lbnRzP1tmaWx0ZXJzXVtFbWFpbF1bJGVxXT1cIiArIHVzZXJFbWFpbCArIFwiJnBvcHVsYXRlW2RvY3Rvcl1bcG9wdWxhdGVdW2ltYWdlXVtwb3B1bGF0ZV1bMF09dXJsJnBvcHVsYXRlPSpcIilcclxuXHJcbmNvbnN0IGRlbGV0ZUJvb2tpbmcgPSAoaWQpID0+IGF4aW9zQ2xpZW50LmRlbGV0ZSgnL2FwcG9pbnRtZW50cy8nICsgaWQpXHJcblxyXG5jb25zdCBzZW5kRW1haWwgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL2FwaS9zZW5kRW1haWwnLCBkYXRhKTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0Q2F0ZWdvcnksXHJcbiAgICBnZXREb2N0b3JMaXN0LFxyXG4gICAgZ2V0RG9jdG9yQnlDYXRlZ29yeSxcclxuICAgIGdldERvY3RvckJ5SWQsXHJcbiAgICBib29rQXBwb2ludG1lbnQsXHJcbiAgICBnZXRVc2VyQm9va2luZ0xpc3QsXHJcbiAgICBkZWxldGVCb29raW5nLFxyXG4gICAgc2VuZEVtYWlsXHJcbn0iXSwibmFtZXMiOlsiZGVmYXVsdCIsImF4aW9zIiwicmVxdWlyZSIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9LRVkiLCJheGlvc0NsaWVudCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiZ2V0Q2F0ZWdvcnkiLCJnZXQiLCJnZXREb2N0b3JMaXN0IiwiZ2V0RG9jdG9yQnlDYXRlZ29yeSIsImNhdGVnb3J5IiwiZ2V0RG9jdG9yQnlJZCIsImlkIiwiYm9va0FwcG9pbnRtZW50IiwiZGF0YSIsInBvc3QiLCJnZXRVc2VyQm9va2luZ0xpc3QiLCJ1c2VyRW1haWwiLCJkZWxldGVCb29raW5nIiwiZGVsZXRlIiwic2VuZEVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_utils/GlobalApi.jsx\n"));

/***/ })

});