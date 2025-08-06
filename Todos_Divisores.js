const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
let saida = ''

for (let i = 0; i <= input; i++) {
    if (input % i === 0) {
        saida += i + ' ';
    }
}

console.log(saida);