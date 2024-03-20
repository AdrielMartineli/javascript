const leia = require('readline-sync');
let salario;
let abono;


salario = leia.questionFloat("salario: ",);
abono   = leia.questionFloat("Abono: ",);

let NovoSalario = salario+abono;

console.log("Novo Salário: " + NovoSalario);
