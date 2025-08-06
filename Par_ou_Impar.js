const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let B = parseInt(input.split("\n")[0])
let C = parseInt(input.split("\n")[1])

if ((B + C) % 2 === 0) {
    console.log("Bino");
} else {
    console.log("Cino");
}