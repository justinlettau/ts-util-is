[![NPM Version](https://badge.fury.io/js/ts-util-is.svg)](https://badge.fury.io/js/ts-util-is)
[![Build Status](https://travis-ci.org/justinlettau/ts-util-is.svg?branch=master)](https://travis-ci.org/justinlettau/ts-util-is)
[![Dev Dependency Status](https://david-dm.org/justinlettau/ts-util-is/dev-status.svg)](https://david-dm.org/justinlettau/ts-util-is?type=dev)
[![codecov](https://codecov.io/gh/justinlettau/ts-util-is/branch/master/graph/badge.svg)](https://codecov.io/gh/justinlettau/ts-util-is)

# ts-util-is

TypeScript typeof utility helper with no dependencies. Provides type guards for all common types.

# Installation

```
npm install ts-util-is
```

# Usage

Import everything:

```js
import * as util from 'ts-util-is';

const value: string | string[] = 'hey there';

if (util.isArray(value)) {
  console.log(value.split(' ')); // `value` is array type
}
```

Import only what you need:

```js
import { isArray, isString } from 'ts-util-is';

const value: string | string[] = 'hello again';

if (isArray(value)) {
  console.log(value.split(' ')); // `value` is array type
}
```

# Methods

- `isArray()`
- `isBase64()`
- `isBoolean()`
- `isDate()`
- `isDateValid()`
- `isDefined()`
- `isError()`
- `isFunction()`
- `isGuid()`
- `isInfinity()`
- `isNull()`
- `isNil()`
- `isNumber()`
- `isObject()`
- `isPlainObject()`
- `isRegExp()`
- `isString()`
- `isSymbol()`
- `isUndefined()`
- `isInstance()`
