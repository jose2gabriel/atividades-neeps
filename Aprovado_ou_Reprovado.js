const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseFloat(input.split(" ")[0])
let B = parseFloat(input.split(" ")[1])

let media = (A + B) / 2;

if (media >= 7) {
    console.log("Aprovado");
} else if (media < 7 && media >= 4) {
    console.log("Recuperacao");
} else {
    console.log("Reprovado");
}