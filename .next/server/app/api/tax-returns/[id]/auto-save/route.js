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
exports.id = "app/api/tax-returns/[id]/auto-save/route";
exports.ids = ["app/api/tax-returns/[id]/auto-save/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&page=%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute.ts&appDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&page=%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute.ts&appDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_kiran_taxgrok_tax_filing_app_app_app_api_tax_returns_id_auto_save_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/tax-returns/[id]/auto-save/route.ts */ \"(rsc)/./app/api/tax-returns/[id]/auto-save/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tax-returns/[id]/auto-save/route\",\n        pathname: \"/api/tax-returns/[id]/auto-save\",\n        filename: \"route\",\n        bundlePath: \"app/api/tax-returns/[id]/auto-save/route\"\n    },\n    resolvedPagePath: \"C:\\\\kiran\\\\taxgrok\\\\tax_filing_app\\\\app\\\\app\\\\api\\\\tax-returns\\\\[id]\\\\auto-save\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_kiran_taxgrok_tax_filing_app_app_app_api_tax_returns_id_auto_save_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/tax-returns/[id]/auto-save/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YXgtcmV0dXJucyUyRiU1QmlkJTVEJTJGYXV0by1zYXZlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0YXgtcmV0dXJucyUyRiU1QmlkJTVEJTJGYXV0by1zYXZlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdGF4LXJldHVybnMlMkYlNUJpZCU1RCUyRmF1dG8tc2F2ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDa2lyYW4lNUN0YXhncm9rJTVDdGF4X2ZpbGluZ19hcHAlNUNhcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNraXJhbiU1Q3RheGdyb2slNUN0YXhfZmlsaW5nX2FwcCU1Q2FwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvPzVjM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxca2lyYW5cXFxcdGF4Z3Jva1xcXFx0YXhfZmlsaW5nX2FwcFxcXFxhcHBcXFxcYXBwXFxcXGFwaVxcXFx0YXgtcmV0dXJuc1xcXFxbaWRdXFxcXGF1dG8tc2F2ZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGF4LXJldHVybnMvW2lkXS9hdXRvLXNhdmUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90YXgtcmV0dXJucy9baWRdL2F1dG8tc2F2ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGF4LXJldHVybnMvW2lkXS9hdXRvLXNhdmUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxraXJhblxcXFx0YXhncm9rXFxcXHRheF9maWxpbmdfYXBwXFxcXGFwcFxcXFxhcHBcXFxcYXBpXFxcXHRheC1yZXR1cm5zXFxcXFtpZF1cXFxcYXV0by1zYXZlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90YXgtcmV0dXJucy9baWRdL2F1dG8tc2F2ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&page=%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute.ts&appDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/tax-returns/[id]/auto-save/route.ts":
/*!*****************************************************!*\
  !*** ./app/api/tax-returns/[id]/auto-save/route.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function POST(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        const data = await request.json();\n        const taxReturn = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.taxReturn.findFirst({\n            where: {\n                id: params.id,\n                userId: user.id\n            }\n        });\n        if (!taxReturn) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Tax return not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Update with auto-save data and timestamp\n        const updatedTaxReturn = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.taxReturn.update({\n            where: {\n                id: params.id\n            },\n            data: {\n                ...data,\n                lastSavedAt: new Date(),\n                updatedAt: new Date()\n            },\n            include: {\n                incomeEntries: true,\n                deductionEntries: true,\n                dependents: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            taxReturn: updatedTaxReturn,\n            savedAt: updatedTaxReturn.lastSavedAt\n        });\n    } catch (error) {\n        console.error(\"Error auto-saving tax return:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Auto-save failed\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RheC1yZXR1cm5zL1tpZF0vYXV0by1zYXZlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQztBQUNFO0FBQ1g7QUFFMUIsTUFBTUcsVUFBVSxnQkFBZTtBQUUvQixlQUFlQyxLQUNwQkMsT0FBZ0IsRUFDaEIsRUFBRUMsTUFBTSxFQUE4QjtJQUV0QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNTiwyREFBZ0JBO1FBRXRDLElBQUksQ0FBQ00sU0FBU0MsTUFBTUMsT0FBTztZQUN6QixPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTUosT0FBTyxNQUFNTiwyQ0FBTUEsQ0FBQ00sSUFBSSxDQUFDSyxVQUFVLENBQUM7WUFDeENDLE9BQU87Z0JBQUVMLE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUFDO1FBQ3JDO1FBRUEsSUFBSSxDQUFDRCxNQUFNO1lBQ1QsT0FBT1IscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFpQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDdEU7UUFFQSxNQUFNRyxPQUFPLE1BQU1WLFFBQVFLLElBQUk7UUFFL0IsTUFBTU0sWUFBWSxNQUFNZCwyQ0FBTUEsQ0FBQ2MsU0FBUyxDQUFDQyxTQUFTLENBQUM7WUFDakRILE9BQU87Z0JBQ0xJLElBQUlaLE9BQU9ZLEVBQUU7Z0JBQ2JDLFFBQVFYLEtBQUtVLEVBQUU7WUFDakI7UUFDRjtRQUVBLElBQUksQ0FBQ0YsV0FBVztZQUNkLE9BQU9oQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXVCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM1RTtRQUVBLDJDQUEyQztRQUMzQyxNQUFNUSxtQkFBbUIsTUFBTWxCLDJDQUFNQSxDQUFDYyxTQUFTLENBQUNLLE1BQU0sQ0FBQztZQUNyRFAsT0FBTztnQkFBRUksSUFBSVosT0FBT1ksRUFBRTtZQUFDO1lBQ3ZCSCxNQUFNO2dCQUNKLEdBQUdBLElBQUk7Z0JBQ1BPLGFBQWEsSUFBSUM7Z0JBQ2pCQyxXQUFXLElBQUlEO1lBQ2pCO1lBQ0FFLFNBQVM7Z0JBQ1BDLGVBQWU7Z0JBQ2ZDLGtCQUFrQjtnQkFDbEJDLFlBQVk7WUFDZDtRQUNGO1FBRUEsT0FBTzVCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDdkJtQixTQUFTO1lBQ1RiLFdBQVdJO1lBQ1hVLFNBQVNWLGlCQUFpQkUsV0FBVztRQUN2QztJQUNGLEVBQUUsT0FBT1gsT0FBTztRQUNkb0IsUUFBUXBCLEtBQUssQ0FBQyxpQ0FBaUNBO1FBQy9DLE9BQU9YLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBbUIsR0FDNUI7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hcHAvYXBpL3RheC1yZXR1cm5zL1tpZF0vYXV0by1zYXZlL3JvdXRlLnRzPzMwNmEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL2RiXCJcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH1cbikge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKClcbiAgICBcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9XG4gICAgfSlcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICBjb25zdCB0YXhSZXR1cm4gPSBhd2FpdCBwcmlzbWEudGF4UmV0dXJuLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBcbiAgICAgICAgaWQ6IHBhcmFtcy5pZCxcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkIFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXRheFJldHVybikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVGF4IHJldHVybiBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHdpdGggYXV0by1zYXZlIGRhdGEgYW5kIHRpbWVzdGFtcFxuICAgIGNvbnN0IHVwZGF0ZWRUYXhSZXR1cm4gPSBhd2FpdCBwcmlzbWEudGF4UmV0dXJuLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcGFyYW1zLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGxhc3RTYXZlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGluY29tZUVudHJpZXM6IHRydWUsXG4gICAgICAgIGRlZHVjdGlvbkVudHJpZXM6IHRydWUsXG4gICAgICAgIGRlcGVuZGVudHM6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcbiAgICAgIHRheFJldHVybjogdXBkYXRlZFRheFJldHVybixcbiAgICAgIHNhdmVkQXQ6IHVwZGF0ZWRUYXhSZXR1cm4ubGFzdFNhdmVkQXQgXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYXV0by1zYXZpbmcgdGF4IHJldHVybjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJBdXRvLXNhdmUgZmFpbGVkXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJwcmlzbWEiLCJkeW5hbWljIiwiUE9TVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZGF0YSIsInRheFJldHVybiIsImZpbmRGaXJzdCIsImlkIiwidXNlcklkIiwidXBkYXRlZFRheFJldHVybiIsInVwZGF0ZSIsImxhc3RTYXZlZEF0IiwiRGF0ZSIsInVwZGF0ZWRBdCIsImluY2x1ZGUiLCJpbmNvbWVFbnRyaWVzIiwiZGVkdWN0aW9uRW50cmllcyIsImRlcGVuZGVudHMiLCJzdWNjZXNzIiwic2F2ZWRBdCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/tax-returns/[id]/auto-save/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLGtCQUFrQkM7QUFJakIsTUFBTUMsU0FBU0YsZ0JBQWdCRSxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUU7QUFFbEUsSUFBSUksSUFBeUIsRUFBY0gsZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&page=%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftax-returns%2F%5Bid%5D%2Fauto-save%2Froute.ts&appDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ckiran%5Ctaxgrok%5Ctax_filing_app%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();