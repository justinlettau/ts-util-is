/**
 * Determines if a reference is an `Array`.
 *
 * @param value Reference to check.
 * @returns True if `value` is an `Array`.
 */
export function isArray(value: any): value is [] {
    return Array.isArray(value);
}

/**
 * Determines if a reference is a `Boolean`.
 *
 * @param value Reference to check.
 * @returns True if `value` is a `Boolean`.
 */
export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean';
}

/**
 * Determines if a reference is a `Date`.
 *
 * @param value Reference to check.
 * @returns True if `value` is a `Date`.
 */
export function isDate(value: any): value is Date {
    return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * Determines if a reference is defined.
 *
 * @param value Reference to check.
 * @returns True if `value` is defined.
 */
export function isDefined(value: any): boolean {
    return typeof value !== 'undefined';
}

/**
 * Determines if a reference is an `Error`.
 *
 * @param value Reference to check.
 * @returns True if `value` is an `Error`.
 */
export function isError(value: any): value is Error {
    return Object.prototype.toString.call(value) === '[object Error]' || value instanceof Error;
}

/**
 * Determines if a reference is a `Function`.
 *
 * @param value Reference to check.
 * @returns True if `value` is a `Function`.
 */
export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

/**
 * Determines if a reference is a valid GUID string.
 *
 * @param value Reference to check.
 * @returns True if `value` is a valid GUID string.
 */
export function isGuid(value: string): boolean {
    const guid: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    return value && guid.test(value);
}

/**
 * Determines if a reference is `null`.
 *
 * @param value Reference to check.
 * @returns True if `value` is `null`.
 */
export function isNull(value: any): value is null {
    return value === null;
}

/**
 * Determines if a reference is a `Number`.
 *
 * @param value Reference to check.
 * @returns True if `value` is a `Number`.
 */
export function isNumber(value: any): value is number {
    return typeof value === 'number';
}

/**
 * Determines if a reference is an 'Object'.
 *
 * @param value Reference to check.
 * @returns True if `value` is an `Object`.
 */
export function isObject(value: any): value is {} {
    return typeof value === 'object';
}

/**
 * Determines if a reference is a `RegExp`.
 *
 * @param value Reference to check.
 * @returns True if `value` is a `RegExp`.
 */
export function isRegExp(value: any): value is RegExp {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

/**
 * Determines if a reference is a `String`.
 *
 * @param value Reference to check.
 * @returns True if `value` is a `String`.
 */
export function isString(value: any): value is string {
    return typeof value === 'string';
}

/**
 * Determines if a reference is a `Symbol`.
 *
 * @param value Reference to check.
 * @returns True if `value` is a `Symbol`.
 */
export function isSymbol(value: any): value is symbol {
    return typeof value === 'symbol';
}

/**
 * Determines if a reference is `undefined`.
 *
 * @param value Reference to check.
 * @returns True if `value` is `undefined`.
 */
export function isUndefined(value: any): value is undefined {
    return typeof value === 'undefined';
}
