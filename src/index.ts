/**
 * Determines if a reference is an `Array`.
 *
 * @param value Reference to check.
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

/**
 * Determines if a reference is a valid base64 string.
 *
 * @param value Reference to check.
 */
export function isBase64(value: any): value is string {
  const base64 =
    /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

  return isString(value) && base64.test(value);
}

/**
 * Determines if a reference is a `Boolean`.
 *
 * @param value Reference to check.
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Determines if a reference is a `Date`.
 *
 * @param value Reference to check.
 */
export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * Determines if a reference is a valid `Date`.
 *
 * @param value Reference to check.
 */
export function isDateValid(value: any): value is Date {
  return isDate(value) && !isNaN(value.getTime());
}

/**
 * Determines if a reference is defined.
 *
 * @param value Reference to check.
 */
export function isDefined(value: any): boolean {
  return typeof value !== 'undefined';
}

/**
 * Determines if a reference is an `Error`.
 *
 * @param value Reference to check.
 */
export function isError(value: any): value is Error {
  return (
    Object.prototype.toString.call(value) === '[object Error]' ||
    value instanceof Error
  );
}

/**
 * Determines if a reference is a `Function`.
 *
 * @param value Reference to check.
 */
// tslint:disable-next-line:ban-types
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * Determines if a reference is a valid GUID string.
 *
 * @param value Reference to check.
 */
export function isGuid(value: any): value is string {
  const guid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return isString(value) && guid.test(value);
}

/**
 * Determines if a reference is `Infinity` (positive or negative).
 *
 * @param value Reference to check.
 */
export function isInfinity(value: any): value is number {
  return value === Infinity || value === -Infinity;
}

/**
 * Determines if a reference is `null`.
 *
 * @param value Reference to check.
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
 * Determines if a reference is a `Number`.
 *
 * @param value Reference to check.
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}

/**
 * Determines if a reference is an 'Object'.
 *
 * @param value Reference to check.
 */
export function isObject(value: any): value is object {
  return typeof value === 'object';
}

/**
 * Determines if a reference is a plain `Object`. A "plain" object is typically created by `{}` or
 * `new Object()`. Some types such as arrays and null, while technically objects, are not considered
 * plain objects.
 *
 * @param value Reference to check.
 */
export function isPlainObject(value: any): value is object {
  return (
    isObject(value) &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

/**
 * Determines if a reference is a `RegExp`.
 *
 * @param value Reference to check.
 */
export function isRegExp(value: any): value is RegExp {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}

/**
 * Determines if a reference is a `String`.
 *
 * @param value Reference to check.
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * Determines if a reference is a `Symbol`.
 *
 * @param value Reference to check.
 */
export function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Determines if a reference is `undefined`.
 *
 * @param value Reference to check.
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

/**
 * Determines if a reference is null or undefined.
 *
 * @param value Reference to check
 */
export function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Determines if a reference is an instance of `type`.
 *
 * @param value Reference to check
 * @param ctor Constructor type to check against
 */
export function isInstance<T extends new (...args: any[]) => any>(
  value: any,
  ctor: T
): value is InstanceType<T> {
  return value instanceof ctor;
}
