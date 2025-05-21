// 3-value_argument.js
const firstArg = process.argv[2]; // Gets the first word after the script name

if (firstArg === undefined) {
  console.log("No argument");  // If no word is given
} else {
  console.log(firstArg);       // Prints the first word
}