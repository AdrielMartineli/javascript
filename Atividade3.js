const leia = require('readline-sync');

let salarioBruto , AdicionalNoturno;
let HorasExtras, Descontos;

salarioBruto = leia.questionFloat("Salário bruto: ", );
AdicionalNoturno = leia.questionFloat("Adicional Noturno: ", );
HorasExtras = leia.questionFloat("Horas extras: ", );
Descontos = leia.questionFloat("Descontos: ", );

let SalarioLiquido = salarioBruto + AdicionalNoturno + (HorasExtras*5) - Descontos;

console.log("Salario Liquido: " + SalarioLiquido);
