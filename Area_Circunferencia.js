const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let circunferencia = 3.1416 * (input * input)

console.log(circunferencia.toFixed(2));