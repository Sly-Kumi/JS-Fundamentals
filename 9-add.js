// Define the add function
function add(a, b) {
  return a + b;
}

// Convert arguments to integers
const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

// Print the sum
console.log(add(a, b));
