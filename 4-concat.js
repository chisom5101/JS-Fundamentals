
// 4-concat.js
const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 && arg2) {
  console.log(`${arg1} is ${arg2}`);  // Case: 2 arguments (e.g., "Python is fun")
} else if (arg1) {
  console.log(arg1);  // Case: 1 argument (e.g., "HBTN")
} else {
  console.log("undefined is undefined");  // Case: 0 arguments
}
