// Get the first argument and convert it to integer
const x = parseInt(process.argv[2], 10);

// Check if the argument is valid and positive
if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
