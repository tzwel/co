<br>

<p align="center"> <img src="co.png" width="auto" height="50px" alt="'co' logo" /> </p>

# co
A tiny (426B) utility to create paths from strings

## Import
```js
const co = require('./co')
```

## Use
```js
co(['../', 'some/', '/path/', 'image.png'])
// Returns: '../some/path/image.png'

co(['C:/', '///te', 'mp\\\\/', '\\/\\/foo/bar'])
// Returns: 'C:/temp/foo/bar'
```

### Automatic slash insertion
```js
co(['..', 'some', 'path', 'image.png'], true)
// Returns: '../some/path/image.png'
```
