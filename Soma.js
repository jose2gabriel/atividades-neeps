const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let X = parseInt(input.split("\n")[0])
let Y = parseInt(input.split("\n")[1])

console.log(X + Y);