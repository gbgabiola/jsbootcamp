# JSON

- [Introduction](#introduction)
- [JSON Data Types](#json-data-types)
- [Encoding and Decoding JSON](#encoding-and-decoding-json)


## Introduction

- JSON is a file format that's used to store and interchange data
  - data is stored in a set of key-value pairs
  - data is human readable, which makes JSON perfect for manual editing
  - born in 2002
    - ease of use, and flexibility
    - although being born out of the JS world, it quickly spread out to other programming languages
    - defined in the [ECMA-404 standard](http://www.ecma-international.org/flat/publications/files/ECMA-ST/ECMA-404.pdf)
- keys are wrapped in double quotes, a colon separates the key and the value, and the value can be of different types
- spaces, tabs, new lines does not matter in a JSON file, but well-formatted data is better to understand
- JSON strings are stored in `.json` files and transmitted over the network with an `application/json` MIME type


## JSON Data Types

- JSON supports some basic data types:
  - `Number`: any number that's not wrapped in quotes
  - `String`: any set of characters wrapped in quotes
  - `Boolean`: `true` or `false`
  - `Array`: a list of values, wrapped in square brackets
  - `Object`: a set of key-value pairs, wrapped in curly brackets
  - `null`: represents an empty value
- any other data type that's more complex than this must be serialized to a string (and then de-serialized) in order to be stored in JSON


## Encoding and Decoding JSON

- JSON object in JS has `JSON.parse()` and `JSON.stringify()` methods
  - before they can be used in a JS program, a string containing JSON data must be parsed and transformed in data that JS can use
- `JSON.parse()` takes a JSON string as its parameter, and returns an object that contains the parsed JSON
- `JSON.stringify()` takes a JS object as its parameter, and returns a string that represents it in JSON

```js
const person = `{ "name": "John", "age": 48 }`;
const data = JSON.parse(person);
data; // {name: "John", age: 48}

JSON.stringify(data); // "{"name":"John","age":48}"
```

- `JSON.parse()` can also accepts an optional second argument, called the reviver function
  - we can use that to customize the JSON parsing and perform any custom operation

  ```js
  JSON.parse(string, (key, value) => {
    if (key === 'name') {
      return `Name: ${value}`;
    } else {
      return value;
    }
  });
  ```
