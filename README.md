# Color Name

Time invariant color from any string or object.

## Install

```bash
npm install string-to-color
```

## Usage

```
var _ = require ('string-to-color');
var hex = _.generate('string');
```

or you can use your own seed and factor (both are optional)

```
var _ = require ('string-to-color');
var hex = _.generate('string', 1234, 1234);
```

## License

MIT.
