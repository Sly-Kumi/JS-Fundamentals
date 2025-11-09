# JS-Fundamentals

This project contains simple JavaScript scripts for learning basic concepts like variables, data types, and output using `console.log()`.

---

## 📄 File: 0-javascript_is_amazing.js

### Description
This script declares a constant variable `myVar` with the value `"JavaScript is amazing"` and prints it to the console.

### Code Example
```javascript
const myVar = "JavaScript is amazing";
console.log(myVar);

```

---

## 📄 File: 1-multi_languages.js

### Description
Prints three lines of text to the console using `console.log()`. Demonstrates declaring multiple constant variables and printing them individually.

### Code Example
```javascript
const line1 = "C is fun";
const line2 = "Python is cool";
const line3 = "JavaScript is amazing";

console.log(line1);
console.log(line2);
console.log(line3);
```
## 📄 File: 2-arguments.js

### Description
Prints a message depending on the number of command-line arguments passed to the script.

### Code Example
```javascript
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
```
## 📄 File: 3-value_argument.js

### Description
Prints the first command-line argument passed to the script. Prints "No argument" if none is passed. Does not use `.length`.

### Code Example
```javascript
const firstArg = process.argv[2];

if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
```

## 📄 File: 4-concat.js

### Description
Prints the first two command-line arguments in the format "ARG1 is ARG2". If an argument is missing, it prints "undefined".

### Code Example
```javascript
const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(arg1 + " is " + arg2);
```

## 📄 File: 5-to_integer.js

### Description
Prints the first argument converted to an integer. If the argument can't be converted, prints "Not a number".

### Code Example
```javascript
const arg = process.argv[2];
const num = parseInt(arg, 10);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}
```

## 📄 File: 6-multi_languages_loop.js

### Description
Prints three lines of text using an array and a loop. Demonstrates iteration over an array without if/else statements.

### Code Example
```javascript
const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];

for (let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}
```
## 📄 File: 7-multi_c.js

### Description
Prints "C is fun" a number of times based on the first argument. Prints "Missing number of occurrences" if the argument is invalid or missing. Uses a loop.

### Code Example
```javascript
const x = parseInt(process.argv[2], 10);

if (x > 0) {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
```

## 📄 File: 8-square.js

### Description
Prints a square using the character X. The size of the square is given by the first command-line argument. Prints "Missing size" if the argument is missing or invalid. Uses a loop.

### Code Example
```javascript
const size = parseInt(process.argv[2], 10);

if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
```

## 📄 File: 9-add.js

### Description
Prints the addition of two integers passed as command-line arguments. Defines a function `add(a, b)` to perform the addition.

### Code Example
```javascript
function add(a, b) {
  return a + b;
}

const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

console.log(add(a, b));
```