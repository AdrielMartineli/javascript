const leia = require('readline-sync');
let n1, n2, n3, n4;

n1 =leia.questionFloat("Numero 1:", );
n2 =leia.questionFloat("Numero 2:", );
n3 =leia.questionFloat("Numero 3:", );
n4 =leia.questionFloat("Numero 4:", );

let Diferenca = (n1*n2)-(n3*n4);

console.log("Diferença: " + Diferenca);
