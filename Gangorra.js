// Desafio Gangorra

// Lendo a entrada
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
let lines = input.split(" ");

// Pegando os valores
let p1 = parseInt(lines[0]); // peso lado esquerdo
let c1 = parseInt(lines[1]); // comprimento lado esquerdo
let p2 = parseInt(lines[2]); // peso lado direito
let c2 = parseInt(lines[3]); // comprimento lado direito

// Calculando os momentos
let res1 = p1 * c1;
let res2 = p2 * c2;

// Comparando os momentos
if (res1 === res2) {
    console.log(0);
} else if (res1 < res2) {
    console.log(1);
} else {
    console.log(-1);
}