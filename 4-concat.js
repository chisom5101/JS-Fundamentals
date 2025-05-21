// 4-concat.js
const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 && arg2) {
  console.log(`${arg1} ${arg2}`);  // Two arguments: joined by space
} else if (arg1) {
  console.log(arg1);  // One argument: print as-is
} else {
  console.log();  // No arguments: print nothing (empty line)
}
