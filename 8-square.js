// Convert the first argument to integer
const size = parseInt(process.argv[2], 10);

// Check if the argument is valid and positive
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
