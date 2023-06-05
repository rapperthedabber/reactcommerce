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
exports.id = "pages/api/getUser";
exports.ids = ["pages/api/getUser"];
exports.modules = {

/***/ "autoprefixer":
/*!*******************************!*\
  !*** external "autoprefixer" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("autoprefixer");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// // This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n// import { MongoClient } from \"mongodb\";\n// if (!process.env.MONGODB_URI) {\n//   throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n// }\n// const uri = process.env.MONGODB_URI;\n// const options = {};\n// let client;\n// let clientPromise\n// if (process.env.NODE_ENV === \"development\") {\n//   // In development mode, use a global variable so that the value\n//   // is preserved across module reloads caused by HMR (Hot Module Replacement).\n//   if (!global._mongoClientPromise) {\n//     client = new MongoClient(uri, options);\n//     global._mongoClientPromise = client.connect();\n//   }\n//   clientPromise = global._mongoClientPromise;\n// } else {\n//   // In production mode, it's best to not use a global variable.\n//   client = new MongoClient(uri, options);\n//   clientPromise = client.connect();\n// }\n// // Export a module-scoped MongoClient promise. By doing this in a\n// // separate module, the client can be shared across functions.\n// export default clientPromise;\n\nconst connection = {};\nasync function connect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxR0FBcUc7QUFDckcseUNBQXlDO0FBRXpDLGtDQUFrQztBQUNsQyw0RUFBNEU7QUFDNUUsSUFBSTtBQUVKLHVDQUF1QztBQUN2QyxzQkFBc0I7QUFFdEIsY0FBYztBQUNkLG9CQUFvQjtBQUVwQixnREFBZ0Q7QUFDaEQsb0VBQW9FO0FBQ3BFLGtGQUFrRjtBQUNsRix1Q0FBdUM7QUFDdkMsOENBQThDO0FBQzlDLHFEQUFxRDtBQUNyRCxNQUFNO0FBQ04sZ0RBQWdEO0FBQ2hELFdBQVc7QUFDWCxtRUFBbUU7QUFDbkUsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QyxJQUFJO0FBRUosb0VBQW9FO0FBQ3BFLGlFQUFpRTtBQUNqRSxnQ0FBZ0M7QUFFQTtBQUNoQyxNQUFNQyxhQUFhLENBQUM7QUFFcEIsZUFBZUM7SUFDYixJQUFHRCxXQUFXRSxhQUFZO1FBQ3hCO0lBQ0Y7SUFDQyxNQUFNQyxLQUFLLE1BQU1KLHVEQUFnQkUsQ0FBQ0csUUFBUUMsSUFBSUM7SUFDOUNOLFdBQVdFLGNBQWNDLEdBQUdJLFdBQVcsQ0FBQyxFQUFFLENBQUNDO0FBQzlDO0FBRUEsaUVBQWVQLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXHJcbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbi8vIGlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuLy8gICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4vLyBjb25zdCBvcHRpb25zID0ge307XHJcblxyXG4vLyBsZXQgY2xpZW50O1xyXG4vLyBsZXQgY2xpZW50UHJvbWlzZVxyXG5cclxuLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuLy8gICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuLy8gICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4vLyAgIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuLy8gICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4vLyAgICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4vLyAgIH1cclxuLy8gICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuLy8gICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuLy8gICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuLy8gfVxyXG5cclxuLy8gLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgY29ubmVjdGlvbiA9IHt9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCl7XHJcbiAgaWYoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpXHJcbiAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ (() => {

eval("// import mongoose from \"mongoose\"\n// export default function mongooseConnect(){\n//     if(mongoose.connection.readyState === 1){\n//         return mongoose.connection.asPromise();\n//     }else{\n//         const uri = process.env.MONGODB_URI\n//         return mongoose.connect(uri)\n//     }\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9uZ29vc2VDb25uZWN0KCl7XHJcblxyXG4vLyAgICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKXtcclxuLy8gICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuXHJcbi8vICAgICB9ZWxzZXtcclxuLy8gICAgICAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG4vLyAgICAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHVyaSlcclxuLy8gICAgIH1cclxuLy8gfSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsNkNBQTZDO0FBRTdDLGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFFbEQsYUFBYTtBQUNiLDhDQUE4QztBQUM5Qyx1Q0FBdUM7QUFDdkMsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Profile.js":
/*!***************************!*\
  !*** ./models/Profile.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _mongoose = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst { Schema , model  } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst profileSchema = _mongoose.default.Schema({\n    url: {\n        type: String,\n        required: true\n    },\n    Name: {\n        type: String,\n        required: true\n    },\n    age: {\n        type: Number,\n        required: true\n    },\n    bio: {\n        type: String,\n        required: true\n    }\n});\nmodule.exports = _mongoose.default.models.Profile || _mongoose.default.model(\"Profile\", profileSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OzsrRUFDcUIsMEJBQVU7QUFDL0IsTUFBTSxFQUFFQSxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUVsQyxNQUFNQyxnQkFBZUMsa0JBQVNKLE9BQU87SUFDakNLLEtBQUs7UUFDREMsTUFBTUM7UUFDTkMsVUFBVTtJQUVkO0lBQ0FDLE1BQU07UUFDRkgsTUFBTUM7UUFDTkMsVUFBVTtJQUVkO0lBQ0FFLEtBQUs7UUFDREosTUFBTUs7UUFDTkgsVUFBVTtJQUNkO0lBQ0FJLEtBQUs7UUFDRE4sTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0FBR0o7QUFDQUssT0FBT0MsVUFBVVYsa0JBQVNXLE9BQU9DLFdBQVdaLGtCQUFTSCxNQUFNLFdBQVdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vbW9kZWxzL1Byb2ZpbGUuanM/NDQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCB7IFNjaGVtYSwgbW9kZWwgfSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBwcm9maWxlU2NoZW1hPSBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcblxyXG4gICAgfSxcclxuICAgIE5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgYWdlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYmlvOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcblxyXG5cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuUHJvZmlsZSB8fCBtb25nb29zZS5tb2RlbCgnUHJvZmlsZScsIHByb2ZpbGVTY2hlbWEpIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwicmVxdWlyZSIsInByb2ZpbGVTY2hlbWEiLCJtb25nb29zZSIsInVybCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIk5hbWUiLCJhZ2UiLCJOdW1iZXIiLCJiaW8iLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiUHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Profile.js\n");

/***/ }),

/***/ "(api)/./models/newSign.js":
/*!***************************!*\
  !*** ./models/newSign.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _mongoose = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst { Schema , model  } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst userSchema = _mongoose.default.Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\nmodule.exports = _mongoose.default.models.User || _mongoose.default.model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvbmV3U2lnbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OzsrRUFDcUIsMEJBQVU7QUFDL0IsTUFBTSxFQUFFQSxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUVsQyxNQUFNQyxhQUFhQyxrQkFBU0osT0FBTztJQUMvQkssVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO0lBRWQ7SUFDQUMsVUFBVTtRQUNOSCxNQUFNQztRQUNOQyxVQUFVO0lBRWQ7QUFFSjtBQUNBRSxPQUFPQyxVQUFVUCxrQkFBU1EsT0FBT0MsUUFBUVQsa0JBQVNILE1BQU0sUUFBUUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9tb2RlbHMvbmV3U2lnbi5qcz8wNDA2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IHsgU2NoZW1hLCBtb2RlbCB9ID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSlcclxuXHJcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsInJlcXVpcmUiLCJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/newSign.js\n");

/***/ }),

/***/ "(api)/./pages/api/getUser.js":
/*!******************************!*\
  !*** ./pages/api/getUser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateProfile)\n/* harmony export */ });\n/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signUp */ \"(api)/./pages/api/signUp.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Profile */ \"(api)/./models/Profile.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Profile__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userProfile */ \"(api)/./pages/api/userProfile.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! autoprefixer */ \"autoprefixer\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_5__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n\n\nasync function updateProfile(req, res) {\n    if (req.method !== \"GET\") {\n        res.status(400).send({\n            msg: \"you did not do a GET REQUEST\"\n        });\n    }\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        const task = await _models_Profile__WEBPACK_IMPORTED_MODULE_1___default().find().limit(1).sort({\n            $natural: -1\n        });\n        res.status(200).send(task);\n    } catch (err) {\n        res.status(400).send({\n            err,\n            msg: \"Something went wrong!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBRTVDO0FBQ1M7QUFDQTtBQUNWO0FBQ0k7QUFDQTtBQUVyQixlQUFlTSxjQUFjQyxHQUFHLEVBQUNDLEdBQUc7SUFDN0MsSUFBR0QsSUFBSUUsV0FBVyxPQUFNO1FBQ3RCRCxJQUFJRSxPQUFPLEtBQUtDLEtBQUs7WUFBQ0MsS0FBSztRQUE4QjtJQUMzRDtJQUVBLElBQUc7UUFDRCxNQUFNUix3REFBT0E7UUFDYixNQUFNUyxPQUFPLE1BQU1aLDJEQUFZYSxHQUFHQyxNQUFNLEdBQUdDLEtBQUs7WUFBQ0MsVUFBUyxDQUFDO1FBQUM7UUFDNURULElBQUlFLE9BQU8sS0FBS0MsS0FBS0U7SUFDdkIsRUFBQyxPQUFNSyxLQUFJO1FBQ1RWLElBQUlFLE9BQU8sS0FBS0MsS0FBSztZQUFDTztZQUFLTixLQUFLO1FBQXVCO0lBRXpEO0FBSU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvZ2V0VXNlci5qcz8yNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmltcG9ydCBzaWduaW5nVXAgZnJvbSBcIi4vc2lnblVwXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi8uLi9tb2RlbHMvUHJvZmlsZSdcbmltcG9ydCByZW5kZXJQcm9maWxlIGZyb20gXCIuL3VzZXJQcm9maWxlXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZmlsZShyZXEscmVzKXtcbiAgICAgIGlmKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpe1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7bXNnOiAneW91IGRpZCBub3QgZG8gYSBHRVQgUkVRVUVTVCd9KVxuICAgICAgfVxuICAgIFxuICAgICAgdHJ5e1xuICAgICAgICBhd2FpdCBjb25uZWN0KClcbiAgICAgICAgY29uc3QgdGFzayA9IGF3YWl0IFByb2ZpbGUuZmluZCgpLmxpbWl0KDEpLnNvcnQoeyRuYXR1cmFsOi0xfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQodGFzaylcbiAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7ZXJyLCBtc2c6ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnfSlcblxuICAgICAgfVxuXG4gXG4gIFxufSJdLCJuYW1lcyI6WyJzaWduaW5nVXAiLCJQcm9maWxlIiwicmVuZGVyUHJvZmlsZSIsIm1vbmdvb3NlIiwiY29ubmVjdCIsImRhdGEiLCJ1cGRhdGVQcm9maWxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1zZyIsInRhc2siLCJmaW5kIiwibGltaXQiLCJzb3J0IiwiJG5hdHVyYWwiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getUser.js\n");

/***/ }),

/***/ "(api)/./pages/api/signUp.js":
/*!*****************************!*\
  !*** ./pages/api/signUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signingUp)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _models_newSign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/newSign */ \"(api)/./models/newSign.js\");\n/* harmony import */ var _models_newSign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_newSign__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_mongoose__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import clientPromise from \"@/lib/mongodb\"\nasync function signingUp(req, res) {\n    // res.status(200).json(clientPromise.url)\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    try {\n        const user = await _models_newSign__WEBPACK_IMPORTED_MODULE_2___default().create(req.body);\n        if (user) {\n            // res.json({\"code\": 'User Created!'})\n            res.redirect(\"/homePage/homePage\");\n        } else {\n            res.json({\n                \"code\": \"User not Created\"\n            });\n        }\n    } catch (error) {\n        res.status(400).json({\n            status: \"not able to create a new user\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnblVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0k7QUFDSTtBQUdLO0FBQzVDLDRDQUE0QztBQUU3QixlQUFlSSxVQUFVQyxHQUFHLEVBQUNDLEdBQUc7SUFDM0MsMENBQTBDO0lBQzFDLE1BQU1MLHdEQUFPQTtJQUNoQixJQUFHO1FBQ0EsTUFBTU0sT0FBTyxNQUFNTCw2REFBV00sQ0FBQ0gsSUFBSUk7UUFDbkMsSUFBR0YsTUFBSztZQUNKLHNDQUFzQztZQUN0Q0QsSUFBSUksU0FBUztRQUNqQixPQUFLO1lBQ0RKLElBQUlLLEtBQUs7Z0JBQUMsUUFBUTtZQUFrQjtRQUN4QztJQUdILEVBQUMsT0FBT0MsT0FBTTtRQUNYTixJQUFJTyxPQUFPLEtBQUtGLEtBQUs7WUFBQ0UsUUFBUTtRQUErQjtJQUVoRTtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vcGFnZXMvYXBpL3NpZ25VcC5qcz9iNzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxyXG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9saWIvbW9uZ29kYlwiXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9uZXdTaWduJ1xyXG5cclxuXHJcbmltcG9ydCBtb25nb29zZUNvbm5lY3QgZnJvbSBcIkAvbGliL21vbmdvb3NlXCJcclxuLy8gaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2lnbmluZ1VwKHJlcSxyZXMpe1xyXG4gICAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24oY2xpZW50UHJvbWlzZS51cmwpXHJcbiAgICBhd2FpdCBjb25uZWN0KClcclxuIHRyeXtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgICAvLyByZXMuanNvbih7XCJjb2RlXCI6ICdVc2VyIENyZWF0ZWQhJ30pXHJcbiAgICAgICAgcmVzLnJlZGlyZWN0KCcvaG9tZVBhZ2UvaG9tZVBhZ2UnKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmVzLmpzb24oe1wiY29kZVwiOiBcIlVzZXIgbm90IENyZWF0ZWRcIn0pXHJcbiAgICB9XHJcblxyXG5cclxuIH1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N0YXR1czogJ25vdCBhYmxlIHRvIGNyZWF0ZSBhIG5ldyB1c2VyJ30pXHJcblxyXG4gfVxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsIlVzZXIiLCJtb25nb29zZUNvbm5lY3QiLCJzaWduaW5nVXAiLCJyZXEiLCJyZXMiLCJ1c2VyIiwiY3JlYXRlIiwiYm9keSIsInJlZGlyZWN0IiwianNvbiIsImVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/signUp.js\n");

/***/ }),

/***/ "(api)/./pages/api/userProfile.js":
/*!**********************************!*\
  !*** ./pages/api/userProfile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProfile)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Profile */ \"(api)/./models/Profile.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Profile__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function renderProfile(req, res) {\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    try {\n        const profile = await _models_Profile__WEBPACK_IMPORTED_MODULE_2___default().create(req.body);\n        if (profile) {\n            // res.json({\"code\": 'User Created!'})\n            res.redirect(\"/Profile/Profile\");\n        } else {\n            res.json({\n                \"code\": \"profile not Created\"\n            });\n        }\n    } catch (error) {\n        res.status(400).json({\n            status: \"not able to create a new user\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlclByb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ0k7QUFDTTtBQUUzQixlQUFlRyxjQUFjQyxHQUFHLEVBQUNDLEdBQUc7SUFDL0MsTUFBTUosd0RBQU9BO0lBQ2IsSUFBRztRQUNDLE1BQU1LLFVBQVUsTUFBTUosNkRBQWNLLENBQUNILElBQUlJO1FBQ3pDLElBQUdGLFNBQVE7WUFDUCxzQ0FBc0M7WUFDeENELElBQUlJLFNBQVM7UUFFZixPQUFLO1lBQ0RKLElBQUlLLEtBQUs7Z0JBQUMsUUFBUTtZQUFxQjtRQUMzQztJQUdILEVBQUMsT0FBT0MsT0FBTTtRQUNYTixJQUFJTyxPQUFPLEtBQUtGLEtBQUs7WUFBQ0UsUUFBUTtRQUErQjtJQUVoRTtBQUdMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vcGFnZXMvYXBpL3VzZXJQcm9maWxlLmpzPzVmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi8uLi9tb2RlbHMvUHJvZmlsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlclByb2ZpbGUocmVxLHJlcyl7XHJcbiAgICBhd2FpdCBjb25uZWN0KClcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgUHJvZmlsZS5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgIGlmKHByb2ZpbGUpe1xyXG4gICAgICAgICAgICAvLyByZXMuanNvbih7XCJjb2RlXCI6ICdVc2VyIENyZWF0ZWQhJ30pXHJcbiAgICAgICAgICByZXMucmVkaXJlY3QoJy9Qcm9maWxlL1Byb2ZpbGUnKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXMuanNvbih7XCJjb2RlXCI6IFwicHJvZmlsZSBub3QgQ3JlYXRlZFwifSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgIH1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdGF0dXM6ICdub3QgYWJsZSB0byBjcmVhdGUgYSBuZXcgdXNlcid9KVxyXG4gICAgXHJcbiAgICAgfVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwiUHJvZmlsZSIsInJlbmRlclByb2ZpbGUiLCJyZXEiLCJyZXMiLCJwcm9maWxlIiwiY3JlYXRlIiwiYm9keSIsInJlZGlyZWN0IiwianNvbiIsImVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/userProfile.js\n");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzPzQyMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0O1xuZnVuY3Rpb24gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getUser.js"));
module.exports = __webpack_exports__;

})();