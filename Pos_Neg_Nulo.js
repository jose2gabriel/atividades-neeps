const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let X = parseInt(input.split("\n")[0])

if (X === 0) {
    console.log("nulo");
} else if (X > 0) {
    console.log("positivo");
} else {
    console.log("negativo");
}