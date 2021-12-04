[![NPM Version](https://badge.fury.io/js/ts-util-is.svg)](https://badge.fury.io/js/ts-util-is)
[![CI](https://github.com/justinlettau/ts-util-is/workflows/CI/badge.svg)](https://github.com/justinlettau/ts-util-is/actions)
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
  console.log(value.split(' ')); // `value` is string[]
}
```

Import only what you need:

```js
import { isArray, isString } from 'ts-util-is';

const value: string | string[] = 'hello again';

if (isArray(value)) {
  console.log(value.split(' ')); // `value` is string
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
