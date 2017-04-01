[![NPM Version](https://badge.fury.io/js/ts-util-is.svg)](https://badge.fury.io/js/ts-util-is)
[![Build Status](https://travis-ci.org/justinlettau/ts-util-is.svg?branch=master)](https://travis-ci.org/justinlettau/ts-util-is)
[![Dev Dependency Status](https://david-dm.org/justinlettau/ts-util-is/dev-status.svg)](https://david-dm.org/justinlettau/ts-util-is?type=dev)

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

let value: string | any[] = 'hey there';

if (util.isArray(value)) {
    console.log(value.join(' ')); // no TypeScript error!
}
```

Import only what you need:
```js
import { isArray, isString } from 'ts-util-is';

let value: string | any[] = 'types are fun';

if (isArray(value)) {
    console.log(value.join(' ')); // no TypeScript error!
}
```

# Methods
- isArray
- isBase64
- isBoolean
- isDate
- isDateValid
- isDefined
- isError
- isFunction
- isGuid
- isInfinity
- isNull
- isNumber
- isObject
- isRegExp
- isString
- isSymbol
- isUndefined
