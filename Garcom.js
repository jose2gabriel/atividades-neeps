const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Dividir a entrada em linhas
const linhas = input.split('\n');

// Ler o numero de linhas de dados
const n = parseInt(linhas[0]);

let coposQuebrados = 0;

for (let i = 1; i <= n; i++) {
    const [L, C] = linhas[i].trim().split(' ').map(Number);

    if (L > C) {
        coposQuebrados += C;
    }
}

console.log(coposQuebrados);