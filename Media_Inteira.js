const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseInt(input.split("\n")[0])
let B = parseInt(input.split("\n")[1])

let media = (A + B) / 2;
console.log(Math.trunc(media));