console.log("Operadores");
console.log("Operadores aritméticos");

const numero1 = 45;
const numero2 = 2;  

const suma = numero1 + numero2;
console.log(`${numero1} + ${numero2} = ${suma}`);  

const resta = numero1 - numero2;
console.log(`${numero1} - ${numero2} = ${resta}`);

const multiplicacion = numero1 * numero2; 
console.log(`${numero1} * ${numero2} = ${multiplicacion}`);

const division = numero1 / numero2;  
console.log(`${numero1} / ${numero2} = ${division}`);

const resultado = numero1 ** numero2;  
console.log(`${numero1} ** ${numero2} = ${resultado}`);

console.log("Operadores de comparación");

const numero3 = 5;
const numero4 = "5";
console.log(`Igual Débil: ${numero3} == ${numero4} → ${numero3 == numero4}`);
console.log(`Igual Estricta: ${numero3} === ${numero4} → ${numero3 === numero4}`);
console.log(`Desigualdad Débil: ${numero3} != ${numero4} → ${numero3 != numero4}`);
console.log(`Desigualdad Estricta: ${numero3} !== ${numero4} → ${numero3 !== numero4}`);
console.log(`Mayor que: ${numero3} > ${numero4} → ${numero3 > numero4}`);
console.log(`Menor que: ${numero3} < ${numero4} → ${numero3 < numero4}`);
console.log(`Mayor o igual que: ${numero3} >= ${numero4} → ${numero3 >= numero4}`);
console.log(`Menor o igual que: ${numero3} <= ${numero4} → ${numero3 <= numero4}`);

console.log("OPERADORES LOGICOS");
//const numero3="5"
//cont numero4="5"
console.log(`AND "Y"(${numero3}>=${numero4}&& ${numero3}<=${numero4})=${numero3>=numero4&&numero3<=numero4}`);
console.log(`OR"O"(${numero3}==${numero4}&& ${numero3}!=${numero4})=${numero3==numero4&&numero3!=numero4}`);
console.log(`"Negacion"!(${numero3}==${numero4})=${!(numero3==numero4)}`);
console.log(`${numero3!=numero4&&numero3>numero4}`);
console.log(`${numero3>numero4&&numero3===numero4}`);
console.log(`${numero3!=numero4||numero3>=numero4}`);
console.log(`${numero3>numero4||numero3!==numero4}`);
console.log(`${(numero3!=numero4||numero3>numero4)}`);

//const numero3 = "5";
//const numero4 = 5;

console.log(`${numero3 != numero4 && numero3 >= numero4 && numero3 > numero4}`);
console.log(`${numero3 > numero4 && numero3 === numero4 && numero3 !== numero4}`);
console.log(`${(numero3 != numero4 || numero3 >= numero4) && numero3 >= numero4}`);
console.log(`${numero3 != numero4 || (numero3 !== numero4 && numero3 !== numero4)}`);
console.log(`${!(numero3 != numero4 || (numero3 >= numero4 && numero3 !== numero4))}`);
