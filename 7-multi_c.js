// Convert first argument to integer
const x = parseInt(process.argv[2], 10);

// Only print if x is a positive number
if (x > 0) {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
