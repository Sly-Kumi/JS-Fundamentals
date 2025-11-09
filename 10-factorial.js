// Recursive factorial function
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Convert first argument to integer
const num = parseInt(process.argv[2], 10);

// Handle NaN as 1
console.log(factorial(isNaN(num) ? 0 : num));
