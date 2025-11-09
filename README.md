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