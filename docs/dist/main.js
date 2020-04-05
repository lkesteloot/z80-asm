/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,2,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Ide_1 = __webpack_require__(9);
Ide_1.main();


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "main", function() { return /* binding */ main; });

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.js
var codemirror = __webpack_require__(1);
var codemirror_default = /*#__PURE__*/__webpack_require__.n(codemirror);

// EXTERNAL MODULE: ./src/assembler/Opcodes.ts
var Opcodes = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/z80-base/dist/module/index.js + 4 modules
var dist_module = __webpack_require__(0);

// CONCATENATED MODULE: ./src/assembler/Parser.ts


/**
 * List of all flags.
 */
const FLAGS = new Set(["z", "nz", "c", "nc", "po", "pe", "p", "m"]);
class ParseResults {
    constructor(line, address) {
        // Decoded opcodes and parameters:
        this.binary = [];
        this.line = line;
        this.address = address;
    }
    set nextAddress(nextAddress) {
        this.specifiedNextAddress = nextAddress;
    }
    get nextAddress() {
        var _a;
        // Return explicit if provided, otherwise compute.
        return (_a = this.specifiedNextAddress) !== null && _a !== void 0 ? _a : (this.address + this.binary.length);
    }
}
/**
 * Parses one line of assembly language.
 */
class Parser_Parser {
    constructor(line, address, constants, ignoreUnknownIdentifiers) {
        // Parsing index into the line.
        this.i = 0;
        // Pointer to the token we just parsed.
        this.previousToken = 0;
        this.line = line;
        this.address = address;
        this.constants = constants;
        this.ignoreUnknownIdentifiers = ignoreUnknownIdentifiers;
        this.results = new ParseResults(line, address);
    }
    assemble() {
        // What value to assign to the label we parse, if any.
        let labelValue;
        // Look for compiler directive.
        if (this.line.trim().startsWith("#")) {
            this.parseDirective();
            return this.results;
        }
        // Look for label in column 1.
        this.i = 0;
        let label = this.readIdentifier(false, false);
        if (label !== undefined) {
            if (this.foundChar(':')) {
                // Optional colon.
            }
            // By default assign it to current address, but can be overwritten
            // by .equ below.
            labelValue = this.address;
        }
        this.skipWhitespace();
        let mnemonic = this.readIdentifier(false, true);
        if (mnemonic !== undefined && this.previousToken > 0) {
            if (mnemonic === ".byte") {
                while (true) {
                    const s = this.readString();
                    if (s !== undefined) {
                        for (let i = 0; i < s.length; i++) {
                            this.results.binary.push(s.charCodeAt(i));
                        }
                    }
                    else if (this.results.error !== undefined) {
                        // Error parsing string.
                        return this.results;
                    }
                    else {
                        const value = this.readExpression();
                        if (value === undefined) {
                            if (this.results.error === undefined) {
                                this.results.error = "invalid .byte expression";
                            }
                            return this.results;
                        }
                        this.results.binary.push(value);
                    }
                    if (!this.foundChar(',')) {
                        break;
                    }
                }
            }
            else if (mnemonic === ".word") {
                while (true) {
                    const value = this.readExpression();
                    if (value === undefined) {
                        if (this.results.error === undefined) {
                            this.results.error = "invalid .word expression";
                        }
                        return this.results;
                    }
                    this.results.binary.push(Object(dist_module["d" /* lo */])(value));
                    this.results.binary.push(Object(dist_module["a" /* hi */])(value));
                    if (!this.foundChar(',')) {
                        break;
                    }
                }
            }
            else if (mnemonic === ".equ" || mnemonic === "equ") {
                const value = this.readExpression();
                if (value === undefined) {
                    this.results.error = "bad value for constant";
                }
                else if (label === undefined) {
                    this.results.error = "must have label for constant";
                }
                else {
                    // Remember constant.
                    labelValue = value;
                }
            }
            else {
                this.processOpCode(mnemonic);
            }
        }
        // Make sure there's no extra junk.
        this.ensureEndOfLine();
        if (label !== undefined && labelValue !== undefined) {
            const oldValue = this.constants[label];
            if (oldValue !== undefined && labelValue !== oldValue) {
                // TODO should be programmer error.
                console.log("warning: changing value of \"" + label + "\" from " + Object(dist_module["e" /* toHex */])(oldValue, 4) +
                    " to " + Object(dist_module["e" /* toHex */])(labelValue, 4));
            }
            this.constants[label] = labelValue;
        }
        return this.results;
    }
    // Make sure there's no junk at the end of the line.
    ensureEndOfLine() {
        // Check for comment.
        if (this.isChar(';')) {
            // Skip rest of line.
            this.i = this.line.length;
        }
        if (this.i != this.line.length) {
            this.results.error = "syntax error";
        }
    }
    parseDirective() {
        this.skipWhitespace();
        if (!this.foundChar('#')) {
            // Logic error.
            throw new Error("did not find # for directive");
        }
        const directive = this.readIdentifier(true, true);
        if (directive === undefined || directive === "") {
            this.results.error = "must specify directive after #";
            return;
        }
        switch (directive) {
            case "code":
                const segmentName = this.readIdentifier(true, false);
                if (segmentName === undefined) {
                    this.results.error = "segment name expected";
                }
                else if (this.foundChar(',')) {
                    const startAddress = this.readExpression();
                    if (startAddress === undefined) {
                        this.results.error = "start address expected";
                    }
                    else {
                        this.results.nextAddress = startAddress;
                        // TODO parse length of segment.
                    }
                }
                break;
            case "include":
                const filename = this.readString();
                if (filename === undefined) {
                    this.results.error = "missing included filename";
                }
                else {
                    this.results.includeFilename = filename;
                }
                break;
            default:
                this.results.error = "unknown directive #" + directive;
                break;
        }
        // Make sure there's no extra junk.
        this.ensureEndOfLine();
    }
    processOpCode(mnemonic) {
        // TODO: I don't know why I need that any:
        const mnemonicInfo = Opcodes["a" /* default */].mnemonics[mnemonic];
        if (mnemonicInfo !== undefined) {
            const argStart = this.i;
            let match = false;
            for (const variant of mnemonicInfo.variants) {
                // Map from something like "nn" to its value.
                const args = {};
                match = true;
                for (const token of variant.tokens) {
                    if (token === "," || token === "(" || token === ")" || token === "+") {
                        if (!this.foundChar(token)) {
                            match = false;
                        }
                    }
                    else if (token === "nn" || token === "nnnn" || token === "dd" || token === "offset") {
                        // Parse.
                        const value = this.readExpression();
                        if (value === undefined) {
                            match = false;
                        }
                        else {
                            // Add value to binary.
                            if (args[token] !== undefined) {
                                throw new Error("duplicate arg: " + this.line);
                            }
                            args[token] = value;
                        }
                    }
                    else if (this.parseHexDigit(token[0], 10) !== undefined) {
                        // If the token is a number, then we must parse an expression and
                        // compare the values. This is used for BIT, SET, RES, RST, IM, and one
                        // variant of OUT (OUT (C), 0).
                        const expectedValue = parseInt(token, 10);
                        const actualValue = this.readExpression();
                        if (expectedValue !== actualValue) {
                            match = false;
                        }
                    }
                    else {
                        // Register or flag.
                        const identifier = this.readIdentifier(true, true);
                        if (identifier !== token) {
                            match = false;
                        }
                    }
                    if (!match) {
                        break;
                    }
                }
                if (match) {
                    // See if it's the end of the line.
                    if (this.i < this.line.length && !this.isChar(';')) {
                        match = false;
                    }
                }
                if (match) {
                    this.results.binary = [];
                    for (const op of variant.opcode) {
                        if (typeof (op) === "string") {
                            const value = args[op];
                            if (value === undefined) {
                                throw new Error("arg " + op + " not found for " + this.line);
                            }
                            switch (op) {
                                case "nnnn":
                                    this.results.binary.push(Object(dist_module["d" /* lo */])(value));
                                    this.results.binary.push(Object(dist_module["a" /* hi */])(value));
                                    break;
                                case "nn":
                                case "dd":
                                    this.results.binary.push(Object(dist_module["d" /* lo */])(value));
                                    break;
                                case "offset":
                                    this.results.binary.push(Object(dist_module["d" /* lo */])(value - this.results.address - this.results.binary.length - 1));
                                    break;
                                default:
                                    throw new Error("Unknown arg type " + op);
                            }
                        }
                        else {
                            this.results.binary.push(op);
                        }
                    }
                    break;
                }
                else {
                    // Reset reader.
                    this.i = argStart;
                }
            }
            if (!match) {
                this.results.error = "no variant found for " + mnemonic;
            }
        }
        else {
            this.results.error = "unknown mnemonic: " + mnemonic;
        }
    }
    /**
     * Reads a string like "abc", or undefined if didn't find a string.
     * If found the beginning of a string but not the end, sets this.results.error
     * and returns undefined.
     */
    readString() {
        // Find beginning of string.
        if (this.i === this.line.length || this.line[this.i] != '"') {
            return undefined;
        }
        this.i++;
        // Find end of string.
        const startIndex = this.i;
        while (this.i < this.line.length && this.line[this.i] !== '"') {
            this.i++;
        }
        if (this.i === this.line.length) {
            // No end quote.
            this.results.error = "no end quote in string";
            return undefined;
        }
        // Clip out string contents.
        const value = this.line.substring(startIndex, this.i);
        this.i++;
        this.skipWhitespace();
        return value;
    }
    readExpression() {
        // Expressions can't start with an open parenthesis because that's ambiguous
        // with dereferencing.
        if (this.line[this.i] === '(') {
            return undefined;
        }
        return this.readSum();
    }
    readSum() {
        let value = 0;
        let sign = 1;
        while (true) {
            const subValue = this.readProduct();
            if (subValue === undefined) {
                return undefined;
            }
            value += sign * subValue;
            if (this.foundChar('+')) {
                sign = 1;
            }
            else if (this.foundChar('-')) {
                sign = -1;
            }
            else {
                break;
            }
        }
        return value;
    }
    readProduct() {
        let value = 1;
        let isMultiply = true;
        while (true) {
            const subValue = this.readShift();
            if (subValue === undefined) {
                return undefined;
            }
            if (isMultiply) {
                value *= subValue;
            }
            else {
                value /= subValue;
            }
            if (this.foundChar('*')) {
                isMultiply = true;
            }
            else if (this.foundChar('/')) {
                isMultiply = false;
            }
            else {
                break;
            }
        }
        return value;
    }
    readShift() {
        let value = 0;
        let op = "";
        while (true) {
            const subValue = this.readAtom();
            if (subValue === undefined) {
                return undefined;
            }
            if (op === "<<") {
                value <<= subValue;
            }
            else if (op === ">>") {
                value >>= subValue;
            }
            else {
                value = subValue;
            }
            op = this.line.substr(this.i, 2);
            if (op === "<<" || op === ">>") {
                this.i += 2;
                this.skipWhitespace();
            }
            else {
                break;
            }
        }
        return value;
    }
    readAtom() {
        const startIndex = this.i;
        // Parenthesized expression.
        if (this.foundChar('(')) {
            const value = this.readSum();
            if (value === undefined || !this.foundChar(')')) {
                return undefined;
            }
            return value;
        }
        // Try identifier.
        const identifier = this.readIdentifier(false, false);
        if (identifier !== undefined) {
            // Get address of identifier or value of constant.
            let value = this.constants[identifier];
            if (value === undefined) {
                if (!this.ignoreUnknownIdentifiers) {
                    this.results.error = "unknown identifier \"" + identifier + "\"";
                }
                value = 0;
            }
            return value;
        }
        // Try literal character, like 'a'.
        if (this.isChar("'")) {
            if (this.i > this.line.length - 3 || this.line[this.i + 2] !== "'") {
                // TODO invalid character constant, show error.
                return undefined;
            }
            const value = this.line.charCodeAt(this.i + 1);
            this.i += 3;
            this.skipWhitespace();
            return value;
        }
        // Try numeric literal.
        let base = 10;
        let sign = 1;
        let gotDigit = false;
        if (this.foundChar('-')) {
            sign = -1;
        }
        // Hex numbers can start with $, like $FF.
        if (this.foundChar('$')) {
            if (this.i === this.line.length || this.parseHexDigit(this.line[this.i], 16) === undefined) {
                // It's a reference to the current address, not a hex prefix.
                return sign * this.results.address;
            }
            base = 16;
        }
        else if (this.foundChar('%')) {
            base = 2;
        }
        // Before we parse the number, we need to look ahead to see
        // if it ends with H, like 0FFH.
        if (base === 10) {
            const beforeIndex = this.i;
            while (this.i < this.line.length && this.parseHexDigit(this.line[this.i], 16) !== undefined) {
                this.i++;
            }
            if (this.i < this.line.length && this.line[this.i].toUpperCase() === "H") {
                base = 16;
            }
            this.i = beforeIndex;
        }
        // And again we need to look for B, like 010010101B. We can't fold this into the
        // above look since a "B" is a legal hex number!
        if (base === 10) {
            const beforeIndex = this.i;
            while (this.i < this.line.length && this.parseHexDigit(this.line[this.i], 2) !== undefined) {
                this.i++;
            }
            if (this.i < this.line.length && this.line[this.i].toUpperCase() === "B" &&
                // "B" can't be followed by hex digit, or it's not the final character.
                (this.i === this.line.length || this.parseHexDigit(this.line[this.i + 1], 16) === undefined)) {
                base = 2;
            }
            this.i = beforeIndex;
        }
        // Look for 0x or 0b prefix. Must do this after above checks so that we correctly
        // mark "0B1H" as hex and not binary.
        if (base === 10 && this.i + 2 < this.line.length && this.line[this.i] === '0') {
            if (this.line[this.i + 1].toLowerCase() == 'x') {
                base = 16;
                this.i += 2;
            }
            else if (this.line[this.i + 1].toLowerCase() == 'b' &&
                // Must check next digit to distinguish from just "0B".
                this.parseHexDigit(this.line[this.i + 2], 2) !== undefined) {
                base = 2;
                this.i += 2;
            }
        }
        // Parse number.
        let value = 0;
        while (true) {
            if (this.i == this.line.length) {
                break;
            }
            const ch = this.line[this.i];
            let chValue = this.parseHexDigit(ch, base);
            if (chValue === undefined) {
                break;
            }
            value = value * base + chValue;
            gotDigit = true;
            this.i++;
        }
        if (!gotDigit) {
            // Didn't parse anything.
            return undefined;
        }
        // Check for base suffix.
        if (this.i < this.line.length) {
            const baseChar = this.line[this.i].toUpperCase();
            if (baseChar === "H") {
                // Check for programmer errors.
                if (base !== 16) {
                    throw new Error("found H at end of non-hex number: " + this.line.substring(startIndex, this.i + 1));
                }
                this.i++;
            }
            else if (baseChar === "B") {
                // Check for programmer errors.
                if (base !== 2) {
                    throw new Error("found B at end of non-binary number: " + this.line.substring(startIndex, this.i + 1));
                }
                this.i++;
            }
        }
        this.skipWhitespace();
        return sign * value;
    }
    skipWhitespace() {
        while (this.i < this.line.length && (this.line[this.i] === ' ' || this.line[this.i] === '\t')) {
            this.i++;
        }
    }
    readIdentifier(allowRegister, toLowerCase) {
        const startIndex = this.i;
        while (this.i < this.line.length && this.isLegalIdentifierCharacter(this.line[this.i], this.i == startIndex)) {
            this.i++;
        }
        if (this.i > startIndex) {
            let identifier = this.line.substring(startIndex, this.i);
            if (toLowerCase) {
                identifier = identifier.toLowerCase();
            }
            if (!allowRegister && (Object(dist_module["c" /* isWordReg */])(identifier) || Object(dist_module["b" /* isByteReg */])(identifier) || this.isFlag(identifier))) {
                // Register names can't be identifiers.
                this.i = startIndex;
                return undefined;
            }
            this.skipWhitespace();
            this.previousToken = startIndex;
            return identifier;
        }
        else {
            return undefined;
        }
    }
    isLegalIdentifierCharacter(ch, isFirst) {
        return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || ch == '.' || ch == '_' ||
            (!isFirst && (ch >= '0' && ch <= '9'));
    }
    foundChar(ch) {
        if (this.isChar(ch)) {
            this.i++;
            this.skipWhitespace();
            return true;
        }
        else {
            return false;
        }
    }
    isChar(ch) {
        return this.i < this.line.length && this.line[this.i] === ch;
    }
    parseHexDigit(ch, base) {
        let value = ch >= '0' && ch <= '9' ? ch.charCodeAt(0) - 0x30
            : ch >= 'A' && ch <= 'F' ? ch.charCodeAt(0) - 0x41 + 10
                : ch >= 'a' && ch <= 'f' ? ch.charCodeAt(0) - 0x61 + 10
                    : undefined;
        return value === undefined || value >= base ? undefined : value;
    }
    isFlag(s) {
        return FLAGS.has(s.toLowerCase());
    }
}

// EXTERNAL MODULE: ./node_modules/codemirror/addon/dialog/dialog.js
var dialog = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/search/search.js
var search = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/search/jump-to-line.js
var jump_to_line = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/edit/closebrackets.js
var closebrackets = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/codemirror/mode/z80/z80.js
var z80 = __webpack_require__(10);

// CONCATENATED MODULE: ./src/ide/Ide.ts








// Max number of sub-lines per line. These are lines where we display the
// opcodes for a single source line.
const MAX_SUBLINES = 100;
// Max number of opcode bytes we display per subline. Sync this with the CSS
// that lays out the gutter.
const BYTES_PER_SUBLINE = 3;
function assembleAll(cm) {
    const constants = {};
    const before = Date.now();
    // First pass.
    let address = 0;
    for (let i = 0; i < cm.lineCount(); i++) {
        const line = cm.getLine(i);
        const parser = new Parser_Parser(line, address, constants, true);
        const results = parser.assemble();
        address = results.nextAddress;
    }
    // Second pass.
    address = 0;
    for (let i = 0; i < cm.lineCount(); i++) {
        const line = cm.getLine(i);
        const parser = new Parser_Parser(line, address, constants, false);
        const results = parser.assemble();
        let addressElement;
        if (results.binary.length > 0) {
            addressElement = document.createElement("div");
            // Break opcodes over multiple lines if necessary.
            let numLines = 0;
            for (let offset = 0; offset < results.binary.length && numLines < MAX_SUBLINES; offset += BYTES_PER_SUBLINE, numLines++) {
                const addressString = Object(dist_module["g" /* toHexWord */])(results.address + offset) +
                    " " + results.binary.slice(offset, offset + BYTES_PER_SUBLINE).map(dist_module["f" /* toHexByte */]).join(" ");
                const addressTextElement = document.createTextNode(addressString);
                if (offset > 0) {
                    addressElement.appendChild(document.createElement("br"));
                }
                addressElement.appendChild(addressTextElement);
            }
            addressElement.classList.add("gutter-style");
            // For the line height using CSS.
            cm.removeLineClass(i, "wrap", undefined);
            if (numLines !== 1) {
                cm.addLineClass(i, "wrap", "line-height-" + numLines);
            }
        }
        else {
            addressElement = null;
        }
        cm.setGutterMarker(i, "gutter-assembled", addressElement);
        if (results.error === undefined) {
            cm.removeLineClass(i, "text", "error-line");
        }
        else {
            cm.addLineClass(i, "text", "error-line");
        }
        address = results.nextAddress;
    }
    const after = Date.now();
    console.log("Assembly time: " + (after - before));
}
function main() {
    const element = document.getElementById("editor");
    const config = {
        value: "",
        lineNumbers: true,
        tabSize: 8,
        theme: 'mbo',
        gutters: ["CodeMirror-linenumbers", "gutter-assembled"],
        autoCloseBrackets: true,
        mode: "text/x-z80",
    };
    const cm = codemirror_default()(element, config);
    // Create CSS classes for our line heights. We do this dynamically since
    // we don't know the line height at compile time.
    const cssRules = [];
    for (let lineCount = 1; lineCount < MAX_SUBLINES; lineCount++) {
        cssRules.push(".line-height-" + lineCount + " { height: " + lineCount * cm.defaultTextHeight() + "px; }");
    }
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(cssRules.join("\n")));
    document.head.appendChild(style);
    cm.on("change", (instance, changeObj) => {
        // It's important to call this in "change", and not in "changes" or
        // after a timeout, because we want to be part of this operation.
        // This way a large re-assemble takes 40ms instead of 300ms.
        assembleAll(cm);
    });
    fetch("samples/basic.asm")
        .then(response => response.text())
        .then(text => cm.setValue(text));
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map