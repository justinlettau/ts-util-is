[![Build Status](https://travis-ci.org/justinlettau/ts-util-is.svg?branch=master)](https://travis-ci.org/justinlettau/ts-util-is)

# TS Utility
TypeScript typeof utility helper with no dependecies. Provides type guards for all common types.

# Installation
```
npm install ts-util-is
```

# Usage
Import:
```
// everything
import * as util from 'ts-util-is';

// - or -

// only what you need
import { isArray, isString } from 'ts-util-is';
```

And use:
```
var value: string | any[] = 'hey there';

if (isArray(value)) {
    value.join(); // no TypeScript error!
}
```

# Methods
- isArray
- isBoolean
- isDate
- isDefined
- isError
- isFunction
- isGuid
- isNull
- isNumber
- isObject
- isRegExp
- isString
- isSymbol
- isUndefined
