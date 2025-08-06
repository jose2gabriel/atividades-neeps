const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let L = parseInt(input.split("\n")[0])

let area = L * L;

console.log(area);