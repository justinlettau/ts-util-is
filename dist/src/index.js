"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines if a reference is an `Array`.
 *
 * @param value Reference to check.
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Determines if a reference is a valid base64 string.
 *
 * @param value Reference to check.
 */
function isBase64(value) {
    var base64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
    return isString(value) && base64.test(value);
}
exports.isBase64 = isBase64;
/**
 * Determines if a reference is a `Boolean`.
 *
 * @param value Reference to check.
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
/**
 * Determines if a reference is a `Date`.
 *
 * @param value Reference to check.
 */
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
exports.isDate = isDate;
/**
 * Determines if a reference is a valid `Date`.
 *
 * @param value Reference to check.
 */
function isDateValid(value) {
    return isDate(value) && !isNaN(value.getTime());
}
exports.isDateValid = isDateValid;
/**
 * Determines if a reference is defined.
 *
 * @param value Reference to check.
 */
function isDefined(value) {
    return typeof value !== 'undefined';
}
exports.isDefined = isDefined;
/**
 * Determines if a reference is an `Error`.
 *
 * @param value Reference to check.
 */
function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]' || value instanceof Error;
}
exports.isError = isError;
/**
 * Determines if a reference is a `Function`.
 *
 * @param value Reference to check.
 */
// tslint:disable-next-line:ban-types
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
/**
 * Determines if a reference is a valid GUID string.
 *
 * @param value Reference to check.
 */
function isGuid(value) {
    var guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return isString(value) && guid.test(value);
}
exports.isGuid = isGuid;
/**
 * Determines if a reference is `Infinity` (positive or negative).
 *
 * @param value Reference to check.
 */
function isInfinity(value) {
    return value === Infinity || value === -Infinity;
}
exports.isInfinity = isInfinity;
/**
 * Determines if a reference is `null`.
 *
 * @param value Reference to check.
 */
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
/**
 * Determines if a reference is a `Number`.
 *
 * @param value Reference to check.
 */
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
/**
 * Determines if a reference is an 'Object'.
 *
 * @param value Reference to check.
 */
function isObject(value) {
    return typeof value === 'object';
}
exports.isObject = isObject;
/**
 * Determines if a reference is a plain `Object`. A "plain" object is typically created by `{}` or
 * `new Object()`. Some types such as arrays and null, while technically objects, are not considered
 * plain objects.
 *
 * @param value Reference to check.
 */
function isPlainObject(value) {
    return isObject(value) && Object.prototype.toString.call(value) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
/**
 * Determines if a reference is a `RegExp`.
 *
 * @param value Reference to check.
 */
function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
/**
 * Determines if a reference is a `String`.
 *
 * @param value Reference to check.
 */
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
/**
 * Determines if a reference is a `Symbol`.
 *
 * @param value Reference to check.
 */
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.isSymbol = isSymbol;
/**
 * Determines if a reference is `undefined`.
 *
 * @param value Reference to check.
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
//# sourceMappingURL=index.js.map