/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Cannot find package '@babel/preset-react' imported from /Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/babel-virtual-resolve-base.js\\n    at __node_internal_ (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:233:9)\\n    at new NodeError (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:203:5)\\n    at packageResolve (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:872:9)\\n    at moduleResolve (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:901:20)\\n    at defaultResolve (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:984:15)\\n    at resolve (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:998:12)\\n    at resolve (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/files/import-meta-resolve.js:13:10)\\n    at tryImportMetaResolve (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/files/plugins.js:123:45)\\n    at resolveStandardizedNameForImport (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/files/plugins.js:145:19)\\n    at resolveStandardizedName (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/files/plugins.js:154:12)\\n    at loadPreset (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/files/plugins.js:56:20)\\n    at loadPreset.next (<anonymous>)\\n    at createDescriptor (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/config-descriptors.js:139:16)\\n    at createDescriptor.next (<anonymous>)\\n    at step (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:261:32)\\n    at evaluateAsync (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:291:5)\\n    at /Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:44:11\\n    at Array.forEach (<anonymous>)\\n    at Function.async (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:43:15)\\n    at Function.all (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:216:13)\\n    at Generator.next (<anonymous>)\\n    at createDescriptors (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/config-descriptors.js:101:41)\\n    at createDescriptors.next (<anonymous>)\\n    at createPresetDescriptors (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/config-descriptors.js:95:17)\\n    at createPresetDescriptors.next (<anonymous>)\\n    at /Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/gensync-utils/functional.js:21:23\\n    at Generator.next (<anonymous>)\\n    at mergeChainOpts (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/config-chain.js:350:34)\\n    at mergeChainOpts.next (<anonymous>)\\n    at chainWalker (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/config-chain.js:316:14)\\n    at chainWalker.next (<anonymous>)\\n    at loadFileChain (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/config-chain.js:192:24)\\n    at loadFileChain.next (<anonymous>)\\n    at buildRootChain (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/config-chain.js:109:31)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/partial.js:79:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at Object.<anonymous> (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/@babel/core/lib/config/partial.js:122:25)\\n    at Generator.next (<anonymous>)\\n    at step (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:269:25)\\n    at /Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:223:11)\\n    at /Users/abakus/Desktop/work/works/node/服务器渲染/react-ssr/node_modules/gensync/index.js:37:40\");\n\n//# sourceURL=webpack://react-ssr/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});