/**
 * Determines if a reference is an `Array`.
 *
 * @param value Reference to check.
 */
export declare function isArray(value: any): value is any[];
/**
 * Determines if a reference is a valid base64 string.
 *
 * @param value Reference to check.
 */
export declare function isBase64(value: any): value is string;
/**
 * Determines if a reference is a `Boolean`.
 *
 * @param value Reference to check.
 */
export declare function isBoolean(value: any): value is boolean;
/**
 * Determines if a reference is a `Date`.
 *
 * @param value Reference to check.
 */
export declare function isDate(value: any): value is Date;
/**
 * Determines if a reference is a valid `Date`.
 *
 * @param value Reference to check.
 */
export declare function isDateValid(value: any): value is Date;
/**
 * Determines if a reference is defined.
 *
 * @param value Reference to check.
 */
export declare function isDefined(value: any): boolean;
/**
 * Determines if a reference is an `Error`.
 *
 * @param value Reference to check.
 */
export declare function isError(value: any): value is Error;
/**
 * Determines if a reference is a `Function`.
 *
 * @param value Reference to check.
 */
export declare function isFunction(value: any): value is Function;
/**
 * Determines if a reference is a valid GUID string.
 *
 * @param value Reference to check.
 */
export declare function isGuid(value: any): value is string;
/**
 * Determines if a reference is `Infinity` (positive or negative).
 *
 * @param value Reference to check.
 */
export declare function isInfinity(value: any): value is number;
/**
 * Determines if a reference is `null`.
 *
 * @param value Reference to check.
 */
export declare function isNull(value: any): value is null;
/**
 * Determines if a reference is a `Number`.
 *
 * @param value Reference to check.
 */
export declare function isNumber(value: any): value is number;
/**
 * Determines if a reference is an 'Object'.
 *
 * @param value Reference to check.
 */
export declare function isObject(value: any): value is Object;
/**
 * Determines if a reference is a plain `Object`. A "plain" object is typically created by `{}` or
 * `new Object()`. Some types such as arrays and null, while technically objects, are not considered
 * plain objects.
 *
 * @param value Reference to check.
 */
export declare function isPlainObject(value: any): value is Object;
/**
 * Determines if a reference is a `RegExp`.
 *
 * @param value Reference to check.
 */
export declare function isRegExp(value: any): value is RegExp;
/**
 * Determines if a reference is a `String`.
 *
 * @param value Reference to check.
 */
export declare function isString(value: any): value is string;
/**
 * Determines if a reference is a `Symbol`.
 *
 * @param value Reference to check.
 */
export declare function isSymbol(value: any): value is symbol;
/**
 * Determines if a reference is `undefined`.
 *
 * @param value Reference to check.
 */
export declare function isUndefined(value: any): value is undefined;
