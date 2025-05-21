// 4-concat.js
// 4-concat.js
const arg1 = process.argv[2] || undefined;
const arg2 = process.argv[3] || undefined;

if (arg1 !== undefined && arg2 !== undefined) {
  console.log(`${arg1} is ${arg2}`);
} else if (arg1 !== undefined) {
  console.log(arg1);
} else {
  console.log("undefined is undefined");
}
