import * as util from './index';

describe('ts-util-is methods', () => {
  it('ensure value is an array', () => {
    expect(util.isArray([])).toEqual(true);
  });

  it('ensure value is a base64 string', () => {
    expect(util.isBase64('AgQGCAoMDhASFA==')).toEqual(true);
  });

  it('ensure value is a boolean', () => {
    expect(util.isBoolean(true)).toEqual(true);
  });

  it('ensure value is a date', () => {
    expect(util.isDate(new Date())).toEqual(true);
  });

  it('ensure value is a valid date', () => {
    expect(util.isDateValid(new Date('invalid'))).toEqual(false);
  });

  it('ensure value is defined', () => {
    expect(util.isDefined(83)).toEqual(true);
  });

  it('ensure value is an error', () => {
    expect(util.isError(new Error())).toEqual(true);
  });

  it('ensure value is a function', () => {
    expect(
      util.isFunction(function () {
        // empty
      })
    ).toEqual(true);
  });

  it('ensure value is a guid', () => {
    expect(util.isGuid('b8161432-e903-4edc-9429-6eade52e2572')).toEqual(true);
  });

  it('ensure value is infinity', () => {
    expect(util.isInfinity(Infinity)).toEqual(true);
  });

  it('ensure value is null', () => {
    expect(util.isNull(null)).toEqual(true);
  });

  it('ensure value is a number', () => {
    expect(util.isNumber(83)).toEqual(true);
  });

  it('ensure value is a non-zero number', () => {
    expect(util.isNonZeroNumber(-1)).toEqual(true);
    expect(util.isNonZeroNumber(0)).toEqual(false);
    expect(util.isNonZeroNumber(1)).toEqual(true);
  });

  it('ensure value is a positive number', () => {
    expect(util.isPositiveNumber(-1)).toEqual(false);
    expect(util.isPositiveNumber(0)).toEqual(false);
    expect(util.isPositiveNumber(1)).toEqual(true);
  });

  it('ensure value is a negative number', () => {
    expect(util.isNegativeNumber(1)).toEqual(false);
    expect(util.isNegativeNumber(0)).toEqual(false);
    expect(util.isNegativeNumber(-1)).toEqual(true);
  });

  it('ensure value is an object', () => {
    expect(util.isObject({})).toEqual(true);
  });

  it('ensure value is a plain object', () => {
    expect(util.isPlainObject({})).toEqual(true);
  });

  it('ensure value is not a plain object', () => {
    expect(util.isPlainObject([])).toEqual(false);
  });

  it('ensure value is a regex', () => {
    expect(util.isRegExp(/83/)).toEqual(true);
  });

  it('ensure value is a string', () => {
    expect(util.isString('')).toEqual(true);
  });

  it('ensure value is a symbol', () => {
    expect(util.isSymbol(Symbol())).toEqual(true);
  });

  it('ensure value is undefined', () => {
    expect(util.isUndefined(undefined)).toEqual(true);
  });

  it('ensure value is null or undefined', () => {
    expect(util.isNil(null)).toEqual(true);
    expect(util.isNil(undefined)).toEqual(true);
    expect(util.isNil(false)).toEqual(false);
    expect(util.isNil(1)).toEqual(false);
  });

  it('ensure value is an instance of a type', () => {
    const err = new Error();
    expect(util.isInstance(err, Error)).toEqual(true);

    const fn = new Function();
    expect(util.isInstance(fn, Function)).toEqual(true);

    expect(util.isInstance(null, Error)).toEqual(false);
    expect(util.isInstance(false, Error)).toEqual(false);
  });
});
